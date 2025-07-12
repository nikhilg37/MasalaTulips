import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const location = useLocation();

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    closeNav();
    
    // Update the current hash state immediately for highlighting
    setCurrentHash(`#${hash}`);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${hash}`;
      return;
    }
    
    // If we're already on home page, scroll to the section and update hash
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Update the URL hash
      window.history.pushState(null, '', `/#${hash}`);
    }
  };

  const isActive = (href: string) => {
    const currentPath = location.pathname;
    const hash = currentHash || location.hash;
    
    // Home
    if (href === '/#home' && (currentPath === '/' || currentPath === '/masala-tulips-react') && (!hash || hash === '#home')) {
      return true;
    }
    // Recipes (main, subpages, and all recipe detail pages)
    else if (href === '/recipe-categories' && (
      currentPath === '/recipe-categories' ||
      currentPath.includes('/recipes/') ||
      currentPath.includes('/recipe/')
    )) {
      return true;
    }
    // Blogs
    else if (href === '/blogs' && currentPath === '/blogs') {
      return true;
    }
    // About
    else if (href === '/#about' && hash === '#about') {
      return true;
    }
    // Contact
    else if (href === '/#contact' && hash === '#contact') {
      return true;
    }
    
    return false;
  };

  // Add/remove body class for mobile navigation and handle outside clicks
  useEffect(() => {
    if (isNavActive) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }

    // Handle clicking outside to close navigation
    const handleOutsideClick = (e: MouseEvent) => {
      const nav = document.querySelector('.nav-links');
      const burger = document.querySelector('.burger');
      
      if (isNavActive && nav && burger) {
        if (!nav.contains(e.target as Node) && !burger.contains(e.target as Node)) {
          closeNav();
        }
      }
    };

    // Add event listener when navigation is active
    if (isNavActive) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Cleanup on unmount or when nav becomes inactive
    return () => {
      document.body.classList.remove('nav-active');
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isNavActive]);

  // Handle hash scrolling on page load and hash changes
  useEffect(() => {
    // Initialize current hash state
    setCurrentHash(location.hash);

    const handleHashScroll = () => {
      const hash = location.hash.replace('#', '');
      if (hash && location.pathname === '/') {
        const element = document.getElementById(hash);
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes
    const handleHashChange = () => {
      setCurrentHash(location.hash);
      handleHashScroll();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location.hash, location.pathname]);

  // Handle scroll-based hash updates for highlighting
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            // Update hash if it's different
            if (location.hash !== `#${section}`) {
              window.history.replaceState(null, '', `/#${section}`);
            }
            // Update the current hash state for highlighting
            setCurrentHash(`#${section}`);
            break;
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [location.pathname]);



  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" className="logo-icon-link" aria-label="Go to home page" onClick={() => location.pathname === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
            <a href="/#home" onClick={(e) => handleHashClick(e, 'home')} className={isActive('/#home') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="/recipe-categories" onClick={closeNav} className={isActive('/recipe-categories') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-utensils"></i>
                <span>Recipes</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="/blogs" onClick={closeNav} className={isActive('/blogs') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-blog"></i>
                <span>Blogs</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={(e) => handleHashClick(e, 'about')} className={isActive('/#about') ? 'active' : ''}>
              <div className="nav-item-left">
                <i className="fas fa-info-circle"></i>
                <span>About</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={(e) => handleHashClick(e, 'contact')} className={isActive('/#contact') ? 'active' : ''}>
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