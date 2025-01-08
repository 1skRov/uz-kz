import axios from 'axios';
export const BASE_URL = "https://uzbek.kz/media/";
const api = axios.create({
    baseURL: 'https://uzbek.kz/api/',
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