import React, { useState, useRef, useEffect } from 'react';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi Kamryn! I'm your Candida Diet Assistant. Ask me about foods, symptoms, or phases of your diet plan!",
      sender: 'assistant'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Food database with allowed/not allowed status by phase
  const foodDatabase = {
    // Proteins
    'chicken': { allowed: [0, 1, 2, 3], notes: 'Excellent protein source for all phases.' },
    'beef': { allowed: [0, 1, 2, 3], notes: 'Best if grass-fed. Good in all phases.' },
    'pork': { allowed: [0, 1, 2, 3], notes: 'Acceptable in all phases, but limit processed pork.' },
    'eggs': { allowed: [0, 1, 2, 3], notes: 'Great protein source. Some people may have egg sensitivities in early phases.' },
    'fish': { allowed: [0, 1, 2, 3], notes: 'Wild-caught fish is best. Excellent for all phases.' },
    'salmon': { allowed: [0, 1, 2, 3], notes: 'Rich in omega-3s. Wild-caught is best.' },
    'tuna': { allowed: [0, 1, 2, 3], notes: 'Wild-caught is best. Limit due to potential mercury.' },
    'sardines': { allowed: [0, 1, 2, 3], notes: 'Excellent source of omega-3s with low mercury.' },
    'turkey': { allowed: [0, 1, 2, 3], notes: 'Excellent lean protein source for all phases.' },
    'lamb': { allowed: [0, 1, 2, 3], notes: 'Good in all phases, preferably grass-fed.' },
    'duck': { allowed: [0, 1, 2, 3], notes: 'Good in all phases but higher in fat.' },
    'venison': { allowed: [0, 1, 2, 3], notes: 'Excellent lean protein for all phases.' },
    'bison': { allowed: [0, 1, 2, 3], notes: 'Excellent lean protein for all phases.' },
    'shellfish': { allowed: [1, 2, 3], notes: 'Introduce in Phase 1. Some people may have sensitivities.' },
    'shrimp': { allowed: [1, 2, 3], notes: 'Introduce in Phase 1. Some people may have sensitivities.' },
    'crab': { allowed: [1, 2, 3], notes: 'Introduce in Phase 1. Some people may have sensitivities.' },
    'lobster': { allowed: [1, 2, 3], notes: 'Introduce in Phase 1. Some people may have sensitivities.' },
    'scallops': { allowed: [1, 2, 3], notes: 'Introduce in Phase 1. Some people may have sensitivities.' },
    'tofu': { allowed: [2, 3], notes: 'Better introduced in Phase 2 or 3. Soy can be allergenic.' },
    'tempeh': { allowed: [3], notes: 'Fermented soy product. Best saved for Phase 3 due to fermentation.' },
    'seitan': { allowed: [], notes: 'Contains gluten. Best avoided in all phases of the candida diet.' },
    
    // Vegetables
    'broccoli': { allowed: [0, 1, 2, 3], notes: 'Great non-starchy vegetable for all phases.' },
    'spinach': { allowed: [0, 1, 2, 3], notes: 'Excellent leafy green for all phases.' },
    'kale': { allowed: [0, 1, 2, 3], notes: 'Nutrient-dense leafy green good for all phases.' },
    'asparagus': { allowed: [0, 1, 2, 3], notes: 'Has natural anti-fungal properties. Great for all phases.' },
    'cauliflower': { allowed: [0, 1, 2, 3], notes: 'Versatile non-starchy vegetable for all phases.' },
    'brussels sprouts': { allowed: [0, 1, 2, 3], notes: 'Excellent cruciferous vegetable for all phases.' },
    'cabbage': { allowed: [0, 1, 2, 3], notes: 'Great for all phases and has anti-fungal properties.' },
    'celery': { allowed: [0, 1, 2, 3], notes: 'Good non-starchy vegetable for all phases.' },
    'cucumber': { allowed: [0, 1, 2, 3], notes: 'Hydrating vegetable good for all phases.' },
    'bell peppers': { allowed: [0, 1, 2, 3], notes: 'Good non-starchy vegetable for all phases.' },
    'tomatoes': { allowed: [1, 2, 3], notes: 'Technically a fruit. Some people are sensitive. Introduce in Phase 1 and monitor.' },
    'lettuce': { allowed: [0, 1, 2, 3], notes: 'All varieties are good in all phases.' },
    'arugula': { allowed: [0, 1, 2, 3], notes: 'Excellent leafy green for all phases.' },
    'bok choy': { allowed: [0, 1, 2, 3], notes: 'Excellent leafy green for all phases.' },
    'collard greens': { allowed: [0, 1, 2, 3], notes: 'Excellent leafy green for all phases.' },
    'swiss chard': { allowed: [0, 1, 2, 3], notes: 'Excellent leafy green for all phases.' },
    'zucchini': { allowed: [0, 1, 2, 3], notes: 'Great non-starchy vegetable for all phases.' },
    'eggplant': { allowed: [0, 1, 2, 3], notes: 'Good in all phases, but some people are sensitive to nightshades.' },
    'artichokes': { allowed: [0, 1, 2, 3], notes: 'Has prebiotic properties. Good in all phases.' },
    'radishes': { allowed: [0, 1, 2, 3], notes: 'Good in all phases with natural antifungal properties.' },
    'okra': { allowed: [0, 1, 2, 3], notes: 'Good non-starchy vegetable for all phases.' },
    'fennel': { allowed: [0, 1, 2, 3], notes: 'Good for digestion. Great in all phases.' },
    'green beans': { allowed: [0, 1, 2, 3], notes: 'Good non-starchy vegetable for all phases.' },
    'onions': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties. Good for all phases.' },
    'garlic': { allowed: [0, 1, 2, 3], notes: 'Strong anti-fungal properties. Highly recommended.' },
    'potatoes': { allowed: [3], notes: 'Starchy vegetable best saved for Phase 3.' },
    'sweet potatoes': { allowed: [2, 3], notes: 'Can be introduced in Phase 2 in small amounts.' },
    'carrots': { allowed: [1, 2, 3], notes: 'Higher in sugar than some vegetables. Use moderately.' },
    'beets': { allowed: [2, 3], notes: 'Higher in sugar. Better for later phases.' },
    'pumpkin': { allowed: [2, 3], notes: 'Starchy vegetable best for Phase 2-3 in small amounts.' },
    'winter squash': { allowed: [2, 3], notes: 'Starchy vegetable best for Phase 2-3 in small amounts.' },
    'butternut squash': { allowed: [2, 3], notes: 'Starchy vegetable best for Phase 2-3 in small amounts.' },
    'acorn squash': { allowed: [2, 3], notes: 'Starchy vegetable best for Phase 2-3 in small amounts.' },
    'corn': { allowed: [3], notes: 'Starchy and often contains mold. Best saved for Phase 3, if at all.' },
    'mushrooms': { allowed: [0, 1, 2, 3], notes: 'Some types have anti-fungal properties, but some people avoid fungi when treating fungal infections.' },
    
    // Fruits
    'avocado': { allowed: [0, 1, 2, 3], notes: 'Not technically a fruit. Great source of healthy fats.' },
    'lemon': { allowed: [0, 1, 2, 3], notes: 'Good for all phases. Helps with digestion.' },
    'lime': { allowed: [0, 1, 2, 3], notes: 'Good for all phases. Helps with digestion.' },
    'berries': { allowed: [2, 3], notes: 'Lower sugar fruits for Phase 2 in small amounts.' },
    'blueberries': { allowed: [2, 3], notes: 'Lower in sugar than many fruits. Can be introduced in Phase 2 in small amounts.' },
    'strawberries': { allowed: [2, 3], notes: 'Lower in sugar than many fruits. Can be introduced in Phase 2 in small amounts.' },
    'raspberries': { allowed: [2, 3], notes: 'Lower in sugar than many fruits. Can be introduced in Phase 2 in small amounts.' },
    'blackberries': { allowed: [2, 3], notes: 'Lower in sugar than many fruits. Can be introduced in Phase 2 in small amounts.' },
    'cranberries': { allowed: [2, 3], notes: 'Unsweetened only. Can be introduced in Phase 2 in small amounts.' },
    'apples': { allowed: [2, 3], notes: 'Green apples are lower in sugar for Phase 2.' },
    'pears': { allowed: [3], notes: 'Higher in sugar. Best saved for Phase 3 in moderation.' },
    'peaches': { allowed: [3], notes: 'Higher in sugar. Best saved for Phase 3 in moderation.' },
    'plums': { allowed: [3], notes: 'Higher in sugar. Best saved for Phase 3 in moderation.' },
    'cherries': { allowed: [3], notes: 'Higher in sugar. Best saved for Phase 3 in moderation.' },
    'kiwi': { allowed: [3], notes: 'Higher in sugar. Best saved for Phase 3 in moderation.' },
    'grapefruit': { allowed: [2, 3], notes: 'Lower in sugar than many fruits. Can be introduced in Phase 2 in small amounts.' },
    'oranges': { allowed: [3], notes: 'Higher in sugar. Best saved for Phase 3 in moderation.' },
    'banana': { allowed: [3], notes: 'High in sugar. Best saved for Phase 3, if at all.' },
    'mango': { allowed: [3], notes: 'Very high in sugar. Best saved for Phase 3 in small amounts, if at all.' },
    'pineapple': { allowed: [3], notes: 'Very high in sugar. Best saved for Phase 3 in small amounts, if at all.' },
    'grapes': { allowed: [3], notes: 'High in sugar and often contain mold. Best avoided or limited to Phase 3.' },
    'watermelon': { allowed: [3], notes: 'High in sugar. Best saved for Phase 3 in small amounts, if at all.' },
    'dried fruit': { allowed: [], notes: 'Very concentrated sugar. Best avoided in all phases.' },
    
    // Grains
    'rice': { allowed: [2, 3], notes: 'White rice is easier to digest. For Phase 2.' },
    'brown rice': { allowed: [3], notes: 'Contains more anti-nutrients than white rice. Better for Phase 3.' },
    'wild rice': { allowed: [2, 3], notes: 'Technically a grass seed. Can be introduced in Phase 2.' },
    'quinoa': { allowed: [2, 3], notes: 'Technically a seed. Can be introduced in Phase 2.' },
    'millet': { allowed: [2, 3], notes: 'Can be introduced in Phase 2.' },
    'buckwheat': { allowed: [2, 3], notes: 'Despite the name, it is gluten-free. Can be introduced in Phase 2.' },
    'amaranth': { allowed: [2, 3], notes: 'Can be introduced in Phase 2.' },
    'teff': { allowed: [2, 3], notes: 'Can be introduced in Phase 2.' },
    'oats': { allowed: [2, 3], notes: 'Can be introduced in Phase 2 if gluten-free.' },
    'wheat': { allowed: [3], notes: 'Contains gluten. Save for Phase 3, if tolerated at all.' },
    'barley': { allowed: [3], notes: 'Contains gluten. Save for Phase 3, if tolerated at all.' },
    'rye': { allowed: [3], notes: 'Contains gluten. Save for Phase 3, if tolerated at all.' },
    'corn': { allowed: [3], notes: 'Often triggers reactions and may contain mold. Best saved for Phase 3, if at all.' },
    'bread': { allowed: [3], notes: 'Regular bread contains gluten and yeast. For Phase 3.' },
    'pasta': { allowed: [3], notes: 'Regular pasta contains gluten. Avoid until Phase 3, if at all. Zucchini or shirataki noodles are better alternatives.' },
    'couscous': { allowed: [3], notes: 'Contains gluten. Save for Phase 3, if tolerated at all.' },
    'bulgur': { allowed: [3], notes: 'Contains gluten. Save for Phase 3, if tolerated at all.' },
    'gluten': { allowed: [3], notes: 'Best avoided until Phase 3, if tolerated at all.' },
    
    // Dairy
    'milk': { allowed: [3], notes: 'Dairy can feed candida. Best avoided until Phase 3.' },
    'cheese': { allowed: [3], notes: 'Aged cheeses might be okay in Phase 3.' },
    'yogurt': { allowed: [2, 3], notes: 'Unsweetened, probiotic yogurt for Phase 2.' },
    'kefir': { allowed: [2, 3], notes: 'Unsweetened kefir can be introduced in Phase 2.' },
    'butter': { allowed: [2, 3], notes: 'Ghee (clarified butter) is better tolerated than regular butter and can be used in Phase 2.' },
    'ghee': { allowed: [1, 2, 3], notes: 'Clarified butter with milk solids removed. Generally well tolerated from Phase 1.' },
    'cream': { allowed: [3], notes: 'Heavy cream has less lactose but still dairy. Best saved for Phase 3.' },
    'cottage cheese': { allowed: [3], notes: 'Best avoided until Phase 3, if tolerated.' },
    'sour cream': { allowed: [3], notes: 'Best avoided until Phase 3, if tolerated.' },
    'ice cream': { allowed: [], notes: 'Contains dairy and sugar. Best avoided in all phases.' },
    
    // Nuts and Seeds
    'almonds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'walnuts': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'pecans': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'brazil nuts': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1. High in selenium.' },
    'hazelnuts': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'macadamia nuts': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'pistachios': { allowed: [2, 3], notes: 'Can contain mold. Introduce carefully in Phase 2.' },
    'cashews': { allowed: [2, 3], notes: 'Can contain mold. Introduce carefully in Phase 2.' },
    'pine nuts': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'chia seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'flax seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'hemp seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'pumpkin seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'sunflower seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'sesame seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'peanuts': { allowed: [3], notes: 'Often contain mold. Best saved for Phase 3.' },
    'peanut butter': { allowed: [3], notes: 'Often contains mold. Best saved for Phase 3, if at all.' },
    
    // Sweeteners
    'sugar': { allowed: [], notes: 'Feeds candida directly. Avoid in all phases.' },
    'honey': { allowed: [3], notes: 'Natural but still high in sugar. Small amounts in Phase 3.' },
    'maple syrup': { allowed: [3], notes: 'Natural but still high in sugar. Small amounts in Phase 3.' },
    'agave': { allowed: [], notes: 'High in fructose. Avoid in all phases.' },
    'coconut sugar': { allowed: [3], notes: 'Natural but still high in sugar. Small amounts in Phase 3.' },
    'stevia': { allowed: [0, 1, 2, 3], notes: 'Natural sweetener acceptable in all phases.' },
    'monk fruit': { allowed: [0, 1, 2, 3], notes: 'Natural non-sugar sweetener. Generally acceptable in all phases in moderation.' },
    'erythritol': { allowed: [1, 2, 3], notes: 'Sugar alcohol that doesn\'t feed candida. Acceptable in moderation.' },
    'xylitol': { allowed: [1, 2, 3], notes: 'Sugar alcohol that doesn\'t feed candida. Some people experience digestive discomfort.' },
    'aspartame': { allowed: [], notes: 'Artificial sweetener that can disrupt gut bacteria. Avoid in all phases.' },
    'sucralose': { allowed: [], notes: 'Artificial sweetener that can disrupt gut bacteria. Avoid in all phases.' },
    'saccharin': { allowed: [], notes: 'Artificial sweetener that can disrupt gut bacteria. Avoid in all phases.' },
    
    // Beverages
    'water': { allowed: [0, 1, 2, 3], notes: 'Filtered water is best. Essential in all phases.' },
    'coffee': { allowed: [2, 3], notes: 'Small amounts in later phases.' },
    'black tea': { allowed: [2, 3], notes: 'Contains some caffeine. Better introduced in Phase 2 or 3.' },
    'green tea': { allowed: [1, 2, 3], notes: 'Contains antioxidants and some anti-fungal properties. Moderate amounts acceptable from Phase 1.' },
    'herbal tea': { allowed: [0, 1, 2, 3], notes: 'Most herbal teas are fine. Especially beneficial: pau d\'arco, ginger, peppermint.' },
    'tea': { allowed: [0, 1, 2, 3], notes: 'Herbal teas are best. Green tea in moderation.' },
    'alcohol': { allowed: [], notes: 'Avoid in all phases.' },
    'wine': { allowed: [], notes: 'Contains sugar and yeast. Avoid in all phases, though some practitioners allow very small amounts of dry red wine in Phase 3.' },
    'beer': { allowed: [], notes: 'Contains gluten, yeast, and fermentable carbs. Avoid in all phases.' },
    'spirits': { allowed: [], notes: 'Hard alcohol weakens the immune system. Avoid in all phases.' },
    'soda': { allowed: [], notes: 'Contains sugar and other problematic ingredients. Avoid in all phases.' },
    'juice': { allowed: [], notes: 'Even natural fruit juices are concentrated sugar. Avoid in all phases.' },
    'coconut water': { allowed: [3], notes: 'Contains natural sugars. Small amounts in Phase 3 only.' },
    'kombucha': { allowed: [2, 3], notes: 'Better for Phase 2 or 3.' },
    'kefir': { allowed: [2, 3], notes: 'Unsweetened only. Can be introduced in Phase 2.' },
    'almond milk': { allowed: [0, 1, 2, 3], notes: 'Unsweetened only. Good alternative to dairy milk in all phases.' },
    'coconut milk': { allowed: [0, 1, 2, 3], notes: 'Unsweetened only. Good alternative to dairy milk in all phases.' },
    'oat milk': { allowed: [2, 3], notes: 'Unsweetened only. Better introduced in Phase 2 or 3.' },
    'rice milk': { allowed: [2, 3], notes: 'Unsweetened only. Better introduced in Phase 2 or 3.' },
    
    // Oils
    'coconut oil': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties.' },
    'olive oil': { allowed: [0, 1, 2, 3], notes: 'Good source of healthy fats for all phases.' },
    'avocado oil': { allowed: [0, 1, 2, 3], notes: 'Good source of healthy fats for all phases.' },
    'flaxseed oil': { allowed: [0, 1, 2, 3], notes: 'Good source of omega-3s, but don\'t cook with it.' },
    'mct oil': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties. Good in all phases.' },
    'sesame oil': { allowed: [0, 1, 2, 3], notes: 'Acceptable in all phases.' },
    'walnut oil': { allowed: [0, 1, 2, 3], notes: 'Good source of omega-3s, but don\'t cook with it.' },
    'vegetable oil': { allowed: [], notes: 'Highly processed and inflammatory. Avoid in all phases.' },
    'canola oil': { allowed: [], notes: 'Highly processed and often GMO. Avoid in all phases.' },
    'soybean oil': { allowed: [], notes: 'Highly processed and often GMO. Avoid in all phases.' },
    'corn oil': { allowed: [], notes: 'Highly processed and often GMO. Avoid in all phases.' },
    
    // Condiments
    'vinegar': { allowed: [1, 2, 3], notes: 'Apple cider vinegar is best. Avoid malt vinegar and balsamic until Phase 3.' },
    'apple cider vinegar': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties. Good in all phases.' },
    'balsamic vinegar': { allowed: [3], notes: 'Contains some sugar. Better for Phase 3 in small amounts.' },
    'mustard': { allowed: [1, 2, 3], notes: 'Check ingredients for added sugar or problematic additives.' },
    'soy sauce': { allowed: [3], notes: 'Contains gluten and fermented soy. Best saved for Phase 3.' },
    'tamari': { allowed: [2, 3], notes: 'Gluten-free soy sauce alternative. Better for Phase 2 or 3.' },
    'coconut aminos': { allowed: [1, 2, 3], notes: 'Good substitute for soy sauce. Acceptable from Phase 1.' },
    'salsa': { allowed: [1, 2, 3], notes: 'Fresh homemade without sugar is best. Check store-bought for added sugars.' },
    'ketchup': { allowed: [], notes: 'Contains sugar. Avoid in all phases or find sugar-free version for Phase 3.' },
    'mayonnaise': { allowed: [1, 2, 3], notes: 'Homemade with clean oils is best. Commercial products often contain problematic oils.' },
    'hot sauce': { allowed: [1, 2, 3], notes: 'Check ingredients for added sugars or yeasts.' },
    'bbq sauce': { allowed: [], notes: 'Contains sugar. Avoid in all phases.' },
    'tahini': { allowed: [1, 2, 3], notes: 'Sesame seed paste. Good in all phases in moderation.' },
    'miso': { allowed: [3], notes: 'Fermented soy product. Save for Phase 3 if tolerated.' },
    
    // Spices and Herbs
    'cinnamon': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties and helps regulate blood sugar.' },
    'turmeric': { allowed: [0, 1, 2, 3], notes: 'Anti-inflammatory and supports liver function.' },
    'ginger': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties and aids digestion.' },
    'oregano': { allowed: [0, 1, 2, 3], notes: 'Has strong anti-fungal properties.' },
    'thyme': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties.' },
    'rosemary': { allowed: [0, 1, 2, 3], notes: 'Has anti-microbial properties.' },
    'basil': { allowed: [0, 1, 2, 3], notes: 'Good in all phases.' },
    'parsley': { allowed: [0, 1, 2, 3], notes: 'Supports detoxification. Good in all phases.' },
    'cilantro': { allowed: [0, 1, 2, 3], notes: 'Supports detoxification. Good in all phases.' },
    'mint': { allowed: [0, 1, 2, 3], notes: 'Aids digestion. Good in all phases.' },
    'cumin': { allowed: [0, 1, 2, 3], notes: 'Good in all phases.' },
    'paprika': { allowed: [0, 1, 2, 3], notes: 'Good in all phases.' },
    'cayenne': { allowed: [0, 1, 2, 3], notes: 'Has antifungal properties. Good in all phases.' },
    'salt': { allowed: [0, 1, 2, 3], notes: 'Sea salt or Himalayan salt is best.' },
    'pepper': { allowed: [0, 1, 2, 3], notes: 'Good in all phases.' },
    
    // Other common items
    'chocolate': { allowed: [3], notes: 'Dark chocolate with very high cocoa content (85%+) in very small amounts in Phase 3 only.' },
    'cocoa': { allowed: [3], notes: 'Unsweetened only, in small amounts in Phase 3.' },
    'protein powder': { allowed: [1, 2, 3], notes: 'Look for clean versions without added sugars or problematic additives.' },
    'collagen': { allowed: [0, 1, 2, 3], notes: 'Good quality collagen peptides are acceptable in all phases.' },
    'bone broth': { allowed: [0, 1, 2, 3], notes: 'Excellent for gut healing in all phases.' },
    'nutritional yeast': { allowed: [2, 3], notes: 'Despite the name, it is deactivated yeast. Some people tolerate it well in Phase 2 or 3.' },
    'hummus': { allowed: [2, 3], notes: 'Contains legumes (chickpeas). Better introduced in Phase 2.' },
    'pickles': { allowed: [1, 2, 3], notes: 'Fermented food. Choose versions without added sugars.' },
    'sauerkraut': { allowed: [1, 2, 3], notes: 'Fermented food with probiotics. Good in Phase 1 onward for most people.' },
    'kimchi': { allowed: [1, 2, 3], notes: 'Fermented food with probiotics. Good in Phase 1 onward for most people.' },
    'chips': { allowed: [], notes: 'Most chips contain problematic oils and starches. Avoid in all phases.' },
    'popcorn': { allowed: [3], notes: 'Corn-based. Best saved for Phase 3, if tolerated.' },
    'coffee creamer': { allowed: [], notes: 'Contains dairy and often sugar. Avoid in all phases.' },
    'chewing gum': { allowed: [], notes: 'Contains artificial sweeteners or sugar. Avoid in all phases.' }
  };

  // Phase names for reference
  const phaseNames = {
    0: 'Phase 0 (14-Day Cleanup)',
    1: 'Phase 1 (MEVY Diet)',
    2: 'Phase 2 (Low Allergy Diet)',
    3: 'Phase 3 (Food Reintroduction)'
  };

  // Function to handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate assistant thinking
    setTimeout(() => {
      const response = generateResponse(inputText);
      const newAssistantMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'assistant'
      };
      
      setMessages(prevMessages => [...prevMessages, newAssistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Generate response based on user input
  const generateResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    // First, check if asking about a specific food
    for (const food in foodDatabase) {
      if (lowercaseInput.includes(food)) {
        const foodInfo = foodDatabase[food];
        
        if (foodInfo.allowed.length === 0) {
          return `It's best to avoid ${food} in all phases of the candida diet. ${foodInfo.notes}`;
        }
        
        const allowedPhases = foodInfo.allowed.map(phase => phaseNames[phase]).join(', ');
        return `${food.charAt(0).toUpperCase() + food.slice(1)}: Allowed in ${allowedPhases}. ${foodInfo.notes}`;
      }
    }
    
    // Check for questions about phases
    if (lowercaseInput.includes('phase 0') || lowercaseInput.includes('cleanup')) {
      return "Phase 0 (14-Day Cleanup) is about preparing your body and kitchen for the candida diet. You'll gradually reduce caffeine, alcohol, sugar, and processed foods while removing moldy items from your kitchen.";
    }
    
    if (lowercaseInput.includes('phase 1') || lowercaseInput.includes('mevy')) {
      return "Phase 1 (MEVY Diet) focuses on Meat, Eggs, Vegetables, and Yogurt. This phase is designed to starve the candida while keeping your body nourished. Avoid fruits, grains, and most dairy during this phase.";
    }
    
    if (lowercaseInput.includes('phase 2') || lowercaseInput.includes('low allergy')) {
      return "Phase 2 (Low Allergy Diet) introduces more foods while avoiding common allergens. You can begin adding certain nuts, seeds, and non-gluten grains. This phase helps calm your immune system while continuing to fight candida.";
    }
    
    if (lowercaseInput.includes('phase 3') || lowercaseInput.includes('reintroduction')) {
      return "Phase 3 (Food Reintroduction) is about systematically reintroducing foods to identify sensitivities. You'll add one food at a time, monitor for reactions, and build a personalized long-term diet plan.";
    }
    
    // Check for symptoms questions
    if (lowercaseInput.includes('symptoms') || lowercaseInput.includes('die-off') || lowercaseInput.includes('herx')) {
      return "Candida die-off symptoms can include fatigue, brain fog, digestive issues, and skin breakouts. These are temporary as your body eliminates toxins. Staying hydrated, getting rest, and supporting detox pathways can help manage these symptoms.";
    }
    
    // General questions about the diet
    if (lowercaseInput.includes('how long') || lowercaseInput.includes('duration')) {
      return "The typical candida diet protocol takes 3-6 months total, depending on your symptoms and progress. Phase 1 usually lasts 3-4 weeks, Phase 2 lasts 2-8 weeks, and Phase 3 lasts 2-4 weeks. Everyone's journey is different, and it's important to move through the phases at your own pace.";
    }
    
    // Default response if no specific match
    return "I'm not sure about that specific question. Try asking about a specific food, phase of the diet, or symptoms you're experiencing. I'm here to help with your candida diet journey!";
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Kamryn's Diet Assistant</h1>
        <p className="text-gray-600">
          Your personal guide for candida diet questions. Ask about foods, symptoms, or treatment options.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="h-96 p-4 overflow-y-auto bg-gray-50">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`mb-4 ${
                message.sender === 'user' 
                  ? 'text-right' 
                  : 'text-left'
              }`}
            >
              <div 
                className={`inline-block rounded-lg py-2 px-4 max-w-xs lg:max-w-md ${
                  message.sender === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-left mb-4">
              <div className="inline-block bg-gray-200 rounded-lg py-2 px-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything about your candida diet..."
              className="flex-grow py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="font-bold text-lg mb-2">Quick Food Questions</h2>
          <div className="grid grid-cols-2 gap-2">
            {['Can I eat apples?', 'Is coffee allowed?', 'What about eggs?', 'Can I have honey?'].map((q, i) => (
              <button 
                key={i}
                className="text-sm bg-white py-1 px-2 rounded border border-green-200 hover:bg-green-100 transition-colors text-left"
                onClick={() => {
                  setInputText(q);
                  document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true }));
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h2 className="font-bold text-lg mb-2">Common Questions</h2>
          <div className="grid grid-cols-1 gap-2">
            {['What can I eat in Phase 1?', 'How long do die-off symptoms last?', 'What supplements help?'].map((q, i) => (
              <button 
                key={i}
                className="text-sm bg-white py-1 px-2 rounded border border-purple-200 hover:bg-purple-100 transition-colors text-left"
                onClick={() => {
                  setInputText(q);
                  document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true }));
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant; 