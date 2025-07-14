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
                <h3>Continental Breakfast: A European Morning Classic</h3>
                <p><strong>Place:</strong>Antwerp, Belgium</p>
                <p><strong>Restaurant:</strong> Hampton by Hilton</p>
                <p><strong>Ingredients:</strong> Croissants, Baguette, Butter, Jam, Cheese, Fresh Fruit, Eggs, Omlette, Coffee</p>
                <p>
                  <strong>Rating:</strong>
                  <span style={{ color: '#ffb400' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </p>
                <p>The continental breakfast is a light, elegant morning meal enjoyed across Europe. Featuring flaky croissants, crusty baguette, creamy butter, fruit preserves, a selection of cheeses, and fresh fruit, it’s typically served with a hot cup of coffee. This breakfast is perfect for a leisurely start to the day, offering a taste of European café culture at home.</p>
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
                <h3>Burger & Fries: The Classic Comfort Combo</h3>
                <p><strong>Place:</strong> Amsterdam, The Netherlands</p>
                <p><strong>Restaurant:</strong> Burger Bar</p>
                <p><strong>Ingredients:</strong> Burger Bun, Veggie Patty, Lettuce, Tomato, Cheese, Pickles, Eggs, Fries, Ketchup, Mayo</p>
                <p>
                  <strong>Rating:</strong>
                  <span style={{ color: '#ffb400' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </p>
                <p>Burger and fries is a beloved comfort food enjoyed around the world. This classic combo features a juicy veggie burger stacked with fresh toppings and served alongside crispy golden fries. Whether at a local burger bar or homemade, it’s a satisfying meal perfect for lunch, dinner, or a weekend treat.</p>
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
                <h3>Gebakken Champignons: Dutch-Style Sautéed Mushrooms</h3>
                <p><strong>Place:</strong>Almere, The Netherlands</p>
                <p><strong>Restaurant:</strong>Woodstone Pizza</p>
                <p><strong>Ingredients:</strong> Mushrooms, Butter, Garlic, Parsley, Red Onion, Truffle sauce, Fior de latte mozzarella, Cheddar, Cheese, Chives, Black Pepper, Lemon Juice, Fresh focaccia</p>
                <p>
                  <strong>Rating:</strong>
                  <span style={{ color: '#ffb400' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </p>
                <p>Gebakken champignons are a classic Dutch appetizer or side dish featuring mushrooms sautéed in butter with garlic and fresh herbs. Served hot, often with a squeeze of lemon and a sprinkle of parsley, these mushrooms are rich, savory, and perfect served with focaccia bread. A favorite in Dutch bistros and at home, they make a delicious vegetarian treat.</p>
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
                <h3>More Food Stories</h3>
                <p><strong>Coming Soon:</strong> More delicious food adventures</p>
                <p>We're constantly exploring new cuisines and cultures to bring you authentic food experiences from around the world. Stay tuned for more culinary journeys, cooking tips, and cultural insights that will inspire your next kitchen adventure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 