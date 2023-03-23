import React, { useState, createContext } from 'react';
import { serverClient as axios } from '../hooks/useAxios';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        errMsg: ''
    };
    const [authState, setAuthState] = useState(initState);

    const handleAuthErr = (err) => {
        setAuthState(prevState => ({
            ...prevState,
            errMsg: err.response.data.errMsg
        }));
        setTimeout(() => {
            setAuthState(prevState => ({
                ...prevState,
                errMsg: ''
            }));
        }, 10000);
    };

    const register = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                setAuthState(prevState => ({
                    ...prevState,
                    user,
                    token
                }));
            })
            .catch(handleAuthErr);
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
            })
            .catch(handleAuthErr);
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
                register,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};