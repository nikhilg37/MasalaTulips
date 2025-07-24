// Content Optimization Utilities for Masala Tulips
import { Recipe } from '../data/recipes';

// SEO-friendly content enhancement
export const enhanceRecipeDescription = (recipe: Recipe): string => {
  const baseDescription = recipe.description;
  
  // Add nutritional benefits
  const nutritionalBenefits = getNutritionalBenefits(recipe);
  
  // Add serving suggestions
  const servingSuggestions = getServingSuggestions(recipe);
  
  // Add cultural context
  const culturalContext = getCulturalContext(recipe);
  
  // Combine all elements
  return `${baseDescription} ${nutritionalBenefits} ${servingSuggestions} ${culturalContext}`;
};

// Get nutritional benefits based on recipe type
const getNutritionalBenefits = (recipe: Recipe): string => {
  const benefits: string[] = [];
  
  if (recipe.type === 'Vegetarian') {
    benefits.push('This vegetarian recipe is rich in plant-based proteins and essential nutrients.');
  }
  
  if (recipe.category.includes('breakfast')) {
    benefits.push('Perfect for a healthy breakfast that provides sustained energy throughout the morning.');
  }
  
  if (recipe.category.includes('quick')) {
    benefits.push('Quick and easy to prepare, making it ideal for busy weekdays.');
  }
  
  if (recipe.category.includes('kids-options')) {
    benefits.push('Kid-friendly recipe that introduces children to healthy Indian flavors.');
  }
  
  return benefits.join(' ');
};

// Get serving suggestions
const getServingSuggestions = (recipe: Recipe): string => {
  const suggestions: string[] = [];
  
  if (recipe.category.includes('breakfast')) {
    suggestions.push('Serve hot with a cup of masala chai or filter coffee for a complete South Indian breakfast experience.');
  }
  
  if (recipe.category.includes('lunch') || recipe.category.includes('dinner')) {
    suggestions.push('Pair with a refreshing raita, pickle, or papad for a complete meal.');
  }
  
  if (recipe.category.includes('side-dish')) {
    suggestions.push('Perfect accompaniment to any main course or as part of a thali meal.');
  }
  
  if (recipe.category.includes('drinks')) {
    suggestions.push('Serve chilled for maximum refreshment, especially during hot weather.');
  }
  
  return suggestions.join(' ');
};

// Get cultural context
const getCulturalContext = (recipe: Recipe): string => {
  if (recipe.cuisine === 'South Indian') {
    return 'This traditional South Indian recipe has been passed down through generations and is a staple in Karnataka households.';
  }
  
  if (recipe.cuisine === 'Indian') {
    return 'A beloved Indian recipe that showcases the rich culinary heritage of the subcontinent.';
  }
  
  return '';
};

// Generate SEO-friendly recipe introduction
export const generateRecipeIntroduction = (recipe: Recipe): string => {
  const intro = `Discover the authentic taste of ${recipe.title.toLowerCase()} with our step-by-step recipe guide. `;
  const timeInfo = `This ${recipe.cuisine} recipe takes only ${recipe.totalTime} to prepare and serves 4 people. `;
  const difficulty = getDifficultyLevel(recipe);
  const appeal = `Perfect for ${getTargetAudience(recipe)}.`;
  
  return `${intro}${timeInfo}${difficulty}${appeal}`;
};

// Get difficulty level
const getDifficultyLevel = (recipe: Recipe): string => {
  const totalMinutes = parseInt(recipe.totalTime.match(/\d+/)?.[0] || '0');
  
  if (totalMinutes <= 30) {
    return 'This is an easy recipe suitable for beginners. ';
  } else if (totalMinutes <= 60) {
    return 'This is a moderate recipe that requires some cooking experience. ';
  } else {
    return 'This is an advanced recipe that showcases traditional cooking techniques. ';
  }
};

// Get target audience
const getTargetAudience = (recipe: Recipe): string => {
  const audiences: string[] = [];
  
  if (recipe.category.includes('kids-options')) {
    audiences.push('families with children');
  }
  
  if (recipe.category.includes('quick')) {
    audiences.push('busy professionals');
  }
  
  if (recipe.type === 'Vegetarian') {
    audiences.push('vegetarian food lovers');
  }
  
  if (recipe.category.includes('breakfast')) {
    audiences.push('breakfast enthusiasts');
  }
  
  if (audiences.length === 0) {
    audiences.push('home cooks');
  }
  
  return audiences.join(', ');
};

// Generate cooking tips
export const generateCookingTips = (recipe: Recipe): string[] => {
  const tips: string[] = [];
  
  // General tips
  tips.push('Always use fresh ingredients for the best flavor and nutritional value.');
  
  // Recipe-specific tips
  if (recipe.category.includes('rice')) {
    tips.push('Use day-old cooked rice for better texture and to prevent sticking.');
    tips.push('Let the rice cool completely before mixing with other ingredients.');
  }
  
  if (recipe.category.includes('breakfast')) {
    tips.push('Prepare some ingredients the night before to save time in the morning.');
  }
  
  if (recipe.category.includes('vegetarian')) {
    tips.push('You can customize the spice level according to your preference.');
  }
  
  if (recipe.category.includes('quick')) {
    tips.push('Keep all ingredients ready before starting to cook for efficiency.');
  }
  
  return tips;
};

// Generate storage and reheating instructions
export const generateStorageInstructions = (recipe: Recipe): string => {
  if (recipe.category.includes('drinks')) {
    return 'Store in the refrigerator for up to 2 days. Shake well before serving.';
  }
  
  if (recipe.category.includes('rice') || recipe.category.includes('main')) {
    return 'Store in an airtight container in the refrigerator for up to 2 days. Reheat gently in a microwave or on the stovetop with a splash of water to restore moisture.';
  }
  
  return 'Store in an airtight container in the refrigerator for up to 3 days. Reheat before serving.';
};

// Generate ingredient substitutions
export const generateIngredientSubstitutions = (recipe: Recipe): Record<string, string[]> => {
  const substitutions: Record<string, string[]> = {};
  
  if (recipe.category.includes('rice')) {
    substitutions['cooked rice'] = ['brown rice', 'quinoa', 'cauliflower rice'];
    substitutions['mustard seeds'] = ['cumin seeds', 'fennel seeds'];
  }
  
  if (recipe.category.includes('vegetarian')) {
    substitutions['ghee'] = ['vegetable oil', 'coconut oil'];
    substitutions['curry leaves'] = ['bay leaves', 'basil leaves'];
  }
  
  return substitutions;
};

// Generate FAQ for recipes
export const generateRecipeFAQ = (recipe: Recipe): Array<{ question: string; answer: string }> => {
  const faqs: Array<{ question: string; answer: string }> = [];
  
  // Common questions
  faqs.push({
    question: `Can I make ${recipe.title} ahead of time?`,
    answer: `Yes, you can prepare this recipe ahead of time. ${generateStorageInstructions(recipe)}`
  });
  
  faqs.push({
    question: `How can I adjust the spice level in ${recipe.title}?`,
    answer: 'You can reduce the number of green chilies or skip them entirely for a milder version. For extra heat, add more chilies or a pinch of red chili powder.'
  });
  
  if (recipe.category.includes('vegetarian')) {
    faqs.push({
      question: `Is ${recipe.title} suitable for vegans?`,
      answer: 'This recipe is vegetarian. To make it vegan, replace ghee with vegetable oil and ensure all ingredients are plant-based.'
    });
  }
  
  if (recipe.category.includes('kids-options')) {
    faqs.push({
      question: `How can I make ${recipe.title} more appealing to children?`,
      answer: 'You can reduce the spice level, add colorful vegetables, or serve with their favorite accompaniments like yogurt or chutney.'
    });
  }
  
  return faqs;
};

// Generate related content suggestions
export const generateRelatedContent = (recipe: Recipe): string[] => {
  const suggestions: string[] = [];
  
  if (recipe.category.includes('breakfast')) {
    suggestions.push('South Indian Breakfast Guide', 'Traditional Indian Breakfast Recipes', 'Quick Breakfast Ideas');
  }
  
  if (recipe.category.includes('rice')) {
    suggestions.push('Rice Cooking Techniques', 'South Indian Rice Varieties', 'One-Pot Rice Recipes');
  }
  
  if (recipe.category.includes('vegetarian')) {
    suggestions.push('Vegetarian Indian Cooking', 'Plant-Based Protein Sources', 'Vegetarian Meal Planning');
  }
  
  return suggestions;
};

// Content quality checker
export const checkContentQuality = (recipe: Recipe): {
  score: number;
  suggestions: string[];
} => {
  let score = 100;
  const suggestions: string[] = [];
  
  // Check description length
  if (recipe.description.length < 150) {
    score -= 20;
    suggestions.push('Add more detailed description to improve SEO');
  }
  
  // Check instructions detail
  if (recipe.instructions.length < 3) {
    score -= 15;
    suggestions.push('Add more detailed cooking instructions');
  }
  
  // Check tags
  if (recipe.tags.length < 5) {
    score -= 10;
    suggestions.push('Add more relevant tags for better discoverability');
  }
  
  // Check notes
  if (!recipe.notes || recipe.notes.length === 0) {
    score -= 15;
    suggestions.push('Add cooking tips and variations');
  }
  
  return { score, suggestions };
}; 