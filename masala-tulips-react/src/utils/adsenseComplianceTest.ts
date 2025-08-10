// AdSense Compliance Test Utility
// This utility helps verify that ads are only served on appropriate pages

import { hasSufficientContent, validatePageForAdSense } from './analytics';

interface ComplianceTestResult {
  pageType: string;
  path: string;
  shouldServeAds: boolean;
  reason: string;
  contentCheck: boolean;
  validationCheck: boolean;
  contentScore: number;
  navigationScore: number;
  issues: string[];
}

export const testAdSenseCompliance = (): ComplianceTestResult[] => {
  const currentPath = window.location.pathname;
  const pageType = getPageTypeFromPath(currentPath);
  
  const results: ComplianceTestResult[] = [];
  
  // Test current page only (avoiding pathname redefinition issues)
  const contentCheck = hasSufficientContent([], pageType);
  const validationCheck = validatePageForAdSense(pageType);
  const shouldServeAds = contentCheck && validationCheck;
  
  // Calculate content and navigation scores
  const { contentScore, navigationScore, issues } = calculatePageScores();
  
  results.push({
    pageType,
    path: currentPath,
    shouldServeAds,
    reason: shouldServeAds ? 'Page meets all AdSense requirements' : 'Page does not meet AdSense requirements',
    contentCheck,
    validationCheck,
    contentScore,
    navigationScore,
    issues
  });
  
  // Test common page types without pathname manipulation
  const testPageTypes = ['home', 'recipe', 'blog', 'category', 'legal', 'error'];
  
  testPageTypes.forEach((type) => {
    // Test with empty recipes array to simulate different page types
    const testContentCheck = hasSufficientContent([], type);
    const testValidationCheck = validatePageForAdSense(type);
    const testShouldServeAds = testContentCheck && testValidationCheck;
    
    const { contentScore: testContentScore, navigationScore: testNavigationScore, issues: testIssues } = calculatePageScores();
    
    results.push({
      pageType: type,
      path: `/${type}`,
      shouldServeAds: testShouldServeAds,
      reason: testShouldServeAds ? 'Page meets all AdSense requirements' : 'Page does not meet AdSense requirements',
      contentCheck: testContentCheck,
      validationCheck: testValidationCheck,
      contentScore: testContentScore,
      navigationScore: testNavigationScore,
      issues: testIssues
    });
  });
  
  return results;
};

const getPageTypeFromPath = (path: string): string => {
  if (path === '/') return 'home';
  if (path.startsWith('/recipe/')) return 'recipe';
  if (path === '/blogs') return 'blog';
  if (path.startsWith('/recipe-categories/') && !path.includes('/recipe/')) return 'category';
  if (path.includes('/privacy-policy') || path.includes('/terms-of-service')) return 'legal';
  if (path === '/404' || path.includes('404')) return 'error';
  return 'unknown';
};

const calculatePageScores = (): { contentScore: number; navigationScore: number; issues: string[] } => {
  const issues: string[] = [];
  
  // Calculate content score
  const pageContent = document.body.innerText || '';
  const wordCount = pageContent.split(/\s+/).filter(word => word.length > 0).length;
  const images = document.querySelectorAll('img');
  const imageCount = images.length;
  
  let contentScore = 0;
  if (wordCount >= 800) contentScore += 40;
  else if (wordCount >= 600) contentScore += 30;
  else if (wordCount >= 400) contentScore += 20;
  else if (wordCount >= 200) contentScore += 10;
  else {
    contentScore += 0;
    issues.push(`Insufficient text content: ${wordCount} words`);
  }
  
  if (imageCount >= 3) contentScore += 30;
  else if (imageCount >= 2) contentScore += 20;
  else if (imageCount >= 1) contentScore += 10;
  else {
    contentScore += 0;
    issues.push('No images found');
  }
  
  // Check for meaningful content elements
  const contentElements = document.querySelectorAll('main, .content, .recipe-content, .blog-content, article, section, .recipe-card, .blog-card, p, h1, h2, h3, h4, h5, h6');
  if (contentElements.length >= 10) contentScore += 30;
  else if (contentElements.length >= 5) contentScore += 20;
  else if (contentElements.length >= 3) contentScore += 10;
  else {
    contentScore += 0;
    issues.push(`Insufficient content elements: ${contentElements.length}`);
  }
  
  // Calculate navigation score (lower is better for AdSense)
  const navigationElements = document.querySelectorAll('nav, .nav, .navigation, .breadcrumbs, .header, .footer, .adsense-container, ul, li, a, .categories-list, .categories-block');
  const links = document.querySelectorAll('a');
  const paragraphs = document.querySelectorAll('p');
  
  let navigationScore = 0;
  if (navigationElements.length > contentElements.length * 2) {
    navigationScore += 50;
    issues.push('Too many navigation elements compared to content');
  } else if (navigationElements.length > contentElements.length) {
    navigationScore += 30;
    issues.push('Navigation elements outnumber content elements');
  }
  
  if (links.length > paragraphs.length * 3) {
    navigationScore += 30;
    issues.push('Excessive links compared to paragraphs');
  }
  
  if (links.length > 20) {
    navigationScore += 20;
    issues.push('Too many links on page');
  }
  
  // Check for placeholder content
  const hasPlaceholderContent = Array.from(document.querySelectorAll('*')).some(element => {
    const text = element.textContent || '';
    return text.includes('Coming Soon') || 
           text.includes('Under Construction') || 
           text.includes('Placeholder') || 
           text.includes('404') || 
           text.includes('Not Found') ||
           text.includes('Loading...') ||
           text.includes('Please wait');
  });
  
  if (hasPlaceholderContent) {
    contentScore = 0;
    navigationScore += 100;
    issues.push('Placeholder/error content detected');
  }
  
  return { contentScore, navigationScore, issues };
};

export const logComplianceResults = (results: ComplianceTestResult[]): void => {
  console.log('=== AdSense Compliance Test Results ===');
  
  results.forEach(result => {
    const status = result.shouldServeAds ? '✅ ALLOWED' : '❌ BLOCKED';
    console.log(`${status} - ${result.pageType} (${result.path})`);
    console.log(`  Reason: ${result.reason}`);
    console.log(`  Content Check: ${result.contentCheck ? 'PASS' : 'FAIL'}`);
    console.log(`  Validation Check: ${result.validationCheck ? 'PASS' : 'FAIL'}`);
    console.log(`  Content Score: ${result.contentScore}/100`);
    console.log(`  Navigation Score: ${result.navigationScore}/100 (lower is better)`);
    
    if (result.issues.length > 0) {
      console.log(`  Issues:`);
      result.issues.forEach(issue => console.log(`    - ${issue}`));
    }
    console.log('');
  });
  
  const allowedCount = results.filter(r => r.shouldServeAds).length;
  const blockedCount = results.filter(r => !r.shouldServeAds).length;
  
  console.log(`Summary: ${allowedCount} pages allowed, ${blockedCount} pages blocked`);
  
  // Check for potential policy violations
  const highNavigationScores = results.filter(r => r.navigationScore > 50);
  if (highNavigationScores.length > 0) {
    console.log('⚠️  WARNING: Pages with high navigation scores detected:');
    highNavigationScores.forEach(r => {
      console.log(`    - ${r.pageType} (${r.path}): Navigation Score ${r.navigationScore}`);
    });
  }
  
  const lowContentScores = results.filter(r => r.contentScore < 50);
  if (lowContentScores.length > 0) {
    console.log('⚠️  WARNING: Pages with low content scores detected:');
    lowContentScores.forEach(r => {
      console.log(`    - ${r.pageType} (${r.path}): Content Score ${r.contentScore}`);
    });
  }
  
  console.log('=====================================');
};

// Auto-run test in development
// Temporarily disabled to prevent runtime errors
// if (process.env.NODE_ENV === 'development') {
//   setTimeout(() => {
//     const results = testAdSenseCompliance();
//     logComplianceResults(results);
//   }, 3000); // Wait for page to load
// } 