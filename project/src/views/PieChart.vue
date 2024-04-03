<template>
  <h1>Crime Type Based on Borough</h1>
  <div>
    <Pie :data="chartData" :options="options" v-if="loaded" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Brooklyn', 'Staten Island', 'Bronx', 'Queens', 'Manhattan'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFFF00'],
            data: []
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      this.loaded = false
      try {
        const result = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
        const data = await result.json()
        console.log(data)

        const boroughs = [
            data.filter(item => item.arrest_boro === 'K').length, //takes the number of arrest in each borough
            data.filter(item => item.arrest_boro === 'S').length,
            data.filter(item => item.arrest_boro === 'B').length,
            data.filter(item => item.arrest_boro === 'Q').length,
            data.filter(item => item.arrest_boro === 'M').length
        ];

        this.chartData.datasets[0].data = boroughs; //updates chartData by inserting the values of arrests in each borough into the data array
        this.loaded = true;
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
