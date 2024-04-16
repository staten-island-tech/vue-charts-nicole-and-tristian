<template>
  <Doughnut
    :data="chartData"
    :options="options"
    v-if="loaded"
  />
</template>

<script>
// import { Radar } from 'vue-chartjs';
// import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

//ChartJS.register( RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend );

import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register( ArcElement, Tooltip, Legend );

/*const rawData = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json");
const apiData = await rawData.json();
console.log(rawData);
console.log(apiData);

let winterCrimeCount, springCrimeCount, summerCrimeCount, autumnCrimeCount = 0;

apiData.forEach((element) =>
{
  if (element.arrest_date[6] === 1) {
    autumnCrimeCount++;
  } else if (element.arrest_date[7] === 1 || 2 || 3) {
    winterCrimeCount++;
  } else if (element.arrest_date[7] === 4 || 5 || 6) {
    springCrimeCount++;
  } else if (element.arrest_date[7] === 7 || 8 || 9) {
    summerCrimeCount++;
  }
}
);

let winterCrimePercentage = (winterCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100;
let springCrimePercentage = (springCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100;
let summerCrimePercentage = (summerCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100;
let autumnCrimePercentage = (autumnCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100; 

const seasonalCrimeRateArray = [winterCrimePercentage, springCrimePercentage, summerCrimePercentage, autumnCrimePercentage];

/*
const crimes = apiData.forEach(element => {
    element.ofns_desc;
});

const crimesLabelsArray = Array.from(...new Set(crimes));
*/

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ["Winter", "Summer", "Spring", "Fall"],
        datasets: [
          {
            backgroundColor: ["#9999ff", "#ff8888", "#66ff66", "#ffbb88"],
            data: []
            //data: [winterCrimePercentage, springCrimePercentage, summerCrimePercentage, autumnCrimePercentage] 
          }
        ],
      },
      options: {
          responsive: true,
          maintainAspectRatio: true
      }
    }
  },
  mounted: function () {
    this.buildChartData();
  },
  methods: {
    buildChartData: async function (){
      this.loaded = false;
      try {
        
        const rawData = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json");
        const apiData = await rawData.json();
        console.log(rawData);
        console.log(apiData);

        let winterCrimeCount = 0;
        let springCrimeCount = 0;
        let summerCrimeCount = 0;
        let autumnCrimeCount = 0;
        apiData.forEach(element => {
        
          if ( (Number(element.arrest_date[6]) === 1 || Number(element.arrest_date[6]) === 2 || Number(element.arrest_date[6]) === 3) && Number(element.arrest_date[5]) !== 1 ) {
            winterCrimeCount++;
          } else if ( Number(element.arrest_date[6]) === 4 || Number(element.arrest_date[6]) === 5 || Number(element.arrest_date[6]) === 6 ) {
            springCrimeCount++;
          } else if ( Number(element.arrest_date[6]) === 7 || Number(element.arrest_date[6]) === 8 || Number(element.arrest_date[6]) === 9 ) {
            summerCrimeCount++;
          } else if ( Number(element.arrest_date[5]) === 1 ) {
            autumnCrimeCount++;
          }
  
        });
        /*const [winterCrimeCount, springCrimeCount, summerCrimeCount, autumnCrimeCount] = [
          apiData.map(el => el.arrest_date[7] === 1 || 2 || 3 && el.arrest_date[6] !== 1 ).length,
          apiData.map(el => el.arrest_date[7] === 4 || 5 || 6 ).length,
          apiData.map(el => el.arrest_date[7] === 7 || 8 || 9 ).length,
          apiData.map(el => el.arrest_date[6] === 1 ).length
        ];*/

        let winterCrimePercentage = ( winterCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount )) * 100;
        let springCrimePercentage = ( springCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount )) * 100;
        let summerCrimePercentage = ( summerCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount )) * 100;
        let autumnCrimePercentage = ( autumnCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount )) * 100; 

        const seasonalCrimeRateArray = [winterCrimePercentage, springCrimePercentage, summerCrimePercentage, autumnCrimePercentage];
        console.log(winterCrimeCount, winterCrimePercentage, springCrimeCount, springCrimePercentage, summerCrimeCount, summerCrimePercentage, autumnCrimeCount, autumnCrimePercentage);
        this.chartData.datasets[0].data = seasonalCrimeRateArray;
        this.loaded = true;

        } catch (error) {
          console.log(error);
        }
  }}}
</script>   