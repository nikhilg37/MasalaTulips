import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Salads: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Salads', path: '/recipe-categories/salads' }));
  }, []);
  const saladRecipes = getRecipesByCategory('salads');

  return (
    <div className="content-section">
      <RecipeList
        title="Salad Recipes"
        description="Fresh and healthy salad recipes perfect for any meal!"
        recipes={saladRecipes}
        breadcrumbPath="/recipe-categories/salads"
        breadcrumbLabel="Salads"
      />
    </div>
  );
};

export default Salads; 