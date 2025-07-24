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
    'home': { minRecipes: 2, minDescription: 500 },
    'category': { minRecipes: 1, minDescription: 200 },
    'recipe': { minRecipes: 1, minDescription: 300 },
    'blog': { minRecipes: 1, minDescription: 400 },
    'default': { minRecipes: 2, minDescription: 300 }
  };

  const requirements = contentRequirements[pageType as keyof typeof contentRequirements] || contentRequirements.default;
  
  // Check if we have enough recipes
  if (recipes.length < requirements.minRecipes) {
    return false;
  }

  // Check if we have substantial text content on the page
  const pageContent = document.body.innerText || '';
  const wordCount = pageContent.split(/\s+/).length;
  
  // Minimum word count for substantial content
  const minWordCount = requirements.minDescription;
  
  return wordCount >= minWordCount;
};

// Function to safely load ads only on pages with sufficient content
export const loadAdsSafely = (adElement: HTMLElement, recipes: any[] = [], pageType: string = 'default'): void => {
  if (!hasSufficientContent(recipes, pageType)) {
    console.log('Ad not loaded: Insufficient content on page');
    return;
  }

  // Check if adsbygoogle is available
  if (typeof window !== 'undefined' && window.adsbygoogle) {
    try {
      window.adsbygoogle.push({});
    } catch (error) {
      console.error('Error loading ad:', error);
    }
  }
}; 