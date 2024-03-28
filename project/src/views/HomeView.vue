<template>
  
  <Bar :data="chartdata" :options="options" />
</template>

<script lang="s">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return chartConfig
  }
}
</script>

<style scoped></style>

<template>
  <div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
h1{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: larger;
  font-display:"CRIME";
}
</style>


