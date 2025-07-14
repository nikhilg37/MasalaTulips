import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Drinks: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Drinks', path: '/recipes/drinks' }));
  }, []);
  const drinksRecipes = getRecipesByCategory('drinks');

  return (
    <div className="content-section">
      <RecipeList
        title="Drinks Recipes"
        description="Explore our collection of refreshing drinks, perfect for any occasion!"
        recipes={drinksRecipes}
        breadcrumbPath="/recipes/drinks"
        breadcrumbLabel="Drinks"
      />
    </div>
  );
};

export default Drinks; 