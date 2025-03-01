import { createStore } from 'vuex';
import api, { getTranslations } from '@/axios';

export default createStore({
    state: {
        selectedLanguage: localStorage.getItem('selectedLanguage') || null,
        translations: {},
        availableLanguages: [],
    },
    getters: {
        currentLanguage(state) {
            return state.selectedLanguage;
        },
        getTranslations(state) {
            return state.translations;
        },
        availableLanguages(state) {
            return state.availableLanguages;
        },
    },
    mutations: {
        setLanguage(state, languageCode) {
            state.selectedLanguage = languageCode;
            localStorage.setItem('selectedLanguage', languageCode);
        },
        setTranslations(state, translations) {
            state.translations = translations;
        },
        setAvailableLanguages(state, languages) {
            state.availableLanguages = languages;
        },
    },
    actions: {
        async fetchLanguages({ commit, state, dispatch }) {
            try {
                const response = await api.get('/languages/');
                const languages = response.data;
                commit('setAvailableLanguages', languages.map(item => ({
                    code: item.kod,
                    title: item.title,
                })));
                if (!state.selectedLanguage && languages.length > 0) {
                    dispatch('updateLanguage', languages[0].kod);
                } else if (state.selectedLanguage) {
                    dispatch('updateLanguage', state.selectedLanguage);
                }
            } catch (error) {
                console.error('Ошибка при загрузке языков:', error);
            }
        },
        async updateLanguage({ commit, dispatch }, languageCode) {
            commit('setLanguage', languageCode);
            await dispatch('fetchTranslations', languageCode);
        },
        async fetchTranslations({ commit }, languageCode) {
            try {
                const translations = await getTranslations(languageCode);
                commit('setTranslations', translations);
            } catch (error) {
                console.error("Не удалось загрузить переводы:", error);
            }
        },
    },
});
