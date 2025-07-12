import React from 'react';
import RecipeList from '../components/RecipeList';
import { getRecipesByCookingTime } from '../data/recipes';

const Upto60Min: React.FC = () => {
  const mediumRecipes = getRecipesByCookingTime(60);

  return (
    <RecipeList
      title="Recipes Upto 60 Minutes"
      description="Delicious recipes that you can prepare in 60 minutes or less!"
      recipes={mediumRecipes}
      breadcrumbPath="/recipes/upto-60-min"
      breadcrumbLabel="Upto 60 min"
    />
  );
};

export default Upto60Min; 