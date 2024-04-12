import { createRouter, createWebHistory } from 'vue-router'

import DoughnutChart from '../views/DoughnutChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DoughnutChart
    }
  ]
})

export default router
