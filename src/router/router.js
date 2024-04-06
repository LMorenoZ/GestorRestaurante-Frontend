import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InicioView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mesas',
      name: 'mesas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MesasView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/Menu/MenuView.vue')
    }
  ]
})
