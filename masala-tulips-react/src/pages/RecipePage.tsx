import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeBySlug, getAllRecipes } from '../data/recipes';
import '../styles/RecipePage.css';
import { trackGAEvent, trackGTMEvent } from '../utils/analytics';
import { generateRecipeStructuredData } from '../utils/structuredData';

const RecipePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = getRecipeBySlug(slug || '');

  useEffect(() => {
    if (recipe) {
      // Update page title and meta description for SEO
      document.title = `${recipe.title} - Masala Tulips`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', recipe.description);
      }

      // Add structured data for SEO
      const structuredData = generateRecipeStructuredData(recipe, window.location.href);
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Analytics tracking
      trackGAEvent({
        action: 'view',
        category: 'Recipe',
        label: recipe.title,
      });
      trackGTMEvent('recipe_view', { recipeId: recipe.id, title: recipe.title });

      // Cleanup function to remove structured data script
      return () => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        scripts.forEach(script => {
          if (script.textContent?.includes(recipe.title)) {
            script.remove();
          }
        });
      };
    }
  }, [recipe]);

  // Function to get related recipes based on categories and tags
  const getRelatedRecipes = (currentRecipe: any) => {
    const allRecipes = getAllRecipes();
    const relatedRecipes = allRecipes
      .filter(recipe => recipe.id !== currentRecipe.id) // Exclude current recipe
      .map(recipe => {
        // Calculate similarity score based on shared categories and tags
        const sharedCategories = recipe.category.filter((cat: string) => 
          currentRecipe.category.includes(cat)
        );
        const sharedTags = recipe.tags.filter((tag: string) => 
          currentRecipe.tags.includes(tag)
        );
        
        // Score: categories worth more than tags
        const score = (sharedCategories.length * 2) + sharedTags.length;
        
        return { recipe, score };
      })
      .filter(item => item.score > 0) // Only include recipes with some similarity
      .sort((a, b) => b.score - a.score) // Sort by similarity score
      .slice(0, 3) // Limit to 3 related recipes
      .map(item => item.recipe);
    
    return relatedRecipes;
  };

  // Function to get category links based on recipe categories
  const getCategoryLinks = (currentRecipe: any) => {
    const categoryMap: { [key: string]: string } = {
      'breakfast': 'Breakfast Recipes',
      'lunch': 'Lunch Recipes', 
      'dinner': 'Dinner Recipes',
      'side-dish': 'Side Dish Recipes',
      'drinks': 'Drinks',
      'kids-options': 'Kids Options',
      'vegetarian': 'Vegetarian Recipes',
      'quick': 'Under 30 Minutes',
      'upto-30-min': 'Under 30 Minutes',
      'between-30-60-min': '30-60 Minutes',
      'between-60-90-min': '60-90 Minutes',
      'all-recipes': 'All Recipes'
    };

    const categoryLinks = currentRecipe.category
      .filter((cat: string) => categoryMap[cat])
      .map((cat: string) => ({
        path: cat === 'quick' ? '/recipe-categories/upto-30-min' : `/recipe-categories/${cat}`,
        label: categoryMap[cat]
      }));
    
    // Remove duplicates based on path
    const uniqueLinks = categoryLinks.filter((link: { path: string; label: string }, index: number, self: { path: string; label: string }[]) => 
      index === self.findIndex((l: { path: string; label: string }) => l.path === link.path)
    );
    
    return uniqueLinks;
  };

  // Get last visited category from sessionStorage
  let lastCategory = null;
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem('lastCategory');
    if (stored) {
      try {
        lastCategory = JSON.parse(stored);
      } catch {}
    }
  }

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <div className="container">
          <h1>Recipe Not Found</h1>
          <p>The recipe you're looking for doesn't exist.</p>
          <Link to="/" className="back-home">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-page">
      <div className="recipe-container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/recipe-categories">Recipes</Link>
          {lastCategory && (
            <>
              <span> &gt; </span>
              <Link to={lastCategory.path}>{lastCategory.label}</Link>
            </>
          )}
          <span> &gt; </span>
          <span>{recipe.title}</span>
        </div>

        {/* Recipe Header */}
        <div className="recipe-header">
          <h1>{recipe.title} - {recipe.subtitle}</h1>
          <p>{recipe.description}</p>
          <div className="recipe-time">
            <i className="far fa-clock"></i>
            <span>Prep Time: {recipe.prepTime} | Cook Time: {recipe.cookingTime} | Total Time: {recipe.totalTime}</span>
          </div>
          <div className="recipe-meta">
            <span className="time-indicator">
              <i className="far fa-clock"></i>
              {recipe.totalTime}
            </span>
            <span className="category-badge vegetarian">{recipe.type}</span>
            {(recipe.category.includes('quick') || recipe.category.includes('upto-30-min')) && <span className="category-badge quick">Quick</span>}
            {recipe.category.includes('breakfast') && <span className="category-badge breakfast">Breakfast</span>}
            {recipe.category.includes('lunch') && <span className="category-badge lunch">Lunch</span>}
            {recipe.category.includes('dinner') && <span className="category-badge dinner">Dinner</span>}
            {recipe.category.includes('side-dish') && <span className="category-badge side-dish">Side Dish</span>}
            {recipe.category.includes('drinks') && <span className="category-badge drinks">Drinks</span>}
            {recipe.category.includes('kids-options') && <span className="category-badge kids-options">Kids</span>}
          </div>
        </div>

        {/* Showcase Image */}
        <div className="showcase-image">
          <img src={recipe.mainImage} alt={recipe.title} className="main-image" />
        </div>

        {/* Recipe Content */}
        <div className="recipe-grid">
          {/* Ingredients */}
          <div className="ingredients-section">
            <div className="section-label">
              <span>What You'll Need</span>
            </div>
            <h2>
              <i className="fas fa-shopping-basket"></i>
              Ingredients
            </h2>
            <div className="ingredients-container">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <div className="ingredient-bullet">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="instructions-section">
            <div className="section-label">
              <span>Step-by-Step Guide</span>
            </div>
            <h2>
              <i className="fas fa-list-ol"></i>
              Instructions
            </h2>
            <div className="instructions-container">
              {recipe.instructions.map((instruction) => (
                <div key={instruction.step} className="instruction-item">
                  <div className="instruction-header">
                    <div className="step-number">
                      <span>{instruction.step}</span>
                    </div>
                    <h3>{instruction.title}</h3>
                  </div>
                  <p>{instruction.description}</p>
                  {instruction.images && instruction.images.length > 0 && (
                    <div className="step-images">
                      {instruction.images.map((image, imageIndex) => (
                        <img 
                          key={imageIndex}
                          src={image} 
                          alt={`Step ${instruction.step}`}
                          className="step-image"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <div className="section-label">
            <span>Pro Tips & Ideas</span>
          </div>
          <h2>
            <i className="fas fa-lightbulb"></i>
            Tips & Variations
          </h2>
          <div className="notes-container">
            {recipe.notes.map((note, index) => (
              <div key={index} className={`note-card ${note.title.toLowerCase()}`}>
                <div className="note-header">
                  <div className="note-icon">
                    {note.title.toLowerCase() === 'notes' || note.title.toLowerCase() === 'tips' ? (
                      <i className="fas fa-sticky-note"></i>
                    ) : note.title.toLowerCase() === 'variations' ? (
                      <i className="fas fa-magic"></i>
                    ) : (
                      <i className="fas fa-info-circle"></i>
                    )}
                  </div>
                  <h3>{note.title}</h3>
                </div>
                <div className="note-content">
                  {note.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="note-item">
                      <div className="note-bullet">
                        {note.title.toLowerCase() === 'variations' ? (
                          <i className="fas fa-arrow-right"></i>
                        ) : (
                          <i className="fas fa-check-circle"></i>
                        )}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Recipes Section */}
        <div className="related-section">
          <div className="section-label">
            <span>Explore More</span>
          </div>
          <h2>
            <i className="fas fa-compass"></i>
            Related Recipes & Categories
          </h2>
          <div className="related-container">
            {/* Related Recipes */}
            {getRelatedRecipes(recipe).length > 0 && (
              <div className="related-card recipes-card">
                <div className="related-header">
                  <div className="related-icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3>Related Recipes</h3>
                </div>
                <div className="related-content">
                  {getRelatedRecipes(recipe).map((relatedRecipe) => (
                    <div key={relatedRecipe.id} className="related-item">
                      <div className="related-bullet">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                      <Link to={`/recipe/${relatedRecipe.id}`} className="related-link">
                        {relatedRecipe.title} - {relatedRecipe.subtitle}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Category Links */}
            <div className="related-card categories-card">
              <div className="related-header">
                <div className="related-icon">
                  <i className="fas fa-tags"></i>
                </div>
                <h3>Browse by Category</h3>
              </div>
              <div className="related-content">
                {getCategoryLinks(recipe).map((category: { path: string; label: string }, index: number) => (
                  <div key={index} className="related-item">
                    <div className="related-bullet">
                      <i className="fas fa-folder-open"></i>
                    </div>
                    <Link to={category.path} className="related-link">
                      See all {category.label}
                    </Link>
                  </div>
                ))}
                <div className="related-item">
                  <div className="related-bullet">
                    <i className="fas fa-folder-open"></i>
                  </div>
                  <Link to="/recipe-categories/all-recipes" className="related-link">
                    Browse All Recipes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage; 