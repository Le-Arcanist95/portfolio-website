// Importing React
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Context
import AuthContext from './context/AuthProvider';

// Components
import RouteProtection from './components/RouteProtection';

// Pages
import Home from './pages/Homepage.js';
import Auth from './pages/Auth.js';

const App = () => {
    const { token } = useContext(AuthContext);
    return (
        <Routes>
            <Route exact path="/" element={ token ? <Navigate to="/home" /> : <Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/home" element={
                <RouteProtection>
                    <Home />    
                </RouteProtection>
            } />
        </Routes>
    );
}

export default App;