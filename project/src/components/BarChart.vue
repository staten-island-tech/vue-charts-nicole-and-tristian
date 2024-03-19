<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const api_data = ;
const crimes = await ;
let labels = [];
 
// Count variable is used to add the
// new unique value only once in the
// outputArray.
let count = 0;
 
// Start variable is used to set true
// if a repeated duplicate value is
// encontered in the output array.
let start = false;
 
for (let j = 0; j < crimes.length; j++) {
    for (let k = 0; k < outputArray.length; k++) {
        if (Arr[j] == outputArray[k]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        outputArray.push(Arr[j]);
    }
    start = false;
    count = 0;
}
 
console.log(outputArray);

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          },
          {
            label: 'Data Two',
            backgroundColor: '#0089f9',
            data: [7634, 987534, 7]
          }
        ]
      }
    }
  }
}
</script>