import axios from 'axios';

export const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export const serverClient = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

export const serverAuth = axios.create({
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    baseURL: 'http://localhost:5000',
    withCredentials: true
});