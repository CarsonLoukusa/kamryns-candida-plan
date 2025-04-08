import React from 'react';

const FoodList = ({ allowed, restricted, title }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-lg font-medium text-green-800 mb-3">Allowed Foods</h4>
          <ul className="list-disc pl-5 space-y-1">
            {allowed.map((food, index) => (
              <li key={index} className="text-green-700">{food}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="text-lg font-medium text-red-800 mb-3">Restricted Foods</h4>
          <ul className="list-disc pl-5 space-y-1">
            {restricted.map((food, index) => (
              <li key={index} className="text-red-700">{food}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodList; 