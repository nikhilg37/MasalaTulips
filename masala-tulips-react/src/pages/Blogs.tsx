import React, { useEffect } from 'react';
import '../styles/Blogs.css';

const Blogs: React.FC = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Food Around the World - International Cuisine Blog | Masala Tulips';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore authentic international cuisine from around the world. Discover European breakfasts, Dutch comfort food, Italian focaccia, and more. Food photography, restaurant reviews, and culinary adventures.');
    }

    // Add structured data for the blog page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Food Around the World - Masala Tulips",
      "description": "Explore authentic international cuisine from around the world. Discover European breakfasts, Dutch comfort food, Italian focaccia, and more. Food photography, restaurant reviews, and culinary adventures.",
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "Masala Tulips",
        "logo": {
          "@type": "ImageObject",
          "url": "https://masalatulips.com/socialMediaLogo/social-media-logo-square.jpg"
        }
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Continental Breakfast: A European Morning Classic",
          "description": "The continental breakfast is a light, elegant morning meal enjoyed across Europe. Featuring flaky croissants, crusty baguette, creamy butter, fruit preserves, a selection of cheeses, and fresh fruit, it's typically served with a hot cup of coffee.",
          "image": "https://masalatulips.com/images/blogs/Continental_Belgium.jpeg",
          "author": {
            "@type": "Person",
            "name": "Masala Tulips"
          },
          "datePublished": "2024-01-01",
          "location": {
            "@type": "Place",
            "name": "Antwerp, Belgium"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "Burger & Fries: The Classic Comfort Combo",
          "description": "Burger and fries is a beloved comfort food enjoyed around the world. This classic combo features a juicy veggie burger stacked with fresh toppings and served alongside crispy golden fries.",
          "image": "https://masalatulips.com/images/blogs/Burger-Fries-BurgerBar.jpeg",
          "author": {
            "@type": "Person",
            "name": "Masala Tulips"
          },
          "datePublished": "2024-01-01",
          "location": {
            "@type": "Place",
            "name": "Amsterdam, The Netherlands"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "Gebakken Champignons: Dutch-Style Sautéed Mushrooms",
          "description": "Gebakken champignons are a classic Dutch appetizer or side dish featuring mushrooms sautéed in butter with garlic and fresh herbs. Served hot, often with a squeeze of lemon and a sprinkle of parsley.",
          "image": "https://masalatulips.com/images/blogs/focaccia.jpeg",
          "author": {
            "@type": "Person",
            "name": "Masala Tulips"
          },
          "datePublished": "2024-01-01",
          "location": {
            "@type": "Place",
            "name": "Almere, The Netherlands"
          }
        }
      ]
    };

    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[data-structured-data="blogs"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'blogs');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-structured-data="blogs"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="blogs-page">
      <section className="recipes-hero">
        <h1>Food Around the World - International Cuisine Blog</h1>
        <p>Explore authentic international cuisine from around the world. Discover European breakfasts, Dutch comfort food, Italian focaccia, and more. Food photography, restaurant reviews, and culinary adventures.</p>
      </section>
      
      <section className="featured-recipes">
        <div className="container">
          <div className="categories-grid">
            {/* Continental Breakfast Blog */}
            <div className="category-card">
              <img 
                src="/images/blogs/Continental_Belgium.jpeg" 
                alt="Continental Breakfast - European Morning Classic with Croissants and Coffee" 
                className="recipe-image"
              />
              <div className="category-content">
                <div className="location-badge">
                  <i className="fas fa-map-marker-alt"></i>
                  Antwerp, Belgium
                </div>
                <h3>Continental Breakfast: A European Morning Classic</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Restaurant:</span>
                  <div className="restaurant-text">
                    Hampton by Hilton
                  </div>
                </div>
                <div className="ingredients-section">
                  <span className="ingredients-label">Ingredients:</span>
                  <div className="ingredients-text">
                    Croissants, Baguette, Butter, Jam, Cheese, Fresh Fruit, Eggs, Omelette, Coffee
                  </div>
                </div>

                <p className="description">The continental breakfast is a light, elegant morning meal enjoyed across Europe. Featuring flaky croissants, crusty baguette, creamy butter, fruit preserves, a selection of cheeses, and fresh fruit, it's typically served with a hot cup of coffee. This breakfast is perfect for a leisurely start to the day, offering a taste of European café culture at home. Discover the authentic flavors and traditions of European morning cuisine.</p>
              </div>
            </div>
            
            {/* Burger and Fries Blog */}
            <div className="category-card">
              <img 
                src="/images/blogs/Burger-Fries-BurgerBar.jpeg" 
                alt="Burger and Fries - Classic Comfort Food Combo with Veggie Patty and Golden Fries" 
                className="recipe-image"
              />
              <div className="category-content">
                <div className="location-badge">
                  <i className="fas fa-map-marker-alt"></i>
                  Amsterdam, The Netherlands
                </div>
                <h3>Burger & Fries: The Classic Comfort Combo</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Restaurant:</span>
                  <div className="restaurant-text">
                    Burger Bar
                  </div>
                </div>
                <div className="ingredients-section">
                  <span className="ingredients-label">Ingredients:</span>
                  <div className="ingredients-text">
                    Burger Bun, Veggie Patty, Lettuce, Tomato, Cheese, Pickles, Eggs, Fries, Ketchup, Mayo
                  </div>
                </div>
                <p className="description">Burger and fries is a beloved comfort food enjoyed around the world. This classic combo features a juicy veggie burger stacked with fresh toppings and served alongside crispy golden fries. Whether at a local burger bar or homemade, it's a satisfying meal perfect for lunch, dinner, or a weekend treat. Experience the ultimate comfort food combination that has captured hearts globally.</p>
              </div>
            </div>

            {/* Focaccia Blog */}
            <div className="category-card">
              <img 
                src="/images/blogs/focaccia.jpeg" 
                alt="Dutch-Style Sautéed Mushrooms with Focaccia Bread - Gebakken Champignons" 
                className="recipe-image"
              />
              <div className="category-content">
                <div className="location-badge">
                  <i className="fas fa-map-marker-alt"></i>
                  Almere, The Netherlands
                </div>
                <h3>Gebakken Champignons: Dutch-Style Sautéed Mushrooms</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Restaurant:</span>
                  <div className="restaurant-text">
                    Woodstone Pizza
                  </div>
                </div>
                <div className="ingredients-section">
                  <span className="ingredients-label">Ingredients:</span>
                  <div className="ingredients-text">
                    Mushrooms, Butter, Garlic, Parsley, Red Onion, Truffle Sauce, Fior de latte mozzarella, Cheddar, Cheese, Chives, Black Pepper, Lemon Juice, Fresh focaccia
                  </div>
                </div>
                <p className="description">Gebakken champignons are a classic Dutch appetizer or side dish featuring mushrooms sautéed in butter with garlic and fresh herbs. Served hot, often with a squeeze of lemon and a sprinkle of parsley, these mushrooms are rich, savory, and perfect served with focaccia bread. A favorite in Dutch bistros and at home, they make a delicious vegetarian treat. Discover authentic Dutch cuisine and traditional cooking methods.</p>
              </div>
            </div>

            {/* More Food Stories */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Coming+Soon" 
                alt="More Food Stories Coming Soon - International Cuisine Adventures" 
                className="recipe-image"
              />
              <div className="category-content">
                <div className="location-badge">
                  <i className="fas fa-globe"></i>
                  Around the World
                </div>
                <h3>More Food Stories - International Cuisine Adventures</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Coming Soon:</span>
                  <div className="restaurant-text">
                    More delicious food adventures
                  </div>
                </div>
                <p className="description">We're constantly exploring new cuisines and cultures to bring you authentic food experiences from around the world. Stay tuned for more culinary journeys, cooking tips, and cultural insights that will inspire your next kitchen adventure. From street food to fine dining, discover the diverse flavors and traditions that make global cuisine so fascinating.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 