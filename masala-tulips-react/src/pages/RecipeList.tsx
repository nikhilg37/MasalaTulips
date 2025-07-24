import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../data/recipes';
import '../styles/RecipeList.css';

// Function to check if a recipe is quick (30 minutes or less)
const isQuickRecipe = (totalTime: string): boolean => {
  const timeInMinutes = parseInt(totalTime.replace(' mins', ''));
  return timeInMinutes <= 30;
};

interface RecipeListProps {
  title: string;
  description: string;
  recipes: Recipe[];
  breadcrumbPath: string;
  breadcrumbLabel: string;
}

const RecipeList: React.FC<RecipeListProps> = ({
  title,
  description,
  recipes,
  breadcrumbPath,
  breadcrumbLabel
}) => {
  useEffect(() => {
    // Add more substantial content for SEO and user experience
    const pageContent = document.querySelector('.recipe-list-page');
    if (pageContent && recipes.length === 0) {
      const contentSection = document.createElement('div');
      contentSection.className = 'content-enhancement';
      contentSection.innerHTML = `
        <div class="container">
          <section class="category-description">
            <h2>About ${title}</h2>
            <p>We're constantly adding new recipes to our collection. ${description} Our team is working hard to bring you more delicious recipes in this category. In the meantime, explore our other recipe categories to discover amazing dishes.</p>
            <p>Each recipe in our collection is carefully tested and includes detailed instructions, ingredient lists, and helpful tips to ensure your cooking success. We focus on authentic flavors while making recipes accessible for home cooks of all skill levels.</p>
          </section>
        </div>
      `;
      pageContent.appendChild(contentSection);
    }
  }, [recipes.length, title, description]);

  return (
    <div className="recipe-list-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/recipe-categories" className="breadcrumb-link">Recipes</Link>
        <span> &gt; </span>
        <span>{breadcrumbLabel}</span>
      </div>

      {/* Hero Section */}
      <section className="recipes-hero">
        <h1>{title}</h1>
        <p>{description}</p>
        {recipes.length === 0 && (
          <div className="coming-soon-notice">
            <p>We're adding more recipes to this category. Check back soon for new additions!</p>
          </div>
        )}
      </section>

      {/* Recipes Grid */}
      <section className="featured-recipes">
        <div className="container">
          <div className="breakfast-grid">
            {recipes.map((recipe) => (
              <Link 
                key={recipe.id} 
                to={`/recipe/${recipe.id}`} 
                className="recipe-card"
              >
                <img 
                  src={recipe.mainImage} 
                  alt={`${title} Recipe - ${recipe.title} by Masala Tulips`}
                  className="recipe-image"
                />
                <div className="recipe-content">
                  <h3>{recipe.title} - {recipe.subtitle}</h3>
                  <div className="recipe-meta">
                    <span className="time-indicator">
                      <i className="far fa-clock"></i>
                      {recipe.totalTime}
                    </span>
                    <span className="category-badge vegetarian">{recipe.type}</span>
                    {(recipe.category.includes('quick') || isQuickRecipe(recipe.totalTime)) && <span className="category-badge quick">Quick</span>}
                    {recipe.category.includes('breakfast') && <span className="category-badge breakfast">Breakfast</span>}
                    {recipe.category.includes('lunch') && <span className="category-badge lunch">Lunch</span>}
                    {recipe.category.includes('dinner') && <span className="category-badge dinner">Dinner</span>}
                    {recipe.category.includes('side-dish') && <span className="category-badge side-dish">Side Dish</span>}
                    {recipe.category.includes('drinks') && <span className="category-badge drinks">Drinks</span>}
                    {recipe.category.includes('kids-options') && <span className="category-badge kids-options">Kids Options</span>}
                  </div>
                  <p>{recipe.description}</p>
                </div>
              </Link>
            ))}
            
            {/* Enhanced placeholder cards for future recipes */}
            {recipes.length < 2 && (
              <>
                <div className="recipe-card coming-soon-card">
                  <img 
                    src="https://placehold.co/300x200/FF6B35/FFFFFF/png?text=Cooking+Soon" 
                    alt="Recipe Coming Soon - Masala Tulips" 
                    className="recipe-image"
                  />
                  <div className="recipe-content">
                    <h3>More Recipes Coming Soon</h3>
                    <p className="recipe-meta">Stay tuned for more delicious recipes!</p>
                    <p>We're working on adding more amazing recipes to this category. Our team is constantly testing and perfecting new dishes to share with you.</p>
                  </div>
                </div>
                <div className="recipe-card coming-soon-card">
                  <img 
                    src="https://placehold.co/300x200/FF6B35/FFFFFF/png?text=New+Recipes" 
                    alt="New Recipes Coming - Masala Tulips" 
                    className="recipe-image"
                  />
                  <div className="recipe-content">
                    <h3>Fresh Recipes in Development</h3>
                    <p className="recipe-meta">Exciting new dishes on the way!</p>
                    <p>From traditional favorites to modern twists, we're preparing a variety of recipes that will delight your taste buds and inspire your cooking.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Additional content section for better SEO */}
      {recipes.length > 0 && (
        <section className="category-info">
          <div className="container">
            <h2>About {title}</h2>
            <p>Our {title.toLowerCase()} collection features carefully curated recipes that showcase the best of Indian cuisine. Each recipe includes detailed instructions, ingredient lists, and helpful tips to ensure your cooking success. Whether you're a beginner or an experienced cook, these recipes are designed to be accessible and delicious.</p>
            <p>We focus on authentic flavors while making recipes practical for everyday cooking. All our recipes are tested multiple times to ensure they work perfectly in home kitchens. From quick weekday meals to special occasion dishes, you'll find something for every occasion.</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default RecipeList; 