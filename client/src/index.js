import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeProvider';
import { DataProvider } from './context/DataProvider';

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <ThemeProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </ThemeProvider>
    </Router>
);