import React, { useState, useEffect } from 'react';
import { hasSufficientContent } from '../utils/analytics';

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

  useEffect(() => {
    // Wait for content to be fully loaded
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 2000); // Wait 2 seconds for content to load

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isContentLoaded) return;

    // Check if there's sufficient content
    const hasContent = hasSufficientContent(recipes, pageType);
    setShouldShowAd(hasContent);

    if (!hasContent) {
      console.log(`Ad not shown on ${pageType} page: insufficient content`);
    }
  }, [isContentLoaded, recipes, pageType]);

  if (!shouldShowAd) {
    return null;
  }

  return (
    <div 
      className={`adsense-container ${className}`}
      style={{ textAlign: 'center', margin: '40px 0', padding: '0 20px', ...style }}
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