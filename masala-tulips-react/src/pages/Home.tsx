import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { trackGAEvent, trackGTMEvent } from '../utils/analytics';

const Home: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track contact form submission
    trackGAEvent({
      action: 'submit',
      category: 'Contact Form',
      label: 'Home Contact',
    });
    trackGTMEvent('contact_form_submit', { location: 'Home' });
    // Handle form submission here
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

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
  }, []);

  return (
    <div className="home">
      {/* AdSense Ad Unit */}
      <div style={{textAlign: 'center', margin: '20px 0', padding: '0 20px'}}>
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
            <Link to="/recipes/breakfast" className="category-card" style={{textDecoration: 'none', color: 'inherit'}}>
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
            <Link to="/recipes/kids-options" className="category-card" style={{textDecoration: 'none', color: 'inherit'}}>
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
            <Link to="/recipes/most-popular" className="category-card" style={{textDecoration: 'none', color: 'inherit'}}>
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

      {/* Featured Recipes */}
      <section className="featured-recipes">
        <div className="container">
          <h2>Featured Recipes</h2>
          <div className="breakfast-grid">
            <div className="recipe-card" onClick={e => handleRecipeClick(e, '/recipe/mavinakaayi-chitranna')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/recipes/mavinakaayi-chitranna/7.jpeg" 
                alt="Featured Recipe - Mavinakaayi Chitranna (Raw Mango Rice) by Masala Tulips" 
                className="recipe-image"
              />
              <div className="recipe-content">
                <h3>Mavinakayi Chitranna - ಮಾವಿನಕಾಯಿ ಚಿತ್ರಾನ್ನ - Raw Mango Rice</h3>
                <p className="recipe-meta">30 minutes • South Indian • Vegetarian</p>
                <p>A tangy and refreshing South Indian rice dish made with raw mangoes and aromatic spices. This traditional Karnataka recipe combines the sourness of raw mango with the warmth of mustard seeds, curry leaves, and roasted peanuts. Perfect for hot summer days or as a light lunch option.</p>
              </div>
            </div>
            <div className="recipe-card" onClick={e => handleRecipeClick(e, '/recipe/vegetable-pulao')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/recipes/veg-pulao/new13.jpeg" 
                alt="Featured Recipe - Tharakari Pulao (Vegetable Pulao) by Masala Tulips" 
                className="recipe-image"
              />
              <div className="recipe-content">
                <h3>Tharakari Pulao - ತರಕಾರಿ ಪುಲಾವ್ - Vegetable Pulao</h3>
                <p className="recipe-meta">45 min • South Indian • Vegetarian</p>
                <p>Aromatic and flavorful vegetable pulao made with basmati rice, fresh vegetables, and whole spices. This one-pot dish is infused with the fragrance of bay leaves, cardamom, and cinnamon, creating a perfect balance of flavors. Ideal for family gatherings or a comforting dinner.</p>
              </div>
            </div>
            <div className="recipe-card">
              <img 
                src="https://placehold.co/300x200/FF6B35/FFFFFF/png?text=Bisibele+Bath" 
                alt="Bisibele Bath Recipe - Masala Tulips" 
                className="placeholder-image"
              />
              <div className="recipe-content">
                <h3>Bisibele Bath - ಬಿಸಿಬೆಲೆ ಬಾತ್ - Hot Lentil Rice</h3>
                <p className="recipe-meta">60 min • South Indian • Vegetarian</p>
                <p>A traditional Karnataka dish made with rice, lentils, and a special spice blend. This one-pot meal is packed with protein and flavor, perfect for a hearty lunch or dinner. The aromatic spices and ghee create a rich, comforting dish that's both nutritious and delicious.</p>
              </div>
            </div>
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 