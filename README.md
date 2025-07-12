# Masala Tulips - React Version

A modern React.js implementation of the Masala Tulips recipe website, featuring authentic Indian recipes with a Dutch twist.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and React Router
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Recipe Management**: Detailed recipe pages with ingredients, instructions, and step-by-step photos
- **Category Navigation**: Browse recipes by meal type, cooking time, and popularity
- **Interactive Components**: Animated logo, mobile navigation, and smooth transitions
- **SEO Optimized**: Proper meta tags, structured data, and Google Analytics integration

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables and Flexbox/Grid
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Playfair Display, Source Sans Pro)
- **Analytics**: Google Tag Manager & Google Analytics
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with logo
│   ├── Header.css      # Header styles
│   ├── Footer.tsx      # Footer with social links
│   └── Footer.css      # Footer styles
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero, categories, about
│   ├── Home.css        # Homepage styles
│   ├── RecipeCategories.tsx  # Recipe categories page
│   ├── RecipeCategories.css  # Categories page styles
│   ├── RecipePage.tsx  # Individual recipe detail page
│   ├── RecipePage.css  # Recipe page styles
│   ├── Blogs.tsx       # Blog page (coming soon)
│   └── Blogs.css       # Blog page styles
├── styles/             # Global styles
│   └── App.css         # Main application styles
├── App.tsx             # Main app component with routing
└── index.tsx           # App entry point
```

## 🎨 Design Features

- **Animated Logo**: Custom CSS-animated tulip and spice logo
- **Color Scheme**: Warm, food-inspired palette with coral accents
- **Typography**: Elegant serif headings with clean sans-serif body text
- **Responsive Grid**: CSS Grid and Flexbox for adaptive layouts
- **Hover Effects**: Smooth transitions and interactive elements
- **Mobile Navigation**: Hamburger menu with slide-out panel

## 🍳 Recipe Features

- **Detailed Instructions**: Step-by-step cooking instructions with photos
- **Ingredient Lists**: Clear, organized ingredient lists
- **Cooking Tips**: Helpful notes and variations for each recipe
- **Recipe Metadata**: Cooking time, cuisine type, and dietary information
- **Image Galleries**: High-quality food photography for each step

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd masala-tulips-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Adaptive layouts with touch-friendly interactions
- **Mobile**: Mobile-first design with hamburger navigation

## 🔧 Customization

### Colors
Update the CSS variables in `src/styles/App.css`:
```css
:root {
    --primary-color: #2c2c2c;
    --secondary-color: #666666;
    --accent-color: #ff6b6b;
    /* ... other variables */
}
```

### Adding New Recipes
1. Add recipe data to the `recipes` object in `src/pages/RecipePage.tsx`
2. Add recipe images to the `public/images/recipes/` directory
3. Update the routing in `src/App.tsx` if needed

### Styling
- Global styles are in `src/styles/App.css`
- Component-specific styles are in their respective `.css` files
- The design uses CSS Grid and Flexbox for layouts

## 📊 Analytics & SEO

- **Google Tag Manager**: Integrated for analytics and marketing
- **Google Analytics**: Track user behavior and page views
- **Meta Tags**: Optimized for search engines
- **Structured Data**: Recipe schema markup for rich snippets
- **Social Media**: Open Graph tags for social sharing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original HTML design and content from Masala Tulips
- Recipe photography and content creation
- Community feedback and testing

## 📞 Contact

- **Website**: [Masala Tulips](https://masalatulips.com)
- **Instagram**: [@masalatulips](https://www.instagram.com/masalatulips/)
- **YouTube**: [Masala Tulips](https://www.youtube.com/@MasalaTulips)
- **Pinterest**: [Masala Tulips](https://nl.pinterest.com/masalatulips/)

---

Made with ❤️ and lots of spices by Masala Tulips 