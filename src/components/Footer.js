import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              Created with ❤️ by Carson for Kamryn's healing journey
            </p>
          </div>
          <div>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
                Home
              </Link>
              <Link to="/recipe-database" className="text-gray-500 hover:text-gray-700 text-sm">
                Recipes
              </Link>
              <Link to="/meal-planner" className="text-gray-500 hover:text-gray-700 text-sm">
                Meal Planner
              </Link>
              <Link to="/progress" className="text-gray-500 hover:text-gray-700 text-sm">
                Progress
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>"Supporting your health journey one day at a time. Together we've got this!"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 