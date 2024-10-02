import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';

const routes = [
  { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(), // Używamy trybu historii do nawigacji bez #
  routes,
});

export default router;
