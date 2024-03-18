import { createRouter, createWebHistory } from 'vue-router'

import BarChart from '@/components/BarChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BarChart
    }
  ]
})

export default router
