import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Vegetarian: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Vegetarian', path: '/recipe-categories/vegetarian' }));
  }, []);
  const vegetarianRecipes = getRecipesByCategory('vegetarian');

  return (
    <div className="content-section">
      <RecipeList
        title="Vegetarian Recipes"
        description="Delicious and hearty vegetarian dishes for everyone to enjoy!"
        recipes={vegetarianRecipes}
        breadcrumbPath="/recipe-categories/vegetarian"
        breadcrumbLabel="Vegetarian"
      />
    </div>
  );
};

export default Vegetarian; 