import React from 'react';

const SeeMoreButton = ({ onClick, label = "Voir plus +", className = "" }) => {
  return (
    <div className="mt-4 text-center">
      <button 
        onClick={onClick} 
        className={`px-4 py-2 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default SeeMoreButton;