document.addEventListener('DOMContentLoaded', () => {
    // Load Footer
    const loadFooter = async () => {
        try {
            const response = await fetch('common/footer.html');
            const footerHtml = await response.text();
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = footerHtml;
            }
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    };

    // Load footer for root level pages
    if (window.location.pathname === '/' || 
        window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('recipes.html')) {
        loadFooter();
    }

    // Load footer for subdirectory pages
    if (window.location.pathname.includes('/allRecipes/') || 
        window.location.pathname.includes('/recipesByPopularCategories/') ||
        window.location.pathname.includes('/recipesByMealType/') ||
        window.location.pathname.includes('/recipesByCookingTime/')) {
        const loadFooterSubdir = async () => {
            try {
                const response = await fetch('../common/footer.html');
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

    // Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const closeNav = () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        document.body.classList.remove('nav-active');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    };

    // Toggle Navigation
    burger.addEventListener('click', () => {
        document.body.classList.toggle('nav-active');
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

    const setMainPadding = () => {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        if (header && main) {
            main.style.paddingTop = `${header.offsetHeight}px`;
        }
    };

    window.addEventListener('load', setMainPadding);
    window.addEventListener('resize', setMainPadding);

    // Event listeners for closing the nav
    document.addEventListener('click', (e) => {
        // Close with the X button inside the panel
        if (e.target && e.target.id === 'close-nav') {
            closeNav();
        }
        
        // Close by clicking outside the panel
        else if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            closeNav();
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (nav.classList.contains('nav-active')) {
                    closeNav();
                }
            }
        });
    });

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
}); 