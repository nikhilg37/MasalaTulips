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
│   │   │   │   ├── Between30to60Min.tsx
│   │   │   │   └── Between60to90Min.tsx
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
- **Raw Mango Lemon Rice** - Mavinakaayi Chitranna (30 mins • Vegetarian • Breakfast)
- **Coconut Lemon Rice** - Kaayi Chitranna (30 mins • Vegetarian • Breakfast)
- **Vegetable Pulao** - Tharakari Pulao (45 mins • Vegetarian • Lunch)
- **Hot Lentil Millet** - Bisi Bele Bath (50 mins • Vegetarian • Dinner)
- **Veg Sambhar** - Tharakari Sambhar (40 mins • Vegetarian • Lunch)
- **Oggarane Mosranna** - Traditional Yogurt Rice (25 mins • Vegetarian • Lunch)

### Quick Meals & Snacks
- **Vegetable Sandwich** - Tharakari Sandwich (25 mins • Vegetarian • Breakfast)
- **Strawberry Milkshake** - Refreshing Summer Drink (15 mins • Vegetarian • Drinks)

### Side Dishes & Condiments
- **Mint Chutney** - Pudina Chutney (15 mins • Vegetarian • Side Dish)

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
- **Most Popular**: Community favorites
- **All Recipes**: Complete recipe collection

### Cooking Time Categories
- **Upto 30 min**: Quick recipes (≤ 30 mins total time)
- **Between 30 - 60 min**: Medium-duration recipes (> 30 mins and ≤ 60 mins total time)
- **Between 60 - 90 min**: Longer recipes (> 60 mins and ≤ 90 mins total time)

## 🎯 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dynamic Routing**: Client-side navigation with React Router
- **Interactive Components**: Stateful components with user interactions
- **Recipe Management**: Detailed recipe pages with ingredients, instructions, and step-by-step images
- **Category Filtering**: Multiple ways to browse recipes (meal type, cooking time, popularity)
- **Smart Breadcrumbs**: Context-aware navigation showing user journey
- **Recipe Meta Information**: Dynamic display of cooking time, dietary type, and meal categories
- **Dynamic Related Recipes**: Intelligent algorithm that suggests related recipes based on shared categories and tags
- **Automatic Category Links**: Context-aware category navigation based on each recipe's attributes

### User Experience
- **Animated Logo**: CSS animations for the tulip logo with spice particles
- **Hamburger Menu**: Mobile-responsive navigation
- **Email Integration**: Direct email contact via footer (masalatulips27@gmail.com)
- **Social Media Integration**: Links to Instagram, YouTube, and Pinterest
- **Image Optimization**: Full image display with `object-fit: contain`
- **Placeholder Images**: Consistent styling for upcoming recipes
- **Context-Aware Recipe Display**: Smart meal type categorization
- **Clean Recipe Interface**: Streamlined recipe pages without distractions
- **Dynamic Related Content**: Intelligent recipe suggestions and category navigation

### Performance & SEO
- **Lazy Loading**: Images load progressively
- **Optimized Assets**: Compressed images and efficient CSS
- **SEO Friendly**: Meta tags and semantic HTML structure
- **Scroll to Top**: Automatic scroll restoration on navigation
- **Core Web Vitals**: Performance monitoring
- **AdSense Ready**: Proper ads.txt configuration
- **Analytics**: Google Analytics and GTM integration
- **Canonical URLs**: Proper canonical tags for SEO
- **Enhanced Sitemap**: Comprehensive sitemap with metadata

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

### Related Recipes Algorithm
```typescript
// Smart matching based on shared categories and tags
const getRelatedRecipes = (currentRecipe: Recipe) => {
  const allRecipes = getAllRecipes();
  return allRecipes
    .filter(recipe => recipe.id !== currentRecipe.id)
    .map(recipe => {
      const sharedCategories = recipe.category.filter(cat => 
        currentRecipe.category.includes(cat)
      );
      const sharedTags = recipe.tags.filter(tag => 
        currentRecipe.tags.includes(tag)
      );
      const score = (sharedCategories.length * 2) + sharedTags.length;
      return { recipe, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.recipe);
};
```

### Navigation System
- **Smart Breadcrumbs**: Tracks user journey using sessionStorage
- **Category Pages**: Dynamic recipe filtering by category
- **Consistent URL Structure**: `/recipe-categories/[category-name]` for all category pages
- **Recipe Cards**: Consistent styling with hover effects
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Recipe Meta Display**: Dynamic meal type and dietary information
- **Related Recipes Algorithm**: 
  - Finds recipes with shared categories (weighted 2x)
  - Considers shared tags for additional relevance
  - Sorts by similarity score and limits to 3 suggestions
  - Excludes current recipe from suggestions
- **Dynamic Category Links**: 
  - Automatically generates relevant category links
  - Maps technical category names to user-friendly labels
  - Prevents duplicate links for overlapping categories
  - Redirects "quick" to "under 30 minutes" for consistency

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
   touch ../docs/.nojekyll
   cp ../docs/index.html ../docs/404.html
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
- **New Recipes Added**: 
  - Coconut Lemon Rice (Kaayi Chitranna)
  - Vegetable Sandwich (Tharakari Sandwich)
  - Hot Lentil Millet (Bisi Bele Bath)
  - Veg Sambhar (Tharakari Sambhar)
  - Oggarane Mosranna (Traditional Yogurt Rice)
- **Dynamic Related Recipes & Categories**: 
  - Smart algorithm that finds related recipes based on shared categories and tags
  - Automatic category link generation based on recipe attributes
  - Intelligent scoring system (categories weighted 2x more than tags)
  - Responsive two-column layout with hover effects
  - Duplicate prevention for overlapping categories
- **Category Link Fixes**: 
  - Fixed "Quick Recipes" link redirecting to "Under 30 Minutes" page
  - All category links now point to valid routes
  - Proper TypeScript type annotations added
- **UI Simplification**: 
  - Removed comments section from recipe pages for cleaner interface
  - Streamlined recipe page layout focusing on content and navigation
- **Consistent URL Structure**: Updated all category routes to use `/recipe-categories/[category-name]` pattern
- **Enhanced Cooking Time Categories**: 
  - "Upto 30 min" for quick recipes (≤ 30 mins total time)
  - "Between 30 - 60 min" for medium recipes (> 30 mins and ≤ 60 mins total time)
  - "Between 60 - 90 min" for longer recipes (> 60 mins and ≤ 90 mins total time)
- **Component Naming Convention**: Renamed cooking time components for better clarity:
  - `Upto30Min.tsx` → `Upto30Min.tsx` (unchanged)
  - `Upto60Min.tsx` → `Between30to60Min.tsx`
  - `Between60Min.tsx` → `Between60to90Min.tsx`
- **Total Time Logic**: Updated cooking time filtering to use total time (prep + cooking) instead of just cooking time
- **Exclusive Range Logic**: Fixed recipe categorization to prevent overlap between time categories
- **Enhanced Recipe Meta**: Added dynamic meal type display (Breakfast, Lunch, Dinner, Drinks, Kids Options)
- **Email Integration**: Added email icon in footer for direct contact (masalatulips27@gmail.com)
- **Improved Navigation**: Removed contact link from header navigation
- **Recipe Categorization**: Updated recipe categories for better organization
- **Context-Aware Display**: Smart meal type display based on recipe categories
- **Removed Contact Section**: Streamlined home page by removing contact form
- **SEO Improvements**: Added canonical URLs, enhanced sitemap, and improved robots.txt
- **Most Popular Filtering**: Removed specific recipes from most popular category for better curation

### Recipe Meta Information
- **Raw Mango Lemon Rice**: 30 mins • Vegetarian • Breakfast
- **Coconut Lemon Rice**: 30 mins • Vegetarian • Breakfast
- **Vegetable Pulao**: 45 mins • Vegetarian • Lunch
- **Hot Lentil Millet**: 50 mins • Vegetarian • Dinner
- **Veg Sambhar**: 40 mins • Vegetarian • Lunch
- **Oggarane Mosranna**: 25 mins • Vegetarian • Lunch
- **Vegetable Sandwich**: 25 mins • Vegetarian • Quick (redirects to Under 30 Minutes)
- **Strawberry Milkshake**: 15 mins • Vegetarian • Drinks
- **Mint Chutney**: 15 mins • Vegetarian • Side Dish
- **Spinach Khichdi**: 30 mins • Vegetarian • Kids Options

### Current Recipe Distribution
- **"Upto 30 min"**: 7 recipes (Raw Mango Lemon Rice, Coconut Lemon Rice, Strawberry Milkshake, Mint Chutney, Spinach Khichdi, Vegetable Sandwich, Oggarane Mosranna)
- **"Between 30 - 60 min"**: 3 recipes (Vegetable Pulao, Hot Lentil Millet, Veg Sambhar)
- **"Between 60 - 90 min"**: 0 recipes (ready for future additions)

### Recipe Page Structure
- **Breadcrumbs**: Context-aware navigation path
- **Recipe Header**: Title, subtitle, description, and timing information
- **Showcase Image**: High-quality main recipe image with hover effects
- **Recipe Grid**: Two-column layout with ingredients and step-by-step instructions
- **Notes Section**: Tips, variations, and cooking advice
- **Related Recipes & Categories**: Dynamic suggestions and category navigation
- **Footer**: Site-wide navigation and social links

### Category Distribution
- **Breakfast**: 2 recipes (Raw Mango Lemon Rice, Coconut Lemon Rice)
- **Lunch**: 3 recipes (Vegetable Pulao, Veg Sambhar, Oggarane Mosranna)
- **Dinner**: 1 recipe (Hot Lentil Millet)
- **Side Dish**: 1 recipe (Mint Chutney)
- **Drinks**: 1 recipe (Strawberry Milkshake)
- **Kids Options**: 1 recipe (Spinach Khichdi)
- **Quick**: 1 recipe (Vegetable Sandwich) - Redirects to "Under 30 Minutes"
- **Vegetarian**: 10 recipes (all recipes are vegetarian)

## 🎯 Future Enhancements

### Planned Features
- **Recipe Search**: Full-text search functionality
- **User Accounts**: User registration and favorites
- **Recipe Ratings**: User rating and review system
- **Recipe Sharing**: Social media sharing buttons
- **Print Recipes**: PDF generation for recipes
- **Recipe Collections**: Curated recipe collections
- **Video Content**: Recipe video integration
- **More Cooking Time Categories**: Additional time ranges as recipe collection grows (e.g., "Between 90 - 120 min", "More than 120 min")
- **Recipe Difficulty Levels**: Easy, Medium, Hard categorization
- **Enhanced Related Recipes**: 
  - Machine learning-based recipe recommendations
  - User behavior tracking for personalized suggestions
  - Seasonal and dietary preference filtering
- **Advanced Category Management**: 
  - Custom category creation
  - Category-based recipe collections
  - Cross-category recipe suggestions
- **Recipe Comments**: Future implementation of user feedback system

### Technical Improvements
- **Performance**: Image lazy loading optimization
- **Accessibility**: WCAG 2.1 compliance
- **PWA**: Progressive Web App features
- **Internationalization**: Multi-language support
- **TypeScript Enhancement**: Strict type checking and improved type safety
- **Component Optimization**: Better separation of concerns and reusability
- **SEO Enhancement**: Improved internal linking and content discovery
- **Code Cleanup**: Removed unused comment functionality for cleaner codebase

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

## 🎯 Project Status

### Current State
- ✅ **10 Complete Recipes**: All with detailed ingredients, instructions, and images
- ✅ **Dynamic Related Recipes**: Intelligent algorithm working across all recipes
- ✅ **Responsive Design**: Optimized for all devices and screen sizes
- ✅ **SEO Optimized**: Complete sitemap, canonical URLs, and meta tags
- ✅ **Clean Codebase**: TypeScript compliance and modern React patterns
- ✅ **Performance Optimized**: Fast loading and smooth user experience

### Recent Achievements
- 🆕 **Oggarane Mosranna**: Latest traditional South Indian recipe added
- 🔧 **Related Recipes System**: Smart content discovery implemented
- 🎨 **UI Simplification**: Cleaner, more focused recipe pages
- 🔗 **Category Navigation**: Fixed all broken links and redirects
- 📊 **Analytics Integration**: Complete tracking and monitoring

### Next Milestones
- 🔍 **Recipe Search**: Full-text search functionality
- 📱 **PWA Features**: Offline support and app-like experience
- 🌍 **Internationalization**: Multi-language support
- 📈 **Advanced Analytics**: User behavior insights and optimization

---

**Masala Tulips** - Where tradition meets innovation, and every bite tells a story. 