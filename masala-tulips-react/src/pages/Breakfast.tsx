import React from 'react';
import RecipeList from '../components/RecipeList';
import { getRecipesByCategory } from '../data/recipes';

const Breakfast: React.FC = () => {
  const breakfastRecipes = getRecipesByCategory('breakfast');

  return (
    <RecipeList
      title="Breakfast Recipes"
      description="Start your day with these delicious breakfast recipes!"
      recipes={breakfastRecipes}
      breadcrumbPath="/recipes/breakfast"
      breadcrumbLabel="Breakfast"
    />
  );
};

export default Breakfast; 