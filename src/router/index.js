import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/sobre',
    name: 'sobreview',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/projetos',
    name: 'projetosview',
    component: () => import('../views/ProjetosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
