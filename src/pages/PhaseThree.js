import React from 'react';
import FoodList from '../components/FoodList';
import { Link } from 'react-router-dom';

const PhaseThree = () => {
  const allowedFoods = [
    'All non-starchy vegetables',
    'Meats and fish',
    'Eggs (if tolerated)',
    'Low-sugar fruits',
    'Gluten-free grains (quinoa, buckwheat, millet)',
    'Nuts and seeds (except peanuts)',
    'Legumes (in moderation)',
    'Small amounts of natural sweeteners (honey, maple syrup)',
    'Herbal teas',
    'Foods you\'ve successfully reintroduced'
  ];

  const restrictedFoods = [
    'Foods that cause reactions during reintroduction',
    'Refined sugars and artificial sweeteners',
    'Processed foods with additives',
    'Alcohol (or limit to occasional glass of dry wine)',
    'Moldy foods',
    'Foods with yeast if sensitive'
  ];

  const reintroductionOrder = [
    { food: 'Non-gluten grains', examples: 'Rice, oats, quinoa' },
    { food: 'Legumes', examples: 'Lentils, chickpeas, beans' },
    { food: 'Low-sugar fruits', examples: 'Berries, green apples, pears' },
    { food: 'Starchy vegetables', examples: 'Sweet potatoes, carrots, beets' },
    { food: 'Dairy', examples: 'Yogurt, kefir, aged cheeses' },
    { food: 'Gluten grains', examples: 'In small amounts, last to be tested' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Phase 3: Food Reintroduction</h1>
        <p className="text-xl text-gray-600 mb-4">
          Strategically reintroduce foods to identify sensitivities and build a sustainable long-term diet.
        </p>
        <p className="text-gray-600">
          Duration: 2-4 weeks
        </p>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">The Reintroduction Process</h2>
        <p className="mb-4">
          Phase 3 is about gradually reintroducing foods that were eliminated during the earlier phases of the diet. This process helps identify which foods may trigger candida symptoms or other sensitivities for you personally.
        </p>
        <p>
          By following a systematic approach to reintroduction, you'll build a personalized diet that nourishes your body while keeping candida in check over the long term.
        </p>
      </div>

      <FoodList
        title="Phase 3 Food Guidelines"
        allowed={allowedFoods}
        restricted={restrictedFoods}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">How to Reintroduce Foods</h2>
        <div className="space-y-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Step 1: Select a Food</h3>
            <p>
              Choose one food to reintroduce at a time. Start with the least likely to cause problems (see recommended order below).
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Step 2: The Three-Day Process</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Day 1:</strong> Eat a small amount of the food, preferably in its pure form.</li>
              <li><strong>Day 2:</strong> Increase to a normal portion of the food.</li>
              <li><strong>Day 3:</strong> Continue eating a normal portion.</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Step 3: Monitor for Reactions</h3>
            <p className="mb-2">
              Throughout the 3-day period, closely monitor for symptoms such as:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Digestive discomfort (bloating, gas, constipation, diarrhea)</li>
              <li>Fatigue or brain fog</li>
              <li>Skin reactions (rashes, acne, itching)</li>
              <li>Headaches</li>
              <li>Joint pain</li>
              <li>Mood changes</li>
              <li>Sleep disturbances</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Step 4: Make a Decision</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No reaction:</strong> Add the food to your "safe" list and move on to the next food.</li>
              <li><strong>Mild reaction:</strong> Consider trying again later or in smaller amounts.</li>
              <li><strong>Strong reaction:</strong> Avoid this food for at least 3-6 months before trying again.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Recommended Reintroduction Order</h2>
        <p className="mb-6">
          This suggested order starts with foods least likely to cause reactions and progresses to those more commonly problematic:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reintroductionOrder.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index === 0 || index === 1 ? 'bg-green-50 border border-green-100' :
              index === 2 || index === 3 ? 'bg-yellow-50 border border-yellow-100' :
              'bg-red-50 border border-red-100'
            }`}>
              <span className="inline-block w-8 h-8 rounded-full bg-white text-center leading-8 font-bold mr-2">{index + 1}</span>
              <span className="font-medium">{item.food}</span>
              <p className="mt-1 text-sm text-gray-600 ml-10">Examples: {item.examples}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-sm text-gray-500 italic">
          Note: Wait 3-4 days between introducing new foods to clearly identify any reactions.
        </p>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Building Your Long-Term Diet</h2>
        <p className="mb-4">
          As you complete the reintroduction phase, you'll have identified which foods work well for your body and which ones may need to be avoided or limited. This knowledge forms the foundation of your long-term eating plan.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Core Principles to Maintain</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Continue emphasizing whole, unprocessed foods</li>
              <li>Keep sugar and refined carbohydrates to a minimum</li>
              <li>Include plenty of non-starchy vegetables daily</li>
              <li>Focus on quality proteins and healthy fats</li>
              <li>Support gut health with fermented foods (if tolerated)</li>
              <li>Stay hydrated with filtered water and herbal teas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Long-Term Balance</h3>
            <p>
              The goal is not perfection but finding a sustainable balance that keeps candida in check while allowing you to enjoy a varied, nutritious diet. Occasional treats are fine for most people once candida is under control.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Common Questions About Phase 3</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">How long should the entire reintroduction phase take?</h3>
            <p className="text-gray-700">
              This depends on how many foods you want to test and whether you experience reactions. Most people spend 2-4 weeks on this phase.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-1">What if I react to everything I try to reintroduce?</h3>
            <p className="text-gray-700">
              This may indicate ongoing gut healing is needed. Consider extending Phase 2 for another 4-8 weeks before trying again, or consult with a healthcare provider.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-1">Can I ever eat sugar again?</h3>
            <p className="text-gray-700">
              Most people can eventually include small amounts of natural sugars without triggering candida overgrowth. However, refined sugars should remain minimal in your long-term diet.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-1">How do I know if candida returns?</h3>
            <p className="text-gray-700">
              Be alert for returning symptoms like fatigue, digestive issues, skin problems, or brain fog. If symptoms recur, temporarily return to Phase 1 or 2 to regain control.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="mb-6 text-lg">
          Use the tools below to help manage your reintroduction process and maintain your progress.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/meal-planner"
            className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Meal Planner
          </Link>
          <Link
            to="/progress"
            className="inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Track Your Progress
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhaseThree;