// CSS Styling - Split background and webpage into two layers. The background layer would be a static image, and the webpage layer would be the dynamic content. Use a repeating pattern for the background image. Preferred colors are black, white, and gray. The pattern should be subtle, and not distracting. Use values from tailwind.config.js for theme options.
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeProvider';
import DataContext from '../context/DataProvider';

const Homepage = () => {
    const { experience, profile, projects } = useContext(DataContext);
    const { theme } = useContext(ThemeContext);

    console.log(experience, profile, projects, theme);

    return (
        <div id='backgroundLayer'>
            <div id='webpageLayer'>
                <section id='intro'>
                    <h1> This is intro section filler </h1>
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
        </div>
    );
}

export default Homepage;