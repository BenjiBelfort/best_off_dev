import React from 'react';

const SeeMoreButton = ({ onClick, label = "Voir plus +", className = "" }) => {
  return (
    <div className="mt-8 text-center">
      <button 
        onClick={onClick} 
        className={`px-4 py-2 mb-4 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer hover:border-red-300 ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default SeeMoreButton;