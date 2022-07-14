import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VueStorage from 'vue3-storage'
createApp(App).use(router).use(VueStorage).mount('#app')
