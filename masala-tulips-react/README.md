# Masala Tulips React App

A modern React.js implementation of the Masala Tulips recipe website, featuring a responsive design, dynamic routing, and interactive components.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: CSS3 with responsive design
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Icons**: Font Awesome 6
- **Analytics**: Google Analytics integration

## 📁 Project Structure

```
MasalaTulips/
├── masala-tulips-react/     # Main React application
│   ├── public/
│   │   ├── images/          # Recipe images and assets
│   │   ├── favicon.ico
│   │   └── index.html       # Main HTML template
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── RecipeList.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── RecipeCategories.tsx
│   │   │   ├── RecipePage.tsx
│   │   │   ├── Blogs.tsx
│   │   │   ├── Breakfast.tsx
│   │   │   ├── Lunch.tsx
│   │   │   ├── Dinner.tsx
│   │   │   ├── Upto30Min.tsx
│   │   │   ├── Upto60Min.tsx
│   │   │   ├── Vegetarian.tsx
│   │   │   ├── MostPopular.tsx
│   │   │   └── AllRecipes.tsx
│   │   ├── data/           # Recipe data and content
│   │   │   └── recipes.ts
│   │   ├── styles/         # CSS stylesheets
│   │   │   └── App.css
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── index.tsx       # App entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── docs/                   # Built/deployed website files
├── images/                 # Recipe images (shared)
├── public/                 # Static files for deployment
├── CNAME                   # Custom domain configuration
├── robots.txt              # SEO configuration
├── sitemap.xml             # Site map for search engines
└── ads.txt                 # Ad configuration
```

## 🎯 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dynamic Routing**: Client-side navigation with React Router
- **Interactive Components**: Stateful components with user interactions
- **Recipe Management**: Detailed recipe pages with ingredients, instructions, and images
- **Category Filtering**: Multiple ways to browse recipes (meal type, cooking time, popularity)

### User Experience
- **Animated Logo**: CSS animations for the tulip logo
- **Hamburger Menu**: Mobile-responsive navigation
- **Contact Form**: Functional contact form with validation
- **Comment System**: Interactive comments on recipe pages
- **Social Media Integration**: Links to Instagram, YouTube, and Pinterest
- **Breadcrumb Navigation**: Clear navigation paths throughout the site

### Performance
- **Lazy Loading**: Images load progressively
- **Optimized Assets**: Compressed images and efficient CSS
- **SEO Friendly**: Meta tags and semantic HTML structure
- **Scroll to Top**: Automatic scroll restoration on navigation

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
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App (irreversible)
- `npm run deploy` - Deploy to GitHub Pages

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

### Component Props
- **RecipeList**: Accepts `recipes` array and renders recipe cards with breadcrumbs
- **RecipePage**: Accepts `recipeId` and fetches recipe data
- **Header**: Accepts `isHome` boolean for conditional styling
- **Footer**: No props, static social media links

## 🎨 Design System

### Color Palette
- **Primary**: #8B4513 (Saddle Brown)
- **Secondary**: #FF6B35 (Orange)
- **Accent**: #4CAF50 (Green)
- **Background**: #FFFFFF (White)
- **Text**: #333333 (Dark Gray)

### Typography
- **Headings**: Georgia, serif
- **Body**: Arial, sans-serif
- **Font Sizes**: Responsive scale (16px base)

### Layout
- **Container**: Max-width 1200px, centered
- **Grid System**: CSS Grid and Flexbox
- **Spacing**: Consistent 16px, 24px, 32px increments

## 🔧 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks
- **Props**: Interface definitions for all props
- **CSS**: BEM methodology for class naming

### File Naming
- **Components**: PascalCase (e.g., `RecipePage.tsx`)
- **CSS**: Same name as component (e.g., `RecipePage.css`)
- **Pages**: PascalCase with descriptive names
- **Data**: camelCase (e.g., `recipes.ts`)

### State Management
- **Local State**: useState for component-specific state
- **Form State**: Controlled components with validation
- **Global State**: Context API for shared data (if needed)

## 🚀 Deployment (GitHub Pages + Custom Domain)

### Live Site
- **Production:** [https://masalatulips.nl/](https://masalatulips.nl/)

### How to Deploy

1. **Build the app**
   ```bash
   cd masala-tulips-react
   npm run build
   ```

2. **Copy the build output to `/docs`**
   ```bash
   rsync -av build/ ../docs/
   ```

3. **Ensure `.nojekyll` is present in `/docs`**
   ```bash
   touch ../docs/.nojekyll
   ```

4. **Add a 404.html for client-side routing**
   ```bash
   cp ../docs/index.html ../docs/404.html
   ```

5. **Commit and push**
   ```bash
   cd ..
   git add docs
   git commit -m "Deploy new build to docs for GitHub Pages"
   git push
   ```

6. **GitHub Pages Settings**
   - Go to your repo's **Settings > Pages**.
   - Set the source to your branch (e.g., `main`) and `/docs` folder.

7. **Custom Domain**
   - Make sure `docs/CNAME` contains `masalatulips.nl`.

---

### 🛠️ Notes

- The `"homepage"` field in `package.json` should be `"."` for custom domain deployments.
- All client-side routes (e.g., `/recipe-categories`) work due to the presence of `404.html`.
- If you see a blank page or 404, check that all steps above are followed and that your DNS is set up correctly.

---

## 🧪 Testing Strategy

### Unit Testing
- **Components**: React Testing Library
- **Utilities**: Jest
- **Coverage**: Aim for 80%+ coverage

### Integration Testing
- **User Flows**: End-to-end testing with Cypress
- **Navigation**: Route testing
- **Forms**: Form submission testing

### Performance Testing
- **Lighthouse**: Core Web Vitals
- **Bundle Analysis**: Webpack bundle analyzer
- **Image Optimization**: WebP format support

## 📝 Recent Updates

- **Project Cleanup**: Removed redundant `src/` and `RecipesByMealType/` folders
- **Modern React**: Updated to React 19 and React Router v7
- **Improved Structure**: Better organization of components and pages
- **Enhanced Navigation**: Added breadcrumb navigation and scroll restoration 