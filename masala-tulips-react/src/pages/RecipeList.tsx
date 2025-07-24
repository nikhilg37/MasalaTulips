import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../data/recipes';
import '../styles/RecipeList.css';

// Function to check if a recipe is quick (30 minutes or less)
const isQuickRecipe = (totalTime: string): boolean => {
  const timeInMinutes = parseInt(totalTime.replace(' mins', ''));
  return timeInMinutes <= 30;
};

interface RecipeListProps {
  title: string;
  description: string;
  recipes: Recipe[];
  breadcrumbPath: string;
  breadcrumbLabel: string;
}

const RecipeList: React.FC<RecipeListProps> = ({
  title,
  description,
  recipes,
  breadcrumbPath,
  breadcrumbLabel
}) => {
  useEffect(() => {
    // Add more substantial content for SEO and user experience
    const pageContent = document.querySelector('.recipe-list-page');
    if (pageContent && recipes.length === 0) {
      const contentSection = document.createElement('div');
      contentSection.className = 'content-enhancement';
      
      // Create category-specific content
      let categoryInfo = '';
      let recipeSuggestions = '';
      
      if (title.toLowerCase().includes('salad')) {
        categoryInfo = `
          <h2>About Indian Salads</h2>
          <p>Indian salads, known as "kachumber" or "raita," are an integral part of Indian cuisine. Unlike Western salads, Indian salads often feature fresh vegetables, herbs, and spices that complement the main dishes. They're typically served as accompaniments to provide a refreshing contrast to spicy curries and rich gravies.</p>
          <p>Traditional Indian salads are known for their vibrant colors, fresh flavors, and health benefits. They often include ingredients like cucumber, tomato, onion, coriander, and various spices that not only add flavor but also aid in digestion.</p>
        `;
        recipeSuggestions = `
          <h3>Popular Indian Salad Recipes</h3>
          <ul>
            <li><strong>Kachumber</strong> - A refreshing mix of cucumber, tomato, and onion with spices</li>
            <li><strong>Sprouts Salad</strong> - Protein-rich salad with mixed sprouts and vegetables</li>
            <li><strong>Beetroot Carrot Salad</strong> - Colorful and nutritious grated vegetable salad</li>
            <li><strong>Onion Tomato Salad</strong> - Simple yet flavorful accompaniment</li>
          </ul>
        `;
      } else if (title.toLowerCase().includes('starter')) {
        categoryInfo = `
          <h2>About Indian Starters</h2>
          <p>Indian starters, also known as appetizers or "shuruvat," are designed to awaken the taste buds and prepare the palate for the main meal. These dishes are typically served at the beginning of a meal and feature bold flavors, aromatic spices, and often include elements of crunch, spice, and tang.</p>
          <p>Traditional Indian starters range from simple vegetable preparations to elaborate grilled or fried items. They're perfect for parties, gatherings, and special occasions, often served with chutneys and dips.</p>
        `;
        recipeSuggestions = `
          <h3>Popular Indian Starter Recipes</h3>
          <ul>
            <li><strong>Paneer Tikka</strong> - Grilled cottage cheese with aromatic spices</li>
            <li><strong>Aloo Tikki</strong> - Spiced potato patties served with chutneys</li>
            <li><strong>Veg Spring Rolls</strong> - Crispy rolls filled with vegetables</li>
            <li><strong>Mushroom Manchurian</strong> - Indo-Chinese style mushroom appetizer</li>
          </ul>
        `;
      } else if (title.toLowerCase().includes('dessert')) {
        categoryInfo = `
          <h2>About Indian Desserts</h2>
          <p>Indian desserts, known as "mithai" or "sweets," are an essential part of Indian culture and celebrations. These sweet treats are often made with milk, sugar, nuts, and aromatic spices like cardamom, saffron, and rose water. Indian desserts are known for their rich flavors, creamy textures, and cultural significance.</p>
          <p>Traditional Indian desserts are typically served during festivals, weddings, and special occasions. They range from simple milk-based sweets to elaborate pastries and puddings, each with its own regional variations and cultural significance.</p>
        `;
        recipeSuggestions = `
          <h3>Popular Indian Dessert Recipes</h3>
          <ul>
            <li><strong>Gulab Jamun</strong> - Soft milk solids balls in rose-flavored syrup</li>
            <li><strong>Kheer</strong> - Creamy rice pudding with nuts and saffron</li>
            <li><strong>Rasgulla</strong> - Soft cottage cheese balls in sugar syrup</li>
            <li><strong>Jalebi</strong> - Crispy spiral sweets soaked in sugar syrup</li>
          </ul>
        `;
      } else if (title.toLowerCase().includes('snack')) {
        categoryInfo = `
          <h2>About Indian Snacks</h2>
          <p>Indian snacks, known as "nashta" or "chaat," are an integral part of Indian food culture. These quick bites are perfect for tea time, evening snacks, or light meals. Indian snacks are characterized by their bold flavors, varied textures, and the perfect balance of sweet, sour, spicy, and tangy tastes.</p>
          <p>From street food favorites to homemade treats, Indian snacks offer a wide variety of options that cater to different tastes and dietary preferences. They're often served with chutneys, yogurt, or other accompaniments to enhance their flavor.</p>
        `;
        recipeSuggestions = `
          <h3>Popular Indian Snack Recipes</h3>
          <ul>
            <li><strong>Masala Peanuts</strong> - Spiced roasted peanuts with aromatic spices</li>
            <li><strong>Baked Samosa</strong> - Healthy version of the classic potato pastry</li>
            <li><strong>Bhel Puri</strong> - Tangy and crunchy street food favorite</li>
            <li><strong>Poha</strong> - Flattened rice breakfast or snack</li>
          </ul>
        `;
      } else {
        categoryInfo = `
          <h2>About ${title}</h2>
          <p>We're constantly adding new recipes to our collection. ${description} Our team is working hard to bring you more delicious recipes in this category. In the meantime, explore our other recipe categories to discover amazing dishes.</p>
          <p>Each recipe in our collection is carefully tested and includes detailed instructions, ingredient lists, and helpful tips to ensure your cooking success. We focus on authentic flavors while making recipes accessible for home cooks of all skill levels.</p>
        `;
      }
      
      contentSection.innerHTML = `
        <div class="container">
          <section class="category-description">
            ${categoryInfo}
            ${recipeSuggestions}
            <div class="cooking-tips">
              <h3>Cooking Tips for ${title}</h3>
              <ul>
                <li>Always use fresh, high-quality ingredients for the best results</li>
                <li>Follow the recipe instructions carefully, especially for timing</li>
                <li>Adjust spices and seasonings according to your taste preference</li>
                <li>Don't be afraid to experiment with different variations</li>
                <li>Store leftovers properly to maintain freshness and flavor</li>
              </ul>
            </div>
          </section>
        </div>
      `;
      pageContent.appendChild(contentSection);
    }
  }, [recipes.length, title, description]);

  return (
    <div className="recipe-list-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/recipe-categories" className="breadcrumb-link">Recipes</Link>
        <span> &gt; </span>
        <span>{breadcrumbLabel}</span>
      </div>

      {/* Hero Section */}
      <section className="recipes-hero">
        <h1>{title}</h1>
        <p>{description}</p>
        {recipes.length === 0 && (
          <div className="coming-soon-notice">
            <p>We're adding more recipes to this category. Check back soon for new additions!</p>
          </div>
        )}
      </section>

      {/* Recipes Grid */}
      <section className="featured-recipes">
        <div className="container">
          <div className="breakfast-grid">
            {recipes.map((recipe) => (
              <Link 
                key={recipe.id} 
                to={`/recipe/${recipe.id}`} 
                className="recipe-card"
              >
                <img 
                  src={recipe.mainImage} 
                  alt={`${title} Recipe - ${recipe.title} by Masala Tulips`}
                  className="recipe-image"
                />
                <div className="recipe-content">
                  <h3>{recipe.title} - {recipe.subtitle}</h3>
                  <div className="recipe-meta">
                    <span className="time-indicator">
                      <i className="far fa-clock"></i>
                      {recipe.totalTime}
                    </span>
                    <span className="category-badge vegetarian">{recipe.type}</span>
                    {(recipe.category.includes('quick') || isQuickRecipe(recipe.totalTime)) && <span className="category-badge quick">Quick</span>}
                    {recipe.category.includes('breakfast') && <span className="category-badge breakfast">Breakfast</span>}
                    {recipe.category.includes('lunch') && <span className="category-badge lunch">Lunch</span>}
                    {recipe.category.includes('dinner') && <span className="category-badge dinner">Dinner</span>}
                    {recipe.category.includes('side-dish') && <span className="category-badge side-dish">Side Dish</span>}
                    {recipe.category.includes('starters') && <span className="category-badge starters">Starters</span>}
                    {recipe.category.includes('drinks') && <span className="category-badge drinks">Drinks</span>}
                    {recipe.category.includes('snacks') && <span className="category-badge snacks">Snacks</span>}
                    {recipe.category.includes('desserts') && <span className="category-badge desserts">Desserts</span>}
                    {recipe.category.includes('kids-options') && <span className="category-badge kids-options">Kids Options</span>}
                    {recipe.category.includes('vegan') && <span className="category-badge vegan">Vegan</span>}
                    {recipe.category.includes('salads') && <span className="category-badge salads">Salads</span>}
                  </div>
                  <p>{recipe.description}</p>
                </div>
              </Link>
            ))}
            
            {/* Enhanced placeholder cards for future recipes */}
            {recipes.length < 2 && (
              <>
                <div className="recipe-card coming-soon-card">
                  <img 
                    src="https://placehold.co/300x200/FF6B35/FFFFFF/png?text=Cooking+Soon" 
                    alt="Recipe Coming Soon - Masala Tulips" 
                    className="recipe-image"
                  />
                  <div className="recipe-content">
                    <h3>More Recipes Coming Soon</h3>
                    <p className="recipe-meta">Stay tuned for more delicious recipes!</p>
                    <p>We're working on adding more amazing recipes to this category. Our team is constantly testing and perfecting new dishes to share with you.</p>
                  </div>
                </div>
                <div className="recipe-card coming-soon-card">
                  <img 
                    src="https://placehold.co/300x200/FF6B35/FFFFFF/png?text=New+Recipes" 
                    alt="New Recipes Coming - Masala Tulips" 
                    className="recipe-image"
                  />
                  <div className="recipe-content">
                    <h3>Fresh Recipes in Development</h3>
                    <p className="recipe-meta">Exciting new dishes on the way!</p>
                    <p>From traditional favorites to modern twists, we're preparing a variety of recipes that will delight your taste buds and inspire your cooking.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Additional content section for better SEO */}
      {recipes.length > 0 && (
        <section className="category-info">
          <div className="container">
            <h2>About {title}</h2>
            <p>Our {title.toLowerCase()} collection features carefully curated recipes that showcase the best of Indian cuisine. Each recipe includes detailed instructions, ingredient lists, and helpful tips to ensure your cooking success. Whether you're a beginner or an experienced cook, these recipes are designed to be accessible and delicious.</p>
            <p>We focus on authentic flavors while making recipes practical for everyday cooking. All our recipes are tested multiple times to ensure they work perfectly in home kitchens. From quick weekday meals to special occasion dishes, you'll find something for every occasion.</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default RecipeList; 