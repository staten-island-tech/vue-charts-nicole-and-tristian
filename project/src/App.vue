<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Arrests in Boroughs</RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style >
h2{
  text-align: center;
}

</style>

