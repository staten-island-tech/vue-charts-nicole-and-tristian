<template>
  <Pie :data="data" :options="options" />
  <select name="" id="list">
    <option value="">Brooklyn</option>
    <option value="">Staten Island</option>
    <option value="">Bronx</option>
    <option value="">Queens</option>
    <option value="">Manhattan</option>
  </select>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './components/chart.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return chartConfig
  }
}
</script>

<style lang="scss" scoped></style>
