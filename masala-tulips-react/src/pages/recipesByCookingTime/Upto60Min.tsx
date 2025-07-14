import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCookingTime } from '../../data/recipes';

const Upto60Min: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Upto 60 min', path: '/recipes/upto-60-min' }));
  }, []);
  const mediumRecipes = getRecipesByCookingTime(60);

  return (
    <div className="content-section">
      <RecipeList
        title="Recipes Upto 60 Minutes"
        description="Delicious recipes that you can prepare in 60 minutes or less!"
        recipes={mediumRecipes}
        breadcrumbPath="/recipes/upto-60-min"
        breadcrumbLabel="Upto 60 min"
      />
    </div>
  );
};

export default Upto60Min; 