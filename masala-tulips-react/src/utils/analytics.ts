// TypeScript declarations for global gtag and dataLayer

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// TypeScript declarations for Google AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

// Google Analytics (gtag.js) event tracking
export const trackGAEvent = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Google Tag Manager (dataLayer) event tracking
export const trackGTMEvent = (event: string, data: Record<string, any> = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
};

// Track a page view (for SPA route changes)
export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'page_view', page_path: path });
  }
};

// Function to check if a page has sufficient content for serving ads
export const hasSufficientContent = (recipes: any[] = [], pageType: string = 'default'): boolean => {
  // Minimum content requirements for different page types
  const contentRequirements = {
    'home': { minRecipes: 2, minDescription: 800, minImages: 2 },
    'category': { minRecipes: 1, minDescription: 400, minImages: 1 },
    'recipe': { minRecipes: 1, minDescription: 600, minImages: 3 },
    'blog': { minRecipes: 1, minDescription: 500, minImages: 2 },
    'default': { minRecipes: 2, minDescription: 500, minImages: 2 }
  };

  const requirements = contentRequirements[pageType as keyof typeof contentRequirements] || contentRequirements.default;
  
  // Check if we have enough recipes
  if (recipes.length < requirements.minRecipes) {
    console.log(`Insufficient recipes: ${recipes.length}/${requirements.minRecipes}`);
    return false;
  }

  // Check if we have substantial text content on the page
  const pageContent = document.body.innerText || '';
  const wordCount = pageContent.split(/\s+/).length;
  
  // Check for images
  const images = document.querySelectorAll('img');
  const imageCount = images.length;
  
  // Minimum word count for substantial content
  const minWordCount = requirements.minDescription;
  const minImages = requirements.minImages;
  
  if (wordCount < minWordCount) {
    console.log(`Insufficient text content: ${wordCount}/${minWordCount} words`);
    return false;
  }
  
  if (imageCount < minImages) {
    console.log(`Insufficient images: ${imageCount}/${minImages} images`);
    return false;
  }
  
  // Check for navigation and other non-content elements
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer');
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section');
  
  if (navigationElements.length > contentElements.length) {
    console.log('Too many navigation elements compared to content');
    return false;
  }
  
  console.log(`Content check passed: ${wordCount} words, ${imageCount} images, ${contentElements.length} content elements`);
  return true;
};

// Function to safely load ads only on pages with sufficient content
export const loadAdsSafely = (adElement: HTMLElement, recipes: any[] = [], pageType: string = 'default'): void => {
  if (!hasSufficientContent(recipes, pageType)) {
    console.log('Ad not loaded: Insufficient content on page');
    return;
  }

  // The script tags in the components handle ad loading automatically
  // This function now only checks content sufficiency
  console.log('Ad loading handled by script tags - content check passed');
}; 