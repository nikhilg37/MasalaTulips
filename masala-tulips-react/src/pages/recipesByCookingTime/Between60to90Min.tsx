import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCookingTimeRange } from '../../data/recipes';

const Between60to90Min: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Between 60 - 90 min', path: '/recipe-categories/between-60-90-min' }));
  }, []);
  const longRecipes = getRecipesByCookingTimeRange(60, 90);

  return (
    <div className="content-section">
      <RecipeList
        title="Recipes Between 60-90 Minutes"
        description="Delicious recipes that take between 60-90 minutes to prepare!"
        recipes={longRecipes}
        breadcrumbPath="/recipe-categories/between-60-90-min"
        breadcrumbLabel="Between 60 - 90 min"
      />
    </div>
  );
};

export default Between60to90Min; 