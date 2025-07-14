import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCookingTime } from '../../data/recipes';

const Upto30Min: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Upto 30 min', path: '/recipes/upto-30-min' }));
  }, []);
  const quickRecipes = getRecipesByCookingTime(30);

  return (
    <div className="content-section">
      <RecipeList
        title="Recipes Upto 30 Minutes"
        description="Quick and easy recipes that you can prepare in 30 minutes or less!"
        recipes={quickRecipes}
        breadcrumbPath="/recipes/upto-30-min"
        breadcrumbLabel="Upto 30 min"
      />
    </div>
  );
};

export default Upto30Min; 