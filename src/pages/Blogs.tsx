import React from 'react';
import './Blogs.css';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Coming Soon - Stay tuned for cooking tips, stories, and more!</p>
        </div>
      </div>
      
      <div className="blogs-content">
        <div className="container">
          <div className="coming-soon">
            <div className="coming-soon-content">
              <h2>Our Blog is Under Construction</h2>
              <p>We're working hard to bring you amazing content including:</p>
              <ul>
                <li>Cooking tips and techniques</li>
                <li>Behind-the-scenes stories</li>
                <li>Ingredient spotlights</li>
                <li>Cultural food traditions</li>
                <li>Kitchen hacks and shortcuts</li>
              </ul>
              <p>Follow us on social media to stay updated!</p>
              <div className="social-links-blog">
                <a href="https://www.instagram.com/masalatulips/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.youtube.com/@MasalaTulips" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="https://nl.pinterest.com/masalatulips/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-pinterest"></i> Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 