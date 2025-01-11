import { createStore } from 'vuex'

export default createStore({
    state: {
        selectedLanguage: localStorage.getItem('selectedLanguage') || 'ru',
    },
    getters: {
        currentLanguage(state) {
            return state.selectedLanguage;
        },
    },
    mutations: {
        setLanguage(state, languageCode) {
            state.selectedLanguage = languageCode;
        },
    },
    actions: {
        updateLanguage({ commit }, languageCode) {
            commit('setLanguage', languageCode);
            localStorage.setItem('selectedLanguage', languageCode);
        },
    },
    modules: {
    }
})
