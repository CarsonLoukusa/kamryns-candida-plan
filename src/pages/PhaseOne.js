import React from 'react';
import FoodList from '../components/FoodList';
import { Link } from 'react-router-dom';

const PhaseOne = () => {
  const allowedFoods = [
    'Meat (organic/grass-fed preferred)',
    'Eggs (free-range preferred)',
    'Vegetables (non-starchy)',
    'Yogurt (unsweetened, live cultures)',
    'Healthy fats (coconut oil, olive oil, avocado)',
    'Herbs and spices (garlic, turmeric, cinnamon)',
    'Lemon and lime juice',
    'Apple cider vinegar',
    'Herbal teas',
    'Stevia (natural sweetener)'
  ];

  const restrictedFoods = [
    'All sugars and sweeteners (except stevia)',
    'Refined carbohydrates',
    'Grains (including whole grains)',
    'Starchy vegetables (potatoes, corn, peas)',
    'Fruit and fruit juices',
    'Dairy products (except unsweetened yogurt)',
    'Alcohol',
    'Caffeine',
    'Processed meats',
    'Peanuts and pistachios',
    'Vinegar (except apple cider)'
  ];

  const vegetables = [
    'Asparagus',
    'Broccoli',
    'Brussels sprouts',
    'Cabbage',
    'Cauliflower',
    'Celery',
    'Cucumber',
    'Eggplant',
    'Garlic',
    'Kale',
    'Lettuce (all types)',
    'Onions',
    'Spinach',
    'Zucchini'
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Phase 1: The MEVY Diet</h1>
        <p className="text-xl text-gray-600 mb-4">
          The core anti-candida diet that focuses on starving the yeast while nourishing your body.
        </p>
        <p className="text-gray-600">
          Duration: 3-4 weeks
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">What is the MEVY Diet?</h2>
        <p className="mb-4">
          MEVY stands for <strong>M</strong>eat, <strong>E</strong>ggs, <strong>V</strong>egetables, and <strong>Y</strong>ogurt - the core foods of this phase. These foods provide essential nutrition while depriving candida of its preferred fuel sources (sugar and refined carbohydrates).
        </p>
        <p>
          This phase is designed to create an environment in your gut that's inhospitable to candida while supporting your body's natural healing processes.
        </p>
      </div>

      <FoodList
        title="MEVY Diet Food Guidelines"
        allowed={allowedFoods}
        restricted={restrictedFoods}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Focus on Non-Starchy Vegetables</h2>
        <p className="mb-4">
          Non-starchy vegetables should make up a significant portion of your diet during this phase. They provide nutrients, fiber, and antifungal compounds that help combat candida.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {vegetables.map((veg, index) => (
            <div key={index} className="bg-green-50 p-2 rounded text-center text-green-800">
              {veg}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic">
          Aim to include 6-8 servings of non-starchy vegetables daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Benefits of the MEVY Diet</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Starves candida by eliminating its primary food sources</li>
            <li>Reduces inflammation in the digestive tract</li>
            <li>Supports liver function and detoxification</li>
            <li>Provides essential nutrients for gut healing</li>
            <li>Helps stabilize blood sugar levels</li>
            <li>Reduces cravings for sugar and carbohydrates</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Potential Challenges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Die-off reactions:</strong> As candida dies, it can release toxins that cause temporary symptoms like fatigue, headaches, or skin breakouts.
            </li>
            <li>
              <strong>Sugar cravings:</strong> You may experience intense cravings for sugar, especially in the first 1-2 weeks.
            </li>
            <li>
              <strong>Social situations:</strong> Eating out or attending social gatherings can be challenging during this restrictive phase.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Sample Daily Meal Plan</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Breakfast</h3>
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium mb-1">Vegetable Omelet</p>
              <p className="text-gray-600">
                3 eggs cooked in coconut oil with spinach, onions, and bell peppers. Side of steamed asparagus.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Lunch</h3>
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium mb-1">Chicken and Vegetable Soup</p>
              <p className="text-gray-600">
                Organic chicken breast with celery, onions, garlic, and kale in homemade bone broth. Seasoned with turmeric, ginger, and salt.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Dinner</h3>
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium mb-1">Baked Salmon with Roasted Vegetables</p>
              <p className="text-gray-600">
                Wild-caught salmon filet baked with olive oil, lemon, and herbs. Served with roasted broccoli, cauliflower, and zucchini.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Snacks</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 space-y-1">
                <li>Celery sticks with coconut yogurt</li>
                <li>Hard-boiled eggs with salt and pepper</li>
                <li>Small serving of plain, unsweetened yogurt</li>
                <li>Cucumber slices with olive oil and herbs</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Beverages</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 space-y-1">
                <li>Filtered water with lemon</li>
                <li>Herbal teas (ginger, peppermint, rooibos)</li>
                <li>Bone broth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Tips for Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Preparation Is Key</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Plan your meals in advance</li>
              <li>Keep your kitchen stocked with MEVY-friendly foods</li>
              <li>Prepare extra food for leftovers</li>
              <li>Have appropriate snacks readily available</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Managing Die-Off Reactions</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stay well-hydrated</li>
              <li>Get plenty of rest</li>
              <li>Take detox baths with Epsom salts</li>
              <li>Consider a liver-supporting supplement</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="mb-6 text-lg">
          After 3-4 weeks on the MEVY Diet, you're ready to move on to Phase 2: The Low Allergy Diet.
        </p>
        <Link
          to="/phase-2"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Continue to Phase 2
        </Link>
      </div>
    </div>
  );
};

export default PhaseOne; 