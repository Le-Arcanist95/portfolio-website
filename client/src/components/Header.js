import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeProvider';

import ThemeToggle from '../components/ThemeToggleSwitch';

const Header = () => {
    const { isVisible, toggleVisibility } = useContext(ThemeContext);

    const navLinkStyle = 'block p-4 border-gray-700 border-b border-r shadow-md dark:border-white dark:shadow-light dark:shadow-sm hover:bg-slate-100 dark:hover:bg-slate-500 transition-all ease-in-out duration-500 m-1';
 
    const handleNavigate = () => {
        if (isVisible === true) {
            toggleVisibility();
        };
    };

    return (
        <header className='sticky top-0 z-30 w-full px-2 pb-4 sm:px-4 shadow-xl'>
            <nav className='flex justify-between items-center h-16 bg-white dark:bg-slate-700 text-black dark:text-white relative shadow-sm font-mono' role='navigation'>
                <div className='px-4 cursor-pointer'>
                    <h2 className='text-xl'> Dev.Portfolio </h2>
                </div>
                <div className='px-4 cursor-pointer md:hidden' onClick={toggleVisibility}>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </div>
                <div className='pr-8 md:flex hidden'>
                    <a href='#intro' className={navLinkStyle}> Intro </a>
                    <a href='#about' className={navLinkStyle}> About </a>
                    <a href='#projects' className={navLinkStyle}> Projects </a>
                </div>
                <ThemeToggle />
                {/* Mobile menu */}
                <div className='absolute top-16 right-0 bg-white dark:bg-slate-700 w-full z-50' style={{ display: isVisible ? 'block' : 'none' }}>
                    <a href='#intro' className={navLinkStyle} onClick={handleNavigate}> Intro </a>
                    <a href='#about' className={navLinkStyle} onClick={handleNavigate}> About </a>
                    <a href='#projects' className={navLinkStyle} onClick={handleNavigate}> Projects </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;