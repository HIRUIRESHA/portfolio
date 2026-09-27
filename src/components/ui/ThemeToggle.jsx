import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle, className = '' }) => {
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            className={`clip-card-sm relative w-10 h-10 flex items-center justify-center bg-surface-2 border border-border text-ink hover:text-accent hover:border-accent/40 transition-colors duration-200 shrink-0 ${className}`}
        >
            <Sun className={`w-[18px] h-[18px] absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <Moon className={`w-[18px] h-[18px] absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
        </button>
    );
};

export default ThemeToggle;
