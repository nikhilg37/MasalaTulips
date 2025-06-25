console.log('Script loaded and running on', window.location.pathname);

document.addEventListener('DOMContentLoaded', () => {
    // Function declaration for setMainPadding (hoisted)
    function setMainPadding() {
        const header = document.querySelector('header') || document.querySelector('#header-placeholder header');
        const main = document.querySelector('main');
        if (header && main) {
            main.style.paddingTop = `${header.offsetHeight}px`;
        }
    }

    // Global function to close navigation
    function closeNav() {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        if (nav && burger) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.classList.remove('nav-active');
            const navLinks = document.querySelectorAll('.nav-links li');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    }

    // Function to set up header-dependent event listeners
    function setupHeaderEventListeners() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        if (!burger || !nav) return;

        // Toggle Navigation
        burger.addEventListener('click', () => {
            document.body.classList.toggle('nav-active');
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });

        // Event listeners for closing the nav
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'close-nav') {
                closeNav();
            } else if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burger.contains(e.target)) {
                closeNav();
            }
        });
    }

    // Function to set active navigation state
    function setActiveNavigation() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;

            // Remove any existing active class
            link.classList.remove('active');

            // Home
            if (
                (href.endsWith('index.html#home') && (currentPath === '/' || currentPath.endsWith('index.html')) && (!currentHash || currentHash === '#home')) ||
                (href.endsWith('../index.html#home') && (currentPath === '/' || currentPath.endsWith('index.html')) && (!currentHash || currentHash === '#home'))
            ) {
                link.classList.add('active');
            }
            // Recipes (main, subpages, and all recipe detail pages)
            else if (
                href.endsWith('recipeCategories.html') &&
                (
                    currentPath.endsWith('recipeCategories.html') ||
                    currentPath.includes('/recipesByPopularCategories/') ||
                    currentPath.includes('/recipesByMealType/') ||
                    currentPath.includes('/recipesByCookingTime/') ||
                    currentPath.includes('/recipePage/')
                )
            ) {
                link.classList.add('active');
            }
            // Blogs
            else if (
                (href.endsWith('index.html#blogs') && currentHash === '#blogs') ||
                (href.endsWith('../index.html#blogs') && currentHash === '#blogs') ||
                (href.endsWith('blogs.html') && currentPath.endsWith('blogs.html')) ||
                (href.endsWith('../blogs.html') && currentPath.endsWith('blogs.html'))
            ) {
                link.classList.add('active');
            }
            // About
            else if (
                (href.endsWith('index.html#about') && currentHash === '#about') ||
                (href.endsWith('../index.html#about') && currentHash === '#about')
            ) {
                link.classList.add('active');
            }
            // Contact
            else if (
                (href.endsWith('index.html#contact') && currentHash === '#contact') ||
                (href.endsWith('../index.html#contact') && currentHash === '#contact')
            ) {
                link.classList.add('active');
            }
        });
    }

    // Helper: Call setMainPadding multiple times after header insertion
    function robustSetMainPadding() {
        setMainPadding();
        setTimeout(setMainPadding, 100);
        setTimeout(setMainPadding, 300);
        setTimeout(setMainPadding, 600);
        setTimeout(setMainPadding, 1000);
    }

    // Detect base path for GitHub Pages or local
    const basePath = window.location.pathname.includes('/MasalaTulips/') ? '/MasalaTulips' : '';

    // Load Header
    const loadHeader = async () => {
        try {
            console.log('Attempting to load header from:', `${basePath}/common/header-root.html`);
            const response = await fetch(`${basePath}/common/header-root.html`);
            const headerHtml = await response.text();
            const placeholder = document.getElementById('header-placeholder');
            if (placeholder) {
                placeholder.innerHTML = headerHtml;
                console.log('Header loaded and inserted!');
                robustSetMainPadding();
                setupHeaderEventListeners();
                setTimeout(setActiveNavigation, 100);
                setTimeout(setupNavigationLinks, 150);
                setTimeout(scrollToHashIfPresent, 200);
            } else {
                console.log('Header placeholder not found!');
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    };

    // Load header for root level pages
    if (
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('recipeCategories.html') ||
        window.location.pathname.endsWith('blogs.html')
    ) {
        loadHeader();
    }

    // Load header for subdirectory pages
    if (window.location.pathname.includes('/recipePage/') || 
        window.location.pathname.includes('/recipesByPopularCategories/') ||
        window.location.pathname.includes('/recipesByMealType/') ||
        window.location.pathname.includes('/recipesByCookingTime/')) {
        const loadHeaderSubdir = async () => {
            try {
                const response = await fetch(`${basePath}/common/header-subdir.html`);
                const headerHtml = await response.text();
                const placeholder = document.getElementById('header-placeholder');
                if (placeholder) {
                    placeholder.innerHTML = headerHtml;
                    robustSetMainPadding();
                    setupHeaderEventListeners();
                    setTimeout(setActiveNavigation, 100);
                    setTimeout(setupNavigationLinks, 150);
                    setTimeout(scrollToHashIfPresent, 200);
                }
            } catch (error) {
                console.error('Error loading header:', error);
            }
        };
        loadHeaderSubdir();
    }

    // Load Footer
    const loadFooter = async () => {
        try {
            console.log('Attempting to load footer from:', `${basePath}/common/footer.html`);
            const response = await fetch(`${basePath}/common/footer.html`);
            const footerHtml = await response.text();
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = footerHtml;
                console.log('Footer loaded and inserted!');
            } else {
                console.log('Footer placeholder not found!');
            }
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    };

    // Load footer for root level pages
    if (
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('recipeCategories.html') ||
        window.location.pathname.endsWith('blogs.html')
    ) {
        loadFooter();
    }

    // Load footer for subdirectory pages
    if (window.location.pathname.includes('/recipePage/') || 
        window.location.pathname.includes('/recipesByPopularCategories/') ||
        window.location.pathname.includes('/recipesByMealType/') ||
        window.location.pathname.includes('/recipesByCookingTime/')) {
        const loadFooterSubdir = async () => {
            try {
                const response = await fetch(`${basePath}/common/footer.html`);
                const footerHtml = await response.text();
                const placeholder = document.getElementById('footer-placeholder');
                if (placeholder) {
                    placeholder.innerHTML = footerHtml;
                }
            } catch (error) {
                console.error('Error loading footer:', error);
            }
        };
        loadFooterSubdir();
    }

    // Function to set up navigation link event listeners
    function setupNavigationLinks() {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.includes('#')) {
                    // Extract the hash part
                    const hashIndex = href.indexOf('#');
                    const hash = href.substring(hashIndex);
                    const target = document.querySelector(hash);
                    // Only prevent default if the target exists on this page
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        window.location.hash = hash;
                        closeNav();
                    } else {
                        // If the target doesn't exist, let the browser handle navigation (could be a different page)
                        closeNav();
                    }
                } else {
                    // For normal links (like Recipes), just close the menu and let navigation happen
                    closeNav();
                }
            });
        });
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Animated navigation for Breakfast link (remove fade-out from body)
    const breakfastLink = document.querySelector('.categories-list a[href="breakfast.html"]');
    if (breakfastLink) {
        breakfastLink.addEventListener('click', function(e) {
            // No fade-out on body
        });
    }

    // Only animate recipe cards if there are multiple cards (not on breakfast.html)
    const recipeCards = document.querySelectorAll('.recipe-card');
    const featuredGrid = document.querySelector('.featured-grid');
    if (featuredGrid && recipeCards.length > 1) {
        const observerOptions = {
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
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

    // Remove fade-out animation for Mavinakaayi Chitranna card
    // No special click handler needed, default link behavior

    // Call setMainPadding on window load (after all resources, images, fonts)
    window.addEventListener('load', setMainPadding);
    
    // Set active navigation state for existing headers
    setTimeout(setActiveNavigation, 100);
    
    // Update active navigation when hash changes (for anchor links)
    window.addEventListener('hashchange', () => {
        setTimeout(setActiveNavigation, 100);
    });

    function scrollToHashIfPresent() {
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
}); 