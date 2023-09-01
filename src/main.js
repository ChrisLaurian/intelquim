import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router.js';

createApp(App).use(router).mount('#app');
//  createApp(App).mount('#app')

// Verifica si el navegador admite Service Worker y si estás en un entorno de producción
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    navigator.serviceWorker
      .register('/service-worker.js') // Ruta al archivo del Service Worker
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  }