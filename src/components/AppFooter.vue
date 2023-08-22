<script setup>
  import {ref} from 'vue';
  import { $fetch } from 'ohmyfetch';
  
  const FilmCount = ref([]);
  
  $fetch('https://api.vueflix.boxydev.com/movies').then(response =>{
    FilmCount.value = response.length;
  });
  
</script>

<template>
  <footer class="text-center text-gray-900">
    <hr  class="mx-24 ">
    <p class="my-6">Copyrigth © {{ new Date().getFullYear() }}. Catalogue de <strong>{{ FilmCount }}</strong> films.</p>
  </footer>
</template>

<style scoped>

</style>