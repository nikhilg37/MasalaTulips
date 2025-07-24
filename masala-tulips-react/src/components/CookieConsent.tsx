import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CookieConsent.css';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    // Disable Google Analytics and AdSense
    if (window.gtag) {
      window.gtag('config', 'G-M4MFC31C3Z', {
        'anonymize_ip': true,
        'allow_google_signals': false,
        'allow_ad_personalization_signals': false
      });
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 We Use Cookies</h3>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, 
            and personalize content and advertisements. By clicking "Accept All", you 
            consent to our use of cookies for analytics and advertising purposes. 
            You can learn more in our{' '}
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="cookie-buttons">
          <button 
            className="cookie-btn decline-btn" 
            onClick={declineCookies}
          >
            Decline
          </button>
          <button 
            className="cookie-btn accept-btn" 
            onClick={acceptCookies}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 