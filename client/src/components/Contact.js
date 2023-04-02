import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

// Create contact component that displays contact information
const Contact = () => {
    const { profile } = useContext(DataContext);

    return (
        <section id='contact'>
            <hr className='h-1 mx-auto mt-3 mb-6 bg-dark border-0 rounded dark:bg-light'/>
            <h3 className='text-2xl text-center'> Contact Me </h3>
            <hr className='w-1/4 h-1 mx-auto my-3 bg-dark border-0 rounded dark:bg-light'/>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row justify-center'>
                    <a href={profile.links.linkedIn} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' className='mx-2'/>
                    </a>
                    <a href={`mailto:${profile.email}`} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={['fas', 'envelope']} size='2x' className='mx-2'/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;