import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';
import Project from './ProjectCard';


const ProjectList = () => {
    const { projects } = useContext(DataContext);

    return (
        <section id='projects'>
            <hr className='h-1 mx-auto mt-3 mb-6 bg-dark border-0 rounded dark:bg-light'/>
            <h3 className='text-2xl text-center'> Projects </h3>
            <hr className='w-1/4 h-1 mx-auto my-3 bg-dark border-0 rounded dark:bg-light'/>
            <div className='flex flex-col justify-center'>
                {projects.map(project => (
                    <Project key={project._id} project={project}/>
                ))}
            </div>
        </section>
    );
}

export default ProjectList;