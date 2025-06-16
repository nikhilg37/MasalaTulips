# Masala Tulips

A modern, responsive website showcasing South Indian recipes.

## Features
- Responsive, modern UI/UX
- Fixed, consistent header and footer on all pages
- Clickable logo icon (returns to homepage)
- Dedicated Recipes page with popular categories, meal types, and cooking time
- Homepage with hero, featured recipes, and about/contact sections
- Custom favicon (tulip and spice SVG)
- Social media icons in footer (Facebook, Instagram, Pinterest, YouTube, X/Twitter)
- Uses Font Awesome 6.5.0 for latest icon support
- Cross-browser compatible

## Technologies Used
- HTML5
- CSS3
- JavaScript
- [Font Awesome 6.5.0](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css)

## Getting Started
1. Clone this repository
2. For best results, run a local server (recommended for navigation between pages):
   - With Python 3: `python3 -m http.server`
   - With Python 2: `python -m SimpleHTTPServer`
   - Or use VS Code Live Server extension
   - Or run the provided script: `sh run_server.sh`
3. Open `homepage.html` in your web browser
4. Explore the homepage and the Recipes page!

## Running a Python HTTP Server
You can quickly serve the site locally using Python's built-in HTTP server:

- **Python 3:**
  ```sh
  python3 -m http.server
  ```
- **Python 2:**
  ```sh
  python -m SimpleHTTPServer
  ```
- **Shell script:**
  ```sh
  sh run_server.sh
  ```

This will start a local server (default: http://localhost:8000). Open this address in your browser to view the site.

## File Structure
```text
MasalaTulips/
├── README.md
├── homepage.html
├── recipes.html
├── run_server.sh
├── common/
│   ├── favicon.svg
│   ├── logo.css
│   ├── script.js
│   └── styles.css
├── recipesByMealType/
│   ├── breakfast.html
│   ├── lunch.html
│   └── dinner.html
├── recipesByPopularCategories/
│   ├── all-recipes.html
│   ├── most-popular.html
│   └── vegetarian.html
├── recipesByCookingTime/
│   └── upto-30-min.html
├── allRecipes/
│   └── mavinakaayi-chitranna.html
```

## Project Structure
- `homepage.html` - Main homepage
- `recipes.html` - Recipes landing page
- `common/` - Shared resources (styles, scripts, favicon)
  - `styles.css` - Main CSS styles
  - `logo.css` - Logo-specific styles
  - `script.js` - JavaScript for navigation and interactivity
  - `favicon.svg` - Custom favicon
- `recipesByMealType/` - Recipes by meal type
  - `breakfast.html`, `lunch.html`, `dinner.html`
- `recipesByPopularCategories/` - Recipes by popular categories
  - `vegetarian.html`, `most-popular.html`, `all-recipes.html`
- `recipesByCookingTime/` - Recipes by cooking time
  - `upto-30-min.html`
- `allRecipes/` - Individual recipe pages
  - `mavinakaayi-chitranna.html`

---
For any questions or suggestions, feel free to reach out! 