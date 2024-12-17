// import { createStore } from 'vuex';
//
// export default createStore({
//   state: {
//     selectedLanguage: localStorage.getItem('language') || 'kk', // Язык по умолчанию
//     navbars: [],
//     contacts: {},
//     languages: [],
//   },
//   getters: {
//     selectedLanguage: (state) => state.selectedLanguage,
//     navbars: (state) => state.navbars,
//     contacts: (state) => state.contacts,
//     languages: (state) => state.languages,
//   },
//   mutations: {
//     SET_LANGUAGE(state, lang) {
//       state.selectedLanguage = lang;
//       localStorage.setItem('language', lang); // Сохранение выбранного языка в localStorage
//     },
//     SET_NAVBARS(state, navbars) {
//       state.navbars = navbars;
//     },
//     SET_CONTACTS(state, contacts) {
//       state.contacts = contacts;
//     },
//     SET_LANGUAGES(state, languages) {
//       state.languages = languages;
//     },
//   },
//   actions: {
//     setLanguage({ commit, dispatch }, lang) {
//       commit('SET_LANGUAGE', lang);
//       dispatch('fetchNavbars');
//       dispatch('fetchContacts');
//     },
//     fetchNavbars({ state, commit }) {
//       fetch(`api/navbars/`)
//           .then((response) => response.json())
//           .then((data) => {
//             commit('SET_NAVBARS', data.map((item) => ({ id: item.id, title: item.title })));
//           })
//           .catch((error) => console.error('Error fetching navbars:', error));
//     },
//     fetchContacts({ state, commit }) {
//       fetch(`/contacts/?lang_code=${state.selectedLanguage}`)
//           .then((response) => response.json())
//           .then((data) => {
//             commit('SET_CONTACTS', data[0] || {});
//           })
//           .catch((error) => console.error('Error fetching contacts:', error));
//     },
//     fetchLanguages({ commit }) {
//       fetch('/languages/')
//           .then((response) => response.json())
//           .then((data) => {
//             commit('SET_LANGUAGES', data.map((item) => ({ code: item.kod, title: item.title })));
//           })
//           .catch((error) => console.error('Error fetching languages:', error));
//     },
//   },
// });
