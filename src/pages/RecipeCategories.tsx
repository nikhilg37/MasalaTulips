import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCategories.css';

const RecipeCategories: React.FC = () => {
  const categories = [
    {
      title: 'By Meal Type',
      items: [
        { name: 'Breakfast', path: '/recipes/breakfast', image: '/images/recipes/mavinakaayi-chitranna/7.jpeg' },
        { name: 'Lunch', path: '/recipes/lunch', image: '/images/recipes/veg-pulao/new13.jpeg' },
        { name: 'Dinner', path: '/recipes/dinner', image: '/images/recipes/mavinakaayi-chitranna/1.jpeg' }
      ]
    },
    {
      title: 'By Cooking Time',
      items: [
        { name: 'Up to 30 minutes', path: '/recipes/upto-30-min', image: '/images/recipes/mavinakaayi-chitranna/2.jpeg' },
        { name: 'Up to 60 minutes', path: '/recipes/upto-60-min', image: '/images/recipes/veg-pulao/new1.jpeg' }
      ]
    },
    {
      title: 'By Popular Categories',
      items: [
        { name: 'All Recipes', path: '/recipes/all-recipes', image: '/images/recipes/mavinakaayi-chitranna/3.jpeg' },
        { name: 'Most Popular', path: '/recipes/most-popular', image: '/images/recipes/veg-pulao/new2.jpeg' },
        { name: 'Vegetarian', path: '/recipes/vegetarian', image: '/images/recipes/mavinakaayi-chitranna/4.jpeg' }
      ]
    }
  ];

  return (
    <div className="recipe-categories-page">
      <div className="recipes-hero">
        <div className="container">
          <h1>Recipe Categories</h1>
          <p>Discover our collection of authentic Indian recipes organized by your preferences</p>
        </div>
      </div>

      <div className="categories-section">
        <div className="container">
          {categories.map((category, index) => (
            <div key={index} className="categories-block">
              <div className="categories-heading">
                <h2>{category.title}</h2>
                <div className="categories-divider"></div>
              </div>
              
              <ul className="categories-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link to={item.path} className="category-link">
                      <div className="category-item">
                        <img 
                          src={item.image} 
                          alt={`${item.name} recipes`}
                          className="category-thumbnail"
                        />
                        <span className="category-name">{item.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCategories; 