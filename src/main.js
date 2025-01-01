import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "swiper/swiper-bundle.css";

import 'leaflet/dist/leaflet.css';
import "@/index.css"

createApp(App).use(store).use(router).mount('#app')
