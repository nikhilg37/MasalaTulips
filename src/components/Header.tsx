import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" className="logo-icon-link" aria-label="Go to home page">
            <div className="logo-icon">
              <div className="tulip">
                <div className="tulip-petal" style={{ '--rotation': '-30deg' } as React.CSSProperties}></div>
                <div className="tulip-petal" style={{ '--rotation': '30deg' } as React.CSSProperties}></div>
                <div className="tulip-petal" style={{ '--rotation': '90deg' } as React.CSSProperties}></div>
                <div className="tulip-stem"></div>
              </div>
              <div className="spice"></div>
            </div>
          </Link>
          <div className="logo-text-container">
            <div className="logo-text">Masala Tulips</div>
          </div>
        </div>
        
        <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
          <li className="nav-panel-header">
            <span>Menu</span>
            <span id="close-nav" onClick={closeNav}>&times;</span>
          </li>
          <li>
            <Link to="/" onClick={closeNav} className={isActive('/') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
          <li>
            <Link to="/recipe-categories" onClick={closeNav} className={isActive('/recipe-categories') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-utensils"></i>
                <span>Recipes</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeNav} className={isActive('/blogs') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-blog"></i>
                <span>Blogs</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
          <li>
            <a href="/#about" onClick={closeNav}>
              <div className="nav-item-left">
                <i className="fas fa-info-circle"></i>
                <span>About</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={closeNav}>
              <div className="nav-item-left">
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
        
        <div className={`burger ${isNavActive ? 'toggle' : ''}`} onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 