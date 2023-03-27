// Create a loading wheel that will display while the data is being fetched from the database
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center'>
            <FontAwesomeIcon icon={faSpinner} size='4x' spin/>
        </div>
    );
}

export default LoadingSpinner;