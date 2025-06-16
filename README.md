# MasalaTulips - South Indian Recipe Website

A modern, responsive website showcasing authentic South Indian recipes with a focus on user experience and beautiful design.

## Features

- Responsive design that works on all devices
- Modern, clean interface with smooth animations
- Easy navigation and recipe discovery
- Beautiful typography and color scheme
- Interactive components with hover effects
- Optimized images and assets

## Project Structure

```
MasalaTulips/
├── home.html              # Homepage
├── recipes.html           # Recipe categories page
├── breakfast.html         # Breakfast recipes page
├── mavinakaayi-chitranna.html  # Individual recipe page
├── styles.css             # Main stylesheet
├── common/
│   ├── utils.js          # Common JavaScript utilities
│   ├── logo.css          # Logo styles
│   └── favicon.svg       # Site favicon
└── start-server.sh       # Server startup script
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

## Deployment

### GitHub Pages
This project is configured to work with GitHub Pages. To deploy:

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select:
   - Branch: `main` (or your default branch)
   - Folder: `/` (root)
4. Click Save
5. Your site will be available at `https://<username>.github.io/<repository-name>`

Note: GitHub Pages automatically serves static files, so no server configuration is needed. The site will work exactly as it does locally.

## Development

- The site uses vanilla HTML, CSS, and JavaScript
- Common components (header, footer) are loaded dynamically
- Styles are organized in a modular way
- All pages are responsive and mobile-friendly

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

## Project Structure
- `home.html` - Main homepage
- `recipes.html` - Recipes landing page
- `