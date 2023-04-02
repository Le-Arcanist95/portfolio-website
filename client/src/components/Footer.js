import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';

const Footer = () => {
    const { profile } = useContext(DataContext);

    return (
        <footer className='py-4 px-12 border-0 shadow-inner dark:shadow-slate-400 bg-light dark:bg-dark'>
            <div className='flex flex-row mx-auto w-4/5 place-content-between'>
                <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
                    Source code on <a className='underline' href={profile.links.github} target='_blank' rel='noreferrer'>GitHub</a>
                </p>
                <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
                    Built with <a className='underline' href='https://reactjs.org/' target='_blank' rel='noreferrer'>React</a> and <a className='underline' href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind CSS</a>
                </p>
                <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
                    Icons from <a className='underline' href='https://fontawesome.com/' target='_blank' rel='noreferrer'>Font Awesome</a>
                </p>
                <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
                    Hosted on <a className='underline' href='https://www.netlify.com/' target='_blank' rel='noreferrer'>Netlify</a>
                </p>
                <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
                    &copy; {new Date().getFullYear()} {profile.name}
                </p>
            </div>
        </footer>
    );
}

export default Footer;