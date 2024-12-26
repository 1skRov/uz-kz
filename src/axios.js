import axios from 'axios';

const api = axios.create({
    baseURL: 'http://185.129.51.56:9080/api',
});

export default api;