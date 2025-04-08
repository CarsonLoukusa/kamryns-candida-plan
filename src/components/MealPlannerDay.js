import React from 'react';

const MealPlannerDay = ({ day, date, meals, onAddMeal, onRemoveMeal }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="bg-green-600 text-white p-3">
        <h3 className="font-bold">{day}</h3>
        <p className="text-sm">{date}</p>
      </div>
      <div className="p-4">
        {Object.entries(meals).map(([mealTime, meal]) => (
          <div key={mealTime} className="mb-4 last:mb-0">
            <h4 className="font-medium text-gray-700 mb-2 capitalize">{mealTime}</h4>
            {meal ? (
              <div className="bg-gray-50 p-3 rounded relative group">
                <p className="font-medium">{meal.name}</p>
                {meal.description && <p className="text-sm text-gray-600">{meal.description}</p>}
                <button
                  onClick={() => onRemoveMeal(day, mealTime)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity"
                  aria-label="Remove meal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => onAddMeal(day, mealTime)}
                className="w-full border-2 border-dashed border-gray-300 rounded p-3 text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
              >
                + Add {mealTime}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlannerDay; 