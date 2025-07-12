import React from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Dinner: React.FC = () => {
  const dinnerRecipes = getRecipesByCategory('dinner');

  return (
    <RecipeList
      title="Dinner Recipes"
      description="End your day with these comforting and delicious dinner recipes!"
      recipes={dinnerRecipes}
      breadcrumbPath="/recipes/dinner"
      breadcrumbLabel="Dinner"
    />
  );
};

export default Dinner; 