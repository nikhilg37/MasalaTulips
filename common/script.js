// Function to initialize the page
function initializePage() {
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
                (href.endsWith('/#home') && (currentPath === '/' || currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '/MasalaTulips/') && (!currentHash || currentHash === '#home')) ||
                (href.endsWith('../#home') && (currentPath === '/' || currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '/MasalaTulips/') && (!currentHash || currentHash === '#home'))
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
                (href.endsWith('/#blogs') && currentHash === '#blogs') ||
                (href.endsWith('../#blogs') && currentHash === '#blogs') ||
                (href.endsWith('blogs.html') && currentPath.endsWith('blogs.html')) ||
                (href.endsWith('../blogs.html') && currentPath.endsWith('blogs.html'))
            ) {
                link.classList.add('active');
            }
            // About
            else if (
                (href.endsWith('/#about') && currentHash === '#about') ||
                (href.endsWith('../#about') && currentHash === '#about')
            ) {
                link.classList.add('active');
            }
            // Contact
            else if (
                (href.endsWith('/#contact') && currentHash === '#contact') ||
                (href.endsWith('../#contact') && currentHash === '#contact')
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

    // Helper function to try multiple path variations
    const tryLoadContent = async (paths, contentType) => {
        for (const path of paths) {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    const content = await response.text();
                    const placeholder = document.getElementById(`${contentType}-placeholder`);
                    if (placeholder) {
                        placeholder.innerHTML = content;
                        return true;
                    }
                }
            } catch (error) {
            }
        }
        return false;
    };

    // Detect base path for GitHub Pages or local
    const basePath = (() => {
        const pathname = window.location.pathname;
        const hostname = window.location.hostname;
        
        // Check if we're on the custom domain
        if (hostname === 'masalatulips.nl' || hostname === 'www.masalatulips.nl') {
            return '';
        }
        
        // Check if we're on GitHub Pages with repository name
        if (pathname.includes('/MasalaTulips')) {
            return '/MasalaTulips';
        }
        
        // Check if we're on GitHub Pages root (custom domain or username.github.io)
        if (pathname === '/' || pathname.endsWith('index.html')) {
            return '';
        }
        
        // Default case
        return '';
    })();

    // Load Header
    const loadHeader = async () => {
        const headerPaths = [
            `${basePath}/common/header-root.html`,
            '/common/header-root.html',
            './common/header-root.html',
            '../common/header-root.html'
        ];
        
        const success = await tryLoadContent(headerPaths, 'header');
        if (success) {
            robustSetMainPadding();
            setupHeaderEventListeners();
            setTimeout(setActiveNavigation, 100);
            setTimeout(setupNavigationLinks, 150);
            setTimeout(scrollToHashIfPresent, 200);
        } else {
            // Retry after a short delay
            setTimeout(async () => {
                const retrySuccess = await tryLoadContent(headerPaths, 'header');
                if (retrySuccess) {
                    robustSetMainPadding();
                    setupHeaderEventListeners();
                    setTimeout(setActiveNavigation, 100);
                    setTimeout(setupNavigationLinks, 150);
                    setTimeout(scrollToHashIfPresent, 200);
                }
            }, 500);
        }
    };

    // Load header for root level pages
    if (
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('/') ||
        window.location.pathname === '/MasalaTulips/' ||
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
            const headerPaths = [
                `${basePath}/common/header-subdir.html`,
                '/common/header-subdir.html',
                '../common/header-subdir.html',
                '../../common/header-subdir.html'
            ];
            
            const success = await tryLoadContent(headerPaths, 'header');
            if (success) {
                robustSetMainPadding();
                setupHeaderEventListeners();
                setTimeout(setActiveNavigation, 100);
                setTimeout(setupNavigationLinks, 150);
                setTimeout(scrollToHashIfPresent, 200);
            } else {
                // Retry after a short delay
                setTimeout(async () => {
                    const retrySuccess = await tryLoadContent(headerPaths, 'header');
                    if (retrySuccess) {
                        robustSetMainPadding();
                        setupHeaderEventListeners();
                        setTimeout(setActiveNavigation, 100);
                        setTimeout(setupNavigationLinks, 150);
                        setTimeout(scrollToHashIfPresent, 200);
                    }
                }, 500);
            }
        };
        loadHeaderSubdir();
    }

    // Load Footer
    const loadFooter = async () => {
        const footerPaths = [
            `${basePath}/common/footer.html`,
            '/common/footer.html',
            './common/footer.html',
            '../common/footer.html'
        ];
        
        await tryLoadContent(footerPaths, 'footer');
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
            const footerPaths = [
                `${basePath}/common/footer.html`,
                '/common/footer.html',
                '../common/footer.html',
                '../../common/footer.html'
            ];
            
            await tryLoadContent(footerPaths, 'footer');
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
                        // Update active navigation state after hash change
                        setTimeout(setActiveNavigation, 100);
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
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // Function to scroll to hash if present in URL
    function scrollToHashIfPresent() {
        const hash = window.location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        }
    }

    // Listen for hash changes to update navigation state
    window.addEventListener('hashchange', () => {
        setTimeout(setActiveNavigation, 100);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    // DOM is already loaded
    initializePage();
}

// Also initialize when window loads (backup)
window.addEventListener('load', () => {
    const header = document.querySelector('#header-placeholder header');
    if (!header) {
        initializePage();
    }
}); 