import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;