c
<template>
  <div></div>
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
