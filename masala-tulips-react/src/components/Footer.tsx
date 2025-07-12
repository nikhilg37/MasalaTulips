import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://www.instagram.com/masalatulips/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://www.youtube.com/@MasalaTulips" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Subscribe to our YouTube channel"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a 
            href="https://nl.pinterest.com/masalatulips/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Pinterest"
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