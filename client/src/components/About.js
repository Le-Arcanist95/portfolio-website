import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';

const About = () => {
    const { profile } = useContext(DataContext);

    return (
        <section id='about'>
            <hr className='h-1 mx-auto mt-3 mb-6 bg-dark border-0 rounded dark:bg-light'/>
            <h3 className='text-2xl text-center'> About Me </h3>
            <hr className='w-1/4 h-1 mx-auto my-3 bg-dark border-0 rounded dark:bg-light'/>
            <div className='flex justify-center'>
                {/* <img src={`data:image/png;base64,${profileImg}`} alt='profile' className=''/> */}
            </div>
            <p className='text-lg p-4'> {profile.bio} </p>
            {/* <hr className='h-1 mx-auto mt-6 mb-6 bg-dark border-0 rounded dark:bg-light'/> */}
            <h3 className='text-2xl text-center'> Skills </h3>
            <hr className='w-1/4 h-1 mx-auto my-3 bg-dark border-0 rounded dark:bg-light'/>
            <ul className='flex flex-wrap justify-center'>
                {profile.skills.map(skill => (
                    <li key={skill} className='mx-2 my-1 p-1 bg-light dark:bg-dark rounded'> {skill} </li>
                ))}
            </ul>
        </section>
    );
}

export default About;