<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <h2><RouterLink to="/">Arrests in Boroughs</RouterLink></h2>
       <h2><RouterLink to="/NameChart">Age Range for Crime</RouterLink></h2> 
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

