// Cache buster script to force reload of latest assets
(function() {
  // Force reload if assets are not loading correctly
  const checkAssets = function() {
    const cssLoaded = document.querySelector('link[href*="main.af5d65bb.css"]');
    const jsLoaded = document.querySelector('script[src*="main.69a591d5.js"]');
    
    if (!cssLoaded || !jsLoaded) {
      console.log('Cache buster: Assets not found, forcing reload');
      window.location.reload(true);
    } else {
      console.log('Cache buster: Assets loaded correctly');
    }
  };
  
  // Check after a short delay
  setTimeout(checkAssets, 1000);
})(); 