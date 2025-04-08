import React from 'react';
import FoodList from '../components/FoodList';
import { Link } from 'react-router-dom';

const PhaseTwo = () => {
  const allowedFoods = [
    'All non-starchy vegetables',
    'Meat (organic/grass-fed preferred)',
    'Fish (wild-caught preferred)',
    'Eggs (if not allergic)',
    'Healthy fats (coconut oil, olive oil, avocado)',
    'Nuts and seeds (except peanuts and pistachios)',
    'Gluten-free grains (in moderation): quinoa, millet, buckwheat',
    'Low-sugar fruits (in moderation): berries, green apples',
    'Herbal teas',
    'Stevia (natural sweetener)'
  ];

  const restrictedFoods = [
    'Gluten-containing grains (wheat, rye, barley)',
    'Dairy products',
    'Soy products',
    'Corn and corn products',
    'High-sugar fruits',
    'Peanuts and pistachios',
    'Alcohol',
    'Caffeine',
    'Artificial additives and preservatives',
    'Sugar and artificial sweeteners'
  ];

  const commonTriggerFoods = [
    'Wheat/Gluten',
    'Dairy',
    'Eggs',
    'Soy',
    'Corn',
    'Nightshades (tomatoes, peppers, eggplant, potatoes)',
    'Citrus',
    'Tree nuts',
    'Shellfish',
    'Yeasts'
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Phase 2: The Low Allergy Diet</h1>
        <p className="text-xl text-gray-600 mb-4">
          Further healing your gut by removing common allergenic foods while maintaining an anti-candida approach.
        </p>
        <p className="text-gray-600">
          Duration: 2-8 weeks
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Why The Low Allergy Diet?</h2>
        <p className="mb-4">
          Many people with candida overgrowth also have food sensitivities or allergies. These can cause immune reactions that further stress your body and slow healing. By removing common trigger foods, you allow your gut to heal more completely.
        </p>
        <p className="mb-4">
          During this phase, you'll continue with most principles from the MEVY diet but will also eliminate common allergenic foods. This gives your immune system a chance to calm down and your gut lining to repair itself.
        </p>
      </div>

      <FoodList
        title="Low Allergy Diet Food Guidelines"
        allowed={allowedFoods}
        restricted={restrictedFoods}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Common Food Triggers to Avoid</h2>
        <p className="mb-4">
          The following foods commonly trigger immune reactions in sensitive individuals. During Phase 2, you'll eliminate these foods to allow your gut to heal:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          {commonTriggerFoods.map((food, index) => (
            <div key={index} className="bg-red-50 p-2 rounded text-center text-red-800 border border-red-100">
              {food}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic">
          Note: You may not be sensitive to all these foods, but eliminating them temporarily allows your system to reset.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">What's Different from Phase 1?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>More food options:</strong> You can now include some gluten-free grains and low-sugar fruits in moderation
            </li>
            <li>
              <strong>Fewer protein sources:</strong> Dairy and potentially eggs are eliminated if you suspect sensitivity
            </li>
            <li>
              <strong>Focus on rotation:</strong> Rotating foods to prevent developing new sensitivities
            </li>
            <li>
              <strong>Individualized approach:</strong> Based on your specific sensitivities and reactions
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Signs You're Ready for Phase 3</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Most of your candida symptoms have resolved</li>
            <li>Your energy levels have stabilized</li>
            <li>Digestive issues have significantly improved</li>
            <li>Food cravings have diminished</li>
            <li>Any skin issues have cleared or improved</li>
            <li>Mental clarity has returned</li>
            <li>You've been on Phase 2 for at least 2 weeks</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Sample Daily Meal Plan</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-yellow-700 mb-2">Breakfast</h3>
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium mb-1">Quinoa Breakfast Bowl</p>
              <p className="text-gray-600">
                Cooked quinoa topped with a small handful of berries, coconut flakes, and a sprinkle of cinnamon. Side of avocado slices.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-yellow-700 mb-2">Lunch</h3>
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium mb-1">Turkey and Vegetable Lettuce Wraps</p>
              <p className="text-gray-600">
                Organic ground turkey seasoned with herbs and garlic, wrapped in large lettuce leaves with cucumber, avocado, and olive oil.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-yellow-700 mb-2">Dinner</h3>
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium mb-1">Baked Cod with Roasted Vegetables and Buckwheat</p>
              <p className="text-gray-600">
                Wild-caught cod baked with herbs and olive oil. Served with roasted broccoli, onions, and a small portion of cooked buckwheat.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-yellow-700 mb-2">Snacks</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 space-y-1">
                <li>Small handful of raw almonds</li>
                <li>Cucumber slices with olive oil and salt</li>
                <li>Small green apple</li>
                <li>Celery sticks with almond butter</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-yellow-700 mb-2">Beverages</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 space-y-1">
                <li>Filtered water with cucumber or mint</li>
                <li>Herbal teas (ginger, dandelion, mint)</li>
                <li>Bone broth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Food Rotation Strategy</h2>
        <p className="mb-4">
          To prevent developing new food sensitivities, it's recommended to rotate foods during this phase:
        </p>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="font-semibold mb-2">Why Rotate Foods?</h3>
            <p>
              Eating the same foods frequently can potentially trigger new sensitivities, especially when your gut is healing. Rotation helps prevent this and ensures nutritional variety.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="font-semibold mb-2">4-Day Rotation Basics</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Divide your protein sources, vegetables, and other foods into 4 groups</li>
              <li>Eat foods from only one group each day</li>
              <li>Wait 4 days before eating the same food again</li>
              <li>Keep a food diary to track rotations and any reactions</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="font-semibold mb-2">Example Protein Rotation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-gray-50 p-2 rounded">
                <p className="font-medium">Day 1</p>
                <p>Chicken, Turkey</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="font-medium">Day 2</p>
                <p>Beef, Lamb</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="font-medium">Day 3</p>
                <p>Fish, Shellfish</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="font-medium">Day 4</p>
                <p>Duck, Venison</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="mb-6 text-lg">
          Once you've completed 2-8 weeks on the Low Allergy Diet and most of your symptoms have resolved, 
          you're ready to move on to Phase 3: The Food Reintroduction Phase.
        </p>
        <Link
          to="/phase-3"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Continue to Phase 3
        </Link>
      </div>
    </div>
  );
};

export default PhaseTwo; 