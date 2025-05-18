import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    useEffect(() => {
        const html = document.documentElement;

        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const chooseTheme = () => {
        setTheme(current => current === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, chooseTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
