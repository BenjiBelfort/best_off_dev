import React from 'react';

const SeeMoreButton = ({ onClick, label = "Voir plus +", className = "" }) => {
  return (
    <div className="mt-8 text-center">
      <button 
        onClick={onClick} 
        className={`px-4 py-2 mb-4 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer bg-white/10 hover:bg-red-400/10 hover:border-red-400 ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default SeeMoreButton;