import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Breakfast: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Breakfast', path: '/recipes/breakfast' }));
  }, []);
  const breakfastRecipes = getRecipesByCategory('breakfast');

  return (
    <div className="content-section">
      <RecipeList
        title="Breakfast Recipes"
        description="Start your day with these delicious breakfast recipes!"
        recipes={breakfastRecipes}
        breadcrumbPath="/recipes/breakfast"
        breadcrumbLabel="Breakfast"
      />
    </div>
  );
};

export default Breakfast; 