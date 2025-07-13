import React from 'react';
import RecipeList from '../RecipeList';
import { getAllRecipes } from '../../data/recipes';

const MostPopular: React.FC = () => {
  // For now, show all recipes as "most popular"
  // In the future, you can add a popularity field to recipes
  const popularRecipes = getAllRecipes();

  return (
    <div className="content-section">
      <RecipeList
        title="Most Popular Recipes"
        description="Our most loved and frequently cooked recipes!"
        recipes={popularRecipes}
        breadcrumbPath="/recipes/most-popular"
        breadcrumbLabel="Most Popular"
      />
    </div>
  );
};

export default MostPopular; 