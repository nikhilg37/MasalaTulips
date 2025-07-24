// Enhanced Structured Data for SEO
export const generateRecipeStructuredData = (recipe: any, url: string) => {
  // Parse cooking time to minutes
  const parseTime = (timeStr: string) => {
    const match = timeStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const prepTimeMinutes = parseTime(recipe.prepTime);
  const cookTimeMinutes = parseTime(recipe.cookingTime);
  const totalTimeMinutes = parseTime(recipe.totalTime);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.description,
    "image": recipe.mainImage,
    "author": {
      "@type": "Organization",
      "name": "Masala Tulips",
      "url": "https://masalatulips.nl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Masala Tulips",
      "logo": {
        "@type": "ImageObject",
        "url": "https://masalatulips.nl/logo192.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "prepTime": `PT${prepTimeMinutes}M`,
    "cookTime": `PT${cookTimeMinutes}M`,
    "totalTime": `PT${totalTimeMinutes}M`,
    "recipeYield": "4 servings",
    "recipeCategory": recipe.category[0],
    "recipeCuisine": recipe.cuisine,
    "keywords": recipe.tags.join(', '),
    "nutrition": {
      "@type": "NutritionInformation",
      "servingSize": "1 serving"
    },
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((instruction: any) => ({
      "@type": "HowToStep",
      "position": instruction.step,
      "name": instruction.title,
      "text": instruction.description,
      "image": instruction.images && instruction.images.length > 0 ? instruction.images[0] : undefined
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
};

// Breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Organization structured data
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Masala Tulips",
    "url": "https://masalatulips.nl",
    "logo": "https://masalatulips.nl/logo192.png",
    "description": "Authentic Indian Recipes with a Dutch Twist - Traditional and modern Indian cooking recipes",
    "foundingDate": "2023",
    "sameAs": [
      "https://www.instagram.com/masalatulips",
      "https://www.youtube.com/@masalatulips",
      "https://www.pinterest.com/masalatulips"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Dutch"]
    }
  };
};

// Website structured data
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
    },
    "publisher": {
      "@type": "Organization",
      "name": "Masala Tulips",
      "logo": {
        "@type": "ImageObject",
        "url": "https://masalatulips.nl/logo192.png"
      }
    }
  };
};

// Article structured data for blog posts
export const generateArticleStructuredData = (article: any, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": "Masala Tulips",
      "url": "https://masalatulips.nl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Masala Tulips",
      "logo": {
        "@type": "ImageObject",
        "url": "https://masalatulips.nl/logo192.png"
      }
    },
    "datePublished": article.publishedDate || new Date().toISOString(),
    "dateModified": article.modifiedDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": article.tags?.join(', ') || 'Indian cooking, recipes, food blog'
  };
};

// FAQ structured data
export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Local business structured data (if applicable)
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Masala Tulips",
    "description": "Authentic Indian Recipes with a Dutch Twist",
    "url": "https://masalatulips.nl",
    "telephone": "+31-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL",
      "addressLocality": "Netherlands"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.3676",
      "longitude": "4.9041"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "€€",
    "servesCuisine": ["Indian", "Vegetarian", "Vegan"],
    "hasMenu": "https://masalatulips.nl/recipes"
  };
};

// Add structured data to page
export const addStructuredData = (structuredData: any) => {
  // Remove existing structured data scripts
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// Add multiple structured data objects
export const addMultipleStructuredData = (structuredDataArray: any[]) => {
  // Remove existing structured data scripts
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());

  // Add new structured data
  structuredDataArray.forEach(data => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  });
}; 