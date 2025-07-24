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
          "url": "https://masalatulips.nl/logo192.png"
        }
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Continental Breakfast: A European Morning Classic",
          "description": "The continental breakfast is a light, elegant morning meal enjoyed across Europe. Featuring flaky croissants, crusty baguette, creamy butter, fruit preserves, a selection of cheeses, and fresh fruit, it's typically served with a hot cup of coffee.",
          "image": "https://masalatulips.nl/images/blogs/Continental_Belgium.jpeg",
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
          "image": "https://masalatulips.nl/images/blogs/Burger-Fries-BurgerBar.jpeg",
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
          "image": "https://masalatulips.nl/images/blogs/focaccia.jpeg",
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
            <div className="blog-card">
              <img 
                src="/images/blogs/Continental_Belgium.jpeg" 
                alt="Continental Breakfast - European Morning Classic with Croissants and Coffee" 
                className="blog-image"
              />
              <div className="blog-content">
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
                <div className="contents-section">
                  <span className="contents-label">Contents:</span>
                  <div className="contents-text">
                    Croissants, Baguette, Butter, Jam, Cheese, Fresh Fruit, Eggs, Omelette, Coffee
                  </div>
                </div>

                <p className="description">The continental breakfast is a light, elegant morning meal enjoyed across Europe. Featuring flaky croissants, crusty baguette, creamy butter, fruit preserves, a selection of cheeses, and fresh fruit, it's typically served with a hot cup of coffee. This breakfast is perfect for a leisurely start to the day, offering a taste of European café culture at home. Discover the authentic flavors and traditions of European morning cuisine.</p>
              </div>
            </div>
            
            {/* Burger and Fries Blog */}
            <div className="blog-card">
              <img 
                src="/images/blogs/Burger-Fries-BurgerBar.jpeg" 
                alt="Burger and Fries - Classic Comfort Food Combo with Veggie Patty and Golden Fries" 
                className="blog-image"
              />
              <div className="blog-content">
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
                <div className="contents-section">
                  <span className="contents-label">Contents:</span>
                  <div className="contents-text">
                    Burger Bun, Veggie Patty, Lettuce, Tomato, Cheese, Pickles, Eggs, Fries, Ketchup, Mayo
                  </div>
                </div>

                <p className="description">Burger and fries is a beloved comfort food enjoyed around the world. This classic combo features a juicy veggie burger stacked with fresh toppings and served alongside crispy golden fries. Whether at a local burger bar or homemade, it's a satisfying meal perfect for lunch, dinner, or a weekend treat. Experience the ultimate comfort food combination that has captured hearts globally.</p>
              </div>
            </div>

            {/* Focaccia Blog */}
            <div className="blog-card">
              <img 
                src="/images/blogs/focaccia.jpeg" 
                alt="Dutch-Style Sautéed Mushrooms with Focaccia Bread - Gebakken Champignons" 
                className="blog-image"
              />
              <div className="blog-content">
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
                <div className="contents-section">
                  <span className="contents-label">Contents:</span>
                  <div className="contents-text">
                    Mushrooms, Butter, Garlic, Parsley, Red Onion, Truffle Sauce, Fior de latte mozzarella, Cheddar, Cheese, Chives, Black Pepper, Lemon Juice, Fresh focaccia
                  </div>
                </div>

                <p className="description">Gebakken champignons are a classic Dutch appetizer or side dish featuring mushrooms sautéed in butter with garlic and fresh herbs. Served hot, often with a squeeze of lemon and a sprinkle of parsley, these mushrooms are rich, savory, and perfect served with focaccia bread. A favorite in Dutch bistros and at home, they make a delicious vegetarian treat. Discover authentic Dutch cuisine and traditional cooking methods.</p>
              </div>
            </div>

            {/* Jalapeño Fries Blog */}
            <div className="blog-card">
              <img 
                src="/images/blogs/Sticky_Cheesy_Jalepeno_Fries.jpeg" 
                alt="Sticky Cheesy Jalapeño Fries - Spicy and Cheesy Comfort Food" 
                className="blog-image"
              />
              <div className="blog-content">
                <div className="location-badge">
                  <i className="fas fa-map-marker-alt"></i>
                  Amsterdam, The Netherlands
                </div>
                <h3>CHEESY JALAPEÑO FRIES</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Restaurant:</span>
                  <div className="restaurant-text">
                    Burger Bar
                  </div>
                </div>
                <div className="contents-section">
                  <span className="contents-label">Contents:</span>
                  <div className="contents-text">
                    French Fries, Jalapeños, Cheese Sauce, Spicy Mayo, Green Onions, Cilantro, Hot Sauce, Garlic Powder, Paprika, Salt, Pepper
                  </div>
                </div>

                <p className="description">Sticky cheesy jalapeño fries are the ultimate comfort food with a spicy kick! Crispy golden fries topped with melted cheese sauce, fresh jalapeños, and a drizzle of spicy mayo. This indulgent snack combines the perfect balance of heat, creaminess, and crunch. Perfect for sharing with friends or enjoying as a satisfying treat. Experience the bold flavors and textures that make these fries a favorite among spice lovers.</p>
              </div>
            </div>

            {/* Egg Fried Rice Blog */}
            <div className="blog-card">
              <img 
                src="/images/blogs/egg_fried_rice.jpeg" 
                alt="Egg Fried Rice - Classic Chinese Comfort Food" 
                className="blog-image"
              />
              <div className="blog-content">
                <div className="location-badge">
                  <i className="fas fa-map-marker-alt"></i>
                  Almere, The Netherlands
                </div>
                <h3>EGG FRIED RICE</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Restaurant:</span>
                  <div className="restaurant-text">
                    Rasamayi
                  </div>
                </div>
                <div className="contents-section">
                  <span className="contents-label">Contents:</span>
                  <div className="contents-text">
                    Cooked Rice, Eggs, Soy Sauce, Sesame Oil, Green Onions, Carrots, Peas, Garlic, Ginger, Vegetable Oil, Salt, Black Pepper
                  </div>
                </div>

                <p className="description">Egg fried rice is a classic Chinese comfort food that's quick, delicious, and perfect for using up leftover rice. This simple yet flavorful dish features fluffy scrambled eggs, tender vegetables, and aromatic seasonings all tossed together with perfectly cooked rice. The combination of soy sauce, sesame oil, and fresh vegetables creates a satisfying meal that's both nutritious and comforting. A staple in Chinese cuisine that's loved worldwide.</p>
              </div>
            </div>

            {/* Veg Biryani Blog */}
            <div className="blog-card">
              <img 
                src="/images/blogs/mix_veg_biryani.jpeg" 
                alt="Veg Biryani - Aromatic Indian Rice Dish" 
                className="blog-image"
              />
              <div className="blog-content">
                <div className="location-badge">
                  <i className="fas fa-map-marker-alt"></i>
                  Almere, The Netherlands
                </div>
                <h3>VEG BIRYANI</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Restaurant:</span>
                  <div className="restaurant-text">
                    Rasamayi
                  </div>
                </div>
                <div className="contents-section">
                  <span className="contents-label">Contents:</span>
                  <div className="contents-text">
                    Basmati Rice, Mixed Vegetables, Onions, Tomatoes, Yogurt, Biryani Masala, Saffron, Ghee, Whole Spices, Mint Leaves, Coriander Leaves, Fried Onions, Cashews, Raisins, Cardamom, Cinnamon, Bay Leaves
                  </div>
                </div>

                <p className="description">Veg Biryani is a fragrant and flavorful Indian rice dish that's a celebration of aromatic spices and fresh vegetables. This vegetarian version features layers of perfectly cooked basmati rice, tender vegetables, and a rich blend of spices including saffron, cardamom, and cinnamon. The dish is slow-cooked to perfection, allowing all the flavors to meld together beautifully. Served with raita and papad, this biryani is a complete meal that showcases the best of Indian vegetarian cuisine.</p>
              </div>
            </div>

            {/* More Food Stories */}
            <div className="blog-card">
              <img 
                src="https://placehold.co/400x300?text=Coming+Soon" 
                alt="More Food Stories Coming Soon - International Cuisine Adventures" 
                className="blog-image"
              />
              <div className="blog-content">
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

      {/* AdSense Ad Unit - After Blog Content */}
      <div style={{textAlign: 'center', margin: '40px 0', padding: '0 20px'}}>
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-1787338664165158"
             data-ad-slot="4974887200"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  );
};

export default Blogs; 