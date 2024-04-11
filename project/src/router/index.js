import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Arrests in Boroughs',
      component: () => import('../views/PieChart.vue')
    },
    {
      path: '/NameChart',
      name: 'Age Range for Crime',
      component: () => import('../views/NameChart.vue')
    }
  ]
})

export default router
