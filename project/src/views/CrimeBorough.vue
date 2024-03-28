<template>
  <h1>Crime Type Based on Borough</h1>
  <div>
    <!--     <Pie :data="data" :options="options" /> -->
    <select name="" id="list">
      <option value="">Brooklyn</option>
      <option value="">Staten Island</option>
      <option value="">Bronx</option>
      <option value="">Queens</option>
      <option value="">Manhattan</option>
    </select>
  </div>
</template>

<!-- <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    data: {},
    mounted: function () {
      this.fetchData
    },
    methods: {
      fetchData: async function () {
        try {
          const result = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  </script>  -->

<style scoped>
h1 {
  font-family: 'Hind', sans-serif;
  background-color: lightblue;
  border-radius: 1rem;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20rem;
}
</style>
