import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getRecipesByCategory } from '../../data/recipes';

const SideDish: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Side Dish', path: '/recipe-categories/side-dish' }));
  }, []);
  const sideDishRecipes = getRecipesByCategory('side-dish');

  return (
    <div className="content-section">
      <RecipeList
        title="Side Dish Recipes"
        description="Explore our collection of delicious side dishes, perfect to complement any meal!"
        recipes={sideDishRecipes}
        breadcrumbPath="/recipe-categories/side-dish"
        breadcrumbLabel="Side Dish"
      />
      {sideDishRecipes.length <= 1 && (
        <div style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem', color: '#888'}}>
          More Recipes Coming Soon
        </div>
      )}
    </div>
  );
};

export default SideDish; 