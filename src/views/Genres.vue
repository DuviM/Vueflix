<script setup>
  import {ref} from 'vue';
  import { $fetch } from 'ohmyfetch';
  import { useRoute } from 'vue-router';
  import AppMovieCard from '../components/AppMovieCard.vue'

  const route = useRoute();
  const movieLibrary = ref([]);

  $fetch(`http://localhost:3000/genres/${route.params.id}?_embed=movie`).then(response =>{
    movieLibrary.value = response;
  });
  
</script>

<template>
  <h1 class="text-bold text-3xl text-gray-900 text-center my-10">FILMS DE {{  }}</h1>
  <div class=" my-24 flex flex-col flex-wrap sm:flex-row justify-evenly mx-12">
    <AppMovieCard v-for="item in movieLibrary" :key="item.id" :movie="item"></AppMovieCard>
  </div>
</template>