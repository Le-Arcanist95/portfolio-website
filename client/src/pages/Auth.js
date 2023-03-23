import React from 'react';
import { serverClient as axios } from '../hooks/useAxios';

export const Login = () => {
    return (
        <div>
            <button onClick={
                () => {
                    axios.post('/auth/login', {
                        username: 'levi_arcane',
                        password: 'tS6tM7atS11'
                        })
                        .then(res => console.log(res.data))
                        .catch(err => console.log(err.response.data.errMsg));
                }
            }> Login </button>
        </div>
    );
}