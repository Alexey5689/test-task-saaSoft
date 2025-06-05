import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import { createApp } from 'vue';
import '@/assets/style.css';
import App from './App.vue';

const app = createApp(App);

app.provide('bootstrap', bootstrap).mount('#app');
