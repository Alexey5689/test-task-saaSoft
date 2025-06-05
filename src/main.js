import { createApp } from 'vue';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import { createPinia } from 'pinia';
import '@/assets/style.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.provide('bootstrap', bootstrap).use(pinia).mount('#app');
