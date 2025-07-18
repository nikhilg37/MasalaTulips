import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCookingTimeRange } from '../../data/recipes';

const Between30to60Min: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Between 30 - 60 min', path: '/recipe-categories/between-30-60-min' }));
  }, []);
  const mediumRecipes = getRecipesByCookingTimeRange(30, 60);

  return (
    <div className="content-section">
      <RecipeList
        title="Recipes Between 30-60 Minutes"
        description="Delicious recipes that take between 30-60 minutes to prepare!"
        recipes={mediumRecipes}
        breadcrumbPath="/recipe-categories/between-30-60-min"
        breadcrumbLabel="Between 30 - 60 min"
      />
    </div>
  );
};

export default Between30to60Min; 