import axios from 'axios';
export const BASE_URL = "https://uzbek.kz/";
const api = axios.create({
    baseURL: 'https://uzbek.kz/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTranslations = async (language) => {
    try {
        const response = await api.get('/trans/');
        const translations = response.data;

        if (translations[language]) {
            return translations[language];
        } else {
            console.warn(`Переводы для языка "${language}" не найдены`);
            return {};
        }
    } catch (error) {
        console.error("Ошибка при загрузке переводов:", error);
        throw error;
    }
};

export default api;