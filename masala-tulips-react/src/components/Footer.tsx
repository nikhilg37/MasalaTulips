import React from 'react';
import './Footer.css';
import { trackGAEvent, trackGTMEvent } from '../utils/analytics';

const Footer: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    trackGAEvent({
      action: 'click',
      category: 'Social Link',
      label: platform,
    });
    trackGTMEvent('social_link_click', { platform });
  };
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://www.instagram.com/masalatulips/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            onClick={() => handleSocialClick('Instagram')}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://www.youtube.com/@MasalaTulips" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Subscribe to our YouTube channel"
            onClick={() => handleSocialClick('YouTube')}
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a 
            href="https://nl.pinterest.com/masalatulips/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Pinterest"
            onClick={() => handleSocialClick('Pinterest')}
          >
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <p>&copy; 2025 Masala Tulips. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 