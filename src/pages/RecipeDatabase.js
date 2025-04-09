import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeDatabase = () => {
  const [activePhase, setActivePhase] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample recipes data
  const recipes = [
    {
      id: 1,
      title: 'Vegetable Omelette',
      description: 'A nutritious breakfast rich in protein and vegetables',
      ingredients: [
        '3 eggs', 
        '1 cup mixed vegetables (spinach, bell peppers, onions)', 
        '1 tablespoon coconut oil',
        'Salt and pepper to taste',
        'Fresh herbs (optional)'
      ],
      instructions: [
        'Heat coconut oil in a non-stick pan over medium heat',
        'Sauté the vegetables until softened',
        'Beat eggs in a bowl and season with salt and pepper',
        'Pour eggs over vegetables and cook until set',
        'Fold in half and serve with fresh herbs if desired'
      ],
      prepTime: '5 mins',
      cookTime: '10 mins',
      servings: 1,
      phase: [0, 1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      title: 'Grilled Chicken Salad',
      description: 'Simple and satisfying salad with lean protein',
      ingredients: [
        '6 oz organic chicken breast', 
        '4 cups mixed greens', 
        '1 cucumber, sliced',
        '1/4 red onion, thinly sliced',
        '2 tablespoons olive oil',
        '1 tablespoon apple cider vinegar',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Season chicken with salt and pepper and grill until cooked through',
        'Let chicken rest for 5 minutes, then slice',
        'Combine mixed greens, cucumber, and onion in a bowl',
        'Whisk together olive oil and apple cider vinegar for dressing',
        'Top salad with chicken and drizzle with dressing'
      ],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'Baked Salmon with Asparagus',
      description: 'Omega-rich fish with nutritious vegetables',
      ingredients: [
        '2 wild-caught salmon fillets', 
        '1 bunch asparagus, trimmed', 
        '2 tablespoons coconut oil',
        '1 lemon, sliced',
        'Fresh dill',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Preheat oven to 400°F (200°C)',
        'Place salmon and asparagus on a baking sheet lined with parchment paper',
        'Drizzle with coconut oil and season with salt and pepper',
        'Top salmon with lemon slices and dill',
        'Bake for 12-15 minutes until salmon is cooked through'
      ],
      prepTime: '5 mins',
      cookTime: '15 mins',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      title: 'Quinoa Breakfast Bowl',
      description: 'Filling breakfast with approved grains and fruits',
      ingredients: [
        '1/2 cup cooked quinoa', 
        '1/4 cup mixed berries', 
        '1 tablespoon coconut flakes',
        '1/2 teaspoon cinnamon',
        '1/4 avocado, sliced'
      ],
      instructions: [
        'Cook quinoa according to package directions and let cool slightly',
        'Place quinoa in a bowl and top with berries and coconut flakes',
        'Sprinkle with cinnamon',
        'Add sliced avocado on the side'
      ],
      prepTime: '5 mins',
      cookTime: '15 mins',
      servings: 1,
      phase: [2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 5,
      title: 'Turkey and Vegetable Lettuce Wraps',
      description: 'Light lunch with lean protein and fresh vegetables',
      ingredients: [
        '1/2 lb organic ground turkey', 
        '1 tablespoon coconut oil', 
        '1 garlic clove, minced',
        '1/2 onion, diced',
        '1 carrot, shredded',
        '1 tablespoon coconut aminos (or sea salt)',
        '6 large lettuce leaves',
        '1/2 avocado, sliced'
      ],
      instructions: [
        'Heat coconut oil in a pan over medium heat',
        'Add garlic and onion and sauté until fragrant',
        'Add ground turkey and cook until browned',
        'Mix in shredded carrot and coconut aminos',
        'Cook for another 2-3 minutes until vegetables are tender',
        'Serve in lettuce leaves with sliced avocado'
      ],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 6,
      title: 'Gluten-Free Oatmeal with Berries',
      description: 'Warm and comforting breakfast for Phase 3',
      ingredients: [
        '1/2 cup gluten-free rolled oats', 
        '1 cup water', 
        '1/4 cup mixed berries',
        '1/2 teaspoon cinnamon',
        'Stevia to taste (optional)'
      ],
      instructions: [
        'Combine oats and water in a pot and bring to a boil',
        'Reduce heat and simmer for 5 minutes, stirring occasionally',
        'Transfer to a bowl and top with berries and cinnamon',
        'Add stevia if desired'
      ],
      prepTime: '2 mins',
      cookTime: '8 mins',
      servings: 1,
      phase: [3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 7,
      title: 'Coconut Yogurt with Cinnamon',
      description: 'Simple probiotic-rich snack',
      ingredients: [
        '1/2 cup unsweetened coconut yogurt', 
        '1/4 teaspoon cinnamon', 
        'Stevia to taste (optional)'
      ],
      instructions: [
        'Place coconut yogurt in a bowl',
        'Sprinkle with cinnamon',
        'Add stevia if desired and enjoy'
      ],
      prepTime: '2 mins',
      cookTime: '0 mins',
      servings: 1,
      phase: [1, 2, 3],
      category: 'snack',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 8,
      title: 'Lentil Soup',
      description: 'Hearty and nutritious soup for Phase 3',
      ingredients: [
        '1 cup dried lentils, rinsed', 
        '1 tablespoon olive oil', 
        '1 onion, diced',
        '2 carrots, diced',
        '2 celery stalks, diced',
        '2 garlic cloves, minced',
        '4 cups vegetable broth',
        '1 teaspoon cumin',
        '1/2 teaspoon turmeric',
        'Salt and pepper to taste',
        'Fresh herbs for garnish'
      ],
      instructions: [
        'Heat olive oil in a large pot over medium heat',
        'Add onion, carrots, and celery and sauté until softened',
        'Add garlic and cook for another minute',
        'Stir in lentils, broth, and spices',
        'Bring to a boil, then reduce heat and simmer for 25-30 minutes until lentils are tender',
        'Season with salt and pepper and garnish with fresh herbs'
      ],
      prepTime: '10 mins',
      cookTime: '35 mins',
      servings: 4,
      phase: [3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 9,
      title: 'Zucchini Noodles with Pesto',
      description: 'Low-carb pasta alternative with herb pesto',
      ingredients: [
        '2 medium zucchini', 
        '2 tablespoons olive oil',
        '1 cup fresh basil leaves',
        '1/4 cup pine nuts or walnuts',
        '2 garlic cloves',
        '1/4 cup olive oil',
        'Salt and pepper to taste',
        '1/4 cup nutritional yeast (optional, for cheesy flavor)'
      ],
      instructions: [
        'Use a spiralizer to create zucchini noodles, or use a vegetable peeler for ribbons',
        'In a food processor, combine basil, nuts, garlic, and olive oil',
        'Process until smooth, add salt, pepper, and nutritional yeast if using',
        'Heat 2 tablespoons olive oil in a pan over medium heat',
        'Add zucchini noodles and sauté for 2-3 minutes until slightly softened',
        'Toss with pesto and serve immediately'
      ],
      prepTime: '15 mins',
      cookTime: '5 mins',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1615419235206-6c2988c06497?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 10,
      title: 'Cauliflower Rice Stir-Fry',
      description: 'Grain-free rice alternative with vegetables',
      ingredients: [
        '1 medium cauliflower head',
        '2 tablespoons coconut oil',
        '1 onion, diced',
        '2 garlic cloves, minced',
        '1 bell pepper, diced',
        '1 cup broccoli florets',
        '1 carrot, diced',
        '1 tablespoon coconut aminos (or tamari for Phase 3)',
        '1/2 teaspoon ginger powder',
        'Salt and pepper to taste',
        '2 eggs, beaten (optional)',
        'Fresh cilantro for garnish'
      ],
      instructions: [
        'Pulse cauliflower florets in a food processor until they resemble rice grains',
        'Heat coconut oil in a large skillet or wok over medium-high heat',
        'Add onion and garlic, sauté until fragrant',
        'Add bell pepper, broccoli, and carrot, stir-fry for 3-4 minutes',
        'Add cauliflower rice and stir-fry for another 5 minutes',
        'Push vegetables to the side and add beaten eggs if using, scramble them',
        'Mix everything together with coconut aminos, ginger, salt, and pepper',
        'Garnish with fresh cilantro before serving'
      ],
      prepTime: '15 mins',
      cookTime: '15 mins',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 11,
      title: 'Paleo Chicken Nuggets Breakfast Bowl',
      description: 'Protein-packed breakfast with chicken nuggets and eggs',
      ingredients: [
        'Chicken breast, cut into nugget-sized pieces', 
        '2 eggs (for coating)',
        '1/2 cup almond flour',
        '1 tsp garlic powder',
        '1 tsp paprika',
        'Salt and pepper to taste',
        '2 tbsp coconut oil',
        '2 additional eggs (for serving)'
      ],
      instructions: [
        'In a bowl, whisk 2 eggs for the coating',
        'In another bowl, mix almond flour, garlic powder, paprika, salt, and pepper',
        'Dip chicken pieces in egg, then coat with almond flour mixture',
        'Heat coconut oil in a pan over medium heat',
        'Cook nuggets for about 4 minutes on each side until golden and cooked through',
        'In a separate pan, cook 2 eggs as desired (scrambled or fried)',
        'Serve nuggets with eggs for a protein-rich breakfast'
      ],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 2,
      phase: [1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 12,
      title: 'Breakfast Zucchini Chips with Eggs',
      description: 'Crispy zucchini chips served with eggs for a satisfying breakfast',
      ingredients: [
        '1 medium zucchini, sliced thin', 
        '1 tbsp olive oil',
        '1/2 tsp garlic powder',
        'Salt and pepper to taste',
        '3 eggs',
        'Fresh herbs (optional)'
      ],
      instructions: [
        'Preheat oven to 225°F (107°C)',
        'Slice zucchini into thin rounds',
        'Toss with olive oil, garlic powder, salt, and pepper',
        'Arrange in a single layer on a baking sheet lined with parchment paper',
        'Bake for 1.5-2 hours until crispy, flipping halfway',
        'While chips cool slightly, cook eggs as desired',
        'Serve eggs with zucchini chips and garnish with fresh herbs if desired'
      ],
      prepTime: '10 mins',
      cookTime: '2 hours',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 13,
      title: 'No-Fail Kale Chips with Scrambled Eggs',
      description: 'Crispy kale chips paired with fluffy scrambled eggs',
      ingredients: [
        '1 bunch kale, washed and dried', 
        '1 tbsp olive oil',
        'Sea salt to taste',
        '4 eggs',
        '1 tbsp coconut oil',
        'Fresh herbs (optional)'
      ],
      instructions: [
        'Preheat oven to 300°F (150°C)',
        'Remove kale leaves from stems and tear into pieces',
        'Massage kale with olive oil and salt',
        'Arrange in a single layer on a baking sheet',
        'Bake for 10-15 minutes until crisp but not burnt',
        'Meanwhile, whisk eggs in a bowl',
        'Heat coconut oil in a pan over medium-low heat',
        'Add eggs and stir gently until just set',
        'Serve scrambled eggs with kale chips'
      ],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 14,
      title: 'Bone-In Chicken and Vegetable Breakfast Hash',
      description: 'Savory breakfast hash using leftover bone-in chicken with vegetables',
      ingredients: [
        'Leftover bone-in chicken, shredded', 
        '1 zucchini, diced',
        '1 bell pepper, diced',
        '1/2 onion, diced',
        '2 tbsp coconut oil',
        '2 eggs',
        'Fresh herbs',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Heat coconut oil in a large skillet over medium heat',
        'Add onions and cook until translucent',
        'Add bell peppers and zucchini, cook until softened',
        'Add shredded chicken and cook until heated through',
        'Make two wells in the hash and crack an egg into each',
        'Cover and cook until eggs are set to your liking',
        'Season with salt, pepper, and fresh herbs'
      ],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 2,
      phase: [0, 1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 15,
      title: 'Spinach Artichoke Breakfast Frittata',
      description: 'A nutrient-dense breakfast inspired by spinach artichoke flavors',
      ingredients: [
        '6 eggs', 
        '1 cup fresh spinach, chopped',
        '1/2 cup artichoke hearts, chopped',
        '1/4 cup coconut milk',
        '1 garlic clove, minced',
        '2 tbsp coconut oil',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Preheat oven to 375°F (190°C)',
        'Heat coconut oil in an oven-safe skillet over medium heat',
        'Add garlic and sauté until fragrant',
        'Add spinach and cook until wilted',
        'Add chopped artichoke hearts',
        'Whisk eggs and coconut milk together with salt and pepper',
        'Pour egg mixture over vegetables in the skillet',
        'Cook for 2 minutes, then transfer to oven',
        'Bake for 15-18 minutes until eggs are set and slightly puffed'
      ],
      prepTime: '10 mins',
      cookTime: '20 mins',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 16,
      title: 'Turmeric Golden Milk',
      description: 'Anti-inflammatory beverage with coconut milk',
      ingredients: [
        '1 cup unsweetened coconut milk',
        '1 teaspoon ground turmeric',
        '1/2 teaspoon ground cinnamon',
        '1/4 teaspoon ground ginger',
        'Pinch of black pepper',
        'Stevia to taste (optional)',
        '1 teaspoon coconut oil'
      ],
      instructions: [
        'In a small saucepan, warm coconut milk over medium heat (do not boil)',
        'Add turmeric, cinnamon, ginger, black pepper, and coconut oil',
        'Whisk until well combined and heated through',
        'Add stevia if desired',
        'Pour into a mug and enjoy warm'
      ],
      prepTime: '2 mins',
      cookTime: '5 mins',
      servings: 1,
      phase: [0, 1, 2, 3],
      category: 'beverage',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 17,
      title: 'Easy Chicken & Broccoli Stir Fry',
      description: 'A quick and healthy lunch option with lean protein',
      ingredients: [
        '1 lb chicken breast, sliced', 
        '3 cups broccoli florets',
        '2 tbsp coconut oil',
        '2 garlic cloves, minced',
        '1 tbsp ginger, grated',
        '2 tbsp coconut aminos (soy sauce alternative)',
        '1/2 tsp sea salt',
        '1/4 tsp black pepper'
      ],
      instructions: [
        'Heat 1 tbsp coconut oil in a large skillet or wok over medium-high heat',
        'Add chicken and cook until no longer pink, about 5-6 minutes',
        'Remove chicken and set aside',
        'Add remaining tbsp of coconut oil to pan',
        'Add garlic and ginger, stir for 30 seconds',
        'Add broccoli and stir-fry for 4-5 minutes until crisp-tender',
        'Return chicken to pan, add coconut aminos, salt, and pepper',
        'Stir to combine and cook for 2 more minutes',
        'Serve immediately'
      ],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 3,
      phase: [0, 1, 2, 3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1603436585553-268263de1735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 18,
      title: 'Candida-Friendly Chicken Tikka Masala',
      description: 'A modified version of the classic dish without cream or sugar',
      ingredients: [
        '1 lb chicken breast, cubed', 
        '1 cup coconut milk',
        '2 tbsp tomato paste',
        '1 tbsp coconut oil',
        '1 onion, diced',
        '3 garlic cloves, minced',
        '1 tbsp ginger, grated',
        '2 tsp garam masala',
        '1 tsp turmeric',
        '1 tsp cumin',
        '1/2 tsp coriander',
        '1/4 tsp cayenne (optional)',
        'Salt to taste',
        'Fresh cilantro for garnish'
      ],
      instructions: [
        'Heat coconut oil in a large skillet over medium heat',
        'Add onion and cook until translucent, about 5 minutes',
        'Add garlic and ginger, cook for 1 minute',
        'Add all spices and cook for 30 seconds until fragrant',
        'Add chicken and cook until browned on all sides',
        'Stir in tomato paste and coconut milk',
        'Reduce heat and simmer for 15-20 minutes until chicken is cooked through and sauce thickens',
        'Season with salt to taste',
        'Garnish with fresh cilantro'
      ],
      prepTime: '15 mins',
      cookTime: '25 mins',
      servings: 4,
      phase: [1, 2, 3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 19,
      title: 'Slow Cooker Mediterranean Chicken',
      description: 'Tender chicken with Mediterranean flavors, perfect for meal prep',
      ingredients: [
        '1.5 lbs chicken thighs', 
        '1 cup chicken broth',
        '1/4 cup olive oil',
        '2 tbsp lemon juice',
        '3 garlic cloves, minced',
        '1 red onion, sliced',
        '1 cup cherry tomatoes, halved',
        '1/2 cup olives',
        '1 bell pepper, sliced',
        '1 tbsp dried oregano',
        '1 tsp dried thyme',
        'Salt and pepper to taste',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Place chicken thighs in the slow cooker',
        'Add sliced onions, bell peppers, and tomatoes',
        'In a bowl, mix chicken broth, olive oil, lemon juice, garlic, oregano, thyme, salt, and pepper',
        'Pour mixture over chicken and vegetables',
        'Add olives on top',
        'Cook on low for 6-7 hours or high for 3-4 hours',
        'Garnish with fresh parsley before serving'
      ],
      prepTime: '15 mins',
      cookTime: '6 hours',
      servings: 4,
      phase: [1, 2, 3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 20,
      title: 'Tomato Basil Cauliflower Rice',
      description: 'A flavorful side dish that pairs perfectly with protein',
      ingredients: [
        '1 medium cauliflower head', 
        '2 tbsp olive oil',
        '1/2 onion, finely diced',
        '2 garlic cloves, minced',
        '1 cup cherry tomatoes, halved',
        '1/4 cup fresh basil, chopped',
        '1 tsp dried oregano',
        'Salt and pepper to taste',
        '1 tbsp lemon juice'
      ],
      instructions: [
        'Cut cauliflower into florets and pulse in a food processor until it resembles rice',
        'Heat olive oil in a large skillet over medium heat',
        'Add onion and sauté until translucent, about 3-4 minutes',
        'Add garlic and cook for 30 seconds',
        'Add cauliflower rice and cook for 5-6 minutes, stirring occasionally',
        'Add cherry tomatoes, dried oregano, salt, and pepper',
        'Cook for another 2-3 minutes until tomatoes start to soften',
        'Remove from heat, stir in fresh basil and lemon juice',
        'Serve as a side dish with your favorite protein'
      ],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1594282486552-05a3b6fbfb59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 21,
      title: 'Crock Pot Lemon Garlic Butter Chicken Thighs',
      description: 'Tender, flavorful chicken thighs made easy in a slow cooker',
      ingredients: [
        '2 lbs chicken thighs', 
        '3 tbsp butter or ghee',
        '4 garlic cloves, minced',
        '1 lemon, juiced and zested',
        '1 tsp dried thyme',
        '1 tsp dried oregano',
        '1/2 tsp red pepper flakes (optional)',
        '1/2 cup chicken broth',
        'Salt and pepper to taste',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Season chicken thighs with salt and pepper',
        'In a small saucepan, melt butter or ghee over medium heat',
        'Add garlic and cook for 1 minute until fragrant',
        'Stir in lemon juice, lemon zest, thyme, oregano, and red pepper flakes if using',
        'Place chicken thighs in the slow cooker',
        'Pour butter mixture and chicken broth over the chicken',
        'Cook on low for 6 hours or high for 3 hours',
        'Garnish with fresh parsley before serving'
      ],
      prepTime: '10 mins',
      cookTime: '6 hours',
      servings: 4,
      phase: [1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1567890667442-695d98c3a3e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 22,
      title: 'Keto Chicken Stir Fry for Candida',
      description: 'A low-carb, high-fat stir fry specifically designed for candida diet',
      ingredients: [
        '1 lb chicken thighs, sliced', 
        '2 tbsp coconut oil',
        '1 bell pepper, sliced',
        '1 cup zucchini, sliced',
        '1 cup mushrooms, sliced',
        '1/2 onion, sliced',
        '2 garlic cloves, minced',
        '1 tbsp ginger, grated',
        '2 tbsp coconut aminos',
        '1 tbsp apple cider vinegar',
        '1/2 tsp sea salt',
        '1/4 tsp black pepper'
      ],
      instructions: [
        'Heat 1 tbsp coconut oil in a large wok or skillet over high heat',
        'Add chicken and stir-fry until cooked through, about 5-6 minutes',
        'Remove chicken and set aside',
        'Add remaining coconut oil to the wok',
        'Add onion and cook for 1 minute',
        'Add garlic and ginger, cook for 30 seconds',
        'Add bell pepper, zucchini, and mushrooms',
        'Stir-fry for 3-4 minutes until vegetables are crisp-tender',
        'Return chicken to the wok',
        'Add coconut aminos, apple cider vinegar, salt, and pepper',
        'Stir to combine and cook for 1-2 more minutes',
        'Serve hot'
      ],
      prepTime: '15 mins',
      cookTime: '15 mins',
      servings: 3,
      phase: [0, 1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1604908176997-125f7c9c7ecf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 23,
      title: 'Buffalo Cauliflower Florets',
      description: 'A vegetable-based alternative to buffalo wings',
      ingredients: [
        '1 large cauliflower head, cut into florets', 
        '1/4 cup coconut oil, melted',
        '1 tsp garlic powder',
        '1 tsp onion powder',
        '1/2 tsp paprika',
        '1/4 tsp cayenne pepper (optional)',
        'Salt and pepper to taste',
        '1/4 cup hot sauce (sugar-free)',
        '2 tbsp ghee, melted'
      ],
      instructions: [
        'Preheat oven to 450°F (230°C)',
        'Line a baking sheet with parchment paper',
        'In a large bowl, combine melted coconut oil, garlic powder, onion powder, paprika, cayenne if using, salt, and pepper',
        'Add cauliflower florets and toss to coat evenly',
        'Spread on baking sheet in a single layer',
        'Roast for 20 minutes, flipping halfway through',
        'In a small bowl, mix hot sauce and melted ghee',
        'Remove cauliflower from oven, drizzle with hot sauce mixture, and toss to coat',
        'Return to oven for an additional 5-10 minutes until crispy',
        'Serve hot with a side of compliant dipping sauce if desired'
      ],
      prepTime: '10 mins',
      cookTime: '30 mins',
      servings: 4,
      phase: [1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 24,
      title: 'Sweet Potato Beef Stew',
      description: 'A hearty and nutritious stew for colder days',
      ingredients: [
        '1.5 lbs grass-fed beef stew meat', 
        '2 tbsp coconut oil',
        '1 onion, diced',
        '3 garlic cloves, minced',
        '2 carrots, sliced',
        '2 celery stalks, sliced',
        '1 sweet potato, cubed',
        '4 cups beef broth',
        '2 bay leaves',
        '1 tsp dried thyme',
        '1 tsp dried rosemary',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Heat coconut oil in a large pot or Dutch oven over medium-high heat',
        'Season beef with salt and pepper',
        'Brown beef in batches, about 2-3 minutes per batch, and set aside',
        'Add onion to the pot and cook until translucent',
        'Add garlic and cook for 1 minute',
        'Return beef to the pot',
        'Add carrots, celery, sweet potato, beef broth, bay leaves, thyme, and rosemary',
        'Bring to a boil, then reduce heat to low',
        'Cover and simmer for 1.5-2 hours until beef is tender',
        'Remove bay leaves before serving',
        'Adjust seasoning as needed'
      ],
      prepTime: '20 mins',
      cookTime: '2 hours',
      servings: 6,
      phase: [2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1583953043489-5c80d28fb27c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 25,
      title: 'Slow Cooker Beef Stew',
      description: 'A set-it-and-forget-it nutritious stew for busy days',
      ingredients: [
        '2 lbs grass-fed beef stew meat', 
        '2 tbsp coconut oil',
        '1 onion, diced',
        '3 garlic cloves, minced',
        '3 carrots, chopped',
        '2 celery stalks, chopped',
        '1 cup radishes, quartered (low-carb potato substitute)',
        '4 cups beef broth',
        '2 tbsp apple cider vinegar',
        '2 bay leaves',
        '1 tsp dried thyme',
        '1 tsp dried rosemary',
        'Salt and pepper to taste',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Heat coconut oil in a large skillet over medium-high heat',
        'Season beef with salt and pepper and brown in batches',
        'Transfer beef to the slow cooker',
        'In the same skillet, add onion and cook until soft',
        'Add garlic and cook for 30 seconds',
        'Transfer onion and garlic to the slow cooker',
        'Add carrots, celery, radishes, beef broth, apple cider vinegar, bay leaves, thyme, and rosemary to the slow cooker',
        'Cook on low for 8 hours or high for 4 hours',
        'Remove bay leaves before serving',
        'Garnish with fresh parsley'
      ],
      prepTime: '20 mins',
      cookTime: '8 hours',
      servings: 6,
      phase: [1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 26,
      title: 'Guilt-Free Candida Diet Snack Platter',
      description: 'A collection of satisfying snacks that won\'t feed candida',
      ingredients: [
        '1/4 cup mixed raw nuts (almonds, walnuts, pecans)',
        '1/4 cup coconut flakes, unsweetened',
        '1/4 cup olives',
        'Cucumber slices',
        'Celery sticks',
        'Bell pepper slices',
        '2 tbsp avocado oil',
        'Sea salt to taste',
        '1 tbsp mixed herbs (rosemary, thyme, oregano)'
      ],
      instructions: [
        'Preheat oven to 300°F (150°C)',
        'Toss nuts, coconut flakes, and mixed herbs with avocado oil and salt',
        'Spread on a baking sheet and toast for 8-10 minutes until fragrant and lightly golden',
        'Allow to cool',
        'Arrange nuts, coconut flakes, olives, and vegetable slices on a platter',
        'Serve immediately or store components separately for grab-and-go snacks throughout the week'
      ],
      prepTime: '10 mins',
      cookTime: '10 mins',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'snack',
      image: 'https://images.unsplash.com/photo-1621963836802-73af72e5c570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 27,
      title: 'Easy Oven-Baked Zucchini Chips',
      description: 'Crispy vegetable chips without the carbs',
      ingredients: [
        '2 medium zucchini', 
        '2 tbsp olive oil',
        '1 tsp garlic powder',
        '1 tsp onion powder',
        '1/2 tsp paprika',
        'Sea salt to taste'
      ],
      instructions: [
        'Preheat oven to 225°F (107°C)',
        'Slice zucchini into very thin rounds, about 1/8 inch thick (use a mandoline if possible)',
        'Pat zucchini slices dry with paper towels to remove excess moisture',
        'In a bowl, toss zucchini with olive oil and spices to coat evenly',
        'Arrange slices in a single layer on baking sheets lined with parchment paper',
        'Bake for 1.5-2 hours, flipping slices halfway through',
        'Chips are done when they\'re browned and crispy',
        'Let cool completely before storing in an airtight container'
      ],
      prepTime: '15 mins',
      cookTime: '2 hours',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'snack',
      image: 'https://images.unsplash.com/photo-1570915226741-180b4e795f69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 28,
      title: 'No-Fail Kale Chips',
      description: 'Perfectly crispy kale chips every time',
      ingredients: [
        '1 large bunch kale', 
        '1 tbsp olive oil',
        '1/4 tsp garlic powder',
        '1/4 tsp onion powder',
        'Sea salt to taste'
      ],
      instructions: [
        'Preheat oven to 300°F (150°C)',
        'Wash kale thoroughly and dry completely (use a salad spinner if available)',
        'Remove stems and tear kale into large pieces',
        'In a large bowl, massage kale with olive oil until all pieces are lightly coated',
        'Sprinkle with garlic powder, onion powder, and salt',
        'Arrange in a single layer on baking sheets',
        'Bake for 8-12 minutes, watching carefully to prevent burning',
        'Chips should be crisp but still green, not browned',
        'Cool completely before serving or storing'
      ],
      prepTime: '10 mins',
      cookTime: '10 mins',
      servings: 3,
      phase: [0, 1, 2, 3],
      category: 'snack',
      image: 'https://images.unsplash.com/photo-1541593801758-587e162a8641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];

  // Filter recipes based on phase, category, and search term
  const filteredRecipes = recipes.filter(recipe => {
    const matchesPhase = activePhase === 'all' || recipe.phase.includes(parseInt(activePhase));
    const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesPhase && matchesCategory && matchesSearch;
  });

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'snack', name: 'Snacks' }
  ];

  // Phases for filter
  const phases = [
    { id: 'all', name: 'All Phases' },
    { id: '0', name: 'Phase 0: 14-Day Cleanup' },
    { id: '1', name: 'Phase 1: MEVY Diet' },
    { id: '2', name: 'Phase 2: Low Allergy Diet' },
    { id: '3', name: 'Phase 3: Food Reintroduction' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Recipe Database</h1>
        <p className="text-xl text-gray-600 mb-4">
          Browse our collection of candida-friendly recipes for each phase of the diet.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Search Bar */}
          <div className="col-span-1 md:col-span-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by recipe name, description, or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pl-10"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Phase Filter */}
          <div>
            <label htmlFor="phase-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Phase
            </label>
            <select
              id="phase-filter"
              value={activePhase}
              onChange={(e) => setActivePhase(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {phases.map(phase => (
                <option key={phase.id} value={phase.id}>{phase.name}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Category
            </label>
            <select
              id="category-filter"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          {/* Results Counter */}
          <div className="flex items-end">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredRecipes.length}</span> of <span className="font-semibold">{recipes.length}</span> recipes
            </p>
          </div>
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                prepTime={recipe.prepTime}
                cookTime={recipe.cookTime}
                servings={recipe.servings}
                phase={recipe.phase.includes(0) ? '0+' : recipe.phase.join('+')}
                image={recipe.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">No recipes found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Recipe Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adjust serving sizes based on your hunger and activity level</li>
          <li>Most recipes can be adapted for different phases by substituting ingredients</li>
          <li>Prepare extra portions for leftovers to save time</li>
          <li>Always check that ingredients are appropriate for your current phase</li>
          <li>Experiment with herbs and spices to add flavor without sugar or salt</li>
        </ul>
      </div>
    </div>
  );
};

export default RecipeDatabase; 