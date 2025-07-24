import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Desserts: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Desserts', path: '/recipe-categories/desserts' }));
  }, []);
  const dessertRecipes = getRecipesByCategory('desserts');

  return (
    <div className="content-section">
      <RecipeList
        title="Dessert Recipes"
        description="Sweet and indulgent dessert recipes to satisfy your sweet tooth!"
        recipes={dessertRecipes}
        breadcrumbPath="/recipe-categories/desserts"
        breadcrumbLabel="Desserts"
      />
    </div>
  );
};

export default Desserts; 