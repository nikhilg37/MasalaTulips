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
}

export const testAdSenseCompliance = (): ComplianceTestResult[] => {
  const currentPath = window.location.pathname;
  const pageType = getPageTypeFromPath(currentPath);
  
  const results: ComplianceTestResult[] = [];
  
  // Test current page
  const contentCheck = hasSufficientContent([], pageType);
  const validationCheck = validatePageForAdSense(pageType);
  const shouldServeAds = contentCheck && validationCheck;
  
  results.push({
    pageType,
    path: currentPath,
    shouldServeAds,
    reason: shouldServeAds ? 'Page meets all AdSense requirements' : 'Page does not meet AdSense requirements',
    contentCheck,
    validationCheck
  });
  
  // Test common page types
  const testPages = [
    { path: '/', type: 'home' },
    { path: '/recipe/mavinakaayi-chitranna', type: 'recipe' },
    { path: '/blogs', type: 'blog' },
    { path: '/recipe-categories/breakfast', type: 'category' },
    { path: '/recipe-categories/lunch', type: 'category' },
    { path: '/privacy-policy', type: 'legal' },
    { path: '/terms-of-service', type: 'legal' },
    { path: '/404', type: 'error' }
  ];
  
  testPages.forEach(({ path, type }) => {
    // Simulate path for testing
    const originalPath = window.location.pathname;
    Object.defineProperty(window.location, 'pathname', {
      value: path,
      writable: true
    });
    
    const testContentCheck = hasSufficientContent([], type);
    const testValidationCheck = validatePageForAdSense(type);
    const testShouldServeAds = testContentCheck && testValidationCheck;
    
    results.push({
      pageType: type,
      path,
      shouldServeAds: testShouldServeAds,
      reason: testShouldServeAds ? 'Page meets all AdSense requirements' : 'Page does not meet AdSense requirements',
      contentCheck: testContentCheck,
      validationCheck: testValidationCheck
    });
    
    // Restore original path
    Object.defineProperty(window.location, 'pathname', {
      value: originalPath,
      writable: true
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

export const logComplianceResults = (results: ComplianceTestResult[]): void => {
  console.log('=== AdSense Compliance Test Results ===');
  
  results.forEach(result => {
    const status = result.shouldServeAds ? '✅ ALLOWED' : '❌ BLOCKED';
    console.log(`${status} - ${result.pageType} (${result.path})`);
    console.log(`  Reason: ${result.reason}`);
    console.log(`  Content Check: ${result.contentCheck ? 'PASS' : 'FAIL'}`);
    console.log(`  Validation Check: ${result.validationCheck ? 'PASS' : 'FAIL'}`);
    console.log('');
  });
  
  const allowedCount = results.filter(r => r.shouldServeAds).length;
  const blockedCount = results.filter(r => !r.shouldServeAds).length;
  
  console.log(`Summary: ${allowedCount} pages allowed, ${blockedCount} pages blocked`);
  console.log('=====================================');
};

// Auto-run test in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    const results = testAdSenseCompliance();
    logComplianceResults(results);
  }, 2000); // Wait for page to load
} 