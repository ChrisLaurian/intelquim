import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from './components/LoginComponent.vue';
import BarcodeReaderComponent from './components/BarcodeReaderComponent.vue';

const routes = [
    { path: '/', component: LoginComponent },
    { path: '/Lector', component: BarcodeReaderComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;