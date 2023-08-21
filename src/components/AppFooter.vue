<script setup>
  import {ref} from 'vue';
  const FilmCount = ref(666)
</script>

<template>
  <p>Copyrigth © {{ new Date().getFullYear() }}. Catalogue de {{ FilmCount }} films.</p>
</template>

<style scoped>

</style>