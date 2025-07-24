import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Snacks: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Snacks', path: '/recipe-categories/snacks' }));
  }, []);
  const snackRecipes = getRecipesByCategory('snacks');

  return (
    <div className="content-section">
      <RecipeList
        title="Snack Recipes"
        description="Quick and tasty snack recipes perfect for any time of day!"
        recipes={snackRecipes}
        breadcrumbPath="/recipe-categories/snacks"
        breadcrumbLabel="Snacks"
      />
    </div>
  );
};

export default Snacks; 