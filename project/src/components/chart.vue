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

<style lang="scss" scoped></style>
