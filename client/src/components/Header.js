// Use tailwindcss for styling
import React, { useContext } from 'react';
import Navbar from './Navbar';
import themeContext from '../context/ThemeProvider';

const Header = () => {
    const { theme, toggleTheme } = useContext(themeContext);
    const toggleValue = theme === 'light' ? false : true;

    return (
        <header>
            <h2> Portfolio </h2>
            <Navbar />
            <input type='checkbox' id='theme-toggle' value={toggleValue} onChange={toggleTheme}/>
            <label htmlFor='theme-toggle'>
                <span>Toggle theme</span>
            </label>
        </header>
    );
}

export default Header;