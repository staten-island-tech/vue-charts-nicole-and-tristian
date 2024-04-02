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

<<<<<<< Updated upstream
let winterCrimeCount, springCrimeCount, summerCrimeCount, autumnCrimeCount = 0;

apiData.forEach((element) =>
{
  if (element.arrest_date[7] === 1 | 2 | 3) {
    winterCrimeCount++;
  } else if (element.arrest_date[7] === 4 | 5 | 6) {
    springCrimeCount++;
  } else if (element.arrest_date[7] === 7 | 8 | 9) {
    summerCrimeCount++;
  } else if (element.arrest_date[6] === 1) {
    autumnCrimeCount++;
  }}
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
=======
  const rawData = await fetch("https://data.cityofnewyork.us/resource/8h9b-rp9u.json?$limit=5750000");
  const apiData = await rawData.json();
  console.log(rawData);
  console.log(apiData);
  varToDefine = new Set(apiData.forEach(element => {
    element.pd_desc;
}));
  return varToDefine;

};

let setOfCrimes = null;
filterUniqueCrimes(setOfCrimes);
const crimeLabels = Array.from(setOfCrimes);
>>>>>>> Stashed changes

console.log(crimes);
const crimesLabelsArray = Array.from(...new Set(crimes));
*/

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
<<<<<<< Updated upstream
        labels: ["Winter", "Summer", "Spring", "Fall"],
=======
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
>>>>>>> Stashed changes
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