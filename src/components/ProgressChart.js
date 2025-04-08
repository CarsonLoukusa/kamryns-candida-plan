import React from 'react';

const ProgressChart = ({ symptoms }) => {
  // This is a placeholder for a real chart component
  // In a real implementation, you would use a library like Chart.js or Recharts
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Symptom Tracking Over Time</h3>
      
      <div className="space-y-4">
        {symptoms.map((symptom) => (
          <div key={symptom.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{symptom.name}</span>
              <span className="text-sm text-gray-500">{symptom.currentValue}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-600 h-2.5 rounded-full" 
                style={{ width: `${(10 - symptom.currentValue) * 10}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Severe</span>
              <span>None</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium mb-2">Progress Summary</h4>
        <p className="text-gray-700">
          Based on your symptom tracking, you're showing improvement in {symptoms.filter(s => s.improving).length} out of {symptoms.length} symptoms.
        </p>
      </div>
    </div>
  );
};

export default ProgressChart; 