import React from 'react';
import { Link } from 'react-router-dom';

const PhaseZero = () => {
  const toRemoveItems = [
    'Old condiments and sauces',
    'Jams, jellies, and preserves',
    'Bottles with potential mold growth',
    'Old herbs and spices',
    'Leftover foods stored for long periods',
    'Sugary items (candy, cookies, ice cream)',
    'Processed snack foods (chips, crackers)',
    'Fruit juices and sodas',
    'Alcohol (beer, wine, spirits)',
    'Foods with high fructose corn syrup',
    'Artificial sweeteners',
    'Highly processed foods (microwave meals, deli meats)',
    'White flour products (bread, pasta, pastries)'
  ];

  const gradualReductionItems = [
    'Caffeine (coffee, tea, energy drinks)',
    'Alcohol',
    'Sugar',
    'Refined carbohydrates',
    'Fast food and takeout meals'
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Phase 0: 14-Day Big Cleanup</h1>
        <p className="text-xl text-gray-600 mb-4">
          Before beginning the candida cleanse, spend two weeks preparing your body and kitchen for success.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Why the Big Cleanup Matters</h2>
        <p className="mb-3">
          The 14-Day Big Cleanup serves two important purposes:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            <strong>Easing into dietary changes:</strong> Gradually reducing caffeine, alcohol, sugar, and processed foods helps minimize withdrawal symptoms and makes the transition more manageable.
          </li>
          <li>
            <strong>Reducing die-off reactions:</strong> A gradual approach helps minimize the "Herxheimer reaction" (die-off symptoms) that can occur when candida dies and releases toxins.
          </li>
        </ol>
        <p>
          This phase is particularly important if you have severe candida symptoms or have been consuming a diet high in sugar, alcohol, or processed foods.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Pantry and Refrigerator Cleanup</h2>
        <p className="mb-4">
          Begin by removing foods that may harbor mold or feed candida from your kitchen:
        </p>
        <ul className="list-disc pl-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {toRemoveItems.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 italic">
          Tip: Don't keep these foods "just in case" - removing them completely helps avoid temptation during your cleanse.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Gradually Reduce These Items</h2>
        <p className="mb-4">
          Instead of going "cold turkey," gradually reduce your consumption of these items over the 14-day period:
        </p>
        <ul className="list-disc pl-6 mb-4">
          {gradualReductionItems.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4">
          For example, if you normally drink three cups of coffee daily, reduce to two cups for days 1-5, then one cup for days 6-10, then switch to herbal tea for the remaining days.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">What to Stock Up On</h2>
        <p className="mb-4">
          Begin adding these candida-friendly foods to your diet:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Vegetables</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Leafy greens</li>
              <li>Broccoli</li>
              <li>Cauliflower</li>
              <li>Asparagus</li>
              <li>Zucchini</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Proteins</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Wild-caught fish</li>
              <li>Organic chicken</li>
              <li>Free-range eggs</li>
              <li>Grass-fed beef</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Healthy Fats</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Coconut oil</li>
              <li>Olive oil</li>
              <li>Avocados</li>
              <li>Raw nuts (small amounts)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">14-Day Cleanup Checklist</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="font-semibold mb-2">Days 1-5</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean out old condiments and potentially moldy items</li>
              <li>Begin reducing caffeine, alcohol, and sugar intake</li>
              <li>Start replacing processed snacks with vegetables and proteins</li>
              <li>Drink more water (aim for 8 glasses daily)</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="font-semibold mb-2">Days 6-10</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Further reduce caffeine and sugar</li>
              <li>Remove all alcohol from your diet</li>
              <li>Replace refined grains with vegetables</li>
              <li>Begin introducing more anti-fungal foods (garlic, coconut oil)</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="font-semibold mb-2">Days 11-14</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Minimize caffeine to one cup or less</li>
              <li>Eliminate all processed sugar</li>
              <li>Focus on whole, fresh foods</li>
              <li>Prepare your kitchen and meals for Phase 1</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <p className="mb-6 text-lg">
          After completing your 14-Day Cleanup, you're ready to begin Phase 1: The MEVY Diet.
        </p>
        <Link
          to="/phase-1"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default PhaseZero; 