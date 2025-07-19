import { Recipe } from '../data/recipes';

export const generateRecipeStructuredData = (recipe: Recipe, url: string) => {
  const totalTimeMinutes = parseInt(recipe.totalTime.match(/\d+/)?.[0] || '0');
  const prepTimeMinutes = parseInt(recipe.prepTime.match(/\d+/)?.[0] || '0');
  const cookTimeMinutes = parseInt(recipe.cookingTime.match(/\d+/)?.[0] || '0');

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.description,
    "image": `${window.location.origin}${recipe.mainImage}`,
    "author": {
      "@type": "Organization",
      "name": "Masala Tulips"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Masala Tulips",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo192.png`
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "prepTime": `PT${prepTimeMinutes}M`,
    "cookTime": `PT${cookTimeMinutes}M`,
    "totalTime": `PT${totalTimeMinutes}M`,
    "recipeYield": "4 servings",
    "recipeCategory": recipe.category.join(", "),
    "recipeCuisine": recipe.cuisine,
    "keywords": recipe.tags.join(", "),
    "nutrition": {
      "@type": "NutritionInformation",
      "servingSize": "1 serving"
    },
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map(instruction => ({
      "@type": "HowToStep",
      "position": instruction.step,
      "name": instruction.title,
      "text": instruction.description
    })),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Masala Tulips",
    "description": "Authentic Indian Recipes with a Dutch Twist - Traditional and modern Indian cooking recipes",
    "url": "https://masalatulips.nl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://masalatulips.nl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Masala Tulips",
    "url": "https://masalatulips.nl",
    "logo": "https://masalatulips.nl/logo192.png",
    "description": "Authentic Indian Recipes with a Dutch Twist",
    "sameAs": [
      "https://www.instagram.com/masalatulips",
      "https://www.youtube.com/@masalatulips",
      "https://www.pinterest.com/masalatulips"
    ]
  };
}; 