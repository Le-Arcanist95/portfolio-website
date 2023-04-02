import React, { useState, createContext } from 'react';
import { serverClient as axios } from '../hooks/useAxios';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || ''
    };
    const [authState, setAuthState] = useState(initState);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleAuthErr = (err) => {
        setErrMsg(err.response.data.errMsg)
        setTimeout(() => {
            setErrMsg('');
        }, 10000);
    };

    const register = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                setAuthState(prevState => ({
                    ...prevState,
                    user,
                    token
                }));
                setRedirect(true);
            })
            .catch(err => handleAuthErr(err));
    }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                setAuthState(prevState => ({
                    ...prevState,
                    user,
                    token
                }));
                setRedirect(true);
            })
            .catch(err => handleAuthErr(err));
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setAuthState({
            user: {},
            token: '',
            errMsg: ''
        });
    }

    return (
        <AuthContext.Provider
            value={{
                ...authState,
                redirect,
                errMsg,
                register,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;