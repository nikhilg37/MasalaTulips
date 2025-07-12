import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCategories.css';

const RecipeCategories: React.FC = () => {
  return (
    <div className="recipe-categories-page">
      {/* Hero Section */}
      <section className="recipes-hero">
        <h1>Recipes</h1>
        <p>Browse all our delicious recipes by category, meal type, or dietary preference!</p>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-block">
          <h2 className="categories-heading">Popular Categories</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipes/vegetarian">Vegetarian</Link></li>
            <li>Vegan</li>
            <li>Kid-Friendly</li>
            <li>Soups</li>
            <li>Salads</li>
            <li><Link to="/recipes/most-popular">Most Popular</Link></li>
            <li><Link to="/recipes/all-recipes">All Recipes</Link></li>
          </ul>
        </div>
        
        <div className="categories-block">
          <h2 className="categories-heading">Recipes by Meal Type</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipes/breakfast">Breakfast</Link></li>
            <li><Link to="/recipes/lunch">Lunch</Link></li>
            <li><Link to="/recipes/dinner">Dinner</Link></li>
            <li>Appetizer</li>
            <li>Drinks</li>
            <li>Snacks</li>
            <li>Desserts</li>
          </ul>
        </div>
        
        <div className="categories-block">
          <h2 className="categories-heading">By Cooking Time</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipes/upto-30-min">Upto 30 min</Link></li>
            <li><Link to="/recipes/upto-60-min">Upto 60 min</Link></li>
            <li>Upto 120 min</li>
            <li>More than 120 min</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecipeCategories; 