import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const Vegan: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Vegan', path: '/recipe-categories/vegan' }));
  }, []);
  const veganRecipes = getRecipesByCategory('vegan');

  return (
    <div className="content-section">
      <RecipeList
        title="Vegan Recipes"
        description="Discover delicious plant-based vegan recipes that are both nutritious and flavorful!"
        recipes={veganRecipes}
        breadcrumbPath="/recipe-categories/vegan"
        breadcrumbLabel="Vegan"
      />
    </div>
  );
};

export default Vegan; 