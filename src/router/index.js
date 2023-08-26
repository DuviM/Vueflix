import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name : 'Accueil',
      path : '/',
      component : () => import('../views/Accueil.vue')
    },
    {
      name : 'Apropos',
      path : '/a-propos',
      component : () => import('../views/Apropos.vue')
    },
    {
      name : 'Films',
      path : '/films',
      component : () => import('../views/Films.vue')
    },
    {
      name : 'PageFilm',
      path : '/page-film/:id',
      component : () => import('../views/PageFilm.vue')
    },
    {
      name : 'Genres',
      path : '/genres/:id',
      component : () => import('../views/Genres.vue')
    },
    {
      name : 'Panier',
      path : '/panier',
      component : () => import('../views/Panier.vue')
    }

  ]
})

export default router
