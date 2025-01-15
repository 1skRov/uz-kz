import { createStore } from 'vuex'

export default createStore({
    state: {
        selectedLanguage: localStorage.getItem('selectedLanguage'),
        translations: {},
    },
    getters: {
        currentLanguage(state) {
            return state.selectedLanguage;
        },
        getTranslations(state) {
            return state.translations;
        },
    },
    mutations: {
        setLanguage(state, languageCode) {
            state.selectedLanguage = languageCode;
        },
        setTranslations(state, payload) {
            state.translations = payload;
        },
    },
    actions: {
        updateLanguage({ commit }, languageCode) {
            commit('setLanguage', languageCode);
            localStorage.setItem('selectedLanguage', languageCode);
        },
        updateTranslations({ commit }, payload) {
            commit('setTranslations', payload);
        },
    },
    modules: {
    }
})
