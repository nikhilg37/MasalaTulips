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
  
  // STRICT CHECK: Don't serve ads on category listing pages (navigation pages)
  const currentPath = window.location.pathname;
  if (currentPath.includes('/recipe-categories') && !currentPath.includes('/recipe/')) {
    console.log(`Category listing page detected: ${currentPath} - NO ADS ALLOWED`);
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on 404 pages
  if (currentPath === '/404' || document.title.includes('404') || document.title.includes('Not Found')) {
    console.log('404 page detected - NO ADS ALLOWED');
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on legal pages
  if (currentPath.includes('/privacy-policy') || currentPath.includes('/terms-of-service')) {
    console.log('Legal page detected - NO ADS ALLOWED');
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on pages with placeholder content
  const allElements = document.querySelectorAll('*');
  const hasPlaceholderContent = Array.from(allElements).some(element => {
    const text = element.textContent || '';
    return text.includes('Coming Soon') || 
           text.includes('Under Construction') || 
           text.includes('Placeholder') || 
           text.includes('404') || 
           text.includes('Not Found');
  });
  
  if (hasPlaceholderContent) {
    console.log('Placeholder/error content detected - NO ADS ALLOWED');
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on pages that are primarily navigation
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer, .adsense-container, ul, li, a');
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section, .recipe-card, .blog-card, p, h1, h2, h3, h4, h5, h6');
  
  // If navigation elements outnumber content elements by more than 2:1, it's a navigation page
  if (navigationElements.length > contentElements.length * 2) {
    console.log(`Navigation-heavy page detected: ${navigationElements.length} nav elements vs ${contentElements.length} content elements - NO ADS ALLOWED`);
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on pages with excessive links (navigation pages)
  const links = document.querySelectorAll('a');
  const paragraphs = document.querySelectorAll('p');
  if (links.length > paragraphs.length * 3) {
    console.log(`Link-heavy page detected: ${links.length} links vs ${paragraphs.length} paragraphs - NO ADS ALLOWED`);
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on pages with mostly link lists
  const meaningfulContent = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, .recipe-content, .blog-content');
  const linkLists = document.querySelectorAll('ul, ol');
  if (linkLists.length > meaningfulContent.length) {
    console.log(`Link list-heavy page detected: ${linkLists.length} lists vs ${meaningfulContent.length} content elements - NO ADS ALLOWED`);
    return false;
  }
  
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
  
  // For blog pages, we need to ensure there's substantial blog content
  if (pageType === 'blog') {
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length < 2) {
      console.log(`Insufficient blog content: ${blogCards.length} blog cards`);
      return false;
    }
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
  // STRICT CHECK: Only allow ads on specific content-rich page types
  const validPageTypes = ['home', 'recipe', 'blog'];
  if (!validPageTypes.includes(pageType)) {
    console.log(`Invalid page type for ads: ${pageType} - Navigation pages should not serve ads`);
    return false;
  }

  // STRICT CHECK: Check for minimum page structure
  const hasMainContent = document.querySelector('main, .content, .recipe-content, .blog-content');
  if (!hasMainContent) {
    console.log('No main content area found');
    return false;
  }

  // STRICT CHECK: Check for excessive ads (should not exceed 3 ads per page)
  const existingAds = document.querySelectorAll('.adsense-container, ins.adsbygoogle');
  if (existingAds.length >= 3) {
    console.log(`Too many ads on page: ${existingAds.length}`);
    return false;
  }

  // STRICT CHECK: Check for popup blockers or ad blockers
  if (window.adsbygoogle === undefined) {
    console.log('AdSense script not loaded');
    return false;
  }

  // STRICT CHECK: Additional checks for navigation/behavioral pages
  const currentPath = window.location.pathname;
  
  // Don't serve ads on category listing pages (navigation pages)
  if (currentPath.includes('/recipe-categories') && !currentPath.includes('/recipe/')) {
    console.log('Navigation page detected - NO ADS ALLOWED');
    return false;
  }
  
  // Don't serve ads on 404 pages
  if (currentPath === '/404' || document.title.includes('404') || document.title.includes('Not Found')) {
    console.log('404 page detected - NO ADS ALLOWED');
    return false;
  }
  
  // Don't serve ads on legal pages (privacy policy, terms of service)
  if (currentPath.includes('/privacy-policy') || currentPath.includes('/terms-of-service')) {
    console.log('Legal page detected - NO ADS ALLOWED');
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on pages with placeholder content
  const allElements2 = document.querySelectorAll('*');
  const hasPlaceholderContent2 = Array.from(allElements2).some(element => {
    const text = element.textContent || '';
    return text.includes('Coming Soon') || 
           text.includes('Under Construction') || 
           text.includes('Placeholder') || 
           text.includes('404') || 
           text.includes('Not Found');
  });
  
  if (hasPlaceholderContent2) {
    console.log('Placeholder/error content detected - NO ADS ALLOWED');
    return false;
  }
  
  // STRICT CHECK: Don't serve ads on pages with mostly navigation elements
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer, .adsense-container, ul, li, a');
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section, .recipe-card, .blog-card, p, h1, h2, h3, h4, h5, h6');
  
  if (navigationElements.length > contentElements.length * 2) {
    console.log('Page has too many navigation elements compared to content - NO ADS ALLOWED');
    return false;
  }

  // STRICT CHECK: Don't serve ads on pages with excessive links (navigation pages)
  const links = document.querySelectorAll('a');
  const paragraphs = document.querySelectorAll('p');
  if (links.length > paragraphs.length * 3) {
    console.log(`Link-heavy page detected: ${links.length} links vs ${paragraphs.length} paragraphs - NO ADS ALLOWED`);
    return false;
  }

  // STRICT CHECK: Don't serve ads on pages with mostly link lists
  const meaningfulContent = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, .recipe-content, .blog-content');
  const linkLists = document.querySelectorAll('ul, ol');
  if (linkLists.length > meaningfulContent.length) {
    console.log(`Link list-heavy page detected: ${linkLists.length} lists vs ${meaningfulContent.length} content elements - NO ADS ALLOWED`);
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