import React, { useState } from 'react';

const ShoppingPlan = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [showAllergyFriendly, setShowAllergyFriendly] = useState(false);
  
  // Kamryn's allergies list for reference
  const allergies = [
    'Coconut', 'Cucumber', 'Pepper, Green', 'Mustard', 'Onion', 'Barley',
    'Bean, Lima', 'Bean, Navy', 'Buckwheat', 'Cabbage', 'Avocado', 'Mango', 
    'Almond', 'Bean, String', 'Corn', 'Pea', 'Peanut', 'Soybean'
  ];
  
  const phases = [
    {
      id: 0,
      name: 'Phase 0: Cleanup',
      description: 'Focus on stocking up for the diet while gradually reducing sugar, processed foods, and alcohol.'
    },
    {
      id: 1,
      name: 'Phase 1: MEVY Diet',
      description: 'Focus on Meat, Eggs, Vegetables, and Yogurt during this strict anti-candida phase.'
    },
    {
      id: 2,
      name: 'Phase 2: Low Allergy',
      description: 'Expand your shopping with some low-sugar fruits, gluten-free grains, and more variety.'
    },
    {
      id: 3,
      name: 'Phase 3: Reintroduction',
      description: 'Gradually add more foods to test tolerance while maintaining anti-candida principles.'
    }
  ];
  
  const shoppingLists = {
    0: {
      protein: [
        { name: 'Organic chicken breasts', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] },
        { name: 'Wild-caught salmon', stores: ['Sprouts', 'Costco'], brands: ['Vital Choice (online)', 'Kirkland Signature'] },
        { name: 'Grass-fed beef', stores: ['Sprouts', 'Whole Foods'], brands: ['Organic Prairie', 'Sprouts brand'] },
        { name: 'Organic eggs', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Vital Farms', 'Happy Egg Co.', 'Kirkland'] }
      ],
      vegetables: [
        { name: 'Leafy greens (spinach, kale)', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Organic Girl', 'Earthbound Farm'] },
        { name: 'Broccoli', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Cauliflower', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Zucchini', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Garlic', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Onions', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Celery', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Bell peppers', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] }
      ],
      fats: [
        { name: 'Extra virgin olive oil', stores: ['Sprouts', 'Costco'], brands: ['California Olive Ranch', 'Kirkland Signature'] },
        { name: 'Coconut oil', stores: ['Sprouts', 'Costco'], brands: ['Nutiva', 'Kirkland Signature'] },
        { name: 'Avocados', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] }
      ],
      staples: [
        { name: 'Filtered water', stores: ['Any'], brands: ['Berkey filters (online)', 'Brita'] },
        { name: 'Himalayan pink salt', stores: ['Sprouts', 'Fry\'s'], brands: ['Himalayan Chef', 'Sprouts brand'] },
        { name: 'Herbs and spices', stores: ['Sprouts'], brands: ['Simply Organic', 'Frontier Co-op'] },
        { name: 'Herbal teas', stores: ['Sprouts'], brands: ['Traditional Medicinals', 'Yogi Tea'] }
      ],
      supplements: [
        { name: 'Probiotics', stores: ['Sprouts'], brands: ['Garden of Life', 'Renew Life'] },
        { name: 'Digestive enzymes', stores: ['Sprouts'], brands: ['Enzymedica', 'NOW Foods'] }
      ]
    },
    1: {
      protein: [
        { name: 'Organic chicken (all cuts)', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] },
        { name: 'Wild-caught white fish', stores: ['Sprouts', 'Costco'], brands: ['Vital Choice (online)', 'Kirkland Signature'] },
        { name: 'Grass-fed beef', stores: ['Sprouts', 'Whole Foods'], brands: ['Organic Prairie', 'Sprouts brand'] },
        { name: 'Organic turkey', stores: ['Sprouts', 'Whole Foods'], brands: ['Sprouts brand', 'Plainville Farms'] },
        { name: 'Organic eggs', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Vital Farms', 'Happy Egg Co.', 'Kirkland'] }
      ],
      vegetables: [
        { name: 'Spinach, kale, arugula', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Organic Girl', 'Earthbound Farm'] },
        { name: 'Broccoli, cauliflower', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Zucchini, cucumber', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Garlic, onions', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Asparagus', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Cabbage, Brussels sprouts', stores: ['Sprouts', 'Fry\'s'], brands: [] }
      ],
      fermented: [
        { name: 'Sugar-free coconut yogurt', stores: ['Sprouts'], brands: ['CoYo', 'GT\'s CocoYo'] },
        { name: 'Plain unsweetened kefir', stores: ['Sprouts', 'Fry\'s'], brands: ['Lifeway'] }
      ],
      fats: [
        { name: 'Extra virgin olive oil', stores: ['Sprouts', 'Costco'], brands: ['California Olive Ranch', 'Kirkland Signature'] },
        { name: 'Coconut oil', stores: ['Sprouts', 'Costco'], brands: ['Nutiva', 'Kirkland Signature'] },
        { name: 'Avocados', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Almonds, walnuts', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] }
      ],
      staples: [
        { name: 'Apple cider vinegar', stores: ['Sprouts', 'Fry\'s'], brands: ['Bragg\'s'] },
        { name: 'Coconut aminos', stores: ['Sprouts'], brands: ['Coconut Secret'] },
        { name: 'Herbal teas', stores: ['Sprouts'], brands: ['Traditional Medicinals', 'Yogi Tea'] }
      ],
      supplements: [
        { name: 'Antifungals (caprylic acid)', stores: ['Sprouts'], brands: ['NOW Foods', 'Designs for Health'] },
        { name: 'Biofilm disruptors', stores: ['Sprouts'], brands: ['Interfase Plus', 'Klaire Labs'] }
      ]
    },
    2: {
      protein: [
        { name: 'All Phase 1 proteins', stores: [], brands: [] },
        { name: 'Lentils', stores: ['Sprouts', 'Fry\'s'], brands: ['Sprouts bulk section'] },
        { name: 'Chickpeas', stores: ['Sprouts', 'Fry\'s'], brands: ['Sprouts bulk section'] }
      ],
      vegetables: [
        { name: 'All Phase 1 vegetables', stores: [], brands: [] },
        { name: 'Sweet potatoes (small amounts)', stores: ['Sprouts', 'Fry\'s'], brands: [] }
      ],
      fruits: [
        { name: 'Green apples', stores: ['Sprouts', 'Fry\'s'], brands: ['Granny Smith'] },
        { name: 'Berries (small amounts)', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Organic when possible'] }
      ],
      grains: [
        { name: 'Quinoa', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Ancient Harvest', 'Kirkland'] },
        { name: 'Millet', stores: ['Sprouts'], brands: ['Bob\'s Red Mill'] },
        { name: 'Buckwheat', stores: ['Sprouts'], brands: ['Bob\'s Red Mill'] },
        { name: 'Gluten-free oats', stores: ['Sprouts', 'Fry\'s'], brands: ['Bob\'s Red Mill', 'Quaker Gluten Free'] }
      ],
      fermented: [
        { name: 'All Phase 1 items', stores: [], brands: [] },
        { name: 'Raw sauerkraut', stores: ['Sprouts'], brands: ['Bubbies', 'Farmhouse Culture'] },
        { name: 'Kimchi', stores: ['Sprouts'], brands: ['Wildbrine', 'Mother In Law\'s'] }
      ],
      supplements: [
        { name: 'Digestive bitters', stores: ['Sprouts'], brands: ['Urban Moonshine', 'Flora'] }
      ]
    },
    3: {
      protein: [
        { name: 'All previous proteins', stores: [], brands: [] },
        { name: 'Tempeh', stores: ['Sprouts'], brands: ['Lightlife'] }
      ],
      fruits: [
        { name: 'More varieties of berries', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Pears, peaches (limited)', stores: ['Sprouts', 'Fry\'s'], brands: [] }
      ],
      grains: [
        { name: 'Brown rice', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Lundberg', 'Sprouts bulk'] },
        { name: 'Wild rice', stores: ['Sprouts'], brands: ['Lundberg'] }
      ],
      dairy: [
        { name: 'Ghee', stores: ['Sprouts'], brands: ['Fourth & Heart', 'Ancient Organics'] },
        { name: 'Aged cheeses (if tolerated)', stores: ['Sprouts'], brands: ['Organic Valley', 'Kerrygold'] }
      ],
      sweeteners: [
        { name: 'Raw honey (small amounts)', stores: ['Sprouts', 'Costco'], brands: ['Local Arizona honey', 'Kirkland'] }
      ]
    }
  };
  
  // Allergy-friendly shopping lists
  const allergyFriendlyLists = {
    0: {
      protein: [
        { name: 'Organic chicken breasts', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] },
        { name: 'Wild-caught salmon', stores: ['Sprouts', 'Costco'], brands: ['Vital Choice (online)', 'Kirkland Signature'] },
        { name: 'Grass-fed beef', stores: ['Sprouts', 'Whole Foods'], brands: ['Organic Prairie', 'Sprouts brand'] },
        { name: 'Organic eggs', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Vital Farms', 'Happy Egg Co.', 'Kirkland'] }
      ],
      vegetables: [
        { name: 'Leafy greens (spinach, kale)', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Organic Girl', 'Earthbound Farm'] },
        { name: 'Broccoli', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Cauliflower', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Zucchini', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Garlic', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Celery', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Bell peppers (red, yellow - avoid green)', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] }
      ],
      fats: [
        { name: 'Extra virgin olive oil', stores: ['Sprouts', 'Costco'], brands: ['California Olive Ranch', 'Kirkland Signature'] },
        { name: 'MCT oil (coconut allergy alternative)', stores: ['Sprouts'], brands: ['Sports Research', 'NOW Foods'] },
        { name: 'Olives', stores: ['Sprouts', 'Fry\'s'], brands: ['Lindsay', 'Mezzetta'] }
      ],
      staples: [
        { name: 'Filtered water', stores: ['Any'], brands: ['Berkey filters (online)', 'Brita'] },
        { name: 'Himalayan pink salt', stores: ['Sprouts', 'Fry\'s'], brands: ['Himalayan Chef', 'Sprouts brand'] },
        { name: 'Herbs and spices (avoid mustard)', stores: ['Sprouts'], brands: ['Simply Organic', 'Frontier Co-op'] },
        { name: 'Herbal teas', stores: ['Sprouts'], brands: ['Traditional Medicinals', 'Yogi Tea'] }
      ],
      supplements: [
        { name: 'Probiotics', stores: ['Sprouts'], brands: ['Garden of Life', 'Renew Life'] },
        { name: 'Digestive enzymes', stores: ['Sprouts'], brands: ['Enzymedica', 'NOW Foods'] }
      ]
    },
    1: {
      protein: [
        { name: 'Organic chicken (all cuts)', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] },
        { name: 'Wild-caught white fish', stores: ['Sprouts', 'Costco'], brands: ['Vital Choice (online)', 'Kirkland Signature'] },
        { name: 'Grass-fed beef', stores: ['Sprouts', 'Whole Foods'], brands: ['Organic Prairie', 'Sprouts brand'] },
        { name: 'Organic turkey', stores: ['Sprouts', 'Whole Foods'], brands: ['Sprouts brand', 'Plainville Farms'] },
        { name: 'Organic eggs', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Vital Farms', 'Happy Egg Co.', 'Kirkland'] }
      ],
      vegetables: [
        { name: 'Spinach, kale, arugula', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Organic Girl', 'Earthbound Farm'] },
        { name: 'Broccoli, cauliflower', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Zucchini', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Garlic', stores: ['Sprouts', 'Fry\'s'], brands: [] },
        { name: 'Asparagus', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Brussels sprouts', stores: ['Sprouts', 'Fry\'s'], brands: [] }
      ],
      fermented: [
        { name: 'Unsweetened coconut yogurt alternative', stores: ['Sprouts'], brands: ['Forager (cashew-based)', 'Lavva (pili nut-based)'] },
        { name: 'Plain unsweetened sheep milk yogurt', stores: ['Sprouts', 'Whole Foods'], brands: ['Bellwether Farms']}
      ],
      fats: [
        { name: 'Extra virgin olive oil', stores: ['Sprouts', 'Costco'], brands: ['California Olive Ranch', 'Kirkland Signature'] },
        { name: 'Macadamia nuts', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] },
        { name: 'Walnuts', stores: ['Sprouts', 'Costco'], brands: ['Sprouts brand', 'Kirkland Signature'] },
        { name: 'Hazelnuts', stores: ['Sprouts'], brands: ['Sprouts brand'] }
      ],
      staples: [
        { name: 'Apple cider vinegar', stores: ['Sprouts', 'Fry\'s'], brands: ['Bragg\'s'] },
        { name: 'Garlic infused olive oil (no onion)', stores: ['Sprouts'], brands: ['FODY Foods', 'Colavita'] },
        { name: 'Herbal teas', stores: ['Sprouts'], brands: ['Traditional Medicinals', 'Yogi Tea'] }
      ],
      supplements: [
        { name: 'Antifungals (caprylic acid)', stores: ['Sprouts'], brands: ['NOW Foods', 'Designs for Health'] },
        { name: 'Biofilm disruptors', stores: ['Sprouts'], brands: ['Interfase Plus', 'Klaire Labs'] }
      ]
    },
    2: {
      protein: [
        { name: 'All Phase 1 proteins', stores: [], brands: [] },
        { name: 'Lentils (red only, if tolerated)', stores: ['Sprouts'], brands: ['Sprouts bulk section'] },
        { name: 'Garbanzo beans (if tolerated)', stores: ['Sprouts'], brands: ['Eden Foods (BPA-free cans)'] }
      ],
      vegetables: [
        { name: 'All Phase 1 vegetables', stores: [], brands: [] },
        { name: 'Sweet potatoes (small amounts)', stores: ['Sprouts', 'Fry\'s'], brands: [] }
      ],
      fruits: [
        { name: 'Green apples', stores: ['Sprouts', 'Fry\'s'], brands: ['Granny Smith'] },
        { name: 'Berries (small amounts)', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Organic when possible'] }
      ],
      grains: [
        { name: 'Quinoa', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: ['Ancient Harvest', 'Kirkland'] },
        { name: 'Millet', stores: ['Sprouts'], brands: ['Bob\'s Red Mill'] },
        { name: 'Rice (white/brown)', stores: ['Sprouts', 'Costco'], brands: ['Lundberg'] },
        { name: 'Gluten-free oats', stores: ['Sprouts', 'Fry\'s'], brands: ['Bob\'s Red Mill', 'Quaker Gluten Free'] }
      ],
      fermented: [
        { name: 'All Phase 1 items', stores: [], brands: [] },
        { name: 'Water kefir (coconut-free)', stores: ['Sprouts'], brands: ['Kevita', 'GT\'s'] }
      ],
      supplements: [
        { name: 'Digestive bitters', stores: ['Sprouts'], brands: ['Urban Moonshine (non-soy)', 'Flora'] }
      ]
    },
    3: {
      protein: [
        { name: 'All previous proteins', stores: [], brands: [] },
        { name: 'Seeds (sunflower, pumpkin, flax)', stores: ['Sprouts'], brands: ['Sprouts brand', 'NOW Foods'] }
      ],
      fruits: [
        { name: 'More varieties of berries', stores: ['Sprouts', 'Fry\'s', 'Costco'], brands: [] },
        { name: 'Pears, peaches (limited)', stores: ['Sprouts', 'Fry\'s'], brands: [] }
      ],
      grains: [
        { name: 'Rice (more varieties)', stores: ['Sprouts', 'Costco'], brands: ['Lundberg', 'Sprouts bulk'] },
        { name: 'Wild rice', stores: ['Sprouts'], brands: ['Lundberg'] }
      ],
      dairy: [
        { name: 'Ghee', stores: ['Sprouts'], brands: ['Fourth & Heart', 'Ancient Organics'] },
        { name: 'Aged cheeses (if tolerated)', stores: ['Sprouts'], brands: ['Organic Valley', 'Kerrygold'] }
      ],
      sweeteners: [
        { name: 'Raw local honey (small amounts)', stores: ['Sprouts', 'Farmers Markets'], brands: ['Local Arizona honey'] },
        { name: 'Maple syrup (small amounts)', stores: ['Sprouts', 'Costco'], brands: ['Crown Maple', 'Kirkland'] }
      ]
    }
  };
  
  const mealPlanTips = [
    {
      phase: 0,
      tips: [
        'Clean out your pantry of problematic foods like candy, cookies, processed snacks, etc.',
        'Stock up on glass containers for meal prep',
        'Invest in a water filter to avoid tap water',
        'Start building your spice cabinet for flavor variety'
      ]
    },
    {
      phase: 1,
      tips: [
        'Meal prep is essential - cook proteins in batches',
        'Roast a variety of vegetables together for quick meals',
        'Make bone broth for cooking and sipping',
        'Create simple herb mixes for flavor without additives'
      ]
    },
    {
      phase: 2,
      tips: [
        'Gradually introduce one new food at a time',
        'Try soaking grains before cooking for better digestion',
        'Experiment with fermented foods in small amounts',
        'Keep a food journal to track reactions to new additions'
      ]
    },
    {
      phase: 3,
      tips: [
        'Continue to prioritize anti-candida basics while testing new foods',
        'Introduce one new food every 3-4 days to monitor reactions',
        'Shop the perimeter of grocery stores where fresh foods are displayed',
        'Read labels carefully - even "healthy" foods can contain problematic ingredients'
      ]
    }
  ];
  
  // Allergy-friendly tips
  const allergyFriendlyTips = [
    {
      phase: 0,
      tips: [
        'Be extra careful reading labels - many products contain soy, corn derivatives, or peanut oil',
        'Use olive oil instead of coconut oil for cooking and baking',
        'Try macadamia or tiger nuts instead of almonds',
        'Consider keeping a dedicated allergy-friendly pantry section',
        'Use seed-based alternatives for many nut products'
      ]
    },
    {
      phase: 1,
      tips: [
        'Red bell peppers are nutritionally superior to green peppers and are not on your allergy list',
        'Use scallion tops (green parts only) instead of onions for flavor',
        'Try asafoetida powder as an onion/garlic substitute (use very sparingly)',
        'Macadamia nuts make great alternatives to almonds in recipes',
        'Sheep or goat yogurt may be better tolerated than cow dairy'
      ]
    },
    {
      phase: 2,
      tips: [
        'Avoid all buckwheat products and opt for quinoa or rice instead',
        'Choose red lentils which are often better tolerated than other varieties',
        'Tiger nuts (not actually nuts) make good alternatives to almonds',
        'Focus on squash varieties instead of cucumber for similar texture in recipes',
        'When introducing legumes, start with small amounts of red lentils first'
      ]
    },
    {
      phase: 3,
      tips: [
        'Continue to avoid your allergens even in this reintroduction phase',
        'Some allergies might improve after healing, but reintroduce very cautiously if at all',
        'Keep a detailed food and symptom journal',
        'If reintroducing, use the pulse test (check pulse before/after eating)',
        'Papaya and kiwi are good alternatives to mango'
      ]
    }
  ];
  
  const renderShoppingCategory = (items, category) => {
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold capitalize mb-3">{category}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-medium">{item.name}</span>
              {item.stores.length > 0 && (
                <div className="mt-1 text-sm">
                  <span className="text-gray-600">Find at: </span>
                  {item.stores.join(', ')}
                </div>
              )}
              {item.brands.length > 0 && (
                <div className="mt-1 text-sm">
                  <span className="text-gray-600">Recommended brands: </span>
                  {item.brands.join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const renderPhaseShopping = (phaseId) => {
    // Use the allergy-friendly list if selected, otherwise use the standard list
    const phaseData = showAllergyFriendly ? allergyFriendlyLists[phaseId] : shoppingLists[phaseId];
    if (!phaseData) return null;
    
    return (
      <div>
        {Object.keys(phaseData).map(category => 
          renderShoppingCategory(phaseData[category], category)
        )}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Kamryn's Shopping Plan</h1>
        <p className="text-gray-600 mb-6">
          Your guide to shopping for the candida diet in Phoenix, AZ. Find recommended foods, 
          brands, and where to buy them for each phase of your healing journey.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h2 className="font-bold text-lg mb-2">Shopping Tips for Phoenix</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sprouts Farmers Market has the widest selection of specialty diet foods</li>
            <li>Costco offers good deals on organic produce and meats in bulk</li>
            <li>Fry's Food & Drug carries many basics at lower prices</li>
            <li>Consider farmers markets for fresh local produce (especially during cooler months)</li>
            <li>AJ's Fine Foods and Whole Foods also have excellent selections but at higher price points</li>
          </ul>
        </div>
        
        {/* Allergy-friendly toggle */}
        <div className="flex items-center mb-4">
          <span className="mr-3 font-medium">Show:</span>
          <button
            className={`px-4 py-2 rounded-l-md ${!showAllergyFriendly ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setShowAllergyFriendly(false)}
          >
            Standard List
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${showAllergyFriendly ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setShowAllergyFriendly(true)}
          >
            Allergy-Friendly
          </button>
        </div>
        
        {showAllergyFriendly && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h2 className="font-bold text-lg mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Kamryn's Allergies
            </h2>
            <p className="mb-2">This list excludes or offers substitutes for the following allergens:</p>
            <div className="flex flex-wrap gap-2">
              {allergies.map((allergy, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded">
                  {allergy}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Phase tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {phases.map(phase => (
            <button
              key={phase.id}
              className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activePhase === phase.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActivePhase(phase.id)}
            >
              {phase.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Phase description */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h2 className="text-xl font-bold">{phases[activePhase].name}</h2>
        <p className="text-gray-600 mt-2">{phases[activePhase].description}</p>
        
        <div className="mt-4 bg-purple-50 p-3 rounded-md">
          <h3 className="font-semibold text-purple-800">Shopping Tips</h3>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            {(showAllergyFriendly 
              ? allergyFriendlyTips.find(t => t.phase === activePhase)?.tips 
              : mealPlanTips.find(t => t.phase === activePhase)?.tips
            ).map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Shopping list */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">
          {showAllergyFriendly ? 'Allergy-Friendly Shopping List' : 'Shopping List'}
        </h2>
        {renderPhaseShopping(activePhase)}
      </div>
    </div>
  );
};

export default ShoppingPlan; 