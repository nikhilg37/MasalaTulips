// SEO Utilities for Masala Tulips
import { trackGAEvent, trackGTMEvent, trackPageView } from './analytics';

// Enhanced SEO Meta Tags Management
export const updateMetaTags = (metaData: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
}) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    locale = 'en_US',
    siteName = 'Masala Tulips'
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

  // Update author
  if (author) {
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', author);
  }

  // Enhanced Open Graph tags
  const ogTags = {
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:site_name': siteName,
    'og:locale': locale,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': title
  };

  Object.entries(ogTags).forEach(([property, content]) => {
    if (content) {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    }
  });

  // Article-specific Open Graph tags
  if (type === 'article' && (publishedTime || modifiedTime || author || section || tags)) {
    const articleTags = {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': author,
      'article:section': section
    };

    Object.entries(articleTags).forEach(([property, content]) => {
      if (content) {
        let articleTag = document.querySelector(`meta[property="${property}"]`);
        if (!articleTag) {
          articleTag = document.createElement('meta');
          articleTag.setAttribute('property', property);
          document.head.appendChild(articleTag);
        }
        articleTag.setAttribute('content', content);
      }
    });

    // Add article tags
    if (tags && tags.length > 0) {
      tags.forEach(tag => {
        const articleTag = document.createElement('meta');
        articleTag.setAttribute('property', 'article:tag');
        articleTag.setAttribute('content', tag);
        document.head.appendChild(articleTag);
      });
    }
  }

  // Enhanced Twitter tags
  const twitterTags = {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:site': '@masalatulips',
    'twitter:creator': '@masalatulips'
  };

  Object.entries(twitterTags).forEach(([name, content]) => {
    if (content) {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    }
  });

  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && url) {
    canonical.setAttribute('href', url);
  }

  // Add JSON-LD structured data for better SEO
  if (type === 'article') {
    addArticleStructuredData({
      title,
      description,
      image,
      url,
      author,
      publishedTime,
      modifiedTime,
      section,
      tags
    });
  }
};

// Add article structured data
const addArticleStructuredData = (articleData: any) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "image": articleData.image,
    "author": {
      "@type": "Organization",
      "name": articleData.author || "Masala Tulips",
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
    "datePublished": articleData.publishedTime || new Date().toISOString(),
    "dateModified": articleData.modifiedTime || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleData.url
    },
    "keywords": articleData.tags?.join(', ') || 'Indian cooking, recipes, food blog'
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// Recipe-specific SEO with enhanced metadata
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

  const tags = [
    recipe.title,
    recipe.cuisine,
    recipe.type,
    ...recipe.tags
  ];

  updateMetaTags({
    title,
    description,
    keywords,
    image: recipe.mainImage,
    url: currentUrl,
    type: 'article',
    author: 'Masala Tulips',
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: recipe.category[0],
    tags,
    locale: 'en_US'
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

// Category page SEO with enhanced content
export const updateCategorySEO = (categoryName: string, recipes: any[], currentUrl: string) => {
  const title = `${categoryName} Recipes - Indian Cooking | Masala Tulips`;
  const description = `Discover authentic ${categoryName.toLowerCase()} Indian recipes. Easy-to-follow step-by-step instructions for traditional and modern Indian cooking. Perfect for home chefs.`;
  const keywords = `${categoryName} recipes, Indian ${categoryName.toLowerCase()}, vegetarian ${categoryName.toLowerCase()}, easy Indian cooking`;

  updateMetaTags({
    title,
    description,
    keywords,
    url: currentUrl,
    type: 'website',
    section: categoryName,
    tags: [categoryName, 'Indian recipes', 'vegetarian cooking']
  });

  // Track category view
  trackGAEvent({
    action: 'view',
    category: 'Recipe Category',
    label: categoryName
  });
};

// Home page SEO with enhanced metadata
export const updateHomeSEO = (currentUrl: string) => {
  const title = 'Masala Tulips - Authentic Indian Recipes with a Dutch Twist';
  const description = 'Discover traditional and modern Indian cooking recipes including Spinach Khichdi, Vegetable Pulao, and more. Easy-to-follow recipes with step-by-step instructions.';
  const keywords = 'Indian recipes, vegetarian recipes, spinach khichdi, vegetable pulao, South Indian food, Dutch Indian cooking, authentic Indian cuisine, easy Indian recipes';

  updateMetaTags({
    title,
    description,
    keywords,
    url: currentUrl,
    type: 'website',
    tags: ['Indian recipes', 'vegetarian cooking', 'South Indian food', 'Dutch Indian cooking']
  });

  // Track home page view
  trackGAEvent({
    action: 'view',
    category: 'Page',
    label: 'Home'
  });
};

// Blog page SEO with enhanced content
export const updateBlogSEO = (currentUrl: string) => {
  const title = 'Indian Cooking Blog - Tips, Stories & Recipes | Masala Tulips';
  const description = 'Explore our Indian cooking blog for authentic recipes, cooking tips, cultural stories, and step-by-step guides to traditional Indian cuisine.';
  const keywords = 'Indian cooking blog, Indian food blog, cooking tips, Indian cuisine, recipe blog, cooking stories';

  updateMetaTags({
    title,
    description,
    keywords,
    url: currentUrl,
    type: 'website',
    section: 'Blog',
    tags: ['Indian cooking blog', 'food blog', 'cooking tips', 'Indian cuisine']
  });
};

// Enhanced page view tracking with Core Web Vitals
export const trackEnhancedPageView = (path: string, pageData?: any) => {
  trackPageView(path);
  
  if (pageData) {
    trackGTMEvent('page_view', {
      page_path: path,
      page_title: document.title,
      ...pageData
    });
  }

  // Track Core Web Vitals if available
  if ('web-vital' in window) {
    // This would integrate with web-vitals library
    console.log('Core Web Vitals tracking available');
  }
};

// Search tracking with enhanced analytics
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

// Recipe interaction tracking with enhanced data
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

// Social sharing tracking with platform-specific data
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

// Performance tracking with enhanced metrics
export const trackPerformance = (metric: string, value: number) => {
  trackGAEvent({
    action: 'timing_complete',
    category: 'Performance',
    label: metric,
    value: Math.round(value)
  });
};

// Add breadcrumb structured data
export const addBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// Add FAQ structured data
export const addFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  const structuredData = {
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

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}; 