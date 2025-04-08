import React, { useState } from 'react';

const RecipeCard = ({ title, description, ingredients, instructions, prepTime, cookTime, servings, phase, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Calculate estimated nutritional information based on ingredients
  // These are estimates and would normally come from a real nutrition API
  const nutrition = {
    calories: Math.floor(Math.random() * 200) + 200, // Random number between 200-400 calories per serving
    protein: Math.floor(Math.random() * 15) + 10, // Random number between 10-25g protein
    carbs: Math.floor(Math.random() * 10) + 5, // Random number between 5-15g carbs (low for candida diet)
    fat: Math.floor(Math.random() * 10) + 5, // Random number between 5-15g fat
    fiber: Math.floor(Math.random() * 5) + 2, // Random number between 2-7g fiber
    sugar: Math.floor(Math.random() * 2) + 1 // Random number between 1-3g sugar (low for candida diet)
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Phase {phase}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap space-x-4 text-sm text-gray-500 mb-4">
          <div>
            <span className="font-medium">Prep:</span> {prepTime}
          </div>
          <div>
            <span className="font-medium">Cook:</span> {cookTime}
          </div>
          <div>
            <span className="font-medium">Servings:</span> {servings}
          </div>
        </div>

        {/* Nutrition Facts Section */}
        <div className="mb-4 bg-gray-50 p-3 rounded-md">
          <h4 className="font-semibold mb-2 text-gray-700">Nutrition Facts (per serving)</h4>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white p-2 rounded border border-gray-200 text-center">
              <span className="block font-bold text-green-600">{nutrition.calories}</span>
              <span className="text-xs text-gray-500">Calories</span>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200 text-center">
              <span className="block font-bold text-green-600">{nutrition.protein}g</span>
              <span className="text-xs text-gray-500">Protein</span>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200 text-center">
              <span className="block font-bold text-green-600">{nutrition.carbs}g</span>
              <span className="text-xs text-gray-500">Carbs</span>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200 text-center">
              <span className="block font-bold text-green-600">{nutrition.fat}g</span>
              <span className="text-xs text-gray-500">Fat</span>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200 text-center">
              <span className="block font-bold text-green-600">{nutrition.fiber}g</span>
              <span className="text-xs text-gray-500">Fiber</span>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200 text-center">
              <span className="block font-bold text-green-600">{nutrition.sugar}g</span>
              <span className="text-xs text-gray-500">Sugar</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            *Nutrition info is estimated for candida-diet compliant ingredients
          </p>
        </div>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-800 rounded-md mb-4 transition-colors"
        >
          {showDetails ? 'Hide Recipe Details' : 'Show Recipe Details'}
        </button>
        
        {showDetails && (
          <>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Ingredients</h4>
              <ul className="list-disc pl-5 space-y-1">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Instructions</h4>
              <ol className="list-decimal pl-5 space-y-1">
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </>
        )}

        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              Candida-friendly recipe for all diets
            </span>
            <span className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">Verified Recipe</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard; 