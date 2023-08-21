import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name : 'Acceuil',
      path : '/',
      component : () => ('../views/Acceuil.vue')
    },
    {
      name : 'Apropos',
      path : '/a-propos',
      component : () => ('../views/Apropos.vue')
    },
    {
      name : 'Films',
      path : '/films',
      component : () => ('../views/Films.vue')
    }
  ]
})

export default router
