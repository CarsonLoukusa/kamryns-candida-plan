import React, { useState, useEffect } from 'react';
import ProgressChart from '../components/ProgressChart';

const ProgressTracker = () => {
  // Common candida symptoms with initial values
  const initialSymptoms = [
    { name: 'Digestive Issues', currentValue: 8, previousValues: [9, 8], improving: true },
    { name: 'Fatigue', currentValue: 7, previousValues: [9, 8, 7], improving: true },
    { name: 'Brain Fog', currentValue: 6, previousValues: [8, 7, 6], improving: true },
    { name: 'Sugar Cravings', currentValue: 5, previousValues: [9, 7, 5], improving: true },
    { name: 'Skin Issues', currentValue: 7, previousValues: [8, 8, 7], improving: true },
    { name: 'Mood Swings', currentValue: 6, previousValues: [7, 6, 6], improving: true }
  ];

  const [symptoms, setSymptoms] = useState(() => {
    // Try to load from localStorage if available
    const savedSymptoms = localStorage.getItem('candidaSymptoms');
    return savedSymptoms ? JSON.parse(savedSymptoms) : initialSymptoms;
  });

  const [newSymptom, setNewSymptom] = useState('');
  const [currentPhase, setCurrentPhase] = useState(() => {
    const savedPhase = localStorage.getItem('candidaPhase');
    return savedPhase || '0';
  });
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('candidaNotes');
    return savedNotes || '';
  });

  // Save to localStorage whenever symptoms or phase changes
  useEffect(() => {
    localStorage.setItem('candidaSymptoms', JSON.stringify(symptoms));
  }, [symptoms]);

  useEffect(() => {
    localStorage.setItem('candidaPhase', currentPhase);
  }, [currentPhase]);

  useEffect(() => {
    localStorage.setItem('candidaNotes', notes);
  }, [notes]);

  // Handle changing symptom severity
  const handleSymptomChange = (index, newValue) => {
    const updatedSymptoms = [...symptoms];
    const oldValue = updatedSymptoms[index].currentValue;
    
    // Update the symptom
    updatedSymptoms[index] = {
      ...updatedSymptoms[index],
      previousValues: [...updatedSymptoms[index].previousValues, oldValue],
      currentValue: newValue,
      improving: newValue <= oldValue
    };
    
    setSymptoms(updatedSymptoms);
  };

  // Add a new symptom
  const handleAddSymptom = () => {
    if (newSymptom.trim() === '') return;
    
    setSymptoms([
      ...symptoms,
      {
        name: newSymptom,
        currentValue: 5, // Default to middle value
        previousValues: [],
        improving: false
      }
    ]);
    
    setNewSymptom('');
  };

  // Remove a symptom
  const handleRemoveSymptom = (index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms.splice(index, 1);
    setSymptoms(updatedSymptoms);
  };

  // Add a food reintroduction log entry
  const [foodLogs, setFoodLogs] = useState(() => {
    const savedLogs = localStorage.getItem('candidaFoodLogs');
    return savedLogs ? JSON.parse(savedLogs) : [];
  });

  const [newFood, setNewFood] = useState('');
  const [reactionNotes, setReactionNotes] = useState('');
  const [reactionSeverity, setReactionSeverity] = useState('none');

  useEffect(() => {
    localStorage.setItem('candidaFoodLogs', JSON.stringify(foodLogs));
  }, [foodLogs]);

  const handleAddFoodLog = () => {
    if (newFood.trim() === '') return;
    
    setFoodLogs([
      ...foodLogs,
      {
        food: newFood,
        date: new Date().toISOString().split('T')[0],
        notes: reactionNotes,
        severity: reactionSeverity
      }
    ]);
    
    setNewFood('');
    setReactionNotes('');
    setReactionSeverity('none');
  };

  // Calculate current progress
  const calculateProgress = () => {
    if (symptoms.length === 0) return 0;
    
    const totalImprovement = symptoms.reduce((sum, symptom) => {
      if (symptom.previousValues.length === 0) return sum;
      
      const initialValue = symptom.previousValues[0];
      const currentValue = symptom.currentValue;
      const percentImprovement = ((initialValue - currentValue) / initialValue) * 100;
      
      return sum + percentImprovement;
    }, 0);
    
    return Math.round(totalImprovement / symptoms.length);
  };

  const progress = calculateProgress();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Progress Tracker</h1>
        <p className="text-xl text-gray-600 mb-4">
          Monitor your symptoms and improvements throughout your candida cleanse journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Symptom Tracker</h2>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Current Phase:</span>
                <select
                  value={currentPhase}
                  onChange={(e) => setCurrentPhase(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="0">Phase 0: 14-Day Cleanup</option>
                  <option value="1">Phase 1: MEVY Diet</option>
                  <option value="2">Phase 2: Low Allergy Diet</option>
                  <option value="3">Phase 3: Food Reintroduction</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="border-b border-gray-200 pb-5 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <h3 className="font-medium text-lg">{symptom.name}</h3>
                      {symptom.improving && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Improving
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleRemoveSymptom(index)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove symptom"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={symptom.currentValue}
                      onChange={(e) => handleSymptomChange(index, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-4 w-8 text-center">{symptom.currentValue}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>None</span>
                    <span>Severe</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex">
              <input
                type="text"
                placeholder="Add a new symptom to track..."
                value={newSymptom}
                onChange={(e) => setNewSymptom(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddSymptom()}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              <button
                onClick={handleAddSymptom}
                className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add
              </button>
            </div>

            <div className="mt-6">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Journal Notes
              </label>
              <textarea
                id="notes"
                rows="4"
                placeholder="Record any observations, patterns, or notes about your symptoms..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
          </div>

          {currentPhase === '3' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Food Reintroduction Log</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="food-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Food Tested
                  </label>
                  <input
                    type="text"
                    id="food-name"
                    placeholder="e.g., Yogurt, Rice, Cheese"
                    value={newFood}
                    onChange={(e) => setNewFood(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="reaction-severity" className="block text-sm font-medium text-gray-700 mb-1">
                    Reaction Severity
                  </label>
                  <select
                    id="reaction-severity"
                    value={reactionSeverity}
                    onChange={(e) => setReactionSeverity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="none">No Reaction</option>
                    <option value="mild">Mild Reaction</option>
                    <option value="moderate">Moderate Reaction</option>
                    <option value="severe">Severe Reaction</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="reaction-notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Reaction Notes
                  </label>
                  <textarea
                    id="reaction-notes"
                    rows="2"
                    placeholder="Describe any reactions or symptoms..."
                    value={reactionNotes}
                    onChange={(e) => setReactionNotes(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handleAddFoodLog}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Add Food Log
                </button>
              </div>
              
              {foodLogs.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Recent Food Logs</h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reaction</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {foodLogs.slice(0, 5).map((log, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{log.date}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{log.food}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                log.severity === 'none' ? 'bg-green-100 text-green-800' :
                                log.severity === 'mild' ? 'bg-yellow-100 text-yellow-800' :
                                log.severity === 'moderate' ? 'bg-orange-100 text-orange-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {log.severity === 'none' ? 'No Reaction' :
                                 log.severity === 'mild' ? 'Mild' :
                                 log.severity === 'moderate' ? 'Moderate' :
                                 'Severe'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Overall Improvement</span>
                <span className="font-semibold">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            
            <ProgressChart symptoms={symptoms} />
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Recovery Tips</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                <li>Stay consistent with your current phase</li>
                <li>Drink plenty of water to help flush toxins</li>
                <li>Get adequate sleep to support healing</li>
                <li>Manage stress through meditation or gentle exercise</li>
                <li>Continue tracking your symptoms to monitor progress</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Phase Milestones</h2>
            <div className="relative">
              <div className="absolute left-4 inset-y-0 w-0.5 bg-gray-200"></div>
              
              <div className="relative flex items-start mb-6">
                <div className="flex items-center h-6">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${currentPhase >= '0' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {currentPhase > '0' ? '✓' : '0'}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">14-Day Cleanup</h3>
                  <p className="text-sm text-gray-500">Remove problematic foods and prepare for the cleanse</p>
                </div>
              </div>
              
              <div className="relative flex items-start mb-6">
                <div className="flex items-center h-6">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${currentPhase >= '1' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {currentPhase > '1' ? '✓' : '1'}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">MEVY Diet</h3>
                  <p className="text-sm text-gray-500">Focus on meat, eggs, vegetables and yogurt</p>
                </div>
              </div>
              
              <div className="relative flex items-start mb-6">
                <div className="flex items-center h-6">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${currentPhase >= '2' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {currentPhase > '2' ? '✓' : '2'}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Low Allergy Diet</h3>
                  <p className="text-sm text-gray-500">Eliminate allergenic foods while continuing anti-candida approach</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex items-center h-6">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${currentPhase >= '3' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Food Reintroduction</h3>
                  <p className="text-sm text-gray-500">Carefully reintroduce foods to identify sensitivities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker; 