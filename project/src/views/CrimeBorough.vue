<template>
  <h1>Crime Type Based on Borough</h1>
  <div>
    <Pie :data="chartData" :options="options" v-if="loaded" />
  </div>
</template>

<script>
import { pieCart} from '../stores/store'
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
            data: pieCart.cart
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
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

        let brooklyn = data.filter(item => item.arrest_boro === 'K')
        let kings = brooklyn.length
        pieCart.cart[0] = kings
        console.log(kings)

        let statenIsland = data.filter(item => item.arrest_boro === 'S')
        let richmond = statenIsland.length
        pieCart.cart[1] = richmond
        console.log(richmond)

        let bronx = data.filter(item => item.arrest_boro === 'B')
        let bx_county = bronx.length
        pieCart.cart[2] = bx_county
        console.log(bx_county)

        let queens = data.filter(item => item.arrest_boro === 'Q')
        let qe_county = queens.length
        pieCart.cart[3] = qe_county
        console.log(qe_county)

        let manhattan = data.filter(item => item.arrest_boro === 'M')
        let ny_county = manhattan.length
        pieCart.cart[4] = ny_county
        console.log(ny_county)

        this.loaded = true
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
