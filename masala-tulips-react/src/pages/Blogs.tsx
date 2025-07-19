import React from 'react';
import '../styles/Blogs.css';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-page">
      <section className="recipes-hero">
        <h1>Food Around the World</h1>
        <p>Photos, ingredients, and ratings of the food we eat across the globe.</p>
      </section>
      
      <section className="featured-recipes">
        <div className="container">
          <div className="categories-grid">
            {/* Continental Breakfast Blog */}
            <div className="category-card">
              <img 
                src="/images/blogs/Continental_Belgium.jpeg" 
                alt="Continental Breakfast" 
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
                <div className="rating-section">
                  <span className="rating-label">Rating:</span>
                  <div className="rating-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <p className="description">The continental breakfast is a light, elegant morning meal enjoyed across Europe. Featuring flaky croissants, crusty baguette, creamy butter, fruit preserves, a selection of cheeses, and fresh fruit, it's typically served with a hot cup of coffee. This breakfast is perfect for a leisurely start to the day, offering a taste of European café culture at home.</p>
              </div>
            </div>
            
            {/* Burger and Fries Blog */}
            <div className="category-card">
              <img 
                src="/images/blogs/Burger-Fries-BurgerBar.jpeg" 
                alt="Burger and Fries" 
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
                <div className="rating-section">
                  <span className="rating-label">Rating:</span>
                  <div className="rating-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="description">Burger and fries is a beloved comfort food enjoyed around the world. This classic combo features a juicy veggie burger stacked with fresh toppings and served alongside crispy golden fries. Whether at a local burger bar or homemade, it's a satisfying meal perfect for lunch, dinner, or a weekend treat.</p>
              </div>
            </div>

            {/* Focaccia Blog */}
            <div className="category-card">
              <img 
                src="/images/blogs/focaccia.jpeg" 
                alt="Italian Focaccia Bread" 
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
                <div className="rating-section">
                  <span className="rating-label">Rating:</span>
                  <div className="rating-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="description">Gebakken champignons are a classic Dutch appetizer or side dish featuring mushrooms sautéed in butter with garlic and fresh herbs. Served hot, often with a squeeze of lemon and a sprinkle of parsley, these mushrooms are rich, savory, and perfect served with focaccia bread. A favorite in Dutch bistros and at home, they make a delicious vegetarian treat.</p>
              </div>
            </div>

            {/* More Food Stories */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Coming+Soon" 
                alt="More Food Stories Coming Soon" 
                className="recipe-image"
              />
              <div className="category-content">
                <div className="location-badge">
                  <i className="fas fa-globe"></i>
                  Around the World
                </div>
                <h3>More Food Stories</h3>
                <div className="restaurant-info">
                  <span className="restaurant-label">Coming Soon:</span>
                  <div className="restaurant-text">
                    More delicious food adventures
                  </div>
                </div>
                <p className="description">We're constantly exploring new cuisines and cultures to bring you authentic food experiences from around the world. Stay tuned for more culinary journeys, cooking tips, and cultural insights that will inspire your next kitchen adventure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 