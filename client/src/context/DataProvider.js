// Import requires (useContext, createContext, useState, useEffect)
import { createContext, useState, useEffect } from 'react';
// Import requires (axios)
import axios from 'axios';

// Create context
const DataContext = createContext();

// Create context provider
export const DataProvider = (props) => {
    // Create state for experience, profile, and projects
    const [experience, setExperience] = useState([])
    const [profile, setProfile] = useState({});
    const [projects, setProjects] = useState([]);

    // Create function to get experience, profile, and projects from the database
    const getExperience = () => {
        axios.get('/api/experience')
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    };

    const getProfile = () => {
        axios.get('/api/profile')
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    };

    const getProjects = () => {
        axios.get('/api/projects')
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    };

    // Create useEffect to get experience, profile, and projects from the database on page load
    useEffect(() => {
        getExperience();
        getProfile();
        getProjects();
    }, []);

    // Return context provider
    return (
        <DataContext.Provider
            value={{
                experience,
                profile,
                projects
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

// Export context and context provider
export default DataContext;