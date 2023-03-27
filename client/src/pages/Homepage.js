// CSS Styling - Split background and webpage into two layers. The background layer would be a static image, and the webpage layer would be the dynamic content. Use a repeating pattern for the background image. Use tailwind.config.js for preset colors. The pattern should be subtle, and not distracting. Use values from tailwind.config.js for theme options.
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeProvider';
import DataContext from '../context/DataProvider';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => {
    // Destructure data from Context
    const { experience, profile, projects } = useContext(DataContext);
    const { theme } = useContext(ThemeContext);

    // Set darkMode to Boolean value
    const darkMode = theme === 'dark' ? true : false;
    
    console.log(experience);
    console.log(profile);
    console.log(projects);


    return (
        <main className={darkMode ? 'dark' : ''}>
            <div id='backgroundLayer'>
                <Header />
                <div className='container mx-auto h-screen w-4/5 space-y-5 p-12 bg-light dark:bg-dark dark:text-light' id='webpageLayer'>
                    <section className='mt-10 p-3' id='intro'>
                        <h3 className='text-2xl text-center mb-7'> Hello, my name is </h3>
                        <h1 className='text-4xl text-center font-bold italic'> {profile.firstName} {profile.lastName} </h1>
                        <hr className='w-1/2 h-1 mx-auto my-3 bg-dark border-0 rounded dark:bg-light'/>
                        <h3 className='text-2xl text-center'> Software Development Engineer </h3>
                        <div className='flex place-content-center p-2' id='links'>
                            <a href={profile.github} target='_blank' rel='noreferrer' className='text-xl text-center'> Github </a>
                            <a href={profile.linkedin} target='_blank' rel='noreferrer' className='text-xl text-center'> LinkedIn </a>
                            <a href={profile.resume} target='_blank' rel='noreferrer' className='text-xl text-center'> Resume </a>
                        </div>
                        <hr className='h-1 mx-auto my-8 bg-dark border-0 rounded dark:bg-light'/>
                    </section>
                    <section id='about'>
                        <h3> This is about section filler </h3>
                    </section>
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
    );
}

export default Homepage;