import React, { useState, useEffect } from 'react';
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
  const maxRetries = 3;

  useEffect(() => {
    // Wait for content to be fully loaded with progressive delays
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 3000); // Increased to 3 seconds for better content loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isContentLoaded) return;

    // Log content statistics for debugging
    logContentStats(pageType, recipes);

    // First validate the page for AdSense compliance
    const isValidForAdSense = validatePageForAdSense(pageType);
    if (!isValidForAdSense) {
      console.log(`Page not valid for AdSense: ${pageType}`);
      setShouldShowAd(false);
      return;
    }

    // Check if there's sufficient content
    const hasContent = hasSufficientContent(recipes, pageType);
    
    if (hasContent) {
      setShouldShowAd(true);
      console.log(`Ad will be shown on ${pageType} page: sufficient content detected`);
    } else {
      // Retry logic for content checking
      if (retryCount < maxRetries) {
        console.log(`Content check failed, retrying... (${retryCount + 1}/${maxRetries})`);
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
        }, 2000); // Wait 2 seconds before retry
      } else {
        console.log(`Ad not shown on ${pageType} page: insufficient content after ${maxRetries} retries`);
        setShouldShowAd(false);
      }
    }
  }, [isContentLoaded, recipes, pageType, retryCount]);

  // Reset retry count when page type changes
  useEffect(() => {
    setRetryCount(0);
    setShouldShowAd(false);
    setIsContentLoaded(false);
  }, [pageType]);

  if (!shouldShowAd) {
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