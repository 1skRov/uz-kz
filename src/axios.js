import axios from 'axios';
export const BASE_URL = "http://127.0.0.1:8000/media/";
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

export const getTranslations = async (language) => {
    try {
        const response = await api.get('/trans/');
        const translations = response.data;

        if (translations[language]) {
            return translations[language];
        } else {
            console.error(`Переводы для языка "${language}" не найдены`);
            return null;
        }
    } catch (error) {
        console.error("Ошибка при загрузке переводов:", error);
        throw error;
    }
};

export default api;