import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';


const Authorization = () => {
    const { login, redirect } = useContext(AuthContext);

    return (
        <div className="flex items-center justify-center h-screen">
            {redirect ? <Navigate to="/home" /> : null}
            <button onClick={() => login({ username: "levi_arcane", password: "tS6tM7atS11"})}> Enter </button>
        </div>
    );
}

export default Authorization;