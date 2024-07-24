import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../page/HomePage.vue')
    },
    {
      path: '/TestePage',
      name: 'testePage',
      component: () => import('../page/TestePage.vue')
    }
  ]
})

export default router
