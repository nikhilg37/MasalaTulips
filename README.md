# Masala Tulips

A modern, responsive website showcasing authentic Indian recipes with a blend of South Indian and Dutch culinary traditions.

## Features
- **Responsive, modern UI/UX** with beautiful typography and color scheme
- **Fixed, consistent header and footer** on all pages with navigation
- **Clickable logo icon** that returns to homepage
- **Comprehensive recipe organization** by categories, meal types, and cooking time
- **Detailed recipe pages** with step-by-step instructions, ingredients, and high-quality images
- **SEO-optimized page titles** for better Google Analytics tracking
- **Breadcrumb navigation** for improved user experience
- **Comments section** on recipe pages (coming soon)
- **Custom favicon** (tulip and spice SVG)
- **Social media integration** in footer (Facebook, Instagram, Pinterest, YouTube, X/Twitter)
- **Font Awesome 6.5.0** for latest icon support
- **Cross-browser compatible**
- **Google Tag Manager** integration for analytics

## Available Recipes

### Current Recipes
1. **Mavinakaayi Chitranna** - Raw Mango Rice (30 minutes)
   - Traditional South Indian tangy rice dish
   - Step-by-step instructions with 9 images
   - Available in multiple categories

2. **Tharakari Pulao** - Vegetable Pulao (45 minutes)
   - Fragrant rice with mixed vegetables
   - Aromatic spices and fresh herbs
   - Step-by-step instructions with 10 images
   - Available in multiple categories

### Recipe Categories
- **By Meal Type**: Breakfast, Lunch, Dinner
- **By Popular Categories**: Vegetarian, Most Popular, All Recipes
- **By Cooking Time**: Up to 30 minutes, Up to 60 minutes

## Technologies Used
- **HTML5** - Semantic markup and modern structure
- **CSS3** - Responsive design, Grid/Flexbox layouts, custom properties
- **JavaScript** - Dynamic navigation, breadcrumbs, form handling
- **Font Awesome 6.5.0** - Latest icon support
- **Google Fonts** - Playfair Display and Source Sans Pro
- **Google Tag Manager** - Analytics and tracking

## Getting Started
1. Clone this repository
2. For best results, run a local server (recommended for navigation between pages):
   - With Python 3: `python3 -m http.server 8000`
   - With Python 2: `python -m SimpleHTTPServer 8000`
   - Or use VS Code Live Server extension
   - Or run the provided script: `sh run_server.sh`
3. Open `http://localhost:8000` in your web browser
4. Explore the homepage and recipe categories!

## Running a Local Server
You can quickly serve the site locally using Python's built-in HTTP server:

- **Python 3:**
  ```sh
  python3 -m http.server 8000
  ```
- **Python 2:**
  ```sh
  python -m SimpleHTTPServer 8000
  ```
- **Shell script:**
  ```sh
  sh run_server.sh
  ```

This will start a local server at http://localhost:8000. Open this address in your browser to view the site.

## File Structure
```text
MasalaTulips/
├── README.md
├── index.html                          # Homepage
├── recipeCategories.html               # Main recipes landing page
├── blogs.html                          # Blog section
├── ads.txt                             # Ad configuration
├── CNAME                               # Custom domain
├── run_server.sh                       # Local server script
├── common/
│   ├── styles.css                      # Main CSS styles
│   ├── logo.css                        # Logo-specific styles
│   ├── script.js                       # JavaScript functionality
│   ├── footer.html                     # Footer template
│   ├── header-root.html                # Header for root pages
│   ├── header-subdir.html              # Header for subdirectory pages
│   └── socialMediaLogo/
│       ├── favicon.svg                 # Custom favicon
│       ├── social-media-logo-horizontal.jpg
│       ├── social-media-logo-horizontal.svg
│       ├── social-media-logo-square.jpg
│       ├── social-media-logo-square.svg
│       ├── social-media-logo.jpg
│       └── social-media-logo.svg
├── images/
│   └── recipes/
│       ├── mavinakaayi-chitranna/      # Recipe images (1-9.jpeg)
│       └── veg-pulao/                  # Recipe images (new1-new13.jpeg)
├── recipePage/
│   ├── mavinakaayi-chitranna.html      # Raw mango rice recipe
│   └── vegetable-pulao.html            # Vegetable pulao recipe
├── recipesByMealType/
│   ├── breakfast.html                  # Breakfast recipes
│   ├── lunch.html                      # Lunch recipes
│   └── dinner.html                     # Dinner recipes
├── recipesByPopularCategories/
│   ├── all-recipes.html                # All recipes collection
│   ├── most-popular.html               # Most popular recipes
│   └── vegetarian.html                 # Vegetarian recipes
└── recipesByCookingTime/
    ├── upto-30-min.html                # Quick recipes (30 min or less)
    └── upto-60-min.html                # Easy recipes (60 min or less)
```

## Project Structure

### Main Pages
- `index.html` - Homepage with hero section, featured recipes, about, and contact
- `recipeCategories.html` - Main recipes landing page with category navigation
- `blogs.html` - Blog section for cooking tips and stories

### Recipe Pages
- `recipePage/mavinakaayi-chitranna.html` - Raw mango rice recipe with detailed instructions
- `recipePage/vegetable-pulao.html` - Vegetable pulao recipe with step-by-step guide

### Category Pages
- **Meal Types**: `recipesByMealType/` - Breakfast, Lunch, Dinner
- **Popular Categories**: `recipesByPopularCategories/` - Vegetarian, Most Popular, All Recipes
- **Cooking Time**: `recipesByCookingTime/` - Quick (30 min), Easy (60 min)

### Shared Resources
- `common/` - Shared styles, scripts, and assets
  - `styles.css` - Main CSS with responsive design
  - `script.js` - JavaScript for navigation and interactivity
  - `logo.css` - Logo and branding styles
  - Header/footer templates for consistent navigation

### Images
- `images/recipes/` - High-quality recipe images organized by recipe name
- Each recipe has multiple step-by-step images for better user experience

## SEO & Analytics
- **Optimized page titles** for better Google Analytics tracking
- **Google Tag Manager** integration (GTM-5W79QV73)
- **Structured content** with proper heading hierarchy
- **Alt text** for all images
- **Meta descriptions** and viewport settings
- **Breadcrumb navigation** for better user experience and SEO

## Design Features
- **Responsive design** that works on all devices
- **Modern color scheme** with CSS custom properties
- **Beautiful typography** using Google Fonts
- **Hover effects** and smooth transitions
- **Grid and Flexbox layouts** for modern CSS
- **Consistent spacing** and visual hierarchy

## Future Enhancements
- Comments system for recipe pages
- Recipe search functionality
- Recipe rating system
- More recipe categories
- Recipe sharing features
- Newsletter subscription
- Recipe print functionality

---
For any questions, suggestions, or contributions, feel free to reach out! 