import axios from 'axios';
import { tokensToFunction } from 'path-to-regexp';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: tokensToFunction
        }
    });
};