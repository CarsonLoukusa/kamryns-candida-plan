import React from 'react';
import { Link } from 'react-router-dom';
import PhaseCard from '../components/PhaseCard';

const Home = () => {
  const phases = [
    {
      id: 0,
      title: "14-Day Cleanup",
      description: "The initial phase to begin reducing candida overgrowth",
      link: "/phase-zero"
    },
    {
      id: 1,
      title: "MEVY Diet",
      description: "Focus on meats, eggs, vegetables, and yogurt",
      link: "/phase-one"
    },
    {
      id: 2,
      title: "Low Allergy Diet",
      description: "Eliminate common allergens while continuing anti-candida approach",
      link: "/phase-two"
    },
    {
      id: 3,
      title: "Food Reintroduction",
      description: "Systematically reintroduce foods to identify sensitivities",
      link: "/phase-three"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kamryn's Candida Diet Journey</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A personalized guide to help Kamryn overcome candida overgrowth and restore gut health, with support from Carson every step of the way.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Personalized Diet Plan</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <p className="mb-4">
              Kamryn, this app is designed specifically to support your candida healing journey. It breaks down the comprehensive 3-phase approach to fighting candida overgrowth, with detailed food lists, recipes, and progress tracking tools.
            </p>
            <p className="mb-4">
              Carson has created this resource to make your diet journey easier to follow and maintain. The app helps you understand what foods to enjoy and which to avoid during each phase, making meal planning simpler.
            </p>
            <p>
              Track your symptoms, plan your meals, and celebrate your progress as you move through each phase. Remember that healing is a journey, and this personalized tool is here to support you every step of the way.
            </p>
          </div>
          <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-green-700">Your Quick Start</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-2">1</span>
                <span>Review the <Link to="/phase-zero" className="text-green-600 hover:text-green-800 font-medium">current phase</Link> guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-2">2</span>
                <span>Find <Link to="/recipe-database" className="text-green-600 hover:text-green-800 font-medium">candida-friendly recipes</Link></span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-2">3</span>
                <span>Plan your <Link to="/meal-planner" className="text-green-600 hover:text-green-800 font-medium">weekly meals</Link></span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-2">4</span>
                <span><Link to="/progress" className="text-green-600 hover:text-green-800 font-medium">Track your symptoms</Link> to monitor improvement</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-2">5</span>
                <span><Link to="/assistant" className="text-green-600 hover:text-green-800 font-medium">Ask questions</Link> about foods and symptoms</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-2">6</span>
                <span>Find <Link to="/shopping" className="text-green-600 hover:text-green-800 font-medium">shopping lists</Link> for each phase</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">The 3-Phase Approach to Healing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {phases.map(phase => (
          <PhaseCard
            key={phase.id}
            phase={phase.id}
            title={phase.title}
            description={phase.description}
            link={phase.link}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Your Candida Diet Success Plan</h2>
        <div className="space-y-4">
          <p>
            This diet plan is adapted specifically with Kamryn's needs in mind. The goal is to reduce candida overgrowth by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Eliminating foods that feed yeast (sugars, refined carbs, alcohol)</li>
            <li>Focusing on foods that help fight fungal overgrowth</li>
            <li>Supporting gut healing with anti-inflammatory foods</li>
            <li>Gradually reintroducing foods to identify personal triggers</li>
          </ul>
          <p className="italic mt-4">
            "Remember Kamryn, Carson is here to support you through this journey. Take it one day at a time, and celebrate each small victory along the way."
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="mb-6 text-lg">
          Ready to take control of your candida symptoms?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/meal-planner"
            className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Meal Planning
          </Link>
          <Link
            to="/progress"
            className="inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Track Your Progress
          </Link>
          <Link
            to="/assistant"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ask Diet Questions
          </Link>
          <Link
            to="/shopping"
            className="inline-block bg-teal-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            View Shopping Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 