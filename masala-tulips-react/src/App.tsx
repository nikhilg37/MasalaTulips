import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeCategories from './pages/RecipeCategories';
import RecipePage from './pages/RecipePage';
import Blogs from './pages/Blogs';
import Breakfast from './pages/recipesByMealType/Breakfast';
import Lunch from './pages/recipesByMealType/Lunch';
import Dinner from './pages/recipesByMealType/Dinner';
import Starters from './pages/recipesByMealType/Starters';
import SideDish from './pages/recipesByMealType/SideDish';
import Drinks from './pages/recipesByMealType/Drinks';
import Snacks from './pages/recipesByMealType/Snacks';
import Desserts from './pages/recipesByMealType/Desserts';
import KidsOptions from './pages/recipesByMealType/KidsOptions';
import Upto30Min from './pages/recipesByCookingTime/Upto30Min';
import Between30to60Min from './pages/recipesByCookingTime/Between30to60Min';

import MoreThan120Min from './pages/recipesByCookingTime/MoreThan120Min';
import Vegetarian from './pages/recipesByPopularCategory/Vegetarian';
import Vegan from './pages/recipesByPopularCategory/Vegan';
import Salads from './pages/recipesByPopularCategory/Salads';
import MostPopular from './pages/recipesByPopularCategory/MostPopular';
import AllRecipes from './pages/recipesByPopularCategory/AllRecipes';
import RecipeList from './pages/RecipeList';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';
import { initializePerformanceMonitoring } from './utils/performance';

function AnalyticsPageView() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    initializePerformanceMonitoring();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnalyticsPageView />
      <div className="App">
        <Header />
        <main>
          <CookieConsent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-categories" element={<RecipeCategories />} />
            <Route path="/recipe/:slug" element={<RecipePage />} />
            <Route path="/blogs" element={<Blogs />} />
            
            {/* Meal Type Routes */}
            <Route path="/recipe-categories/breakfast" element={<Breakfast />} />
            <Route path="/recipe-categories/lunch" element={<Lunch />} />
            <Route path="/recipe-categories/dinner" element={<Dinner />} />
            <Route path="/recipe-categories/starters" element={<Starters />} />
            <Route path="/recipe-categories/side-dish" element={<SideDish />} />
            <Route path="/recipe-categories/drinks" element={<Drinks />} />
            <Route path="/recipe-categories/snacks" element={<Snacks />} />
            <Route path="/recipe-categories/desserts" element={<Desserts />} />
            <Route path="/recipe-categories/kids-options" element={<KidsOptions />} />
            
            {/* Cooking Time Routes */}
            <Route path="/recipe-categories/upto-30-min" element={<Upto30Min />} />
            <Route path="/recipe-categories/between-30-60-min" element={<Between30to60Min />} />
            <Route path="/recipe-categories/more-than-120-min" element={<MoreThan120Min />} />
            
            {/* Popular Categories Routes */}
            <Route path="/recipe-categories/vegetarian" element={<Vegetarian />} />
            <Route path="/recipe-categories/vegan" element={<Vegan />} />
            <Route path="/recipe-categories/salads" element={<Salads />} />
            <Route path="/recipe-categories/most-popular" element={<MostPopular />} />
            <Route path="/recipe-categories/all-recipes" element={<AllRecipes />} />
            
            {/* Legal Pages Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* 404 Route - Catch all invalid routes - NO ADS */}
            <Route path="*" element={
              <div className="not-found-page">
                <div className="container">
                  <h1>Page Not Found</h1>
                  <p>Sorry, the page you're looking for doesn't exist.</p>
                  <p>Please check the URL or navigate back to our <a href="/">home page</a> to explore our recipe collection.</p>
                  <div className="suggested-content">
                    <h2>Explore Our Recipe Collection</h2>
                    <p>Discover delicious recipes from our popular categories:</p>
                    <ul>
                      <li><a href="/recipe-categories/breakfast">Breakfast Recipes</a> - Start your day with traditional South Indian breakfast dishes</li>
                      <li><a href="/recipe-categories/most-popular">Most Popular Recipes</a> - Our community's favorite dishes</li>
                      <li><a href="/recipe-categories/vegetarian">Vegetarian Recipes</a> - Plant-based meals full of flavor</li>
                      <li><a href="/recipe-categories/upto-30-min">Quick Recipes</a> - Delicious meals ready in 30 minutes or less</li>
                    </ul>
                    <p>Or browse our <a href="/blogs">food blog</a> to explore international cuisine and restaurant experiences.</p>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
