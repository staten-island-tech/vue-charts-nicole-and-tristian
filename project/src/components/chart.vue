<template>
  <Pie :data="data" :options="options" />
</template>

<script>
export const data = {
  labels: ['Robbery', 'Felony Assault', 'Arson', 'Petit Larceny'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}
</script>


<template>
  <div>
    <h1>Crime Based on Borough</h1>
  </div>
</template>

<script>
export default {
  data: {},
  mounted: function () {
    this.fetchData
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped></style>

