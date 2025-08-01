// Force reload script to fix 404 errors
(function() {
  console.log('Force reload script started');
  
  // Check if the correct assets are loaded
  const checkAssets = function() {
    const cssElement = document.querySelector('link[href*="main.af5d65bb.css"]');
    const jsElement = document.querySelector('script[src*="main.69a591d5.js"]');
    
    console.log('CSS element found:', !!cssElement);
    console.log('JS element found:', !!jsElement);
    
    // If assets are not found, force reload
    if (!cssElement || !jsElement) {
      console.log('Assets not found, forcing reload...');
      window.location.reload(true);
      return;
    }
    
    // Check if assets are actually loading
    const cssLoaded = cssElement.sheet !== null;
    const jsLoaded = document.querySelector('script[src*="main.69a591d5.js"]').async !== false;
    
    console.log('CSS loaded:', cssLoaded);
    console.log('JS loaded:', jsLoaded);
    
    if (!cssLoaded || !jsLoaded) {
      console.log('Assets not loading properly, forcing reload...');
      window.location.reload(true);
    } else {
      console.log('All assets loaded correctly');
    }
  };
  
  // Run check after page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAssets);
  } else {
    checkAssets();
  }
})(); 