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

  // Phase names for reference
  const phaseNames = {
    0: 'Phase 0 (14-Day Cleanup)',
    1: 'Phase 1 (MEVY Diet)',
    2: 'Phase 2 (Low Allergy Diet)',
    3: 'Phase 3 (Food Reintroduction)'
  };

  // Common foods database
  const foods = {
    'chicken': { allowed: [0, 1, 2, 3], notes: 'Great protein source for all phases' },
    'beef': { allowed: [0, 1, 2, 3], notes: 'Best if grass-fed' },
    'eggs': { allowed: [0, 1, 2, 3], notes: 'Good protein source, but some have sensitivities' },
    'fish': { allowed: [0, 1, 2, 3], notes: 'Wild-caught is best' },
    'broccoli': { allowed: [0, 1, 2, 3], notes: 'Excellent vegetable for all phases' },
    'spinach': { allowed: [0, 1, 2, 3], notes: 'Great leafy green for all phases' },
    'kale': { allowed: [0, 1, 2, 3], notes: 'Nutrient-dense green for all phases' },
    'garlic': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties' },
    'onions': { allowed: [0, 1, 2, 3], notes: 'Good for all phases' },
    'avocado': { allowed: [0, 1, 2, 3], notes: 'Healthy fat source for all phases' },
    'lemon': { allowed: [0, 1, 2, 3], notes: 'Good for all phases' },
    'berries': { allowed: [2, 3], notes: 'Lower sugar fruits for Phase 2 and 3' },
    'apples': { allowed: [2, 3], notes: 'Green apples are better as they have less sugar' },
    'banana': { allowed: [3], notes: 'High in sugar, best saved for Phase 3' },
    'rice': { allowed: [2, 3], notes: 'White rice in Phase 2, brown rice in Phase 3' },
    'quinoa': { allowed: [2, 3], notes: 'Good grain alternative for Phase 2 and 3' },
    'bread': { allowed: [3], notes: 'Contains gluten and yeast, best for Phase 3 only' },
    'milk': { allowed: [3], notes: 'Dairy can feed candida, best for Phase 3 if tolerated' },
    'yogurt': { allowed: [2, 3], notes: 'Unsweetened with live cultures can help in Phase 2 and 3' },
    'cheese': { allowed: [3], notes: 'Best saved for Phase 3 if tolerated' },
    'almonds': { allowed: [1, 2, 3], notes: 'Good in moderation from Phase 1' },
    'sugar': { allowed: [], notes: 'Feeds candida, avoid in all phases' },
    'honey': { allowed: [3], notes: 'Natural but high in sugar, small amounts in Phase 3 only' },
    'stevia': { allowed: [0, 1, 2, 3], notes: 'Natural sweetener that is generally acceptable' },
    'coffee': { allowed: [2, 3], notes: 'Small amounts in later phases' },
    'tea': { allowed: [0, 1, 2, 3], notes: 'Herbal teas are best' },
    'alcohol': { allowed: [], notes: 'Avoid in all phases of the diet' },
    'coconut oil': { allowed: [0, 1, 2, 3], notes: 'Has anti-fungal properties' },
    'olive oil': { allowed: [0, 1, 2, 3], notes: 'Good source of healthy fats' }
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
    for (const food in foods) {
      if (lowercaseInput.includes(food)) {
        const foodInfo = foods[food];
        
        if (foodInfo.allowed.length === 0) {
          return `It's best to avoid ${food} in all phases of the candida diet. ${foodInfo.notes}.`;
        }
        
        const allowedPhases = foodInfo.allowed.map(phase => phaseNames[phase]).join(', ');
        return `${food.charAt(0).toUpperCase() + food.slice(1)}: Allowed in ${allowedPhases}. ${foodInfo.notes}.`;
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
    
    // Check for what to eat in each phase
    if (lowercaseInput.includes('what') && lowercaseInput.includes('eat') && (lowercaseInput.includes('phase 0') || lowercaseInput.includes('cleanup'))) {
      return "In Phase 0, focus on: non-starchy vegetables (broccoli, cauliflower, leafy greens), clean proteins (organic chicken, wild fish, grass-fed meat), healthy fats (olive oil, coconut oil, avocados), herbs and spices. Gradually reduce caffeine, alcohol, sugar, and processed foods.";
    }
    
    if (lowercaseInput.includes('what') && lowercaseInput.includes('eat') && (lowercaseInput.includes('phase 1') || lowercaseInput.includes('mevy'))) {
      return "In Phase 1, focus on: Meat (organic/grass-fed), Eggs (if tolerated), Vegetables (non-starchy), and Yogurt (sugar-free, probiotic). Also allowed: healthy fats, nuts and seeds in moderation, herbs, spices, and herbal teas.";
    }
    
    if (lowercaseInput.includes('what') && lowercaseInput.includes('eat') && (lowercaseInput.includes('phase 2') || lowercaseInput.includes('low allergy'))) {
      return "In Phase 2, you can include everything from Phase 1 plus: low-sugar fruits (berries, green apples), gluten-free grains (quinoa, millet), more nuts and seeds, legumes in moderation, and some probiotic foods.";
    }
    
    // Check for symptoms questions
    if (lowercaseInput.includes('symptoms') || lowercaseInput.includes('die-off') || lowercaseInput.includes('herx')) {
      return "Candida die-off symptoms can include fatigue, brain fog, digestive issues, and skin breakouts. These are temporary as your body eliminates toxins. Staying hydrated, getting rest, and supporting detox pathways can help manage these symptoms.";
    }
    
    // General questions about the diet
    if (lowercaseInput.includes('how long') || lowercaseInput.includes('duration')) {
      return "The typical candida diet protocol takes 3-6 months total, depending on your symptoms and progress. Phase 1 usually lasts 3-4 weeks, Phase 2 lasts 2-8 weeks, and Phase 3 lasts 2-4 weeks.";
    }
    
    if (lowercaseInput.includes('supplement') || lowercaseInput.includes('vitamin')) {
      return "Helpful supplements for candida include: probiotics, antifungals (like caprylic acid and oregano oil), biofilm disruptors, liver support (milk thistle), and digestive enzymes. Always introduce supplements gradually and consider working with a healthcare practitioner.";
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
          <h2 className="font-bold text-lg mb-2">Ask About Foods</h2>
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
            {['What can I eat in Phase 1?', 'How long does the diet take?', 'What about supplements?'].map((q, i) => (
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