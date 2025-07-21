import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UpdatesView from '../views/UpdatesView.vue';

const navRoutes = [
  {
    path: '/#what',
    name: 'O que fazemos',
    component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'Sobre nós',
  //   component: () => import('../views/AboutView.vue'),
  // },
  {
    path: '/#help',
    name: 'Como ajudar',
    component: HomeView,
  },
  {
    path: '/news',
    name: 'Updates',
    component: () => import('../views/UpdatesView.vue'),
  },
];
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  ...navRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      console.log(to.hash);
      return {
        el: to.hash,
        top: 80,
      };
    }
  },
});

export { router, routes, navRoutes };
