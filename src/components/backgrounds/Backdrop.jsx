import React from 'react';

/**
 * Backdrop — sleek ambient glow orbs and subtle film grain overlay
 * Provides visual depth without impacting scroll performance.
 */
const Backdrop = ({ variant = 'soft', className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Top right radiant glow orb */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full opacity-20 dark:opacity-25 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />
      {/* Bottom left cyan / secondary glow orb */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full opacity-15 dark:opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-2) 0%, transparent 70%)',
        }}
      />
      {variant === 'hero' && (
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[550px] sm:h-[550px] rounded-full opacity-10 dark:opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          }}
        />
      )}
      <div className="grain" />
    </div>
  );
};

export default Backdrop;
