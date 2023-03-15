import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <a href='https://github.com/Ze-Arcanist95' target='github' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/l-arcane/' target='linkedin' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='mailto: zarcanist95@gmail.com' target='email' rel='noreferrer'>
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </footer>
    );
}

export default Footer;