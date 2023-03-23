import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage.js';
import Auth from './pages/Auth.js';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    );
}

export default App;