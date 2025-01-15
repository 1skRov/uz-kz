import api from "@/axios";

export const getTranslations = async (language) => {
    try {
        const response = await api.get('/trans/');
        const translations = response.data;

        if (translations[language]) {
            console.log("est", translations[language])
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
