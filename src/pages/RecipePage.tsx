import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './RecipePage.css';

interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cookingTime: string;
  cuisine: string;
  type: string;
  ingredients: string[];
  instructions: Array<{
    step: number;
    title: string;
    description: string;
    image?: string;
  }>;
  notes: Array<{
    title: string;
    content: string[];
  }>;
  mainImage: string;
}

const RecipePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock recipe data - in a real app, this would come from an API or database
  const recipes: Record<string, Recipe> = {
    'mavinakaayi-chitranna': {
      id: 'mavinakaayi-chitranna',
      title: 'Mavinakaayi Chitranna',
      subtitle: 'ಮಾವಿನಕಾಯಿ ಚಿತ್ರಾನ್ನ - Raw Mango Rice',
      description: 'A tangy and flavorful South Indian rice dish made with raw mango, perfect for breakfast or lunch.',
      cookingTime: '30 minutes',
      cuisine: 'South Indian',
      type: 'Vegetarian',
      mainImage: '/images/recipes/mavinakaayi-chitranna/7.jpeg',
      ingredients: [
        '2 cups cooked rice',
        '1 raw mango, grated',
        '2 tbsp oil',
        '1 tsp mustard seeds',
        '1 tsp urad dal',
        '1 tsp chana dal',
        '2-3 green chilies, chopped',
        '1 inch ginger, grated',
        '10-12 curry leaves',
        '1/4 tsp turmeric powder',
        'Salt to taste',
        'Fresh coriander leaves for garnish'
      ],
      instructions: [
        {
          step: 1,
          title: 'Prepare the Rice',
          description: 'Cook rice and let it cool completely. Fluff it with a fork to separate the grains.',
          image: '/images/recipes/mavinakaayi-chitranna/1.jpeg'
        },
        {
          step: 2,
          title: 'Prepare the Mango',
          description: 'Grate the raw mango finely. Make sure to use a raw, sour mango for the authentic taste.',
          image: '/images/recipes/mavinakaayi-chitranna/2.jpeg'
        },
        {
          step: 3,
          title: 'Temper the Spices',
          description: 'Heat oil in a large pan. Add mustard seeds and let them splutter. Add urad dal and chana dal.',
          image: '/images/recipes/mavinakaayi-chitranna/3.jpeg'
        },
        {
          step: 4,
          title: 'Add Aromatics',
          description: 'Add green chilies, ginger, and curry leaves. Sauté for a minute until fragrant.',
          image: '/images/recipes/mavinakaayi-chitranna/4.jpeg'
        },
        {
          step: 5,
          title: 'Mix Everything',
          description: 'Add the grated mango, turmeric powder, and salt. Mix well and cook for 2-3 minutes.',
          image: '/images/recipes/mavinakaayi-chitranna/5.jpeg'
        },
        {
          step: 6,
          title: 'Combine with Rice',
          description: 'Add the cooked rice and gently mix everything together. Be careful not to break the rice grains.',
          image: '/images/recipes/mavinakaayi-chitranna/6.jpeg'
        },
        {
          step: 7,
          title: 'Garnish and Serve',
          description: 'Garnish with fresh coriander leaves and serve hot. Enjoy with papad or pickle.',
          image: '/images/recipes/mavinakaayi-chitranna/7.jpeg'
        }
      ],
      notes: [
        {
          title: 'Tips for Perfect Chitranna',
          content: [
            'Use day-old rice for best results',
            'Make sure the mango is raw and sour',
            'Don\'t overcook the mango mixture',
            'Serve immediately for the best taste'
          ]
        },
        {
          title: 'Variations',
          content: [
            'Add roasted peanuts for extra crunch',
            'Use lemon juice if raw mango is not available',
            'Add grated coconut for a richer flavor',
            'Include roasted cashews for a festive touch'
          ]
        }
      ]
    },
    'vegetable-pulao': {
      id: 'vegetable-pulao',
      title: 'Tharakari Pulao',
      subtitle: 'ತರಕಾರಿ ಪುಲಾವ್ - Vegetable Pulao',
      description: 'A fragrant and colorful rice dish loaded with fresh vegetables and aromatic spices.',
      cookingTime: '45 minutes',
      cuisine: 'South Indian',
      type: 'Vegetarian',
      mainImage: '/images/recipes/veg-pulao/new13.jpeg',
      ingredients: [
        '2 cups basmati rice',
        'Mixed vegetables (carrots, beans, peas, potatoes)',
        '2 tbsp ghee',
        '1 bay leaf',
        '2-3 cardamom pods',
        '1 inch cinnamon stick',
        '4-5 cloves',
        '1 tsp cumin seeds',
        '1 onion, finely chopped',
        '2 tomatoes, chopped',
        '1 tsp ginger-garlic paste',
        '1/2 tsp turmeric powder',
        '1 tsp garam masala',
        'Salt to taste',
        'Fresh coriander for garnish'
      ],
      instructions: [
        {
          step: 1,
          title: 'Prepare the Rice',
          description: 'Wash and soak basmati rice for 30 minutes. Drain and set aside.',
          image: '/images/recipes/veg-pulao/new1.jpeg'
        },
        {
          step: 2,
          title: 'Chop Vegetables',
          description: 'Wash and chop all vegetables into uniform pieces. Keep them ready.',
          image: '/images/recipes/veg-pulao/new2.jpeg'
        },
        {
          step: 3,
          title: 'Temper Whole Spices',
          description: 'Heat ghee in a pressure cooker. Add bay leaf, cardamom, cinnamon, and cloves.',
          image: '/images/recipes/veg-pulao/new3.jpeg'
        },
        {
          step: 4,
          title: 'Sauté Onions',
          description: 'Add cumin seeds and chopped onions. Sauté until onions turn translucent.',
          image: '/images/recipes/veg-pulao/new4.jpeg'
        },
        {
          step: 5,
          title: 'Add Vegetables',
          description: 'Add ginger-garlic paste and all the chopped vegetables. Sauté for 2-3 minutes.',
          image: '/images/recipes/veg-pulao/new5.jpeg'
        },
        {
          step: 6,
          title: 'Add Spices',
          description: 'Add turmeric powder, garam masala, and salt. Mix well.',
          image: '/images/recipes/veg-pulao/new6.jpeg'
        },
        {
          step: 7,
          title: 'Cook Rice',
          description: 'Add the soaked rice and 3.5 cups of water. Pressure cook for 2 whistles.',
          image: '/images/recipes/veg-pulao/new8.jpeg'
        },
        {
          step: 8,
          title: 'Rest and Serve',
          description: 'Let the pressure release naturally. Fluff the rice and garnish with coriander.',
          image: '/images/recipes/veg-pulao/new13.jpeg'
        }
      ],
      notes: [
        {
          title: 'Cooking Tips',
          content: [
            'Use aged basmati rice for better aroma',
            'Don\'t overcook the vegetables',
            'Let the pressure release naturally',
            'Fluff rice gently to avoid breaking grains'
          ]
        },
        {
          title: 'Serving Suggestions',
          content: [
            'Serve with raita and pickle',
            'Accompany with papad or chips',
            'Perfect for lunch boxes',
            'Great for parties and gatherings'
          ]
        }
      ]
    }
  };

  const recipe = recipes[slug || ''];

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
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/recipe-categories">Recipes</Link>
          <span> / </span>
          <span>{recipe.title}</span>
        </nav>

        {/* Recipe Header */}
        <div className="recipe-header">
          <div className="showcase-image">
            <img src={recipe.mainImage} alt={recipe.title} className="main-image" />
          </div>
          <h1>{recipe.title}</h1>
          <p className="recipe-subtitle">{recipe.subtitle}</p>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-meta">
            <span>{recipe.cookingTime}</span>
            <span>•</span>
            <span>{recipe.cuisine}</span>
            <span>•</span>
            <span>{recipe.type}</span>
          </div>
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
                  {instruction.image && (
                    <img 
                      src={instruction.image} 
                      alt={`Step ${instruction.step}`}
                      className="step-image"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <h2>Notes & Tips</h2>
          <div className="notes-grid">
            {recipe.notes.map((note, index) => (
              <div key={index} className="note-item">
                <h3>{note.title}</h3>
                <ul>
                  {note.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage; 