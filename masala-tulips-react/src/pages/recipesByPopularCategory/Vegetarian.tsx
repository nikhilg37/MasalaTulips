import React from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Vegetarian: React.FC = () => {
  const vegetarianRecipes = getRecipesByCategory('vegetarian');

  return (
    <div className="content-section">
      <RecipeList
        title="Vegetarian Recipes"
        description="Delicious and hearty vegetarian dishes for everyone to enjoy!"
        recipes={vegetarianRecipes}
        breadcrumbPath="/recipes/vegetarian"
        breadcrumbLabel="Vegetarian"
      />
    </div>
  );
};

export default Vegetarian; 