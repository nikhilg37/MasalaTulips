import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeCategories from './pages/RecipeCategories';
import RecipePage from './pages/RecipePage';
import Blogs from './pages/Blogs';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Upto30Min from './pages/Upto30Min';
import Upto60Min from './pages/Upto60Min';
import Vegetarian from './pages/Vegetarian';
import MostPopular from './pages/MostPopular';
import AllRecipes from './pages/AllRecipes';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';

function AnalyticsPageView() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsPageView />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-categories" element={<RecipeCategories />} />
            <Route path="/recipe/:slug" element={<RecipePage />} />
            <Route path="/blogs" element={<Blogs />} />
            
            {/* Meal Type Routes */}
            <Route path="/recipes/breakfast" element={<Breakfast />} />
            <Route path="/recipes/lunch" element={<Lunch />} />
            <Route path="/recipes/dinner" element={<Dinner />} />
            
            {/* Cooking Time Routes */}
            <Route path="/recipes/upto-30-min" element={<Upto30Min />} />
            <Route path="/recipes/upto-60-min" element={<Upto60Min />} />
            
            {/* Popular Categories Routes */}
            <Route path="/recipes/vegetarian" element={<Vegetarian />} />
            <Route path="/recipes/most-popular" element={<MostPopular />} />
            <Route path="/recipes/all-recipes" element={<AllRecipes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
