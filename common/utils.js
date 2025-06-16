/**
 * Common utility functions and main application logic for MasalaTulips
 */

// ===== DOM Manipulation Helpers =====
export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

// ===== Event Handling Helpers =====
export const addEvent = (element, event, handler) => {
    if (element) {
        element.addEventListener(event, handler);
    }
};

// ===== Animation Helpers =====
export const fadeIn = (element, duration = 300) => {
    if (!element) return;
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);
        
        if (progress < duration) {
            window.requestAnimationFrame(animate);
        }
    };
    window.requestAnimationFrame(animate);
};

export const fadeOut = (element, duration = 300) => {
    if (!element) return;
    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = 1 - Math.min(progress / duration, 1);
        
        if (progress < duration) {
            window.requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    };
    window.requestAnimationFrame(animate);
};

// ===== Form Validation Helpers =====
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// ===== Local Storage Helpers =====
export const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    }
};

// ===== Common Components =====
export function loadCommonComponents() {
    console.log('loadCommonComponents called');
    
    // Load navigation
    const navTemplate = getElement('#nav-template');
    console.log('Nav template found:', !!navTemplate);
    const navContainer = getElement('#nav-container');
    console.log('Nav container found:', !!navContainer);
    
    if (navTemplate && navContainer) {
        // Clear any existing content
        navContainer.innerHTML = '';
        const navContent = navTemplate.content.cloneNode(true);
        console.log('Nav content cloned');
        navContainer.appendChild(navContent);
        console.log('Nav content appended');
    }

    // Load footer
    const footerTemplate = getElement('#footer-template');
    console.log('Footer template found:', !!footerTemplate);
    const footerContainer = getElement('#footer-container');
    console.log('Footer container found:', !!footerContainer);
    
    if (footerTemplate && footerContainer) {
        // Clear any existing content
        footerContainer.innerHTML = '';
        const footerContent = footerTemplate.content.cloneNode(true);
        console.log('Footer content cloned');
        footerContainer.appendChild(footerContent);
        console.log('Footer content appended');
    }
}

// ===== Alert System =====
export function showAlert(message, type = 'info') {
    const alertTemplate = getElement('#alert-template');
    const alertContainer = getElement('#alert-container');
    
    if (alertTemplate && alertContainer) {
        const alert = alertTemplate.content.cloneNode(true);
        const alertElement = alert.querySelector('.alert');
        const messageElement = alert.querySelector('.alert-message');
        const closeButton = alert.querySelector('.alert-close');
        
        alertElement.classList.add(`alert-${type}`);
        messageElement.textContent = message;
        
        addEvent(closeButton, 'click', () => {
            fadeOut(alertElement, 300);
            setTimeout(() => alertElement.remove(), 300);
        });
        
        alertContainer.appendChild(alert);
        fadeIn(alertElement, 300);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (alertElement.parentNode) {
                fadeOut(alertElement, 300);
                setTimeout(() => alertElement.remove(), 300);
            }
        }, 5000);
    }
}

// ===== Main Application Logic =====
document.addEventListener('DOMContentLoaded', () => {
    // Load common components
    loadCommonComponents();

    // Navigation
    const burger = getElement('.burger');
    const nav = getElement('.nav-links');
    const navLinks = getElements('.nav-links li');

    // Toggle Navigation
    addEvent(burger, 'click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth Scrolling
    getElements('a[href^="#"]').forEach(anchor => {
        addEvent(anchor, 'click', function (e) {
            e.preventDefault();
            const target = getElement(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });

    // Form Submission
    const contactForm = getElement('#contactForm');
    if (contactForm) {
        addEvent(contactForm, 'submit', (e) => {
            e.preventDefault();
            showAlert('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Animated navigation for Breakfast link
    const breakfastLink = getElement('.categories-list a[href="breakfast.html"]');
    if (breakfastLink) {
        addEvent(breakfastLink, 'click', function(e) {
            // No fade-out on body
        });
    }

    // Recipe cards animation
    const recipeCards = getElements('.recipe-card');
    const featuredGrid = getElement('.featured-grid');
    if (featuredGrid && recipeCards.length > 1) {
        const observerOptions = {
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fadeIn(entry.target);
                }
            });
        }, observerOptions);
        recipeCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    } else if (featuredGrid && recipeCards.length === 1) {
        // On breakfast.html, ensure the single card is always visible
        recipeCards[0].style.opacity = '1';
        recipeCards[0].style.transform = 'none';
        recipeCards[0].style.transition = 'none';
    }
}); 