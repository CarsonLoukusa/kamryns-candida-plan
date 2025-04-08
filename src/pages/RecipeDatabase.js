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
      title: 'Coconut Chia Pudding',
      description: 'Creamy breakfast pudding rich in omega-3 fatty acids',
      ingredients: [
        '1/4 cup chia seeds',
        '1 cup unsweetened coconut milk',
        '1/2 teaspoon vanilla extract',
        '1/2 teaspoon cinnamon',
        'Stevia to taste (optional)',
        'Unsweetened coconut flakes for topping',
        '1/4 cup berries (Phase 2-3 only)'
      ],
      instructions: [
        'In a bowl, combine chia seeds, coconut milk, vanilla, and cinnamon',
        'Stir well to prevent clumping',
        'Add stevia if desired',
        'Cover and refrigerate for at least 4 hours or overnight',
        'Stir again before serving',
        'Top with coconut flakes and berries if allowed in your phase'
      ],
      prepTime: '5 mins',
      cookTime: '0 mins (4 hours setting time)',
      servings: 2,
      phase: [1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1490731727228-d56f39814c61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 12,
      title: 'Herb-Roasted Chicken Thighs',
      description: 'Flavorful and juicy chicken with herbs and vegetables',
      ingredients: [
        '4 bone-in, skin-on chicken thighs',
        '2 tablespoons olive oil',
        '2 teaspoons dried oregano',
        '1 teaspoon dried thyme',
        '1 teaspoon dried rosemary',
        '2 garlic cloves, minced',
        'Salt and pepper to taste',
        '2 cups mixed non-starchy vegetables (Brussels sprouts, bell peppers, onions)',
        '1 lemon, quartered'
      ],
      instructions: [
        'Preheat oven to 425°F (220°C)',
        'Pat chicken thighs dry and place in a baking dish',
        'Mix olive oil, herbs, garlic, salt, and pepper in a small bowl',
        'Rub herb mixture all over chicken, including under the skin',
        'Arrange vegetables and lemon quarters around the chicken',
        'Drizzle vegetables with a little olive oil and season with salt and pepper',
        'Roast for 35-40 minutes until chicken is cooked through and vegetables are tender',
        'Let rest for 5 minutes before serving'
      ],
      prepTime: '10 mins',
      cookTime: '40 mins',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 13,
      title: 'Avocado and Egg Breakfast Bowl',
      description: 'Nutrient-dense breakfast with healthy fats and protein',
      ingredients: [
        '1 ripe avocado, halved and pitted',
        '2 eggs',
        '2 cups mixed greens',
        '1 tablespoon olive oil',
        '1 tablespoon lemon juice',
        'Salt and pepper to taste',
        'Fresh herbs (cilantro, parsley) for garnish',
        'Red pepper flakes (optional)'
      ],
      instructions: [
        'Scoop out a bit more of the avocado to make room for the eggs',
        'Place avocado halves in a baking dish to keep them stable',
        'Crack an egg into each avocado half',
        'Bake at 425°F (220°C) for 15-17 minutes until eggs are set',
        'Meanwhile, toss mixed greens with olive oil, lemon juice, salt, and pepper',
        'Place greens on a plate and top with baked avocado-egg halves',
        'Garnish with fresh herbs and red pepper flakes if desired'
      ],
      prepTime: '5 mins',
      cookTime: '17 mins',
      servings: 1,
      phase: [0, 1, 2, 3],
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 14,
      title: 'Beef and Vegetable Stew',
      description: 'Hearty and comforting stew full of nutrients',
      ingredients: [
        '1 lb grass-fed beef stew meat, cubed',
        '2 tablespoons coconut oil',
        '1 onion, chopped',
        '3 garlic cloves, minced',
        '2 celery stalks, chopped',
        '2 carrots, chopped',
        '1 cup butternut squash, cubed (Phase 2-3 only)',
        '2 cups bone broth or stock',
        '1 bay leaf',
        '1 teaspoon dried thyme',
        '1 teaspoon dried rosemary',
        'Salt and pepper to taste',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Heat coconut oil in a large pot or Dutch oven over medium-high heat',
        'Brown beef chunks in batches, about 2-3 minutes per side',
        'Remove beef and set aside',
        'Add onion, garlic, celery, and carrots to the pot, sauté for 5 minutes',
        'Return beef to the pot and add butternut squash if using',
        'Pour in bone broth and add bay leaf, thyme, rosemary, salt, and pepper',
        'Bring to a boil, then reduce heat and simmer covered for 1.5-2 hours until meat is tender',
        'Garnish with fresh parsley before serving'
      ],
      prepTime: '15 mins',
      cookTime: '2 hours',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1608500218890-c4f9b2a55077?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 15,
      title: 'Cucumber and Radish Salad',
      description: 'Crisp and refreshing side salad with apple cider vinegar',
      ingredients: [
        '2 cucumbers, thinly sliced',
        '1 bunch radishes, thinly sliced',
        '2 tablespoons olive oil',
        '1 tablespoon apple cider vinegar',
        '1 tablespoon fresh dill, chopped',
        '1 garlic clove, minced',
        'Salt and pepper to taste',
        '1/4 avocado, diced (optional)'
      ],
      instructions: [
        'Combine cucumber and radish slices in a large bowl',
        'In a small bowl, whisk together olive oil, apple cider vinegar, dill, and garlic',
        'Pour dressing over vegetables and toss to coat',
        'Season with salt and pepper',
        'Top with avocado if using',
        'Chill for 30 minutes before serving for best flavor'
      ],
      prepTime: '15 mins',
      cookTime: '0 mins',
      servings: 4,
      phase: [0, 1, 2, 3],
      category: 'side',
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