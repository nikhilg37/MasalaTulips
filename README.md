# Masala Tulips - Indian Recipe Website

A modern, responsive recipe website showcasing authentic Indian cuisine with a blend of Dutch hospitality. Built with React and TypeScript, featuring beautiful imagery, detailed recipes, and an intuitive user experience.

## 🌟 Live Site
**Production:** [https://masalatulips.nl/](https://masalatulips.nl/)

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: CSS3 with responsive design and CSS variables
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Icons**: Font Awesome 6
- **Analytics**: Google Analytics & Google Tag Manager
- **Deployment**: GitHub Pages with custom domain
- **AdSense**: Google AdSense integration

## 📁 Project Structure

```
MasalaTulips/
├── masala-tulips-react/     # Main React application
│   ├── public/
│   │   ├── images/          # Recipe images and assets
│   │   │   ├── recipes/     # Recipe-specific images
│   │   │   └── blogs/       # Blog post images
│   │   ├── socialMediaLogo/ # Custom branding assets
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── index.html       # Main HTML template
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.tsx   # Navigation with animated logo
│   │   │   ├── Footer.tsx   # Social media links & email contact
│   │   │   └── ScrollToTop.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── recipesByPopularCategory/
│   │   │   │   ├── AllRecipes.tsx
│   │   │   │   ├── MostPopular.tsx
│   │   │   │   └── Vegetarian.tsx
│   │   │   ├── recipesByMealType/
│   │   │   │   ├── Breakfast.tsx
│   │   │   │   ├── Lunch.tsx
│   │   │   │   ├── Dinner.tsx
│   │   │   │   ├── SideDish.tsx
│   │   │   │   ├── Drinks.tsx
│   │   │   │   └── KidsOptions.tsx
│   │   │   ├── recipesByCookingTime/
│   │   │   │   ├── Upto30Min.tsx
│   │   │   │   └── Upto60Min.tsx
│   │   │   ├── RecipeList.tsx
│   │   │   ├── RecipePage.tsx
│   │   │   ├── RecipeCategories.tsx
│   │   │   ├── Home.tsx
│   │   │   └── Blogs.tsx
│   │   ├── data/           # Recipe data and content
│   │   │   └── recipes.ts  # All recipe definitions
│   │   ├── styles/         # All CSS stylesheets
│   │   │   ├── App.css     # Global styles and variables
│   │   │   ├── Blogs.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── Home.css
│   │   │   ├── RecipeCategories.css
│   │   │   ├── RecipeList.css
│   │   │   └── RecipePage.css
│   │   ├── utils/          # Utility functions
│   │   │   └── analytics.ts # GA & GTM tracking
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── index.tsx       # App entry point
│   │   ├── index.css       # Global styles
│   │   ├── react-app-env.d.ts
│   │   └── reportWebVitals.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── docs/                   # Built/deployed website files
├── CNAME                   # Custom domain configuration
├── robots.txt              # SEO configuration
├── sitemap.xml             # Site map for search engines
└── ads.txt                 # AdSense configuration
```

## 🍳 Current Recipes

### Featured Recipes
- **Mavinakaayi Chitranna** - Raw Mango Rice (30 mins • Vegetarian • Breakfast)
- **Tharakari Pulao** - Vegetable Pulao (45 mins • Vegetarian • Lunch)
- **Strawberry Milkshake** - Refreshing Summer Drink (15 mins • Vegetarian • Drinks)

### Side Dishes & Condiments
- **Mint Chutney** - Pudina Chutney (15 mins • Vegetarian)

### Kids & Healthy Options
- **Spinach Khichdi** - Palak Khichdi (30 mins • Vegetarian • Kids Options)

### Recipe Categories
- **Breakfast**: Traditional South Indian morning dishes
- **Lunch**: Hearty midday meals
- **Dinner**: Comforting evening dishes
- **Side Dish**: Accompaniments and condiments
- **Drinks**: Refreshing beverages
- **Kids Options**: Child-friendly recipes
- **Vegetarian**: Plant-based dishes
- **Upto 30 min**: Quick recipes
- **Upto 60 min**: Medium-duration recipes

## 🎯 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dynamic Routing**: Client-side navigation with React Router
- **Interactive Components**: Stateful components with user interactions
- **Recipe Management**: Detailed recipe pages with ingredients, instructions, and step-by-step images
- **Category Filtering**: Multiple ways to browse recipes (meal type, cooking time, popularity)
- **Smart Breadcrumbs**: Context-aware navigation showing user journey
- **Recipe Meta Information**: Dynamic display of cooking time, dietary type, and meal categories

### User Experience
- **Animated Logo**: CSS animations for the tulip logo with spice particles
- **Hamburger Menu**: Mobile-responsive navigation
- **Email Integration**: Direct email contact via footer (masalatulips27@gmail.com)
- **Social Media Integration**: Links to Instagram, YouTube, and Pinterest
- **Image Optimization**: Full image display with `object-fit: contain`
- **Placeholder Images**: Consistent styling for upcoming recipes
- **Context-Aware Recipe Display**: Smart meal type categorization

### Performance & SEO
- **Lazy Loading**: Images load progressively
- **Optimized Assets**: Compressed images and efficient CSS
- **SEO Friendly**: Meta tags and semantic HTML structure
- **Scroll to Top**: Automatic scroll restoration on navigation
- **Core Web Vitals**: Performance monitoring
- **AdSense Ready**: Proper ads.txt configuration
- **Analytics**: Google Analytics and GTM integration

## 🎨 Design System

### Typography
- **Headings**: `'Playfair Display', Georgia, serif` (elegant, sophisticated)
- **Body Text**: `'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif` (clean, readable)
- **Code**: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`

### Color Palette
- **Primary**: #2c2c2c (Dark Gray)
- **Secondary**: #666666 (Medium Gray)
- **Accent**: #ff6b6b (Coral Red)
- **Background**: #ffffff (White)
- **Light Gray**: #f8f8f8 (Light Background)
- **Border**: #e6e6e6 (Light Border)
- **Hero Background**: #FFF3EB (Light Orange)

### Button Styles
- **Primary Action Buttons**: #FF6B35 (Vibrant Orange)
- **Hover State**: #e65c24 (Darker Orange)
- **Text**: #FFFFFF (White)

### Layout
- **Container**: Max-width 1200px, centered
- **Grid System**: CSS Grid and Flexbox
- **Spacing**: Consistent 16px, 24px, 32px increments
- **Border Radius**: 8px for cards, 12px for images

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation Steps
1. **Navigate to the React app directory**
   ```bash
   cd masala-tulips-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite (when tests are added)
- `npm eject` - Eject from Create React App (irreversible)

## 📊 Data Architecture

### Recipe Data Structure
```typescript
interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cookingTime: string;
  prepTime: string;
  totalTime: string;
  cuisine: string;
  type: string;
  ingredients: string[];
  instructions: Array<{
    step: number;
    title: string;
    description: string;
    images?: string[];
  }>;
  notes: Array<{
    title: string;
    content: string[];
  }>;
  mainImage: string;
  category: string[];
  tags: string[];
}
```

### Navigation System
- **Smart Breadcrumbs**: Tracks user journey using sessionStorage
- **Category Pages**: Dynamic recipe filtering by category
- **Recipe Cards**: Consistent styling with hover effects
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Recipe Meta Display**: Dynamic meal type and dietary information

## 🚀 Deployment

### GitHub Pages with Custom Domain
- **Domain**: masalatulips.nl
- **Build Output**: `/docs` directory
- **AdSense**: Properly configured with ads.txt
- **SEO**: Optimized meta tags and sitemap

### Deployment Process
1. **Build the app**
   ```bash
   cd masala-tulips-react
   npm run build
   ```

2. **Copy build to docs**
   ```bash
   rsync -av build/ ../docs/
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Deploy updates"
   git push origin main
   ```

## 🔧 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks
- **Props**: Interface definitions for all props
- **CSS**: CSS variables for consistent theming

### File Naming
- **Components**: PascalCase (e.g., `RecipePage.tsx`)
- **CSS**: Same name as component (e.g., `RecipePage.css`)
- **Pages**: PascalCase with descriptive names
- **Data**: camelCase (e.g., `recipes.ts`)

### State Management
- **Local State**: useState for component-specific state
- **Session Storage**: For breadcrumb navigation tracking

## 📈 Analytics & Tracking

### Google Analytics
- Page view tracking
- Recipe view events
- User interaction monitoring

### Google Tag Manager
- Enhanced ecommerce tracking
- Custom event tracking
- Conversion monitoring

## 🎯 Recent Updates

### Latest Improvements
- **Removed Contact Section**: Streamlined home page by removing contact form
- **Enhanced Recipe Meta**: Added dynamic meal type display (Breakfast, Lunch, Dinner, Drinks, Kids Options)
- **Email Integration**: Added email icon in footer for direct contact
- **Improved Navigation**: Removed contact link from header navigation
- **Recipe Categorization**: Updated recipe categories for better organization
- **Context-Aware Display**: Smart meal type display based on recipe categories

### Recipe Meta Information
- **Raw Mango Rice**: 30 mins • Vegetarian • Breakfast
- **Vegetable Pulao**: 45 mins • Vegetarian • Lunch
- **Strawberry Milkshake**: 15 mins • Vegetarian • Drinks
- **Spinach Khichdi**: 30 mins • Vegetarian • Kids Options

## 🎯 Future Enhancements

### Planned Features
- **Recipe Search**: Full-text search functionality
- **User Accounts**: User registration and favorites
- **Recipe Ratings**: User rating and review system
- **Recipe Sharing**: Social media sharing buttons
- **Print Recipes**: PDF generation for recipes
- **Recipe Collections**: Curated recipe collections
- **Video Content**: Recipe video integration

### Technical Improvements
- **Performance**: Image lazy loading optimization
- **Accessibility**: WCAG 2.1 compliance
- **PWA**: Progressive Web App features
- **Internationalization**: Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Website**: [https://masalatulips.nl/](https://masalatulips.nl/)
- **Email**: masalatulips27@gmail.com
- **Social Media**: Instagram, YouTube, Pinterest links in footer

---

**Masala Tulips** - Where tradition meets innovation, and every bite tells a story. 