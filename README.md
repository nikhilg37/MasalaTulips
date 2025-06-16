# MasalaTulips - South Indian Recipe Website

A modern, responsive website showcasing authentic South Indian recipes with a focus on user experience and beautiful design.

## Features

- Responsive design that works on all devices
- Modern, clean interface with smooth animations
- Easy navigation and recipe discovery
- Beautiful typography and color scheme
- Interactive components with hover effects
- Optimized images and assets
- Dynamic component loading
- Consistent styling across all pages

## Color Scheme

The website uses a carefully selected color palette:

```css
:root {
    --primary-color: #000000;    /* Main headings and important text */
    --secondary-color: #666666;  /* Body text and secondary content */
    --accent-color: #ff6b6b;     /* Accents, hover states, and highlights */
    --background-color: #ffffff; /* Main background */
    --text-color: #2c2c2c;      /* General text color */
    --light-gray: #f8f8f8;      /* Secondary background */
    --border-color: #e6e6e6;    /* Borders and dividers */
}
```

## Typography

The website uses a combination of elegant fonts:

- Headings: 'Playfair Display', Georgia, serif
- Body text: 'Source Sans Pro', system fonts
- Logo: 'Segoe UI', system fonts
- Subtext: 'Crimson Text', serif

## Project Structure

```
MasalaTulips/
├── home.html                    # Main homepage
├── recipes.html                 # Recipe categories page
├── start-server.sh             # Server startup script
├── common/                     # Common assets and utilities
│   ├── styles.css              # Main stylesheet
│   ├── logo.css                # Logo styles
│   ├── utils.js               # Common JavaScript utilities
│   └── favicon.svg            # Site favicon
├── allRecipes/                 # Individual recipe pages
│   └── mavinakaayi-chitranna.html  # Raw Mango Rice recipe
├── recipesByMainCategories/    # Main recipe categories
│   ├── all-recipes.html       # All recipes listing
│   ├── most-popular.html      # Most popular recipes
│   └── vegetarian.html        # Vegetarian recipes
├── recipesByMealType/         # Recipes by meal type
│   ├── breakfast.html         # Breakfast recipes
│   ├── lunch.html            # Lunch recipes
│   └── dinner.html           # Dinner recipes
└── recipesByCookingTime/      # Recipes by cooking time
    └── upto-30-min.html      # Quick recipes (30 min or less)
```

## Getting Started

1. Clone the repository
2. Start the local server using one of these methods:

### Option 1: Using Python (Built-in)
```bash
./start-server.sh
```
Or manually:
```bash
python3 -m http.server 8000
```

### Option 2: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `home.html` and select "Open with Live Server"

### Option 3: Using Node.js http-server
```bash
npx http-server
```

## Development

- The site uses vanilla HTML, CSS, and JavaScript
- Common components (header, footer) are loaded dynamically using JavaScript
- Styles are organized in a modular way with separate files for different components
- All pages are responsive and mobile-friendly
- CSS variables are used for consistent theming
- Interactive elements have smooth transitions and hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Font Awesome 6.5.0](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css)
- Google Fonts:
  - Playfair Display
  - Source Sans Pro
  - Crimson Text

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Pooja Nidasale Chandranna - [@masalatulips](https://twitter.com/masalatulips)

Project Link: [https://github.com/yourusername/MasalaTulips](https://github.com/yourusername/MasalaTulips)