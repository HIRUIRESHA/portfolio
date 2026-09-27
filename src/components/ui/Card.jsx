import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`clip-card bg-surface border border-border hover:border-accent/30 transition-colors duration-300 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
