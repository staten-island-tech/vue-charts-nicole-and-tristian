<script>
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
      apidata: {
        type: Object,
        required: true
      }
    },

  data() {
    return {
        chartData: null,
        options: {
          responsive: true,
          maintainAspectRatio: true
        }
      }
    },
    created() {
      this.calculateChartData()
    },
    methods: {
        calculateChartData(){
            const boroughs = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
        const crimeByBorough = {}
        boroughs.forEach(borough => {
          crimeByBorough[borough] = 0
        })

        data.forEach(entry => {
          const borough = entry.borough
          if (borough in crimeByBorough) {
            crimeByBorough[borough]++
          }
        })

       
        this.chartData = {
          labels: boroughs,
          datasets: [{
            label: 'Crime by Borough',
            backgroundColor: ['#f7706e', '#497397', '#49f493', '#a16395', '#e9e572'],
            data: boroughs.map(borough => crimeByBorough[borough])
          }]
        }
      }
    }
  }

</script>

<template>
    <main>
      <div class="flex-container">
        <div class="chartcontainer">
          <Bar :data="chartData" :options="options" />
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  .flex-container {
    display: flex;
    flex: auto;
    justify-content: center;
  }
 
  .chartcontainer {
    margin-top: 50px;
    height: 650px;
    width: 1200px;
  }
  </style>