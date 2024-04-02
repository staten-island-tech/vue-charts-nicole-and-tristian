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

async function grabAPIDataAndMakeCrimesArray(crimes) {

  const rawData = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json");
  const apiData = await rawData.json();
  console.log(rawData);
  console.log(apiData);
  crimes = apiData.forEach(element => {
    element.ofns_desc;
  });
  console.log(crimes);
  return crimes;

};

let crimes = null;
grabAPIDataAndMakeCrimesArray(crimes);
const crimesLabelsArray = Array.from(...new Set(crimes));


export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: crimesLabelsArray,
        datasets: [
          {
            backgroundColor: "#00ff00",
            data: [40, 20, 12, 5, 6, 5, 6, 6, 6, 6, 6, 5] 
          }
        ]
      }
    }
  }
}
</script>