import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PhaseZero from './pages/PhaseZero';
import PhaseOne from './pages/PhaseOne';
import PhaseTwo from './pages/PhaseTwo';
import PhaseThree from './pages/PhaseThree';
import MealPlanner from './pages/MealPlanner';
import RecipeDatabase from './pages/RecipeDatabase';
import ProgressTracker from './pages/ProgressTracker';
import ChatAssistant from './pages/ChatAssistant';
import ShoppingPlan from './pages/ShoppingPlan';
import WaterFast from './pages/WaterFast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phase-zero" element={<PhaseZero />} />
            <Route path="/phase-one" element={<PhaseOne />} />
            <Route path="/phase-two" element={<PhaseTwo />} />
            <Route path="/phase-three" element={<PhaseThree />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/recipe-database" element={<RecipeDatabase />} />
            <Route path="/progress" element={<ProgressTracker />} />
            <Route path="/assistant" element={<ChatAssistant />} />
            <Route path="/shopping" element={<ShoppingPlan />} />
            <Route path="/water-fast" element={<WaterFast />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 