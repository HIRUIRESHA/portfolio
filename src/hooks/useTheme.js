import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'portfolio-theme';

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    // keep in sync with system preference changes, unless the user has chosen explicitly
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            const hasExplicitChoice = window.localStorage.getItem(STORAGE_KEY);
            if (!hasExplicitChoice) setTheme(e.matches ? 'dark' : 'light');
        };
        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return { theme, toggleTheme };
};
