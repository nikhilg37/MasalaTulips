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

## 📁 Project Structure (Updated)

```
MasalaTulips/
├── masala-tulips-react/     # Main React application
│   ├── public/
│   │   ├── images/          # Recipe images and assets
│   │   ├── socialMediaLogo/ # Custom branding assets
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── index.html       # Main HTML template
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── recipesByPopularCategory/
│   │   │   │   ├── AllRecipes.tsx
│   │   │   │   ├── MostPopular.tsx
│   │   │   │   └── Vegetarian.tsx
│   │   │   ├── recipesByMealType/
│   │   │   │   ├── Breakfast.tsx
│   │   │   │   ├── Lunch.tsx
│   │   │   │   └── Dinner.tsx
│   │   │   ├── recipesByCookingTime/
│   │   │   │   ├── Upto30Min.tsx
│   │   │   │   └── Upto60Min.tsx
│   │   │   ├── RecipeList.tsx
│   │   │   ├── RecipePage.tsx
│   │   │   ├── RecipeCategories.tsx
│   │   │   ├── Home.tsx
│   │   │   └── Blogs.tsx
│   │   ├── data/           # Recipe data and content
│   │   │   └── recipes.ts
│   │   ├── styles/         # All CSS stylesheets (centralized, flat)
│   │   │   ├── App.css
│   │   │   ├── Blogs.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── Home.css
│   │   │   ├── RecipeCategories.css
│   │   │   ├── RecipeList.css
│   │   │   └── RecipePage.css
│   │   ├── utils/          # Utility functions
│   │   │   └── analytics.ts
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── index.tsx       # App entry point
│   │   ├── index.css       # Global styles
│   │   ├── react-app-env.d.ts # TypeScript declarations
│   │   └── reportWebVitals.ts # Performance monitoring
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── docs/                   # Built/deployed website files (GitHub Pages)
├── images/                 # Recipe images (shared)
├── CNAME                   # Custom domain configuration
├── robots.txt              # SEO configuration
├── sitemap.xml             # Site map for search engines
└── ads.txt                 # Ad configuration
```

**All CSS files are now centralized in `src/styles/` (flat structure).**
Recipe category pages are organized in subfolders by type (PopularCategory, MealType, CookingTime).
**Project cleanup completed:** Removed unused files (logo.svg, App.test.tsx, setupTests.ts) for cleaner structure.

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
- **Core Web Vitals**: Performance monitoring with reportWebVitals

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

### CSS Organization
- **Centralized Flat Structure**: All CSS files are located in `src/styles/` and imported into their respective components/pages. No CSS files are colocated with components or pages.

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

### Deployment Notes
- The `docs/` folder contains the built/deployed version of your website
- GitHub Pages serves your site from this folder
- All static assets are optimized for production
- Client-side routing works via the 404.html fallback

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

## 📈 Analytics & Event Tracking

This project includes robust Google Analytics (gtag.js) and Google Tag Manager (GTM) event tracking for key user interactions.

### Automatically Tracked Events
- **Page Views:** Every route change is tracked as a page view.
- **Contact Form Submission:** When a user submits the contact form on the Home page.
- **Recipe Views:** When a user views a recipe page.
- **Comment Form Submission:** When a user submits a comment on a recipe page.
- **Social Link Clicks:** When a user clicks Instagram, YouTube, or Pinterest links in the footer.

### How to Track Custom Events
Use the utility functions in `src/utils/analytics.ts`:

```js
import { trackGAEvent, trackGTMEvent } from './utils/analytics';

// Google Analytics event
trackGAEvent({
  action: 'click',
  category: 'Button',
  label: 'Subscribe Button',
});

// Google Tag Manager event
trackGTMEvent('custom_event', { customData: 'value' });
```

### Adding New Events
- For any new button, form, or interaction, call the above functions in your React component.
- See `Home.tsx`, `RecipePage.tsx`, and `Footer.tsx` for examples.

### Implementation Note
- **Page view tracking** is implemented via an `AnalyticsPageView` component, which is rendered inside the `<Router>` in `App.tsx`. This ensures React Router hooks like `useLocation()` are only used within a valid Router context.

### Troubleshooting
- If you see an error like `useLocation() may be used only in the context of a <Router> component`, make sure any hooks using `useLocation` are only called inside components rendered within a `<Router>`.

---

## 📝 Recent Updates

- **Modern React**: Updated to React 19 and React Router v7
- **Improved Structure**: Better organization of components and pages
- **Enhanced Navigation**: Added breadcrumb navigation and scroll restoration 