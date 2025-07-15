import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeCategories.css';

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
            <li><Link to="/recipe-categories/vegetarian">Vegetarian</Link></li>
            <li>Vegan</li>
            <li><Link to="/recipe-categories/kids-options">Kids Options</Link></li>
            <li>Salads</li>
            <li><Link to="/recipe-categories/most-popular">Most Popular</Link></li>
            <li><Link to="/recipe-categories/all-recipes">All Recipes</Link></li>
          </ul>
        </div>
        
        <div className="categories-block">
          <h2 className="categories-heading">Recipes by Meal Type</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipe-categories/breakfast">Breakfast</Link></li>
            <li><Link to="/recipe-categories/lunch">Lunch</Link></li>
            <li><Link to="/recipe-categories/dinner">Dinner</Link></li>
            <li><Link to="/recipe-categories/side-dish">Side Dish</Link></li>
            <li>Starters</li>
            <li><Link to="/recipe-categories/drinks">Drinks</Link></li>
            <li>Snacks</li>
            <li>Desserts</li>
          </ul>
        </div>
        
        <div className="categories-block">
          <h2 className="categories-heading">By Cooking Time</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipe-categories/upto-30-min">Upto 30 min</Link></li>
            <li><Link to="/recipe-categories/between-30-60-min">Between 30 - 60 min</Link></li>
            <li><Link to="/recipe-categories/between-60-90-min">Between 60 - 90 min</Link></li>
            <li>More than 120 min</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecipeCategories; 