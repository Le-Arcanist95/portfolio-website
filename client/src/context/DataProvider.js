// Import requires (useContext, createContext, useState, useEffect)
import { createContext, useState, useEffect, useContext, useCallback } from 'react';

// Import requires (axios)
import { serverAuth as axios } from '../hooks/useAxios';

// Import AuthContext
import AuthContext from './AuthProvider';

// Create context
const DataContext = createContext();

// Create context provider
export const DataProvider = (props) => {
    // Extract token from AuthContext
    const { token, user } = useContext(AuthContext);

    // Create state for experience, profile, and projects
    const [experience, setExperience] = useState([])
    const [profile, setProfile] = useState({});
    const [projects, setProjects] = useState([]);

    // Create function to get experience, profile, and projects from the database
    const getExperience = useCallback(() => {
        axios.get('/api/experience')
            .then(res => setExperience(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    }, []);

    const getProfile = useCallback(() => {
        axios.get(`/api/profile/${user.profile}`)
            .then(res => setProfile(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    }, [user.profile]);

    const getProjects = useCallback(() => {
        axios.get('/api/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    }, []);

    // Create useEffect to get experience, profile, and projects from the database on page load
    useEffect(() => {
        if(!token) return;
        getExperience();
        getProfile();
        getProjects();
    }, [token, getExperience, getProfile, getProjects]);

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