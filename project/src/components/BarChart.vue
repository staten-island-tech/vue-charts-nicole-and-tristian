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

//part of this code is stolen and modified from this webpage (https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/)

async function filterUniqueCrimes(varToDefine) {

  const rawData = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json");
  const apiData = rawData.json;
  console.log(rawData);
  console.log(apiData);
  varToDefine = new Set(apiData.forEach(element => {
    element.ofns_desc;
}));

};

let crimesSet = null;
filterUniqueCrimes(crimesSet);
const crimes = Array.from(crimesSet);


export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: crimes,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#00ff00",
            data: [40, 20, 12, 5, 6, 5, 6, 6, 6, 6, 6]
          }
        ]
      }
    }
  }
}
</script>