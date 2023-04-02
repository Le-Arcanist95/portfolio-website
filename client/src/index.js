// Importing React
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// Contexts
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { DataProvider } from './context/DataProvider';

// Components
import App from './App';

// CSS Styling
import './index.css';

// Disable React DevTools
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
}

// Root
const root = createRoot(document.getElementById('root'));

// Render
root.render(
    <Router>
        <AuthProvider>
            <ThemeProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </ThemeProvider>
        </AuthProvider>
    </Router>
);