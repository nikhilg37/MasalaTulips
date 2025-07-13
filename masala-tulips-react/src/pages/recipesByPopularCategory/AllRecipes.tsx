import React from 'react';
import RecipeList from '../RecipeList';
import { getAllRecipes } from '../../data/recipes';

const AllRecipes: React.FC = () => {
  const allRecipes = getAllRecipes();

  return (
    <div className="content-section">
      <RecipeList
        title="All Recipes"
        description="Explore our complete collection of delicious Indian recipes!"
        recipes={allRecipes}
        breadcrumbPath="/recipes/all-recipes"
        breadcrumbLabel="All Recipes"
      />
    </div>
  );
};

export default AllRecipes; 