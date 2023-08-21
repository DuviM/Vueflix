import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component : () => ('../views/HomeView.vue')
    },
    {
      name : 'Acceuil',
      path : '/',
      component : () => ('../views/Acceuil.vue')
    },
    {
      name : 'Apropos',
      path : '/',
      comonent : () => ('../views/Apropos.vue')
    }    
  ]
})

export default router
