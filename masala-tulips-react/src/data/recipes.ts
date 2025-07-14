export interface Recipe {
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

export const recipes: Record<string, Recipe> = {
  'mavinakaayi-chitranna': {
    id: 'mavinakaayi-chitranna',
    title: 'Mavinakaayi Chitranna',
    subtitle: '"ಮಾವಿನಕಾಯಿ ಚಿತ್ರಾನ್ನ" - Raw Mango Rice',
    description: 'A tangy and refreshing South Indian rice dish made with raw mangoes, tempered with aromatic spices, and garnished with fresh herbs. This traditional recipe brings together the perfect balance of sour, spicy, and savory flavors that will transport you straight to the heart of Karnataka.',
    cookingTime: '15 mins',
    prepTime: '15 mins',
    totalTime: '30 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/mavinakaayi-chitranna/7.jpeg',
    category: ['breakfast', 'lunch', 'vegetarian', 'quick'],
    tags: ['south-indian', 'mango', 'rice', 'tangy'],
    ingredients: [
      '2 cups cooked rice',
      '2 finely chopped onions',
      '1 medium raw mango, grated',
      '2 tablespoons oil',
      '1 teaspoon mustard seeds',
      '1 teaspoon cumin seeds',
      '1 teaspoon urad dal',
      '1 teaspoon chana dal',
      '1 complete garlic pod',
      'A pinch of asafoetida',
      '3-4 finely chopped dry green chilies',
      '10-12 curry leaves',
      '1/4 cup peanuts',
      '1/4 teaspoon turmeric powder',
      'Salt to taste',
      'Fresh coriander leaves for garnish'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Rice and Roast the Peanuts',
        description: 'Cook rice and let it cool completely. Roast the peanuts in a pan with a little oil until they are slightly golden brown.',
        images: []
      },
      {
        step: 2,
        title: 'Prepare the Vegetables',
        description: 'Wash and peel the raw mango. Grate it finely and set aside. Chop the onions finely and set aside.',
        images: [
          '/images/recipes/mavinakaayi-chitranna/1.jpeg',
          '/images/recipes/mavinakaayi-chitranna/3.jpeg',
          '/images/recipes/mavinakaayi-chitranna/2.jpeg'
        ]
      },
      {
        step: 3,
        title: 'Make the Tempering',
        description: 'Heat oil in a large pan. Add cumin seeds, mustard seeds, and asafoetida. Let them splutter and add urad dal, chana dal. Also add 10-12 curry leaves, finely chopped garlic and 3-4 finely slit green chilies. Fry until the dals turn golden brown. Add the chopped onions and fry until they are translucent.',
        images: [
          '/images/recipes/mavinakaayi-chitranna/4.jpeg',
          '/images/recipes/mavinakaayi-chitranna/5.jpeg'
        ]
      },
      {
        step: 4,
        title: 'Add Aromatics and Grated Raw Mango',
        description: 'Add turmeric powder and grated raw mango. Mix well and cook for 2-3 minutes until the mango softens slightly.',
        images: [
          '/images/recipes/mavinakaayi-chitranna/6.jpeg'
        ]
      },
      {
        step: 5,
        title: 'Mix with Rice and add Salt',
        description: 'Add the cooled rice and salt. Gently mix everything together, taking care not to break the rice grains.',
        images: [
          '/images/recipes/mavinakaayi-chitranna/8.jpeg'
        ]
      },
      {
        step: 6,
        title: 'Garnish and Serve',
        description: 'Garnish with fresh coriander leaves, peanuts and serve warm or at room temperature.',
        images: [
          '/images/recipes/mavinakaayi-chitranna/9.jpeg'
        ]
      }
    ],
    notes: [
      {
        title: 'Notes',
        content: [
          'Choose firm, green raw mangoes for the best tangy flavor.',
          'You can adjust the amount of raw mango based on how tangy you prefer the dish.',
          'For a spicier version, add finely chopped extra green chilies during tempering.',
          'This dish can be stored in the refrigerator for up to 2 days.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add grated coconut for a richer flavor.',
          'Include roasted cashews for extra crunch.',
          'Try with different types of rice like brown rice or basmati rice.',
          'Add finely chopped vegetables like carrots or beans for extra nutrition.'
        ]
      }
    ]
  },
  'vegetable-pulao': {
    id: 'vegetable-pulao',
    title: 'Tharakari Pulao',
    subtitle: '"ತರಕಾರಿ ಪುಲಾವ್" - Vegetable Pulao',
    description: 'Aromatic and flavorful vegetable pulao made with basmati/sona masuri rice, fresh vegetables, and aromatic spices. This one-pot dish is perfect for lunch or dinner, combining the goodness of mixed vegetables with the fragrant essence of whole spices and herbs.',
    cookingTime: '20 mins',
    prepTime: '25 mins',
    totalTime: '45 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/veg-pulao/new13.jpeg',
    category: ['lunch', 'dinner', 'vegetarian'],
    tags: ['vegetable-pulao', 'tharakari-pulao', 'indian-rice', 'vegetarian-recipe'],
    ingredients: [
      '2 cups Sona Masuri Rice/Basmati Rice',
      '1 plate mixed vegetables (carrots, beans, peas, potatoes, kohlrabi etc.)',
      '1 large onion, finely chopped',
      '2 tomatoes, chopped',
      'Handful of finely chopped pudina(mint) leaves',
      '5-6 green chilies, slit',
      '1 inch ginger, grated',
      '4-5 garlic cloves, minced',
      '2 bay leaves',
      '4-5 cloves',
      '2-3 cardamom pods',
      '1 inch cinnamon stick',
      '1 teaspoon cumin seeds',
      '1/2 teaspoon turmeric powder',
      '1 small packet of coconut milk',
      '1 teaspoon garam masala',
      '1/4 cup fresh coriander leaves',
      '1/4 cup mint leaves',
      '3 tablespoons ghee or oil',
      'Salt to taste',
      '4 cups water'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Rice',
        description: 'Wash the basmati rice thoroughly and soak it in water for 30 minutes. Drain and set aside.',
        images: []
      },
      {
        step: 2,
        title: 'Prepare the Vegetables',
        description: 'Wash and chop all the vegetables. Finely chop onions, tomatoes etc.',
        images: [
          '/images/recipes/veg-pulao/new2.jpeg',
          '/images/recipes/veg-pulao/new3.jpeg',
          '/images/recipes/veg-pulao/new5.jpeg',
          '/images/recipes/veg-pulao/new6.jpeg'
        ]
      },
      {
        step: 3,
        title: 'Heat Oil and Add Whole Spices',
        description: 'Heat ghee or oil in a large pot. Add bay leaves, cloves, cardamom pods, cinnamon stick, and cumin seeds. Let them splutter for a few seconds.',
        images: ['/images/recipes/veg-pulao/new1.jpeg']
      },
      {
        step: 4,
        title: 'Sauté Onions and Aromatics',
        description: 'Add chopped onions and sauté until they turn translucent. Add ginger-garlic and green chilies paste. Cook for 2-3 minutes until fragrant.',
        images: ['/images/recipes/veg-pulao/new8.jpeg']
      },
      {
        step: 5,
        title: 'Add Vegetables and Spices',
        description: 'Add the mixed vegetables and cook for 3-4 minutes. Add turmeric powder, garam masala, and salt. Mix well.',
        images: [
          '/images/recipes/veg-pulao/new9.jpeg',
          '/images/recipes/veg-pulao/new10.jpeg'
        ]
      },
      {
        step: 6,
        title: 'Add Rice and Water',
        description: 'Add the drained rice and gently mix with the vegetables. Add 4 cups of water and bring to a boil. Also add soya chunks if you want.',
        images: ['/images/recipes/veg-pulao/new11.jpeg']
      },
      {
        step: 7,
        title: 'Add Coconut Milk and Pudina(mint) Leaves',
        description: 'Add the coconut milk and pudina(mint) leaves. Mix well.',
        images: ['/images/recipes/veg-pulao/new12.jpeg']
      },
      {
        step: 8,
        title: 'Cook the Pulao',
        description: 'Reduce heat to low, cover the pot, and cook for 15-20 minutes until the rice is fully cooked and water is absorbed.',
        images: []
      },
      {
        step: 9,
        title: 'Add Fresh Coriander and Serve',
        description: 'Once cooked, add fresh coriander leaves. Gently fluff the rice with a fork and let it rest for 5 minutes before serving.',
        images: ['/images/recipes/veg-pulao/new13.jpeg']
      }
    ],
    notes: [
      {
        title: 'Notes',
        content: [
          'Soaking the rice for 30 minutes ensures even cooking and fluffy texture.',
          'You can use any combination of vegetables you prefer.',
          'For a richer flavor, use ghee instead of oil.',
          'Don\'t stir the rice too much while cooking to avoid breaking the grains.',
          'Let the pulao rest for 5 minutes after cooking for better texture.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add paneer cubes for a protein-rich version.',
          'Include cashews and raisins for a festive touch.',
          'Try with brown rice for a healthier option.',
          'Add saffron soaked in warm milk for a royal pulao.',
          'Use coconut milk instead of water for a creamy texture.'
        ]
      }
    ]
  },
  'mint-chutney': {
    id: 'mint-chutney',
    title: 'Mint Chutney',
    subtitle: 'Pudina Chutney',
    description: 'A refreshing and tangy Indian condiment made with fresh mint leaves, coriander, green chilies, and spices. Perfect as a dip for snacks or a side for Indian meals.',
    cookingTime: '5 mins',
    prepTime: '10 mins',
    totalTime: '15 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/mint-chutney/im6.jpeg',
    category: ['side-dish', 'all-recipes', 'upto-30-min'],
    tags: ['chutney', 'mint', 'dip', 'condiment', 'vegetarian'],
    ingredients: [
      '1 cup fresh mint leaves',
      '1/2 cup fresh coriander leaves',
      '4-5 green chilies(Depending on your spice preference)',
      '1-inch piece ginger',
      '1 tablespoon oil',
      'A bit of tamrind',
      'Salt to taste',
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Ingredients',
        description: 'Wash the mint and coriander leaves thoroughly. Roughly chop the green chilies and tamrind.',
        images: ['/images/recipes/mint-chutney/im2.jpeg']
      },
      {
        step: 2,
        title: 'Fry the Ingredients',
        description: 'Fry the chopped mint, green chilies for 2-3 minutes.',
        images: ['/images/recipes/mint-chutney/im3.jpeg', '/images/recipes/mint-chutney/im4.jpeg']
      },
      {
        step: 3,
        title: 'Add the Ingredients to the Blender',
        description: 'Add the fried mint, green chilies, tamrind, salt to the blender. Blend to a smooth paste. The add chopped coriander leaves and blend again.',
        images: ['/images/recipes/mint-chutney/im5.jpeg']
      },

      {
        step: 4,
        title: 'Serve',
        description: 'Transfer the chutney to a bowl. Serve immediately as a dip with snacks or as a side with Indian meals. Store leftovers in the refrigerator for up to 2 days.',
        images: ['/images/recipes/mint-chutney/im6.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Adjust the number of green chilies to your spice preference.',
          'Add a small clove of garlic for extra flavor if desired.',
          'A spoonful of yogurt can be added for a creamy texture.'
        ]
      }
    ]
  },
  'strawberry-milkshake': {
    id: 'strawberry-milkshake',
    title: 'Strawberry Milkshake',
    subtitle: 'Refreshing Summer Drink',
    description: 'A creamy, refreshing milkshake made with fresh strawberries, milk, and a touch of sweetness. Perfect for hot summer days or as a quick, delicious treat for kids and adults alike.',
    cookingTime: '5 mins',
    prepTime: '5 mins',
    totalTime: '10 mins',
    cuisine: '',
    type: 'Vegetarian',
    mainImage: '/images/recipes/strawberry-milkshake/img1.jpeg',
    category: ['drinks', 'all-recipes', 'upto-30-min'],
    tags: ['milkshake', 'strawberry', 'drink', 'vegetarian', 'summer'],
    ingredients: [
      '1 cup fresh strawberries, hulled and chopped',
      '1.5 cups chilled milk',
      '1 piece of chopped banana',
      '1/2 cup flavoured yogurt',
      '2-3 tablespoons sugar (Optional)',
      '2-3 ice cubes (Optional)',
      'Fresh strawberries for garnish'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Strawberries',
        description: 'Wash, hull, and chop the strawberries. Reserve a few for garnish if desired.',
        images: ['/images/recipes/strawberry-milkshake/img1.jpeg']
      },
      {
        step: 2,
        title: 'Blend the Milkshake',
        description: 'Add chopped strawberries, chilled milk, chopped banana, yogurt, sugar(Optional) to a blender. Blend until smooth and creamy. For a richer shake, add a scoop of vanilla ice cream and blend again.',
       images: []
      },
      {
        step: 3,
        title: 'Serve',
        description: 'Pour the milkshake into glasses. Garnish with fresh strawberries and serve immediately.',
        images: ['/images/recipes/strawberry-milkshake/img2.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Adjust sugar to your taste and the sweetness of the strawberries.',
          'For a vegan version, use almond or oat milk and skip the ice cream.',
          'Add a few mint leaves for a refreshing twist.'
        ]
      }
    ]
  },
  'spinach-khichdi': {
    id: 'spinach-khichdi',
    title: 'Spinach Khichdi',
    subtitle: 'Palak Khichdi - Healthy One-Pot Meal',
    description: 'A nutritious and comforting one-pot meal made with rice, lentils, and fresh spinach. This wholesome khichdi is perfect for kids and adults alike, packed with iron and essential nutrients. Quick to prepare and easy to digest.',
    cookingTime: '20 mins',
    prepTime: '10 mins',
    totalTime: '30 mins',
    cuisine: 'Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/spinach-khichidi/img3.jpeg',
    category: ['kids-options', 'all-recipes', 'upto-30-min'],
    tags: ['khichdi', 'spinach', 'one-pot', 'vegetarian', 'healthy'],
    ingredients: [
      '1 cup rice',
      '1/2 cup yellow moong dal',
      '1/2 cup black eyed peas',
      '1/2 cup toor dal',
      '2 cups fresh spinach, chopped',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1/2 teaspoon turmeric powder',
      '2 tablespoons ghee or oil',
      'Salt to taste',
      '4 cups water',
      'Fresh coriander leaves for garnish'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Ingredients',
        description: 'Wash rice, moong dal, black eyed peas, toor dal together. Chop spinach, onion, and tomatoes. Grate ginger and mince garlic.',
        images: ['/images/recipes/spinach-khichidi/img1.jpeg']
      },
      {
        step: 2,
        title: 'Add everything to the pressure cooker',
        description: 'Add all the ingredients to the pressure cooker. Add 4 cups of water and mix well and add a pinch of salt. Close the pressure cooker and cook for 4 whistles on medium heat. Let the pressure release naturally.',
        images: ['/images/recipes/spinach-khichidi/img2.jpeg']
      },
      {
        step: 3,
        title: 'Serve',
        description: 'Open the cooker, fluff the khichdi gently with a fork. Garnish with fresh coriander leaves and serve hot.',
        images: ['/images/recipes/spinach-khichidi/img3.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'You can add more vegetables like carrots, peas, or beans for extra nutrition.',
          'For a creamier texture, add a tablespoon of ghee before serving.',
          'Adjust spices according to your taste preference.',
          'This khichdi is perfect for kids as it\'s mild and nutritious.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add paneer cubes for extra protein.',
          'Use brown rice for a healthier version.',
          'Add a pinch of asafoetida for better digestion.'
        ]
      }
    ]
  }
};

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes[slug];
};

export const getAllRecipes = (): Recipe[] => {
  return Object.values(recipes);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return getAllRecipes().filter(recipe => recipe.category.includes(category));
};

export const getRecipesByTag = (tag: string): Recipe[] => {
  return getAllRecipes().filter(recipe => recipe.tags.includes(tag));
};

export const getRecipesByCookingTime = (maxMinutes: number): Recipe[] => {
  return getAllRecipes().filter(recipe => {
    const timeStr = recipe.cookingTime.toLowerCase();
    const minutes = parseInt(timeStr.match(/\d+/)?.[0] || '0');
    return minutes <= maxMinutes;
  });
}; 