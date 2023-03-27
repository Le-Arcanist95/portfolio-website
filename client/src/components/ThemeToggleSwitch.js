import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeProvider';

const ToggleSwitch = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className='flex items-center'>
            <div className='relative'>
                <input type='checkbox' id='toggle' className='sr-only' onChange={toggleTheme} />
                <div className='
                        mx-4 appearance-none focus:outline-none focus:ring-black relative bg-light dark:bg-dark w-12 h-5 rounded-xl shadow-md 
                    
                        before:absolute before:left-0 before:w-5 before:h-5 before:bg-dark dark:before:bg-light before:rounded-2xl before:scale-75 before:transition-all before:duration-700 before:ease-in-out before:shadow-md dark:before:left-7

                        checked:bg-inherit checked:shadow-none checked:ring-0 checked:before:scale-100 checked:before:shadow-none checked:before:left-0'
                onClick={() => toggleTheme()}></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;