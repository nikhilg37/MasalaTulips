import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeCategories.css';
import AdSenseAd from '../components/AdSenseAd';

const RecipeCategories: React.FC = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="recipe-categories-page">
      {/* Hero Section */}
      <section className="recipes-hero">
        <h1>Recipe Categories</h1>
        <p>Discover our collection of authentic Indian recipes organized by category, meal type, and cooking time. From traditional South Indian breakfast dishes to modern vegetarian meals, find the perfect recipe for any occasion. Each category features carefully curated recipes with step-by-step instructions, beautiful photography, and cultural insights.</p>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-block">
          <h2 className="categories-heading">Popular Categories</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipe-categories/vegetarian">Vegetarian</Link></li>
            <li><Link to="/recipe-categories/vegan">Vegan</Link></li>
            <li><Link to="/recipe-categories/kids-options">Kids Options</Link></li>
            <li><Link to="/recipe-categories/salads">Salads</Link></li>
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
            <li><Link to="/recipe-categories/starters">Starters</Link></li>
            <li><Link to="/recipe-categories/drinks">Drinks</Link></li>
            <li><Link to="/recipe-categories/snacks">Snacks</Link></li>
            <li><Link to="/recipe-categories/desserts">Desserts</Link></li>
          </ul>
        </div>
        
        <div className="categories-block">
          <h2 className="categories-heading">By Cooking Time</h2>
          <hr className="categories-divider" />
          <ul className="categories-list">
            <li><Link to="/recipe-categories/upto-30-min">Upto 30 min</Link></li>
            <li><Link to="/recipe-categories/between-30-60-min">Between 30 - 60 min</Link></li>
            <li><Link to="/recipe-categories/more-than-120-min">More than 120 min</Link></li>
          </ul>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="categories-info">
        <div className="container">
          <h2>About Our Recipe Collection</h2>
          <div className="info-content">
            <div className="info-text">
              <h3>Traditional Meets Modern</h3>
              <p>Our recipe collection bridges the gap between traditional Indian cooking and modern lifestyle needs. We've carefully selected and adapted recipes that maintain authentic flavors while being accessible to home cooks of all skill levels.</p>
              
              <h3>Quality Ingredients</h3>
              <p>Every recipe emphasizes the use of fresh, high-quality ingredients. We provide detailed ingredient lists with measurements and helpful tips for finding authentic spices and ingredients in your local area.</p>
              
              <h3>Step-by-Step Guidance</h3>
              <p>Each recipe includes detailed step-by-step instructions with accompanying photographs to guide you through the cooking process. Whether you're a beginner or an experienced cook, our recipes are designed to help you succeed.</p>
              
              <h3>Cultural Context</h3>
              <p>Beyond just recipes, we share the cultural significance and stories behind each dish. Learn about the regional variations, traditional cooking methods, and the history that makes each recipe special.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditional AdSense Ad Unit */}
      <AdSenseAd 
        pageType="category" 
        recipes={[]}
      />
    </div>
  );
};

export default RecipeCategories; 