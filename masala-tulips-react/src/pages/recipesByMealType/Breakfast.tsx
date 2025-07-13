import React from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Breakfast: React.FC = () => {
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