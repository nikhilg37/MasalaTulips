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
    title: 'Raw Mango Lemon Rice Recipe - Tangy South Indian Rice Dish',
    subtitle: '"ಮಾವಿನಕಾಯಿ ಚಿತ್ರಾನ್ನ" - Mavinakaayi Chitranna',
    description: 'Learn how to make authentic Raw Mango Lemon Rice - a tangy and refreshing South Indian rice dish made with raw mangoes, tempered with aromatic spices, and garnished with fresh herbs. This traditional recipe brings together the perfect balance of sour, spicy, and savory flavors that will transport you straight to the heart of Karnataka. Perfect for breakfast, lunch, or as a light meal.',
    cookingTime: '15 mins',
    prepTime: '15 mins',
    totalTime: '30 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/mavinakaayi-chitranna/7.jpeg',
    category: ['breakfast', 'vegetarian', 'quick'],
    tags: ['raw-mango-lemon-rice', 'mavinakaayi-chitranna', 'south-indian-rice', 'mango-rice', 'tangy-rice', 'indian-rice-recipe', 'vegetarian-recipe', 'breakfast-recipe', 'quick-recipe'],
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
        title: 'Tips',
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
    title: 'Vegetable Pulao Recipe - Aromatic Indian Rice with Mixed Vegetables',
    subtitle: '"ತರಕಾರಿ ಪುಲಾವ್" - Tharakari Pulao',
    description: 'Learn how to make authentic Vegetable Pulao - an aromatic and flavorful Indian rice dish made with basmati/sona masuri rice, fresh vegetables, and aromatic spices. This one-pot dish is perfect for lunch or dinner, combining the goodness of mixed vegetables with the fragrant essence of whole spices and herbs. Easy to prepare and packed with nutrition.',
    cookingTime: '20 mins',
    prepTime: '25 mins',
    totalTime: '45 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/veg-pulao/new13.jpeg',
    category: ['lunch', 'vegetarian'],
    tags: ['vegetable-pulao', 'tharakari-pulao', 'indian-rice', 'vegetarian-recipe', 'aromatic-rice', 'mixed-vegetable-rice', 'one-pot-meal', 'indian-cuisine', 'lunch-recipe', 'dinner-recipe'],
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
        title: 'Tips',
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
    title: 'Mint Chutney Recipe - Fresh and Spicy Indian Condiment',
    subtitle: '"ಪುಡಿನಾ ಚುಟ್ನಿ" - Pudina Chutney',
    description: 'Learn how to make authentic Mint Chutney - a refreshing and tangy Indian condiment made with fresh mint leaves, coriander, green chilies, and spices. This versatile chutney is perfect as a dip for snacks, a side for Indian meals, or as a spread for sandwiches. Quick to prepare and packed with fresh flavors.',
    cookingTime: '5 mins',
    prepTime: '10 mins',
    totalTime: '15 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/mint-chutney/img6.jpeg',
    category: ['side-dish', 'all-recipes', 'upto-30-min'],
    tags: ['mint-chutney', 'pudina-chutney', 'indian-chutney', 'fresh-chutney', 'vegetarian-recipe', 'quick-recipe', 'condiment', 'dip', 'spicy-chutney'],
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
        images: ['/images/recipes/mint-chutney/img2.jpeg']
      },
      {
        step: 2,
        title: 'Fry the Ingredients',
        description: 'Fry the chopped mint, green chilies for 2-3 minutes.',
        images: ['/images/recipes/mint-chutney/img3.jpeg', '/images/recipes/mint-chutney/img4.jpeg']
      },
      {
        step: 3,
        title: 'Add the Ingredients to the Blender',
        description: 'Add the fried mint, green chilies, tamrind, salt to the blender. Blend to a smooth paste. The add chopped coriander leaves and blend again.',
        images: ['/images/recipes/mint-chutney/img5.jpeg']
      },

      {
        step: 4,
        title: 'Serve',
        description: 'Transfer the chutney to a bowl. Serve immediately as a dip with snacks or as a side with Indian meals. Store leftovers in the refrigerator for up to 2 days.',
        images: ['/images/recipes/mint-chutney/img6.jpeg']
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
    title: 'Strawberry Milkshake Recipe - Refreshing Homemade Drink',
    subtitle: '"ಸ್ಟ್ರೋಬೆರ್ರಿ ಮಿಲ್ಕ್ಶ್ಯೇಕ್"',
    description: 'Learn how to make a delicious Strawberry Milkshake - a creamy, refreshing drink made with fresh strawberries, milk, and a touch of sweetness. Perfect for hot summer days or as a quick, delicious treat for kids and adults alike. This easy recipe takes just 15 minutes to prepare and is packed with natural strawberry flavor.',
    cookingTime: '5 mins',
    prepTime: '10 mins',
    totalTime: '15 mins',
    cuisine: '',
    type: 'Vegetarian',
    mainImage: '/images/recipes/strawberry-milkshake/img2.jpeg',
    category: ['drinks', 'all-recipes', 'upto-30-min'],
    tags: ['strawberry-milkshake', 'milkshake-recipe', 'fresh-strawberry', 'summer-drink', 'vegetarian-recipe', 'quick-recipe', 'refreshing-drink', 'homemade-milkshake'],
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
  'kaayi-chitranna': {
    id: 'kaayi-chitranna',
    title: 'Coconut Lemon Rice Recipe - Aromatic South Indian Rice with Fresh Coconut',
    subtitle: '"ಕಾಯಿ ಚಿತ್ರಾನ್ನ" - Kaayi Chitranna',
    description: 'Learn how to make authentic Coconut Lemon Rice - a refreshing and aromatic South Indian rice dish made with fresh coconut, tempered with aromatic spices, and garnished with fresh herbs. This traditional recipe brings together the perfect balance of nutty, tangy, and savory flavors that will transport you straight to the heart of Karnataka. Perfect for breakfast, lunch, or as a light meal.',
    cookingTime: '15 mins',
    prepTime: '15 mins',
    totalTime: '30 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/kaayi-chitranna/img5.jpeg',
    category: ['breakfast', 'vegetarian', 'quick', 'upto-30-min'],
    tags: ['coconut-lemon-rice', 'kaayi-chitranna', 'south-indian-rice', 'coconut-rice', 'aromatic-rice', 'indian-rice-recipe', 'vegetarian-recipe', 'breakfast-recipe', 'quick-recipe'],
    ingredients: [
      '2 cups cooked rice',
      '1/2 cup coconut, grated',
      '2 tablespoons oil',
      '1 teaspoon mustard seeds',
      '1 teaspoon cumin seeds',
      '1 teaspoon urad dal',
      '1 teaspoon chana dal',
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
        title: 'Prepare the Rice and Roast Peanuts',
        description: 'Cook rice and let it cool completely. Roast the peanuts in a pan with a little oil until they are slightly golden brown and set aside.',
        images: ['/images/recipes/kaayi-chitranna/img2.jpeg']
      },
      {
        step: 2,
        title: 'Prepare the Coconut',
        description: 'Grate fresh coconut finely and set aside. The grated coconut will give the dish its characteristic rich and nutty flavor.',
        images: ['/images/recipes/kaayi-chitranna/img1.jpeg']
      },
      {
        step: 3,
        title: 'Make the Tempering',
        description: 'Heat oil in a large pan. Add cumin seeds, mustard seeds, and asafoetida. Let them splutter and add urad dal, chana dal. Also add curry leaves and green chilies. Fry until the dals turn golden brown.',
        images: ['/images/recipes/kaayi-chitranna/img3.jpeg']
      },
      {
        step: 4,
        title: 'Add Grated Coconut',
        description: 'Add turmeric powder and grated coconut. Mix well and cook for 2-3 minutes until the coconut releases its aromatic flavor and becomes slightly golden.',
        images: ['/images/recipes/kaayi-chitranna/img4.jpeg']
      },
      {
        step: 5,
        title: 'Mix with Rice and Season',
        description: 'Add the cooled rice and salt. Gently mix everything together, taking care not to break the rice grains. The rice should be well coated with the coconut mixture.',
        images: ['/images/recipes/kaayi-chitranna/img5.jpeg']
      },
      {
        step: 6,
        title: 'Garnish and Serve',
        description: 'Garnish with fresh coriander leaves and roasted peanuts. Serve warm or at room temperature. The dish should have a perfect balance of nutty, spicy, and savory flavors.',
        images: ['/images/recipes/kaayi-chitranna/img6.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Use fresh, grated coconut for the best rich and nutty flavor.',
          'You can adjust the amount of coconut based on how rich you prefer the dish.',
          'For a spicier version, add finely chopped extra green chilies during tempering.',
          'This dish can be stored in the refrigerator for up to 2 days.',
          'The peanuts add a nice crunch and protein to the dish.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add roasted cashews for extra crunch and luxury.',
          'Include fresh curry leaves for enhanced aroma.',
          'Try with different types of rice like brown rice or basmati rice.',
          'Add finely chopped vegetables like carrots or beans for extra nutrition.',
          'For a more traditional taste, use coconut oil instead of regular oil.'
        ]
      }
    ]
  },
  'vegetable-sandwich': {
    id: 'vegetable-sandwich',
    title: 'Vegetable Sandwich Recipe - Quick and Healthy Indian Style',
    subtitle: '"ತರಕಾರಿ ಸ್ಯಾಂಡ್‌ವಿಚ್" - Tharakari Sandwich',
    description: 'Learn how to make a delicious Vegetable Sandwich - a healthy and nutritious sandwich packed with fresh vegetables, herbs, and flavorful spreads. Perfect for breakfast, lunch, or as a quick snack. This wholesome sandwich combines the goodness of mixed vegetables with aromatic spices and fresh herbs. Quick to prepare in just 25 minutes and perfect for kids and adults alike.',
    cookingTime: '10 mins',
    prepTime: '15 mins',
    totalTime: '25 mins',
    cuisine: 'Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/veg-sandwich/img4.jpeg',
    category: ['vegetarian', 'quick', 'upto-30-min', 'kids-options'],
    tags: ['vegetable-sandwich', 'tharakari-sandwich', 'healthy-sandwich', 'quick-meal', 'vegetarian-recipe', 'breakfast-recipe', 'lunch-recipe', 'indian-sandwich'],
    ingredients: [
      '4 slices of whole wheat bread',
      '1 medium tomato, thinly sliced',
      '1 onion, thinly sliced',
      '1/2 cup cottage cheese, chopped',
      '1 cup of cheese spread',
      '1/2 cup of grated cheese',
      '3-4 green chilies, chopped',
      '1/2 cup mixed bell peppers, thinly sliced',
      '1/4 cup fresh coriander leaves, chopped',
      '2 tablespoons butter or ghee',
      '1/2 teaspoon chaat masala',
      'Salt to taste',
      '1/4 cup schezwan chutney (optional)',
      '1/4 cup mayonnaise (optional)'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Ingredients',
        description: 'Wash and prepare all vegetables. Thinly slice tomato, onion, and bell peppers. Chop fresh coriander leaves and green chilies. Chop cottage cheese into small pieces.',
        images: ['/images/recipes/veg-sandwich/img1.jpeg', '/images/recipes/veg-sandwich/img2.jpeg']
      },
      {
        step: 2,
        title: 'Season the Vegetables',
        description: 'In a bowl, mix the sliced vegetables, chopped cottage cheese, and green chilies with chaat masala, mayonnaise, schezwan chutney and salt. Let them marinate for 5 minutes to enhance the flavors.',
        images: ['/images/recipes/veg-sandwich/img3.jpeg']
      },
      {
        step: 3,
        title: 'Assemble the Sandwich',
        description: 'Take two slices of bread and spread butter or ghee on one side of each slice. Apply cheese spread on both slices(optional). Layer the seasoned vegetables and cottage cheese evenly on one slice.',
      },
      {
        step: 4,
        title: 'Roast the Sandwich and Close',
        description: 'Sprinkle grated cheese on top of the vegetables. Place the second slice of bread on top with the buttered side facing down. Roast the sandwich in a pan until the bread is golden brown and the cheese is melted.',
      },
      {
        step: 5,
        title: 'Serve the Sandwich',
        description: 'Cut the sandwich into halves and serve with a side of tomato ketchup or schezwan chutney.',
        images: ['/images/recipes/veg-sandwich/img4.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Use fresh, crisp vegetables for the best texture and flavor.',
          'For a healthier option, use whole grain or multigrain bread.',
          'The sandwich can be served immediately or wrapped for later consumption.',
          'Adjust the spices according to your taste preference.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Include avocado slices for a creamy texture.',
          'Try with different breads like sourdough or rye bread.',
          'Add sprouts for extra nutrition and crunch.',
          'Use different spreads like hummus or cream cheese.'
        ]
      }
    ]
  },
  'bisi-bele-bath': {
    id: 'bisi-bele-bath',
    title: 'Bisi Bele Bath Recipe - Traditional Karnataka Rice and Lentil Dish',
    subtitle: '"ಬಿಸಿ ಬೇಳೆ ಬಾತ್" - Bisi Bele Bath',
    description: 'Learn how to make authentic Bisi Bele Bath - a traditional Karnataka rice dish made with rice, lentils, vegetables, and aromatic spices. This one-pot meal is rich in flavors and nutrients, perfect for lunch or dinner. The dish gets its name from "bisi" (hot), "bele" (lentils), and "bath" (rice dish). A wholesome and nutritious meal packed with protein and vegetables.',
    cookingTime: '25 mins',
    prepTime: '25 mins',
    totalTime: '50 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/bisi-bele-bath/img7.jpeg',
    category: ['dinner', 'vegetarian', 'between-30-60-min'],
    tags: ['bisi-bele-bath', 'karnataka-rice', 'rice-lentil-dish', 'traditional-indian', 'one-pot-meal', 'vegetarian-recipe', 'south-indian-cuisine', 'protein-rich', 'nutritious-meal'],
    ingredients: [
      '1/2 cup millet(Barnyard or Pearl Millet)',
      '1/2 cup toor dal',
      '2-3 tablespoons of moong dal',
      '2 cups mixed vegetables (carrots, beans, peas, potatoes, bell peppers, onions, tomatoes, kohlrabi, turnips, etc)',
      '1/4 cup tamarind pulp',
      '2 tablespoons oil or ghee',
      '1 teaspoon mustard seeds',
      '1 teaspoon cumin seeds',
      '1/2 teaspoon turmeric powder',
      '1 teaspoon red chili powder',
      '2-3 tablespoons of bisi bele bath powder',
      '10-12 curry leaves',
      '4-5 garlic cloves, minced',
      '1/4 cup fresh coriander leaves',
      'Salt to taste',
      '4 cups water'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Ingredients',
        description: 'Wash millet and lentils together. Chop all vegetables - carrots, beans, peas, potatoes, bell peppers, onions, tomatoes, kohlrabi, and turnips. Prepare tamarind pulp by soaking tamarind in warm water.',
        images: ['/images/recipes/bisi-bele-bath/img1.jpeg', '/images/recipes/bisi-bele-bath/img2.jpeg']
      },
      {
        step: 2,
        title: 'Cook Millet and Lentils',
        description: 'In a pressure cooker, add millet, toor dal, moong dal, and 2 cups of water. Cook for 2-3 whistles until the millet and lentils are soft and well-cooked.',
        images: ['/images/recipes/bisi-bele-bath/img3.jpeg']
      },
      {
        step: 3,
        title: 'Boil the Vegetables',
        description: 'Boil all the vegetables in a pressure cooker for 2-3 minutes until they are tender. Do not overcook them.',
      },
      {
        step: 4,
        title: 'Combine with Cooked Millet and Lentils',
        description: 'Add the cooked millet and lentils to the vegetable mixture. Add tamarind pulp and salt. Add bisi bele bath powder, red chili powder and mix well. Cook for 5-7 minutes until everything is well combined.',
        images: ['/images/recipes/bisi-bele-bath/img4.jpeg']
      },
      {
        step: 5,
        title: 'Add Water and Simmer',
        description: 'Add remaining water and bring to a boil. Reduce heat and simmer for 10-15 minutes until the mixture thickens and all flavors are well incorporated.',
      },
      {
        step: 6,
        title: 'Tempering the Dish',
        description: 'Add oil in a pan and add mustard seeds, cumin seeds, curry leaves, asafoetida, groundnut, and garlic. Add onion and bell peppers and cook until they are soft. Let them splutter and pour this tempering over the bisi bele bath.',
        images: ['/images/recipes/bisi-bele-bath/img5.jpeg', '/images/recipes/bisi-bele-bath/img6.jpeg']
      },
      {
        step: 7,
        title: 'Garnish and Serve',
        description: 'Garnish with fresh coriander leaves. Serve hot with papad, pickle, or raita. The dish should have a perfect balance of spicy, tangy, and savory flavors.',
        images: ['/images/recipes/bisi-bele-bath/img7.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Use fresh vegetables for the best taste and texture.',
          'Adjust the amount of tamarind based on your preference for tanginess.',
          'You can add more vegetables like eggplant or drumsticks for variety.',
          'The dish should have a porridge-like consistency - not too thick or too thin.',
          'Let it rest for 5 minutes after cooking for better flavor development.',
          'Use authentic bisi bele bath powder for the best traditional taste.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add coconut milk for a richer, creamier texture.',
          'Include roasted peanuts or cashews for extra crunch.',
          'Try with different types of millets like foxtail millet or finger millet.',
          'Add a dollop of ghee on top before serving for enhanced flavor.',
          'Serve with coconut chutney or tomato chutney for a complete meal.',
          'Use different combinations of vegetables based on seasonal availability.'
        ]
      }
    ]
  },
  'veg-sambhar': {
    id: 'veg-sambhar',
    title: 'Veg Sambhar Recipe - Traditional South Indian Lentil Stew',
    subtitle: '"ತರಕಾರಿ ಸಾಂಬಾರ್" - Tharakari Sambhar',
    description: 'Learn how to make authentic Veg Sambhar - a traditional South Indian lentil stew made with toor dal, mixed vegetables, and aromatic spices. This nutritious and flavorful dish is a staple in South Indian cuisine, perfect to serve with rice, idli, or dosa. The tangy tamarind and aromatic spices create a perfect balance of flavors. Quick to prepare and packed with protein and nutrients.',
    cookingTime: '20 mins',
    prepTime: '20 mins',
    totalTime: '40 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/veg-sambhar/img12.jpeg',
    category: ['lunch', 'vegetarian'],
    tags: ['veg-sambhar', 'sambhar-recipe', 'south-indian-sambhar', 'lentil-stew', 'toor-dal', 'vegetarian-recipe', 'indian-lentils', 'traditional-recipe', 'protein-rich'],
    ingredients: [
      '1 cup toor dal',
      '2 cups mixed vegetables (drumsticks, carrots, turnips, tomatoes, bottle gourd, potatoes, chow chow)',
      '1 sambhar onion, finely chopped',
      '1/4 cup tamarind pulp',
      '2 tablespoons oil',
      '1 teaspoon mustard seeds',
      '1 teaspoon cumin seeds',
      '1/2 teaspoon turmeric powder',
      '1 teaspoon sambhar powder',
      '10-12 curry leaves',
      '4-5 garlic cloves',
      '1/4 cup fresh coriander leaves',
      'Salt to taste',
      '3 cups water',
      'Pinch of asafoetida'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Ingredients',
        description: 'Wash toor dal thoroughly. Chop all vegetables - drumsticks, carrots, turnips, tomatoes, bottle gourd, potatoes, and chow chow. Finely chop sambhar onion. Prepare tamarind pulp by soaking tamarind in warm water.',
        images: ['/images/recipes/veg-sambhar/img1.jpeg', '/images/recipes/veg-sambhar/img2.jpeg', '/images/recipes/veg-sambhar/img4.jpeg']
      },
      {
        step: 2,
        title: 'Cook the Dal',
        description: 'In a pressure cooker, add toor dal, oil and 2 cups of water. Add turmeric powder and garlic cloves. Cook for 3-4 whistles until the dal is soft and well-cooked. Mash the dal slightly and set aside.',
        images: ['/images/recipes/veg-sambhar/img5.jpeg', '/images/recipes/veg-sambhar/img6.jpeg']
      },
      {
        step: 3,
        title: 'Fry Sambhar Onion',
        description: 'Add sambhar onion to the oil and fry until it is soft and translucent.',
        images: ['/images/recipes/veg-sambhar/img7.jpeg']
      },
      {
        step: 4,
        title: 'Add Water and Cook Vegetables',
        description: 'Add 1 cup of water and bring to a boil. Cook the vegetables until they are tender but not mushy.',
        images: ['/images/recipes/veg-sambhar/img8.jpeg', '/images/recipes/veg-sambhar/img9.jpeg']
      },
      {
        step: 5,
        title: 'Mix the Vegetables with Dal',
        description: 'Add the cooked and mashed toor dal to the vegetable mixture. Add tamarind pulp, salt, sambhar powder and mix well.',
        images: ['/images/recipes/veg-sambhar/img10.jpeg']
      },
      {
        step: 6,
        title: 'Prepare the Tempering',
        description: 'Heat oil in a large pan. Add mustard seeds and cumin seeds. Let them splutter, then add curry leaves, asafoetida. Sauté until fragrant.',
        images: ['/images/recipes/veg-sambhar/img3.jpeg']
      },
      {
        step: 7,
        title: 'Mix Tempering with Sambhar',
        description: 'Add the tempering to the sambhar and mix well. Boil for 5-7 minutes until all flavors are well combined.',
      },
      {
        step: 8,
        title: 'Add Fresh Herbs',
        description: 'Add fresh coriander leaves and mix gently. Let the sambhar simmer for 2-3 minutes to enhance the flavors.',
        images: ['/images/recipes/veg-sambhar/img10.jpeg']
      },
      {
        step: 9,
        title: 'Check Consistency',
        description: 'The sambhar should have a medium consistency - not too thick or too thin. Add more water if needed and adjust salt to taste.',
        images: ['/images/recipes/veg-sambhar/img11.jpeg']
      },
      {
        step: 10,
        title: 'Serve Hot',
        description: 'Serve hot with steamed rice, idli, dosa, or any South Indian bread. The sambhar should be piping hot and full of flavor.',
        images: ['/images/recipes/veg-sambhar/img12.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Use fresh vegetables for the best taste and texture.',
          'Adjust the amount of tamarind based on your preference for tanginess.',
          'You can add more vegetables like okra or pumpkin for variety.',
          'The sambhar should have a medium consistency - not too thick or too thin.',
          'Let it rest for 5 minutes after cooking for better flavor development.',
          'Use homemade sambhar powder for authentic taste.',
          'Sambhar onion gives a unique flavor compared to regular onions.'
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add coconut milk for a richer, creamier texture.',
          'Include roasted peanuts or cashews for extra crunch.',
          'Try with different types of lentils like moong dal or masoor dal.',
          'Add a dollop of ghee on top before serving for enhanced flavor.',
          'Serve with coconut chutney or tomato chutney for a complete meal.',
          'Use different combinations of vegetables based on seasonal availability.'
        ]
      }
    ]
  },
  'oggarane-mosranna': {
    id: 'oggarane-mosranna',
    title: 'Spicy Curd Rice Recipe - Traditional South Indian Yogurt Rice',
    subtitle: '"ಒಗ್ಗರಣೆ ಮೊಸರನ್ನ" - Oggarane Mosranna',
    description: 'Learn how to make authentic Spicy Curd Rice - a traditional South Indian rice dish made with yogurt, tempered with aromatic spices, and garnished with fresh herbs. This cooling and refreshing recipe brings together the perfect balance of tangy, spicy, and savory flavors that is perfect for hot summer days. Quick to prepare in 25 minutes and packed with probiotics and nutrients.',
    cookingTime: '10 mins',
    prepTime: '15 mins',
    totalTime: '25 mins',
    cuisine: 'South Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/oggarane-mosranna/img8.jpeg',
    category: ['lunch', 'vegetarian', 'upto-30-min'],
    tags: ['oggarane-mosranna', 'spicy-curd-rice', 'yogurt-rice', 'south-indian', 'vegetarian', 'cooling', 'traditional-recipe', 'probiotic', 'summer-recipe'],
    ingredients: [
      '2 cups cooked rice',
      '1 cup fresh yogurt',
      '1 finely chopped onion',
      '2 tablespoons oil',
      '1 teaspoon mustard seeds',
      '1 teaspoon cumin seeds',
      '1 teaspoon urad dal',
      '1 teaspoon chana dal',
      'A pinch of asafoetida',
      '3-4 finely chopped dry green chilies',
      '10-12 curry leaves',
      '1/4 cup cashews',
      '1/4 teaspoon turmeric powder',
      '1 inch ginger, grated',
      '2-3 green chilies, slit',
      'Salt to taste',
      'Fresh coriander leaves for garnish'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Rice and Roast Peanuts',
        description: 'Cook rice for 3-4 whistles in a pressure cooker and let it cool completely. Roast the cashews in a pan with a little oil until they are slightly golden brown and set aside. Add finely chopped onion, curry leaves, and green chilies and mash them together.',
        images: ['/images/recipes/oggarane-mosranna/img1.jpeg', '/images/recipes/oggarane-mosranna/img2.jpeg']
      },
      {
        step: 2,
        title: 'Prepare the Yogurt Mixture',
        description: 'In a large bowl, whisk the fresh yogurt until smooth. Add salt and mix well. The yogurt should be slightly sour for the best taste.',
      },
      {
        step: 3,
        title: 'Make the Tempering',
        description: 'Heat oil in a large pan. Add cumin seeds, mustard seeds, and asafoetida. Let them splutter and add urad dal, chana dal. Also add curry leaves, green chilies, and grated ginger. Fry until the dals turn golden brown.',
        images: ['/images/recipes/oggarane-mosranna/img3.jpeg', '/images/recipes/oggarane-mosranna/img4.jpeg']
      },
      {
        step: 4,
        title: 'Add cashews',
        description: 'Add roasted cashews to the tempering. Mix well and cook for 1-2 minutes until the cashews are well coated with the spices.',
      },
      {
        step: 5,
        title: 'Combine Rice with Yogurt',
        description: 'Add the cooled rice to the yogurt mixture. Gently mix everything together, taking care not to break the rice grains.',
        images: ['/images/recipes/oggarane-mosranna/img6.jpeg']
      },
      {
        step: 6,
        title: 'Add Tempering to Rice',
        description: 'Pour the hot tempering over the rice and yogurt mixture. Mix gently to combine all the flavors.',
        images: ['/images/recipes/oggarane-mosranna/img5.jpeg']
      },
      {
        step: 7,
        title: 'Garnish and Serve',
        description: 'Garnish with fresh coriander leaves and serve immediately. The dish should have a perfect balance of tangy, spicy, and cooling flavors.',
        images: ['/images/recipes/oggarane-mosranna/img7.jpeg']
      },
      {
        step: 8,
        title: 'Final Presentation',
        description: 'Serve the Oggarane Mosranna warm or at room temperature. This cooling dish is perfect for hot summer days and pairs well with pickles or papad.',
        images: ['/images/recipes/oggarane-mosranna/img8.jpeg']
      }
    ],
    notes: [
      {
        title: 'Tips',
        content: [
          'Use slightly sour yogurt for the best tangy flavor.',
          'Make sure the rice is completely cooled before mixing with yogurt.',
          'You can adjust the amount of yogurt based on how creamy you prefer the dish.',
          'For a spicier version, add more green chilies during tempering.',
          'This dish should be consumed fresh and not stored for long periods.',
        ]
      },
      {
        title: 'Variations',
        content: [
          'Add grated coconut for a richer flavor and texture.',
          'Include roasted cashews for extra crunch and luxury.',
          'Try with different types of rice like brown rice or basmati rice.',
          'Add finely chopped vegetables like cucumber or carrots for extra nutrition.',
          'For a more traditional taste, use coconut oil instead of regular oil.',
          'Add a pinch of sugar for a sweet-sour balance.'
        ]
      }
    ]
  },
  'spinach-khichdi': {
    id: 'spinach-khichdi',
    title: 'Spinach Khichdi Recipe - Easy One Pot Indian Meal',
    subtitle: '"ಪಾಲಾಕ್ ಖಿಚ್ಡಿ" - Palak Khichdi',
    description: 'Learn how to make authentic Spinach Khichdi - a nutritious and comforting one-pot Indian meal made with rice, lentils, and fresh spinach. This wholesome khichdi recipe is perfect for kids and adults alike, packed with iron and essential nutrients. Quick to prepare in 30 minutes and easy to digest. Perfect for lunch, dinner, or as a healthy meal option.',
    cookingTime: '20 mins',
    prepTime: '10 mins',
    totalTime: '30 mins',
    cuisine: 'Indian',
    type: 'Vegetarian',
    mainImage: '/images/recipes/spinach-khichidi/img3.jpeg',
    category: ['kids-options', 'all-recipes', 'upto-30-min', 'vegetarian'],
    tags: ['spinach-khichdi', 'khichdi-recipe', 'palak-khichdi', 'indian-khichdi', 'spinach-rice', 'one-pot-meal', 'vegetarian-recipe', 'healthy-recipe', 'easy-recipe', 'indian-food'],
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
    const timeStr = recipe.totalTime.toLowerCase();
    const minutes = parseInt(timeStr.match(/\d+/)?.[0] || '0');
    return minutes <= maxMinutes;
  });
};

export const getRecipesByCookingTimeRange = (minMinutes: number, maxMinutes: number): Recipe[] => {
  return getAllRecipes().filter(recipe => {
    const timeStr = recipe.totalTime.toLowerCase();
    const minutes = parseInt(timeStr.match(/\d+/)?.[0] || '0');
    return minutes > minMinutes && minutes <= maxMinutes;
  });
}; 