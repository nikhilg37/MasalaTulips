import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../data/recipes';
import '../styles/RecipeList.css';

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
                  <p className="recipe-meta">
                    {recipe.totalTime} • {recipe.type}
                  </p>
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

export default RecipeList; 