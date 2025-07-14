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
            {/* Italian Pizza Blog */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Italian+Pizza" 
                alt="Italian Pizza" 
                className="recipe-image"
              />
              <div className="category-content">
                <h3>Italian Pizza: A Culinary Journey</h3>
                <p><strong>Country:</strong> Italy</p>
                <p><strong>Ingredients:</strong> Dough, Tomato, Cheese, Basil</p>
                <p>
                  <strong>Rating:</strong>
                  <span style={{ color: '#ffb400' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                </p>
                <p>A classic Margherita pizza enjoyed in Rome. The perfect combination of fresh mozzarella, San Marzano tomatoes, and fragrant basil leaves creates an authentic taste of Italy. The wood-fired oven gives it that characteristic charred crust that's crispy on the outside and chewy on the inside.</p>
              </div>
            </div>
            
            {/* Dutch Stroopwafel Blog */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Dutch+Stroopwafel" 
                alt="Dutch Stroopwafel" 
                className="recipe-image"
              />
              <div className="category-content">
                <h3>Dutch Stroopwafel: Sweet Tradition</h3>
                <p><strong>Country:</strong> Netherlands</p>
                <p><strong>Ingredients:</strong> Flour, Butter, Sugar, Cinnamon, Caramel</p>
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
                <p>Traditional Dutch stroopwafels are thin waffle cookies filled with sweet caramel syrup. Originating from Gouda in the 18th century, these treats are best enjoyed warm with a cup of coffee or tea. The caramel filling melts perfectly when placed over a hot beverage.</p>
              </div>
            </div>

            {/* Indian Masala Dosa Blog */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Indian+Masala+Dosa" 
                alt="Indian Masala Dosa" 
                className="recipe-image"
              />
              <div className="category-content">
                <h3>Indian Masala Dosa: South Indian Delight</h3>
                <p><strong>Country:</strong> India</p>
                <p><strong>Ingredients:</strong> Rice, Lentils, Potatoes, Onions, Spices</p>
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
                <p>A crispy fermented crepe made from rice and lentils, filled with spiced potato mixture. Served with coconut chutney and sambar, this breakfast staple from South India is both nutritious and delicious. The fermentation process gives it a unique tangy flavor.</p>
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