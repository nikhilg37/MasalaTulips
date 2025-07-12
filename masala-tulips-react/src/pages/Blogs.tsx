import React from 'react';
import './Blogs.css';

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
            {/* Example Blog Card */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Italian+Pizza" 
                alt="Italian Pizza" 
                className="recipe-image"
              />
              <div className="category-content">
                <h3>Italian Pizza</h3>
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
                <p>A classic Margherita pizza enjoyed in Rome.</p>
              </div>
            </div>
            
            {/* More blog cards can be added here */}
            <div className="category-card">
              <img 
                src="https://placehold.co/400x300?text=Coming+Soon" 
                alt="More Food Stories Coming Soon" 
                className="recipe-image"
              />
              <div className="category-content">
                <h3>More Food Stories</h3>
                <p><strong>Coming Soon:</strong> More delicious food adventures</p>
                <p>Stay tuned for more culinary journeys around the world!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 