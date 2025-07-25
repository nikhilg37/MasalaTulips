import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Dinner: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Dinner', path: '/recipe-categories/dinner' }));
  }, []);
  const dinnerRecipes = getRecipesByCategory('dinner');

  return (
    <div className="content-section">
      <RecipeList
        title="Dinner Recipes"
        description="End your day with these comforting and delicious dinner recipes!"
        recipes={dinnerRecipes}
        breadcrumbPath="/recipe-categories/dinner"
        breadcrumbLabel="Dinner"
      />
    </div>
  );
};

export default Dinner; 