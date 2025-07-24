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
import Upto30Min from './pages/recipesByCookingTime/Upto30Min';
import Between30to60Min from './pages/recipesByCookingTime/Between30to60Min';
import Between60to90Min from './pages/recipesByCookingTime/Between60to90Min';
import Vegetarian from './pages/recipesByPopularCategory/Vegetarian';
import MostPopular from './pages/recipesByPopularCategory/MostPopular';
import AllRecipes from './pages/recipesByPopularCategory/AllRecipes';
import SideDish from './pages/recipesByMealType/SideDish';
import Drinks from './pages/recipesByMealType/Drinks';
import KidsOptions from './pages/recipesByMealType/KidsOptions';
import RecipeList from './pages/RecipeList';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
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
            <Route path="/recipe-categories/side-dish" element={<SideDish />} />
            <Route path="/recipe-categories/drinks" element={<Drinks />} />
            <Route path="/recipe-categories/kids-options" element={<KidsOptions />} />
            
            {/* Cooking Time Routes */}
            <Route path="/recipe-categories/upto-30-min" element={<Upto30Min />} />
            <Route path="/recipe-categories/between-30-60-min" element={<Between30to60Min />} />
            <Route path="/recipe-categories/between-60-90-min" element={<RecipeList title="Recipes Between 60-90 Minutes" description="Delicious recipes that take between 60-90 minutes to prepare!" recipes={[]} breadcrumbPath="/recipe-categories/between-60-90-min" breadcrumbLabel="Between 60 - 90 min" />} />
            
            {/* Popular Categories Routes */}
            <Route path="/recipe-categories/vegetarian" element={<Vegetarian />} />
            <Route path="/recipe-categories/most-popular" element={<MostPopular />} />
            <Route path="/recipe-categories/all-recipes" element={<AllRecipes />} />
            
            {/* Legal Pages Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* 404 Route - Catch all invalid routes */}
            <Route path="*" element={
              <div className="not-found-page">
                <div className="container">
                  <h1>Page Not Found</h1>
                  <p>Sorry, the page you're looking for doesn't exist.</p>
                  <p>Please check the URL or navigate back to our <a href="/">home page</a> to explore our recipe collection.</p>
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
