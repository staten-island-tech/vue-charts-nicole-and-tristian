<template>
  <h1>Crime Type Based on Borough</h1>
  <div>
    <Pie :data="data" :options="options" v-if="loaded"/>
    <select>
      <option value="K">Brooklyn</option>
      <option value="R">Staten Island</option>
      <option value="B">Bronx</option>
      <option value="Q">Queens</option>
      <option value="M">Manhattan</option>
    </select>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'PieChart',
    components: { Pie },
    data () {
      return {
        loaded: false,
        chartData: {
          labels: ['Robbery', 'Burglary', 'Felony Assault', 'Arson'],
          datasets: [{
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [0, 0, 0, 0]
          }],
          chartOptions: {
            responsive: true
          }
        }
      };
    },
    mounted: function () {
      this.fetchData ();
    },
    methods: {
      fetchData: async function () {
        try {
          const result = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json');
          const data = await result.json();
          this.crimes = data.results;
          console.log(data) //works fine
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  </script>

<style scoped>
h1 {
  font-family: 'Hind', sans-serif;
  background-color: lightblue;
  margin: 4rem 35rem 1.5rem;
  border-radius: 1rem;
  font-size: 3rem;
}
</style>

<!-- arrest_boro: 
ofns_desc: -->