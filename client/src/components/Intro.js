import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    const { profile } = useContext(DataContext);
    const { firstName, lastName, links } = profile;

    return(
        <section className='mt-3 p-3' id='intro'>
            <hr className='h-1 mx-auto mt-3 mb-6 bg-dark border-0 rounded dark:bg-light'/>
            <h3 className='text-2xl text-center mb-7'> Hello, my name is </h3>
            <h1 className='text-4xl text-center font-bold italic'> {firstName} {lastName} </h1>
            <hr className='w-1/2 h-1 mx-auto my-3 bg-dark border-0 rounded dark:bg-light'/>
            <h3 className='text-2xl text-center'> Software Development Engineer </h3>
            <div className='flex place-content-center p-5 justify-evenly' id='links'>
                <a href={links.github} target='_blank' rel='noreferrer' className='text-xl text-center'>
                    <FontAwesomeIcon icon={faGithub} size='2xl'/>    
                </a>
                <a href={links.linkedIn} target='_blank' rel='noreferrer' className='text-xl text-center'>
                    <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                </a>
                <a href={profile.links.resume} target='_blank' rel='noreferrer' className='text-xl text-center'>
                    <FontAwesomeIcon icon={faFileContract} size='2xl'/>
                </a>
            </div>
        </section>
    )
}

export default Intro;