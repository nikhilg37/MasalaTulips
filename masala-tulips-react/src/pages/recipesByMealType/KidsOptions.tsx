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
                  <p className="recipe-meta">
                    {recipe.totalTime} • {recipe.type}
                    {recipe.category.includes('breakfast') && ' • Breakfast'}
                    {recipe.category.includes('lunch') && ' • Lunch'}
                    {recipe.category.includes('dinner') && ' • Dinner'}
                    {recipe.category.includes('drinks') && ' • Drinks'}
                    {recipe.category.includes('kids-options') && ' • Kids Options'}
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

export default KidsOptions; 