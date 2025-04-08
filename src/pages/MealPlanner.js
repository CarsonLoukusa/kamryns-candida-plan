import React, { useState } from 'react';
import MealPlannerDay from '../components/MealPlannerDay';

const MealPlanner = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [currentWeek, setCurrentWeek] = useState(new Date());
  
  // Generate week dates based on currentWeek
  const getWeekDates = () => {
    const dates = [];
    const firstDay = new Date(currentWeek);
    firstDay.setDate(firstDay.getDate() - firstDay.getDay()); // Start with Sunday
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  const weekDates = getWeekDates();
  
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Initial meal plan data
  const [mealPlan, setMealPlan] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = {
        breakfast: null,
        lunch: null,
        dinner: null,
        snacks: null
      };
      return acc;
    }, {})
  );

  // Sample meal options by phase
  const mealOptionsByPhase = {
    0: { // Phase 0 - Big Cleanup
      breakfast: [
        { id: 'p0b1', name: 'Vegetable Omelette', description: '3 eggs with spinach, onions and peppers' },
        { id: 'p0b2', name: 'Green Smoothie', description: 'Spinach, cucumber, celery, avocado and lemon juice' }
      ],
      lunch: [
        { id: 'p0l1', name: 'Grilled Chicken Salad', description: 'With mixed greens, cucumber and olive oil dressing' },
        { id: 'p0l2', name: 'Vegetable Soup', description: 'Homemade with leafy greens, celery, onions and garlic' }
      ],
      dinner: [
        { id: 'p0d1', name: 'Baked Salmon', description: 'With asparagus and zucchini' },
        { id: 'p0d2', name: 'Turkey Patties', description: 'With cauliflower mash and steamed broccoli' }
      ],
      snacks: [
        { id: 'p0s1', name: 'Celery with Almond Butter', description: '' },
        { id: 'p0s2', name: 'Cucumber Slices', description: 'With olive oil and herbs' }
      ]
    },
    1: { // Phase 1 - MEVY Diet
      breakfast: [
        { id: 'p1b1', name: 'MEVY Breakfast Bowl', description: 'Eggs, spinach and avocado cooked in coconut oil' },
        { id: 'p1b2', name: 'Turkey Breakfast Patties', description: 'With sautéed kale and onions' }
      ],
      lunch: [
        { id: 'p1l1', name: 'Chicken and Vegetable Soup', description: 'With celery, garlic, onion and leafy greens' },
        { id: 'p1l2', name: 'Beef and Broccoli Stir-Fry', description: 'Cooked in coconut oil with garlic and ginger' }
      ],
      dinner: [
        { id: 'p1d1', name: 'Baked Fish', description: 'With roasted Brussels sprouts and cauliflower' },
        { id: 'p1d2', name: 'Lamb Chops', description: 'With steamed asparagus and sautéed spinach' }
      ],
      snacks: [
        { id: 'p1s1', name: 'Hard-Boiled Eggs', description: 'With salt and pepper' },
        { id: 'p1s2', name: 'Coconut Yogurt', description: 'Plain, unsweetened' }
      ]
    },
    2: { // Phase 2 - Low Allergy
      breakfast: [
        { id: 'p2b1', name: 'Quinoa Breakfast Bowl', description: 'With berries and coconut flakes' },
        { id: 'p2b2', name: 'Turkey and Vegetables', description: 'With sautéed zucchini and herbs' }
      ],
      lunch: [
        { id: 'p2l1', name: 'Vegetable and Chicken Wrap', description: 'Using lettuce as a wrap with avocado' },
        { id: 'p2l2', name: 'Quinoa Salad', description: 'With cucumber, herbs and olive oil dressing' }
      ],
      dinner: [
        { id: 'p2d1', name: 'Grilled Steak', description: 'With roasted vegetables and small portion of buckwheat' },
        { id: 'p2d2', name: 'Baked Cod', description: 'With millet and steamed broccoli' }
      ],
      snacks: [
        { id: 'p2s1', name: 'Small Green Apple', description: '' },
        { id: 'p2s2', name: 'Raw Almonds', description: 'Small handful' }
      ]
    },
    3: { // Phase 3 - Reintroduction
      breakfast: [
        { id: 'p3b1', name: 'Gluten-Free Oatmeal', description: 'With berries and cinnamon' },
        { id: 'p3b2', name: 'Eggs and Rice', description: 'With sautéed vegetables' }
      ],
      lunch: [
        { id: 'p3l1', name: 'Lentil Soup', description: 'With vegetables and herbs' },
        { id: 'p3l2', name: 'Rice Bowl', description: 'With protein of choice and mixed vegetables' }
      ],
      dinner: [
        { id: 'p3d1', name: 'Reintroduction Test Meal', description: 'Current test food plus regular phase 2 foods' },
        { id: 'p3d2', name: 'Chickpea Curry', description: 'With cauliflower rice or regular rice' }
      ],
      snacks: [
        { id: 'p3s1', name: 'Yogurt', description: 'If dairy has been reintroduced successfully' },
        { id: 'p3s2', name: 'Fruit', description: 'According to your reintroduction schedule' }
      ]
    }
  };

  // Handle adding a meal
  const handleAddMeal = (day, mealTime) => {
    // In a real app, this would open a modal or form for selection
    // For simplicity, we'll just add the first meal option for the current phase and meal time
    const mealOptions = mealOptionsByPhase[currentPhase][mealTime];
    if (mealOptions && mealOptions.length > 0) {
      setMealPlan({
        ...mealPlan,
        [day]: {
          ...mealPlan[day],
          [mealTime]: mealOptions[0]
        }
      });
    }
  };

  // Handle removing a meal
  const handleRemoveMeal = (day, mealTime) => {
    setMealPlan({
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [mealTime]: null
      }
    });
  };

  // Navigate to previous week
  const goToPreviousWeek = () => {
    const prevWeek = new Date(currentWeek);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentWeek(prevWeek);
  };

  // Navigate to next week
  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Meal Planner</h1>
        <p className="text-xl text-gray-600 mb-4">
          Plan your meals for the week based on your current phase in the Candida Diet.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <label htmlFor="phase-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select your current phase:
            </label>
            <select
              id="phase-select"
              value={currentPhase}
              onChange={(e) => setCurrentPhase(parseInt(e.target.value))}
              className="mt-1 block w-full md:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value={0}>Phase 0: 14-Day Cleanup</option>
              <option value={1}>Phase 1: MEVY Diet</option>
              <option value={2}>Phase 2: Low Allergy Diet</option>
              <option value={3}>Phase 3: Food Reintroduction</option>
            </select>
          </div>

          <div className="mt-4 md:mt-0 flex items-center">
            <button
              onClick={goToPreviousWeek}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Previous week"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="mx-4 font-medium">
              Week of {formatDate(weekDates[0])} - {formatDate(weekDates[6])}
            </span>
            <button
              onClick={goToNextWeek}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Next week"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {weekDates.map((date, index) => (
            <MealPlannerDay
              key={index}
              day={daysOfWeek[date.getDay()]}
              date={formatDate(date)}
              meals={mealPlan[daysOfWeek[date.getDay()]]}
              onAddMeal={handleAddMeal}
              onRemoveMeal={handleRemoveMeal}
            />
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Phase {currentPhase} Meal Suggestions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(mealOptionsByPhase[currentPhase]).map(([mealTime, options]) => (
            <div key={mealTime} className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-lg mb-3 capitalize">{mealTime}</h3>
              <ul className="space-y-3">
                {options.map((meal) => (
                  <li key={meal.id} className="p-3 border border-gray-100 rounded">
                    <p className="font-medium">{meal.name}</p>
                    {meal.description && <p className="text-sm text-gray-600">{meal.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Tips for Successful Meal Planning</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prepare meals in batches to save time during the week</li>
          <li>Keep a stock of phase-appropriate snacks for when hunger strikes</li>
          <li>Rotate your proteins and vegetables to ensure nutrient variety</li>
          <li>Drink plenty of water throughout the day</li>
          <li>Adjust portions based on your individual needs and activity level</li>
        </ul>
      </div>
    </div>
  );
};

export default MealPlanner; 