import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
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

  const handleEmailClick = () => {
    trackGAEvent({
      action: 'click',
      category: 'Contact',
      label: 'Email',
    });
    trackGTMEvent('email_click', { location: 'Footer' });
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
          <a 
            href="mailto:masalatulips27@gmail.com"
            aria-label="Send us an email"
            onClick={handleEmailClick}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>&copy; 2025 Masala Tulips. All rights reserved.</p>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="separator">|</span>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 