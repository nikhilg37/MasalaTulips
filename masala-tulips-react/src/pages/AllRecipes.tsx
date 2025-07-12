import React from 'react';
import RecipeList from '../components/RecipeList';
import { getAllRecipes } from '../data/recipes';

const AllRecipes: React.FC = () => {
  const allRecipes = getAllRecipes();

  return (
    <RecipeList
      title="All Recipes"
      description="Explore our complete collection of delicious Indian recipes!"
      recipes={allRecipes}
      breadcrumbPath="/recipes/all-recipes"
      breadcrumbLabel="All Recipes"
    />
  );
};

export default AllRecipes; 