// SEO Utilities for Masala Tulips
import { trackGAEvent, trackGTMEvent, trackPageView } from './analytics';

// SEO Meta Tags Management
export const updateMetaTags = (metaData: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website'
  } = metaData;

  // Update title
  if (title) {
    document.title = title;
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute('content', description);
  }

  // Update keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && keywords) {
    metaKeywords.setAttribute('content', keywords);
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && description) {
    ogDescription.setAttribute('content', description);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && image) {
    ogImage.setAttribute('content', image);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && url) {
    ogUrl.setAttribute('content', url);
  }

  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType && type) {
    ogType.setAttribute('content', type);
  }

  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && title) {
    twitterTitle.setAttribute('content', title);
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription && description) {
    twitterDescription.setAttribute('content', description);
  }

  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage && image) {
    twitterImage.setAttribute('content', image);
  }

  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && url) {
    canonical.setAttribute('href', url);
  }
};

// Recipe-specific SEO
export const updateRecipeSEO = (recipe: any, currentUrl: string) => {
  const title = `${recipe.title} - ${recipe.subtitle} | Masala Tulips`;
  const description = recipe.description;
  const keywords = [
    recipe.title,
    recipe.subtitle,
    'Indian recipe',
    'vegetarian recipe',
    recipe.cuisine,
    recipe.type,
    ...recipe.tags
  ].join(', ');

  updateMetaTags({
    title,
    description,
    keywords,
    image: recipe.mainImage,
    url: currentUrl,
    type: 'article'
  });

  // Track recipe view
  trackGAEvent({
    action: 'view',
    category: 'Recipe',
    label: recipe.title
  });

  trackGTMEvent('recipe_view', {
    recipeId: recipe.id,
    recipeTitle: recipe.title,
    recipeCategory: recipe.category[0],
    recipeCuisine: recipe.cuisine
  });
};

// Category page SEO
export const updateCategorySEO = (categoryName: string, recipes: any[], currentUrl: string) => {
  const title = `${categoryName} Recipes - Indian Cooking | Masala Tulips`;
  const description = `Discover authentic ${categoryName.toLowerCase()} Indian recipes. Easy-to-follow step-by-step instructions for traditional and modern Indian cooking. Perfect for home chefs.`;
  const keywords = `${categoryName} recipes, Indian ${categoryName.toLowerCase()}, vegetarian ${categoryName.toLowerCase()}, easy Indian cooking`;

  updateMetaTags({
    title,
    description,
    keywords,
    url: currentUrl
  });

  // Track category view
  trackGAEvent({
    action: 'view',
    category: 'Recipe Category',
    label: categoryName
  });
};

// Home page SEO
export const updateHomeSEO = (currentUrl: string) => {
  const title = 'Masala Tulips - Authentic Indian Recipes with a Dutch Twist';
  const description = 'Discover traditional and modern Indian cooking recipes including Spinach Khichdi, Vegetable Pulao, and more. Easy-to-follow recipes with step-by-step instructions.';
  const keywords = 'Indian recipes, vegetarian recipes, spinach khichdi, vegetable pulao, South Indian food, Dutch Indian cooking, authentic Indian cuisine, easy Indian recipes';

  updateMetaTags({
    title,
    description,
    keywords,
    url: currentUrl
  });

  // Track home page view
  trackGAEvent({
    action: 'view',
    category: 'Page',
    label: 'Home'
  });
};

// Blog page SEO
export const updateBlogSEO = (currentUrl: string) => {
  const title = 'Indian Cooking Blog - Tips, Stories & Recipes | Masala Tulips';
  const description = 'Explore our Indian cooking blog for authentic recipes, cooking tips, cultural stories, and step-by-step guides to traditional Indian cuisine.';
  const keywords = 'Indian cooking blog, Indian food blog, cooking tips, Indian cuisine, recipe blog, cooking stories';

  updateMetaTags({
    title,
    description,
    keywords,
    url: currentUrl
  });
};

// Enhanced page view tracking
export const trackEnhancedPageView = (path: string, pageData?: any) => {
  trackPageView(path);
  
  if (pageData) {
    trackGTMEvent('page_view', {
      page_path: path,
      page_title: document.title,
      ...pageData
    });
  }
};

// Search tracking
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackGAEvent({
    action: 'search',
    category: 'User Interaction',
    label: searchTerm,
    value: resultsCount
  });

  trackGTMEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
};

// Recipe interaction tracking
export const trackRecipeInteraction = (recipeId: string, action: string, recipeTitle: string) => {
  trackGAEvent({
    action,
    category: 'Recipe Interaction',
    label: recipeTitle
  });

  trackGTMEvent('recipe_interaction', {
    recipeId,
    action,
    recipeTitle
  });
};

// Social sharing tracking
export const trackSocialShare = (platform: string, recipeId?: string, recipeTitle?: string) => {
  trackGAEvent({
    action: 'share',
    category: 'Social',
    label: platform
  });

  trackGTMEvent('social_share', {
    platform,
    recipeId,
    recipeTitle
  });
};

// Performance tracking
export const trackPerformance = (metric: string, value: number) => {
  trackGAEvent({
    action: 'timing_complete',
    category: 'Performance',
    label: metric,
    value: Math.round(value)
  });
}; 