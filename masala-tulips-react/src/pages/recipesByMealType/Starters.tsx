import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Starters: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Starters', path: '/recipe-categories/starters' }));
  }, []);
  const starterRecipes = getRecipesByCategory('starters');

  return (
    <div className="content-section">
      <RecipeList
        title="Starter Recipes"
        description="Delicious appetizers and starter dishes to begin your meal!"
        recipes={starterRecipes}
        breadcrumbPath="/recipe-categories/starters"
        breadcrumbLabel="Starters"
      />
    </div>
  );
};

export default Starters; 