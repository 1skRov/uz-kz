import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api', // Базовый URL для запросов
    timeout: 5000, // Таймаут для запросов
});

export const getTranslations = async (language) => {
    try {
        const response = await apiClient.get('/trans/');
        const translations = response.data;

        if (translations[language]) {
            return translations[language];
        } else {
            console.error(`Переводы для языка "${language}" не найдены`);
            return null;
        }
    } catch (error) {
        console.error("Ошибка при загрузке переводов:", error);
        throw error; // Проброс ошибки, если нужно обработать выше
    }
};
