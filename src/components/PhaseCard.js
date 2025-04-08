import React from 'react';
import { Link } from 'react-router-dom';

const PhaseCard = ({ phase, title, duration, description, linkTo, color = 'green' }) => {
  const colorClasses = {
    green: 'bg-green-100 border-green-500 text-green-800',
    blue: 'bg-blue-100 border-blue-500 text-blue-800',
    yellow: 'bg-yellow-100 border-yellow-500 text-yellow-800',
    purple: 'bg-purple-100 border-purple-500 text-purple-800'
  };

  return (
    <div className={`p-6 rounded-lg border-l-4 shadow-md ${colorClasses[color]}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm mb-3">Duration: {duration}</p>
        </div>
        <div className="bg-white text-gray-800 rounded-full h-10 w-10 flex items-center justify-center font-bold">
          {phase}
        </div>
      </div>
      <p className="mb-4">{description}</p>
      <Link
        to={linkTo}
        className={`inline-block px-4 py-2 rounded font-medium ${
          color === 'green'
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : color === 'blue'
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : color === 'yellow'
            ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
      >
        Learn More
      </Link>
    </div>
  );
};

export default PhaseCard; 