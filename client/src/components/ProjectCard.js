import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
    return (
        <div className='flex flex-col items-center justify-center p-3'>
            <div className='flex flex-col items-center justify-center w-full h-full p-3 border-2 border-dark dark:border-light rounded'>
                <h3 className='text-2xl font-bold text-center'> {project.name} </h3>
                <p className='text-lg'> {project.description} </p>
                <div className='flex justify-evenly w-full'>
                    {project.githubLink && (
                        <a href={project.githubLink} target='_blank' rel='noreferrer' className='text-xl text-center'>
                            <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                    )}
                    {project.deploymentLink && (
                        <a href={project.deploymentLink} target='_blank' rel='noreferrer' className='text-xl text-center'>
                            <FontAwesomeIcon icon={faLink} size='2x'/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;