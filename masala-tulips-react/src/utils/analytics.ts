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
    'home': { minRecipes: 2, minDescription: 800, minImages: 2, minWordCount: 1200 },
    'recipe': { minRecipes: 1, minDescription: 600, minImages: 3, minWordCount: 1000 },
    'blog': { minRecipes: 0, minDescription: 0, minImages: 2, minWordCount: 1000 }, // Blogs don't need recipes
    'default': { minRecipes: 2, minDescription: 500, minImages: 2, minWordCount: 1000 }
  };

  const requirements = contentRequirements[pageType as keyof typeof contentRequirements] || contentRequirements.default;
  
  // Check if we have enough recipes (only for recipe-related pages)
  if (pageType !== 'blog' && recipes.length < requirements.minRecipes) {
    console.log(`Insufficient recipes: ${recipes.length}/${requirements.minRecipes}`);
    return false;
  }

  // Check if we have substantial text content on the page
  const pageContent = document.body.innerText || '';
  const wordCount = pageContent.split(/\s+/).filter(word => word.length > 0).length;
  
  // Check for images
  const images = document.querySelectorAll('img');
  const imageCount = images.length;
  
  // Minimum word count for substantial content
  const minWordCount = requirements.minWordCount;
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
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer, .adsense-container');
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section, .recipe-card, .blog-card');
  
  // For blog pages, we need to ensure there's substantial blog content
  if (pageType === 'blog') {
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length < 2) {
      console.log(`Insufficient blog content: ${blogCards.length} blog cards`);
      return false;
    }
  }
  
  // Check if content elements outweigh navigation elements
  if (navigationElements.length > contentElements.length * 2) {
    console.log('Too many navigation elements compared to content');
    return false;
  }
  
  // Additional check: ensure there's meaningful content beyond just navigation
  const mainContent = document.querySelector('main, .content, .recipe-content, .blog-content');
  if (!mainContent) {
    console.log('No main content area found');
    return false;
  }
  
  const mainContentText = mainContent.textContent || '';
  const mainContentWordCount = mainContentText.split(/\s+/).filter(word => word.length > 0).length;
  
  if (mainContentWordCount < minWordCount * 0.7) { // At least 70% of required content should be in main area
    console.log(`Insufficient main content: ${mainContentWordCount}/${minWordCount * 0.7} words in main area`);
    return false;
  }
  
  // Check for low-value content indicators
  const placeholderText = document.querySelectorAll('*:contains("Coming Soon"), *:contains("Under Construction"), *:contains("Placeholder")');
  if (placeholderText.length > 0) {
    console.log('Placeholder content detected - no ads allowed');
    return false;
  }
  
  // Check for excessive links (navigation-heavy pages)
  const links = document.querySelectorAll('a');
  const paragraphs = document.querySelectorAll('p');
  if (links.length > paragraphs.length * 3) {
    console.log('Page has too many links compared to content - likely navigation page');
    return false;
  }
  
  // Check for meaningful content (not just lists of links)
  const meaningfulContent = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, .recipe-content, .blog-content');
  const linkLists = document.querySelectorAll('ul, ol');
  if (linkLists.length > meaningfulContent.length) {
    console.log('Page has more link lists than meaningful content');
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

// Additional function to validate page content for AdSense compliance
export const validatePageForAdSense = (pageType: string): boolean => {
  // Check if page is a valid type for ads
  const validPageTypes = ['home', 'recipe', 'blog'];
  if (!validPageTypes.includes(pageType)) {
    console.log(`Invalid page type for ads: ${pageType} - Navigation pages should not serve ads`);
    return false;
  }

  // Check for minimum page structure
  const hasMainContent = document.querySelector('main, .content, .recipe-content, .blog-content');
  if (!hasMainContent) {
    console.log('No main content area found');
    return false;
  }

  // Check for excessive ads (should not exceed 3 ads per page)
  const existingAds = document.querySelectorAll('.adsense-container, ins.adsbygoogle');
  if (existingAds.length >= 3) {
    console.log(`Too many ads on page: ${existingAds.length}`);
    return false;
  }

  // Check for popup blockers or ad blockers
  if (window.adsbygoogle === undefined) {
    console.log('AdSense script not loaded');
    return false;
  }

  // Additional checks for navigation/behavioral pages
  const currentPath = window.location.pathname;
  
  // Don't serve ads on category listing pages (navigation pages)
  if (currentPath.includes('/recipe-categories') && !currentPath.includes('/recipe/')) {
    console.log('Navigation page detected - no ads allowed');
    return false;
  }
  
  // Don't serve ads on 404 pages
  if (currentPath === '/404' || document.title.includes('404')) {
    console.log('404 page detected - no ads allowed');
    return false;
  }
  
  // Don't serve ads on pages with mostly navigation elements
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer, .adsense-container, ul, li');
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section, .recipe-card, .blog-card, p, h1, h2, h3, h4, h5, h6');
  
  if (navigationElements.length > contentElements.length * 2) {
    console.log('Page has too many navigation elements compared to content');
    return false;
  }

  return true;
};

// Debug function to log content statistics for AdSense compliance
export const logContentStats = (pageType: string, recipes: any[] = []): void => {
  const pageContent = document.body.innerText || '';
  const wordCount = pageContent.split(/\s+/).filter(word => word.length > 0).length;
  const images = document.querySelectorAll('img');
  const imageCount = images.length;
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer, .adsense-container');
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section, .recipe-card, .blog-card');
  const mainContent = document.querySelector('main, .content, .recipe-content, .blog-content');
  const mainContentText = mainContent?.textContent || '';
  const mainContentWordCount = mainContentText.split(/\s+/).filter(word => word.length > 0).length;

  console.log('=== AdSense Content Statistics ===');
  console.log(`Page Type: ${pageType}`);
  console.log(`Total Word Count: ${wordCount}`);
  console.log(`Main Content Word Count: ${mainContentWordCount}`);
  console.log(`Image Count: ${imageCount}`);
  console.log(`Recipe Count: ${recipes.length}`);
  console.log(`Navigation Elements: ${navigationElements.length}`);
  console.log(`Content Elements: ${contentElements.length}`);
  console.log(`Has Main Content: ${!!mainContent}`);
  console.log('==================================');
}; 