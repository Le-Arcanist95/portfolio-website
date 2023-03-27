// CSS Styling - Split background and webpage into two layers. The background layer would be a static image, and the webpage layer would be the dynamic content. Use a repeating pattern for the background image. Use tailwind.config.js for preset colors. The pattern should be subtle, and not distracting. Use values from tailwind.config.js for theme options.
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeProvider';
import DataContext from '../context/DataProvider';

import LoadingSpinner from '../components/LoadingSpinner';
import Header from '../components/Header';
import Intro from '../components/Intro';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

const Homepage = () => {
    // Destructure theme from ThemeContext
    const { theme } = useContext(ThemeContext);
    const data = useContext(DataContext);

    // Set darkMode to Boolean value
    const darkMode = theme === 'dark' ? true : false;

    return (
        <>
            {data.isLoading && <LoadingSpinner />}
            {!data.isLoading && data.isLoaded && (
                <main className={darkMode ? 'dark' : ''}>
                    <div className='bg-gradient-to-br from-black to-white dark:from-white dark:to-black' id='backgroundLayer'>
                        <Header />
                        <div className='container mx-auto w-4/5 space-y-5 p-12 bg-light dark:bg-dark dark:text-light' id='webpageLayer'>
                            <Intro />
                            <About />
                            <ProjectList />
                            <section id='projects'>
                                <h3> This is projects section filler </h3>
                            </section>
                            <section id='experience'>
                                <h3> This is temporary </h3>
                            </section>
                            <section id='contact'>
                                <h3> This is temporary </h3>
                            </section>
                        </div>
                        <Footer/>
                    </div>
                </main>
            )}
        </>
    );
}

export default Homepage;