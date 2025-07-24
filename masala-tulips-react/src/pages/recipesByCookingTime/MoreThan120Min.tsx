import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCookingTimeRange } from '../../data/recipes';

const MoreThan120Min: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'More than 120 min', path: '/recipe-categories/more-than-120-min' }));
  }, []);
  const longRecipes = getRecipesByCookingTimeRange(120, 999); // 120+ minutes

  return (
    <div className="content-section">
      <RecipeList
        title="Recipes More Than 120 Minutes"
        description="Elaborate and special occasion recipes that take more than 120 minutes to prepare!"
        recipes={longRecipes}
        breadcrumbPath="/recipe-categories/more-than-120-min"
        breadcrumbLabel="More than 120 min"
      />
    </div>
  );
};

export default MoreThan120Min; 