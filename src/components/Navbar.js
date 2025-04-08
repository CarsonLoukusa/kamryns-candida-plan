import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(() => {
    const savedPhase = localStorage.getItem('candidaPhase');
    return savedPhase || '0';
  });
  const location = useLocation();

  // Update phase from localStorage when it changes
  useEffect(() => {
    const handleStorageChange = () => {
      const phase = localStorage.getItem('candidaPhase');
      if (phase) {
        setCurrentPhase(phase);
      }
    };

    // Set up event listener for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Check localStorage on mount and route change
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [location.pathname]);

  // Get phase name based on current phase
  const getPhaseName = () => {
    switch(currentPhase) {
      case '0':
        return '14-Day Cleanup';
      case '1':
        return 'MEVY Diet';
      case '2':
        return 'Low Allergy Diet';
      case '3':
        return 'Food Reintroduction';
      default:
        return '14-Day Cleanup';
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-green-600 font-bold text-xl">
                Kamryn's Candida Plan
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-6 sm:items-center">
            <div className="px-3 py-2 rounded-md text-sm text-gray-600">
              Currently in: <span className="font-medium text-green-600">Phase {currentPhase}: {getPhaseName()}</span>
            </div>
            
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-green-600 hover:text-green-700' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                type="button"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.includes('/phase') 
                    ? 'text-green-600 hover:text-green-700' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => document.getElementById('phase-dropdown').classList.toggle('hidden')}
              >
                Phases
                <svg className="ml-1 w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div id="phase-dropdown" className="hidden absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    to="/phase-zero"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => document.getElementById('phase-dropdown').classList.add('hidden')}
                  >
                    Phase 0: 14-Day Cleanup
                  </Link>
                  <Link
                    to="/phase-one"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => document.getElementById('phase-dropdown').classList.add('hidden')}
                  >
                    Phase 1: MEVY Diet
                  </Link>
                  <Link
                    to="/phase-two"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => document.getElementById('phase-dropdown').classList.add('hidden')}
                  >
                    Phase 2: Low Allergy Diet
                  </Link>
                  <Link
                    to="/phase-three"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => document.getElementById('phase-dropdown').classList.add('hidden')}
                  >
                    Phase 3: Food Reintroduction
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              to="/meal-planner"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/meal-planner' 
                  ? 'text-green-600 hover:text-green-700' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Meal Planner
            </Link>
            
            <Link
              to="/recipe-database"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/recipe-database' 
                  ? 'text-green-600 hover:text-green-700' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Recipes
            </Link>
            
            <Link
              to="/progress"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/progress' 
                  ? 'text-green-600 hover:text-green-700' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Progress
            </Link>
            
            <Link
              to="/assistant"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/assistant' 
                  ? 'text-green-600 hover:text-green-700' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Chat Assistant
            </Link>
            
            <Link
              to="/shopping"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/shopping' 
                  ? 'text-green-600 hover:text-green-700' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Shopping Plan
            </Link>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <div className="px-3 py-2 text-sm text-gray-600">
            Currently in: <span className="font-medium text-green-600">Phase {currentPhase}: {getPhaseName()}</span>
          </div>
          
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/' 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          <div>
            <button
              type="button"
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                location.pathname.includes('/phase') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => document.getElementById('mobile-phase-dropdown').classList.toggle('hidden')}
            >
              Phases
              <svg className="ml-1 w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div id="mobile-phase-dropdown" className="hidden pl-4">
              <Link
                to="/phase-zero"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Phase 0: 14-Day Cleanup
              </Link>
              <Link
                to="/phase-one"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Phase 1: MEVY Diet
              </Link>
              <Link
                to="/phase-two"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Phase 2: Low Allergy Diet
              </Link>
              <Link
                to="/phase-three"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Phase 3: Food Reintroduction
              </Link>
            </div>
          </div>
          
          <Link
            to="/meal-planner"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/meal-planner' 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Meal Planner
          </Link>
          
          <Link
            to="/recipe-database"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/recipe-database' 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Recipes
          </Link>
          
          <Link
            to="/progress"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/progress' 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Progress
          </Link>
          
          <Link
            to="/assistant"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/assistant' 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Chat Assistant
          </Link>
          
          <Link
            to="/shopping"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/shopping' 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shopping Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 