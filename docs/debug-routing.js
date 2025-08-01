// Debug routing script
(function() {
  console.log('=== Routing Debug ===');
  console.log('Current URL:', window.location.href);
  console.log('Pathname:', window.location.pathname);
  console.log('Search:', window.location.search);
  console.log('Hash:', window.location.hash);
  
  // Check if React Router is loaded
  if (window.ReactRouterDOM) {
    console.log('React Router DOM loaded');
  } else {
    console.log('React Router DOM not found');
  }
  
  // Check if the root element exists
  const rootElement = document.getElementById('root');
  if (rootElement) {
    console.log('Root element found:', rootElement);
    console.log('Root element children:', rootElement.children.length);
  } else {
    console.log('Root element not found');
  }
  
  // Check for any script loading errors
  const scripts = document.querySelectorAll('script');
  console.log('Total scripts loaded:', scripts.length);
  
  scripts.forEach((script, index) => {
    if (script.src) {
      console.log(`Script ${index}:`, script.src);
    }
  });
  
  console.log('=== End Routing Debug ===');
})(); 