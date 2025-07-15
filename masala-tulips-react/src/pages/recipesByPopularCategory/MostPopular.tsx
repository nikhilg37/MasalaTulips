import React, { useEffect } from 'react';
import RecipeList from '../RecipeList';
import { getAllRecipes } from '../../data/recipes';

const MostPopular: React.FC = () => {
  useEffect(() => {
    sessionStorage.setItem('lastCategory', JSON.stringify({ label: 'Most Popular', path: '/recipe-categories/most-popular' }));
  }, []);
  // Filter out Mint Chutney and Pulao from most popular recipes
  const allRecipes = getAllRecipes();
  const popularRecipes = allRecipes.filter(recipe => 
    recipe.id !== 'mint-chutney' && recipe.id !== 'vegetable-pulao'
  );

  return (
    <div className="content-section">
      <RecipeList
        title="Most Popular Recipes"
        description="Our most loved and frequently cooked recipes!"
        recipes={popularRecipes}
        breadcrumbPath="/recipe-categories/most-popular"
        breadcrumbLabel="Most Popular"
      />
    </div>
  );
};

export default MostPopular; 