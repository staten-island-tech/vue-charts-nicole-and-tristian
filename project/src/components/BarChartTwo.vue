<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const rawData = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json");
const apiData = await rawData.json();
console.log(rawData);
console.log(apiData);

const [winterCrimeCount, springCrimeCount, summerCrimeCount, autumnCrimeCount] = [
  apiData.filter(el => el.arrest_date[7] === 1 | 2 | 3 && el.arrest_date[6] !== 1 ).length,
  apiData.filter(el => el.arrest_date[7] === 4 | 5 | 6 ).length,
  apiData.filter(el => el.arrest_date[7] === 7 | 8 | 9 ).length,
  apiData.filter(el => el.arrest_date[6] === 1 ).length
];

const winterCrimePercentage = (winterCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100;
const springCrimePercentage = (springCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100;
const summerCrimePercentage = (summerCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100;
const autumnCrimePercentage = (autumnCrimeCount / ( winterCrimeCount + springCrimeCount + summerCrimeCount + autumnCrimeCount)) * 100; 

const seasonalCrimeRateArray = [winterCrimePercentage, springCrimePercentage, summerCrimePercentage, autumnCrimePercentage];

/*
const crimes = apiData.forEach(element => {
    element.ofns_desc;
});

console.log(crimes);
const crimesLabelsArray = Array.from(...new Set(crimes));
*/

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Winter", "Summer", "Spring", "Fall"],
        datasets: [
          {
            backgroundColor: ["#0000ff", "ff0000", "00ff00", "#ff8800"],
            data: seasonalCrimeRateArray
            //data: [winterCrimePercentage, springCrimePercentage, summerCrimePercentage, autumnCrimePercentage] 
          }
        ]
      }
    }
  }
}
</script>