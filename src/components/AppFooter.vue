<script setup>
  import {ref} from 'vue';
  const FilmCount = ref(666)
</script>

<template>
  <footer class="text-center text-gray-900 ">
    <hr>
    <p class="my-6">Copyrigth © {{ new Date().getFullYear() }}. Catalogue de <strong>{{ FilmCount }}</strong> films.</p>
  </footer>
</template>

<style scoped>

</style>