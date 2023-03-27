import { createContext, useState } from 'react';

// Create context 
const ThemeContext = createContext();

// Create context provider  
export const ThemeProvider = (props) => {
    // Create state for theme
    const [theme, setTheme] = useState('light');
    const [isVisible, setIsVisible] = useState(false);

    // Create function to toggle theme
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            console.log('Theme is now dark')
        } else {
            setTheme('light');
            console.log('Theme is now light')
        };
    };

    const toggleVisibility = () => {
        if (isVisible === false) {
            setIsVisible(true);
            console.log('Menu is now visible')
        } else {
            setIsVisible(false);
            console.log('Menu is now hidden')
        };
    };
    
    // Return context provider
    return (
        <ThemeContext.Provider
            value={{
                theme,
                isVisible,
                toggleTheme,
                toggleVisibility
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}

// Export context and context provider
export default ThemeContext;