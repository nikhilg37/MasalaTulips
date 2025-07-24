import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipesByCategory } from '../../data/recipes';
import '../../styles/RecipeList.css';

const KidsOptions: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Kids Options', path: '/recipe-categories/kids-options' }));
  }, []);
  const recipes = getRecipesByCategory('kids-options');

  return (
    <RecipeList
      title="Kids Options"
      description="Fun and nutritious meals designed specifically for children. Our kid-friendly recipes focus on healthy ingredients, appealing presentation, and flavors that young palates love."
      recipes={recipes}
      breadcrumbPath="/recipe-categories/kids-options"
      breadcrumbLabel="Kids Options"
    />
  );
};

interface RecipeListProps {
  title: string;
  description: string;
  recipes: any[];
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
                    {(recipe.category.includes('quick') || recipe.category.includes('upto-30-min')) && <span className="category-badge quick">Quick</span>}
                    {recipe.category.includes('breakfast') && <span className="category-badge breakfast">Breakfast</span>}
                    {recipe.category.includes('lunch') && <span className="category-badge lunch">Lunch</span>}
                    {recipe.category.includes('dinner') && <span className="category-badge dinner">Dinner</span>}
                    {recipe.category.includes('side-dish') && <span className="category-badge side-dish">Side Dish</span>}
                    {recipe.category.includes('drinks') && <span className="category-badge drinks">Drinks</span>}
                    {recipe.category.includes('kids-options') && <span className="category-badge kids-options">Kids Options</span>}
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Placeholder cards for future recipes */}
            {recipes.length < 2 && (
              <div className="recipe-card">
                <img 
                  src="https://placehold.co/300x200/FF6B35/FFFFFF/png?text=Cooking+Soon" 
                  alt="Recipe Coming Soon - Masala Tulips" 
                  className="recipe-image"
                />
                <div className="recipe-content">
                  <h3>More Recipes Coming Soon</h3>
                  <p className="recipe-meta">Stay tuned for more delicious recipes!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsOptions; 