import { createContext, useState } from 'react';

// Create context 
const ThemeContext = createContext();

// Create context provider  
export const ThemeProvider = (props) => {
    // Create state for theme
    const [theme, setTheme] = useState('light');

    // Create function to toggle theme
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        };
    };

    // Return context provider
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}

// Export context and context provider
export default ThemeContext;