import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active fw-bold',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
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
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/Pedido/PedidosView.vue')
    },
    {
      path: '/informes',
      name: 'informes',
      component: () => import('../views/InformesView.vue')
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/Usuarios/UsuariosView.vue')
    },
    {
      path: '/usuario/:id',
      name: 'usuario',
      component: () => import('../views/Usuarios/UsuarioView.vue')
    },
    {
      path: '/nuevoPedido',
      name: 'nuevoPedido',
      component: () => import('../views/Pedido/NuevoPedidoView.vue')
    },
  ]
})

export default router
