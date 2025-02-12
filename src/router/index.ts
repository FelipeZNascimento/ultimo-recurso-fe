import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    submenus: [
      {
        path: '/',
        name: 'Home 1',
      },
      {
        path: '/',
        name: 'Home 2',
      },
    ],
  },
  {
    path: '/who',
    name: 'Quem',
    component: HomeView,
    submenus: [
      {
        path: '/who',
        name: 'Who 1',
      },
      {
        path: '/who',
        name: 'Who 2',
      },
    ],
  },
  {
    path: '/what',
    name: 'O Que',
    component: () => import('../views/AboutView.vue'),
    submenus: [
      {
        path: '/what',
        name: 'What 1',
      },
      {
        path: '/what',
        name: 'What 2',
      },
    ],
  },
  {
    path: '/updates',
    name: 'Updates',
    component: () => import('../views/UpdatesView.vue'),
    submenus: [
      {
        path: '/updates',
        name: 'Updates 1',
      },
      {
        path: '/updates',
        name: 'Updates 2',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export { router, routes };
