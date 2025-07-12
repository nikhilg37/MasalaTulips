import React from 'react';
import RecipeList from '../components/RecipeList';
import { getRecipesByCookingTime } from '../data/recipes';

const Upto30Min: React.FC = () => {
  const quickRecipes = getRecipesByCookingTime(30);

  return (
    <RecipeList
      title="Recipes Upto 30 Minutes"
      description="Quick and easy recipes that you can prepare in 30 minutes or less!"
      recipes={quickRecipes}
      breadcrumbPath="/recipes/upto-30-min"
      breadcrumbLabel="Upto 30 min"
    />
  );
};

export default Upto30Min; 