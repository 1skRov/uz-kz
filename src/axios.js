import axios from 'axios';

const api = axios.create({
    baseURL: 'https://739b-91-185-26-183.ngrok-free.app/api',
});

export default api;