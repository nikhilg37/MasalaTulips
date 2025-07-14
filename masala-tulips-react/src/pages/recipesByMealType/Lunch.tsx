import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Lunch: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Lunch', path: '/recipes/lunch' }));
  }, []);
  const lunchRecipes = getRecipesByCategory('lunch');

  return (
    <div className="content-section">
      <RecipeList
        title="Lunch Recipes"
        description="Delicious and satisfying lunch recipes to brighten up your day!"
        recipes={lunchRecipes}
        breadcrumbPath="/recipes/lunch"
        breadcrumbLabel="Lunch"
      />
    </div>
  );
};

export default Lunch; 