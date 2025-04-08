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
    'shellfish': { allowed: [1, 2, 3], notes: 'Introduce in Phase 1. Some people may have sensitivities.' },
    'tofu': { allowed: [2, 3], notes: 'Better introduced in Phase 2 or 3. Soy can be allergenic.' },
    
    // Vegetables
    'broccoli': { allowed: [0, 1, 2, 3], notes: 'Great non-starchy vegetable for all phases.' },
    'spinach': { allowed: [0, 1, 2, 3], notes: 'Excellent leafy green for all phases.' },
    'kale': { allowed: [0, 1, 2, 3], notes: 'Nutrient-dense leafy green good for all phases.' },
    'asparagus': { allowed: [0, 1, 2, 3], notes: 'Has natural anti-fungal properties. Great for all phases.' },
    'cauliflower': { allowed: [0, 1, 2, 3], notes: 'Versatile non-starchy vegetable good for all phases.' },
    'zucchini': { allowed: [0, 1, 2, 3], notes: 'Great non-starchy vegetable for all phases.' },
    'onions': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties. Good for all phases.' },
    'garlic': { allowed: [0, 1, 2, 3], notes: 'Strong anti-fungal properties. Highly recommended in all phases.' },
    'potatoes': { allowed: [3], notes: 'Starchy vegetable best saved for Phase 3.' },
    'sweet potatoes': { allowed: [2, 3], notes: 'Can be introduced in Phase 2 in small amounts.' },
    'carrots': { allowed: [1, 2, 3], notes: 'Higher in sugar than some vegetables. Use moderately.' },
    'beets': { allowed: [2, 3], notes: 'Higher in sugar. Better for later phases.' },
    'corn': { allowed: [3], notes: 'Starchy and often contains mold. Best saved for Phase 3, if at all.' },
    'mushrooms': { allowed: [0, 1, 2, 3], notes: 'Some types have anti-fungal properties, but some people avoid fungi when treating fungal infections.' },
    
    // Fruits
    'avocado': { allowed: [0, 1, 2, 3], notes: 'Not technically a fruit. Great source of healthy fats for all phases.' },
    'lemon': { allowed: [0, 1, 2, 3], notes: 'Good for all phases. Helps with digestion.' },
    'lime': { allowed: [0, 1, 2, 3], notes: 'Good for all phases. Helps with digestion.' },
    'berries': { allowed: [2, 3], notes: 'Lower sugar fruits that can be introduced in Phase 2 in small amounts.' },
    'apples': { allowed: [2, 3], notes: 'Green apples are lower in sugar and better for Phase 2. Other varieties better for Phase 3.' },
    'banana': { allowed: [3], notes: 'High in sugar. Best saved for Phase 3, if at all.' },
    'grapes': { allowed: [3], notes: 'High in sugar and often contain mold. Best avoided or limited to Phase 3.' },
    
    // Grains
    'rice': { allowed: [2, 3], notes: 'White rice is easier to digest. Can be introduced in Phase 2.' },
    'quinoa': { allowed: [2, 3], notes: 'Technically a seed. Can be introduced in Phase 2.' },
    'oats': { allowed: [2, 3], notes: 'Can be introduced in Phase 2 if gluten-free. Watch for reactions.' },
    'bread': { allowed: [3], notes: 'Regular bread contains gluten and yeast. Avoid until Phase 3, if at all.' },
    'pasta': { allowed: [3], notes: 'Regular pasta contains gluten. Avoid until Phase 3, if at all. Zucchini or shirataki noodles are better alternatives.' },
    
    // Dairy
    'milk': { allowed: [3], notes: 'Dairy can feed candida. Best avoided until Phase 3, if at all.' },
    'cheese': { allowed: [3], notes: 'Aged cheeses might be okay in Phase 3. Avoid in earlier phases.' },
    'yogurt': { allowed: [2, 3], notes: 'Unsweetened, probiotic yogurt can be introduced in Phase 2. Coconut yogurt is often better tolerated.' },
    'kefir': { allowed: [2, 3], notes: 'Unsweetened kefir can be introduced in Phase 2.' },
    
    // Nuts and Seeds
    'almonds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'walnuts': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'chia seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'flax seeds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1.' },
    'peanuts': { allowed: [3], notes: 'Often contain mold. Best saved for Phase 3, if at all.' },
    
    // Sweeteners
    'sugar': { allowed: [], notes: 'Feeds candida directly. Avoid in all phases.' },
    'honey': { allowed: [3], notes: 'Natural but still high in sugar. Small amounts in Phase 3 only.' },
    'maple syrup': { allowed: [3], notes: 'Natural but still high in sugar. Small amounts in Phase 3 only.' },
    'stevia': { allowed: [0, 1, 2, 3], notes: 'Natural non-sugar sweetener. Generally acceptable in all phases in moderation.' },
    'erythritol': { allowed: [1, 2, 3], notes: 'Sugar alcohol that doesn\'t feed candida. Acceptable in moderation.' },
    'xylitol': { allowed: [1, 2, 3], notes: 'Sugar alcohol that doesn\'t feed candida. Some people experience digestive discomfort.' },
    
    // Beverages
    'coffee': { allowed: [2, 3], notes: 'Small amounts in later phases. Can cause issues for some people.' },
    'tea': { allowed: [0, 1, 2, 3], notes: 'Herbal teas are best. Green tea in moderation. Avoid black tea until later phases.' },
    'alcohol': { allowed: [], notes: 'Feeds candida and weakens the immune system. Avoid in all phases.' },
    'soda': { allowed: [], notes: 'Contains sugar and other problematic ingredients. Avoid in all phases.' },
    'kombucha': { allowed: [2, 3], notes: 'Contains beneficial probiotics but also some sugar and yeast. Better for Phase 2 or 3.' },
    
    // Oils
    'coconut oil': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties. Excellent for all phases.' },
    'olive oil': { allowed: [0, 1, 2, 3], notes: 'Good source of healthy fats for all phases.' },
    
    // Condiments
    'vinegar': { allowed: [1, 2, 3], notes: 'Apple cider vinegar is best. Avoid malt vinegar and balsamic until Phase 3.' },
    'soy sauce': { allowed: [3], notes: 'Contains gluten and fermented soy. Best saved for Phase 3.' },
    'ketchup': { allowed: [], notes: 'Contains sugar. Avoid in all phases or find sugar-free version for Phase 3.' },
    'mayonnaise': { allowed: [1, 2, 3], notes: 'Homemade with clean oils is best. Commercial products often contain problematic oils.' }
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
    
    // Check if asking about a specific food
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
    if (lowercaseInput.includes('phase 0') || lowercaseInput.includes('cleanup') || lowercaseInput.includes('preparation')) {
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
      return "Candida die-off symptoms (Herxheimer reaction) can include fatigue, brain fog, digestive issues, and skin breakouts. These are temporary as your body eliminates toxins. Staying hydrated, getting rest, and supporting detox pathways can help manage these symptoms.";
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Kamryn's Diet Assistant</h1>
        <p className="text-xl text-gray-600">
          Ask me questions about foods, symptoms, or phases of your candida diet plan!
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
              placeholder="Ask about a specific food or question..."
              className="flex-grow py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            Try asking: "Can I eat apples?" or "What foods can I eat in Phase 1?"
          </p>
        </div>
      </div>
      
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
        <h2 className="font-bold text-lg mb-2">How to Use This Assistant</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Ask about specific foods to check if they're allowed in your current phase</li>
          <li>Inquire about symptoms you might be experiencing</li>
          <li>Get information about the different phases of the diet</li>
          <li>Get recipe ideas that are appropriate for your current phase</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatAssistant; 