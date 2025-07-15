import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Drinks: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Drinks', path: '/recipe-categories/drinks' }));
  }, []);
  const drinksRecipes = getRecipesByCategory('drinks');

  return (
    <div className="content-section">
      <RecipeList
        title="Drinks Recipes"
        description="Explore our collection of refreshing drinks, perfect for any occasion!"
        recipes={drinksRecipes}
        breadcrumbPath="/recipe-categories/drinks"
        breadcrumbLabel="Drinks"
      />
    </div>
  );
};

export default Drinks; 