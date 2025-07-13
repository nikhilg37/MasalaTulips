import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeBySlug } from '../data/recipes';
import '../styles/RecipePage.css';
import { trackGAEvent, trackGTMEvent } from '../utils/analytics';

const RecipePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = getRecipeBySlug(slug || '');
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    comment: ''
  });

  useEffect(() => {
    if (recipe) {
      trackGAEvent({
        action: 'view',
        category: 'Recipe',
        label: recipe.title,
      });
      trackGTMEvent('recipe_view', { recipeId: recipe.id, title: recipe.title });
    }
  }, [recipe]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track comment form submission
    trackGAEvent({
      action: 'submit',
      category: 'Comment Form',
      label: recipe ? recipe.title : 'Unknown Recipe',
    });
    trackGTMEvent('comment_form_submit', { recipeId: recipe ? recipe.id : undefined });
    alert('Thank you for your comment! This feature is coming soon.');
    setCommentForm({ name: '', email: '', comment: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <div className="container">
          <h1>Recipe Not Found</h1>
          <p>The recipe you're looking for doesn't exist.</p>
          <Link to="/" className="back-home">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-page">
      <div className="recipe-container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/recipe-categories">Recipes</Link>
          <span> &gt; </span>
          <span>{recipe.title}</span>
        </div>

        {/* Recipe Header */}
        <div className="recipe-header">
          <h1>{recipe.title} - {recipe.subtitle}</h1>
          <p>{recipe.description}</p>
          <div className="recipe-time">
            <i className="far fa-clock"></i>
            <span>Prep Time: {recipe.prepTime} | Cook Time: {recipe.cookingTime} | Total Time: {recipe.totalTime}</span>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="showcase-image">
          <img src={recipe.mainImage} alt={recipe.title} className="main-image" />
        </div>

        {/* Recipe Content */}
        <div className="recipe-grid">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="recipe-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step}>
                  <h3>{instruction.step}. {instruction.title}</h3>
                  <p>{instruction.description}</p>
                  {instruction.images && instruction.images.length > 0 && (
                    <div className="step-images">
                      {instruction.images.map((image, imageIndex) => (
                        <img 
                          key={imageIndex}
                          src={image} 
                          alt={`Step ${instruction.step}`}
                          className="step-image"
                        />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <h2>Notes & Variations</h2>
          <div className="notes-grid">
            {recipe.notes.map((note, index) => (
              <div key={index}>
                <h3>{note.title}</h3>
                <ul className="ingredients-list">
                  {note.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Related Recipes Section */}
        <div className="notes-section">
          <h2>Related Recipes & Categories</h2>
          <ul className="ingredients-list">
            <li><Link to="/recipe/vegetable-pulao">Tharakari Pulao (Vegetable Pulao)</Link></li>
            <li><Link to="/recipes/vegetarian">See all Vegetarian Recipes</Link></li>
            <li><Link to="/recipes/lunch">See all Lunch Recipes</Link></li>
            <li><Link to="/recipes/all-recipes">Browse All Recipes</Link></li>
          </ul>
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <div className="recipe-container">
          <h2>Comments</h2>
          <div className="comments-form">
            <form onSubmit={handleCommentSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={commentForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={commentForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  value={commentForm.comment}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Post Comment</button>
            </form>
          </div>
          <div className="comments-list">
            {/* Comments will be dynamically added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage; 