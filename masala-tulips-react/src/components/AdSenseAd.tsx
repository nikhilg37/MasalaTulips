import React, { useState, useEffect, useRef } from 'react';
import { hasSufficientContent, validatePageForAdSense, logContentStats } from '../utils/analytics';

interface AdSenseAdProps {
  pageType: string;
  recipes?: any[];
  className?: string;
  style?: React.CSSProperties;
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({ 
  pageType, 
  recipes = [], 
  className = '',
  style = {}
}) => {
  const [shouldShowAd, setShouldShowAd] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [contentCheckPassed, setContentCheckPassed] = useState(false);
  const maxRetries = 3;
  const contentCheckInterval = useRef<NodeJS.Timeout | null>(null);

  // Enhanced content loading detection
  useEffect(() => {
    // Wait for content to be fully loaded with progressive delays
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 4000); // Increased to 4 seconds for better content loading

    return () => clearTimeout(timer);
  }, []);

  // Continuous content monitoring
  useEffect(() => {
    if (!isContentLoaded) return;

    // Set up continuous content monitoring
    contentCheckInterval.current = setInterval(() => {
      // Log content statistics for debugging
      logContentStats(pageType, recipes);

      // STRICT CHECK: First validate the page for AdSense compliance
      const isValidForAdSense = validatePageForAdSense(pageType);
      if (!isValidForAdSense) {
        console.log(`Page not valid for AdSense: ${pageType} - NO ADS ALLOWED`);
        setShouldShowAd(false);
        setContentCheckPassed(false);
        return;
      }

      // STRICT CHECK: Check if there's sufficient content
      const hasContent = hasSufficientContent(recipes, pageType);
      
      if (hasContent) {
        if (!contentCheckPassed) {
          console.log(`Content check passed on ${pageType} page: sufficient content detected`);
          setContentCheckPassed(true);
        }
        
        // Additional delay to ensure content is stable
        setTimeout(() => {
          setShouldShowAd(true);
          console.log(`Ad will be shown on ${pageType} page`);
        }, 1000);
      } else {
        setContentCheckPassed(false);
        // Retry logic for content checking
        if (retryCount < maxRetries) {
          console.log(`Content check failed, retrying... (${retryCount + 1}/${maxRetries})`);
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 3000); // Wait 3 seconds before retry
        } else {
          console.log(`Ad not shown on ${pageType} page: insufficient content after ${maxRetries} retries - NO ADS ALLOWED`);
          setShouldShowAd(false);
        }
      }
    }, 2000); // Check every 2 seconds

    return () => {
      if (contentCheckInterval.current) {
        clearInterval(contentCheckInterval.current);
      }
    };
  }, [isContentLoaded, recipes, pageType, retryCount, contentCheckPassed]);

  // Reset states when page type changes
  useEffect(() => {
    setRetryCount(0);
    setShouldShowAd(false);
    setIsContentLoaded(false);
    setContentCheckPassed(false);
    
    // Clear any existing interval
    if (contentCheckInterval.current) {
      clearInterval(contentCheckInterval.current);
    }
  }, [pageType]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (contentCheckInterval.current) {
        clearInterval(contentCheckInterval.current);
      }
    };
  }, []);

  // Additional safety check before rendering
  if (!shouldShowAd || !contentCheckPassed) {
    return null;
  }

  // Final validation before rendering ad
  const finalValidation = validatePageForAdSense(pageType) && hasSufficientContent(recipes, pageType);
  if (!finalValidation) {
    console.log(`Final validation failed - NO ADS ALLOWED`);
    return null;
  }

  return (
    <div 
      className={`adsense-container ${className}`}
      style={{ 
        textAlign: 'center', 
        margin: '40px 0', 
        padding: '0 20px', 
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style 
      }}
    >
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1787338664165158"
        data-ad-slot="4974887200"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </div>
  );
};

export default AdSenseAd; 