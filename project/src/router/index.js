import { createRouter, createWebHistory } from 'vue-router'

import BarChartVue from '@/components/BarChart.vue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BarChartVue
    }
  ]
})

export default router
