import axios from 'axios';
export const BASE_URL = "https://uzbek.kz/media/";
const api = axios.create({
    baseURL: 'https://uzbek.kz/api',
});

export default api;