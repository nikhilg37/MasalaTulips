import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { getRecipeBySlug } from '../data/recipes';
import { loadAdsSafely } from '../utils/analytics';

// Function to check if a recipe is quick (30 minutes or less)
const isQuickRecipe = (totalTime: string): boolean => {
  const timeInMinutes = parseInt(totalTime.replace(' mins', ''));
  return timeInMinutes <= 30;
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Handler to clear lastCategory and navigate
  const handleRecipeClick = (e: React.MouseEvent, path: string) => {
    sessionStorage.removeItem('lastCategory');
    navigate(path);
  };

  useEffect(() => {
    const hash = sessionStorage.getItem('scrollToHash');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.clientHeight : 0;
        const elementTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: elementTop, behavior: 'smooth' });
        window.history.pushState(null, '', `/#${hash}`);
      }
      sessionStorage.removeItem('scrollToHash');
    }

    // Load ads safely after content is rendered
    setTimeout(() => {
      const adElement = document.querySelector('.adsbygoogle') as HTMLElement;
      if (adElement) {
        const recipes = [chitranna, pulao, milkshake].filter(Boolean);
        loadAdsSafely(adElement, recipes, 'home');
      }
    }, 1000);
  }, []);

  const chitranna = getRecipeBySlug('mavinakaayi-chitranna');
  const pulao = getRecipeBySlug('vegetable-pulao');
  const milkshake = getRecipeBySlug('strawberry-milkshake');

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Simple recipes made for real, actual, everyday life</h1>
          <p>Discover the perfect blend of Indian and Dutch flavors</p>
        </div>
      </section>

      {/* Recipe Categories */}
      <section id="recipes" className="recipe-categories">
        <div className="container">
          <h2>Recipe Categories</h2>
          <div className="categories-grid">
            <Link to="/recipe-categories/breakfast" className="category-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <img 
                src="https://placehold.co/300x250/FF6B35/FFFFFF/png?text=Breakfast+Recipes" 
                alt="Breakfast Recipe Options - Masala Tulips" 
                className="placeholder-image"
              />
              <div className="category-content">
                <h3>Breakfast</h3>
                <p>Start your day with delicious and nutritious South Indian breakfast recipes. From traditional rice dishes like Mavinakaayi Chitranna to wholesome vegetable pulao, our breakfast collection offers authentic flavors that energize your morning. Perfect for busy weekdays or leisurely weekend brunches.</p>
              </div>
            </Link>
            <Link to="/recipe-categories/kids-options" className="category-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <img 
                src="https://placehold.co/300x250/FF6B35/FFFFFF/png?text=Kids+Recipes" 
                alt="Kids Recipe Options - Masala Tulips" 
                className="placeholder-image"
              />
              <div className="category-content">
                <h3>Kids Options</h3>
                <p>Fun and nutritious meals designed specifically for children. Our kid-friendly recipes focus on healthy ingredients, appealing presentation, and flavors that young palates love. From colorful vegetable dishes to creative snack ideas, we make healthy eating exciting for the whole family.</p>
              </div>
            </Link>
            <Link to="/recipe-categories/most-popular" className="category-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <img 
                src="https://placehold.co/300x250/FF6B35/FFFFFF/png?text=Most+Popular" 
                alt="Most Popular Recipes - Masala Tulips" 
                className="placeholder-image"
              />
              <div className="category-content">
                <h3>Most Popular</h3>
                <p>Discover our most loved and frequently cooked recipes. These crowd-pleasing dishes have been tried, tested, and loved by our community. From traditional favorites to modern twists, these recipes are guaranteed to become your family's favorites too.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Ad Unit - Placed after substantial content */}
      <div style={{textAlign: 'center', margin: '40px 0', padding: '0 20px'}}>
          <ins className="adsbygoogle"
               style={{display: 'block'}}
               data-ad-client="ca-pub-1787338664165158"
               data-ad-slot="4974887200"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
      </div>

      {/* Featured Recipes */}
      <section className="featured-recipes">
        <div className="container">
          <h2>Featured Recipes</h2>
          <div className="breakfast-grid">
                  {chitranna && (
                    <div className="recipe-card" onClick={e => handleRecipeClick(e, `/recipe/${chitranna.id}`)} style={{cursor: 'pointer'}}>
                      <img 
                        src={chitranna.mainImage} 
                        alt={`Featured Recipe - ${chitranna.title} by Masala Tulips`} 
                        className="recipe-image"
                      />
                      <div className="recipe-content">
                        <h3>{chitranna.title} - {chitranna.subtitle}</h3>
                        <div className="recipe-meta">
                          <span className="time-indicator">
                            <i className="far fa-clock"></i>
                            {chitranna.totalTime}
                          </span>
                          <span className="category-badge vegetarian">{chitranna.type}</span>
                          {chitranna.category.includes('quick') && <span className="category-badge quick">Quick</span>}
                          {chitranna.category.includes('breakfast') && <span className="category-badge breakfast">Breakfast</span>}
                        </div>
                        <p>{chitranna.description}</p>
                      </div>
                    </div>
                  )}
                  {pulao && (
                    <div className="recipe-card" onClick={e => handleRecipeClick(e, `/recipe/${pulao.id}`)} style={{cursor: 'pointer'}}>
                      <img 
                        src={pulao.mainImage} 
                        alt={`Featured Recipe - ${pulao.title} by Masala Tulips`} 
                        className="recipe-image"
                      />
                      <div className="recipe-content">
                        <h3>{pulao.title} - {pulao.subtitle}</h3>
                        <div className="recipe-meta">
                          <span className="time-indicator">
                            <i className="far fa-clock"></i>
                            {pulao.totalTime}
                          </span>
                          <span className="category-badge vegetarian">{pulao.type}</span>
                          {pulao.category.includes('lunch') && <span className="category-badge lunch">Lunch</span>}
                        </div>
                        <p>{pulao.description}</p>
                      </div>
                    </div>
                  )}
                  {milkshake && (
                    <div className="recipe-card" onClick={e => handleRecipeClick(e, `/recipe/${milkshake.id}`)} style={{cursor: 'pointer'}}>
                      <img 
                        src={milkshake.mainImage} 
                        alt={`Featured Recipe - ${milkshake.title} by Masala Tulips`} 
                        className="recipe-image"
                      />
                      <div className="recipe-content">
                        <h3>{milkshake.title} - {milkshake.subtitle}</h3>
                        <div className="recipe-meta">
                          <span className="time-indicator">
                            <i className="far fa-clock"></i>
                            {milkshake.totalTime}
                          </span>
                          <span className="category-badge vegetarian">{milkshake.type}</span>
                          {milkshake.category.includes('upto-30-min') && <span className="category-badge quick">Quick</span>}
                          {milkshake.category.includes('drinks') && <span className="category-badge drinks">Drinks</span>}
                        </div>
                        <p>{milkshake.description}</p>
                      </div>
                    </div>
                  )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Welcome to Masala Tulips, where we blend the rich flavors of Indian cuisine with the warmth of Dutch hospitality.</p>
              <p>Our journey began with a deep passion for creating authentic Indian dishes that bring people together. Inspired by the vibrant spices and diverse regional recipes of India, we set out to share more than just food—we wanted to share a taste of home, wherever you are.
                We believe in using only the freshest, highest-quality ingredients, handpicked to ensure every dish bursts with flavor and authenticity. Our recipes are lovingly passed down through generations, each one carrying the stories, traditions, and memories of those who prepared them before us. We also embrace innovation, adding our own creative twists to make these classic dishes accessible and exciting for everyone, whether you're new to Indian cuisine or a longtime enthusiast.</p>
              <p>At Masala Tulips, every meal is an opportunity to connect, celebrate, and create new memories. Whether you're looking for a comforting bowl of curry, a festive feast, or a simple snack to brighten your day, you'll find recipes that inspire and delight. Join us on this flavorful journey—where tradition meets innovation, and every bite tells a story.
                Explore our recipes, discover the stories behind each dish, and let Masala Tulips bring the spirit of Indian hospitality to your table.</p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" 
                alt="About Us - Vegetarian Food - Masala Tulips"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 