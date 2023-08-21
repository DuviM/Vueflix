<script setup>
  import {ref} from 'vue';
  const filmQty = ref(666)
</script>

<template>
  <p>Copyrigth © {{ new Date().getFullYear() }}. Catalogue de {{ filmQty }} films.</p>
</template>

<style scoped>

</style>