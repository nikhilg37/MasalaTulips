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
        </div>

        {/* Showcase Image */}
        <div className="showcase-image">
          <img src={recipe.mainImage} alt={recipe.title} className="main-image" />
        </div>

        {/* Recipe Content */}
        <div className="recipe-grid">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="recipe-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step}>
                  <h3>{instruction.step}. {instruction.title}</h3>
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
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <h2>Notes & Variations</h2>
          <div className="notes-grid">
            {recipe.notes.map((note, index) => (
              <div key={index}>
                <h3>{note.title}</h3>
                <ul className="ingredients-list">
                  {note.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Related Recipes Section */}
        <div className="notes-section">
          <h2>Related Recipes & Categories</h2>
          <div className="related-content">
            {/* Related Recipes */}
            {getRelatedRecipes(recipe).length > 0 && (
              <div className="related-recipes">
                <h3>Related Recipes</h3>
                <ul className="ingredients-list">
                  {getRelatedRecipes(recipe).map((relatedRecipe) => (
                    <li key={relatedRecipe.id}>
                      <Link to={`/recipe/${relatedRecipe.id}`}>
                        {relatedRecipe.title} - {relatedRecipe.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Category Links */}
            <div className="category-links">
              <h3>Browse by Category</h3>
              <ul className="ingredients-list">
                {getCategoryLinks(recipe).map((category: { path: string; label: string }, index: number) => (
                  <li key={index}>
                    <Link to={category.path}>See all {category.label}</Link>
                  </li>
                ))}
                <li><Link to="/recipe-categories/all-recipes">Browse All Recipes</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage; 