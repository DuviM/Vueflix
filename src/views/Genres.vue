<script setup>
  import {ref, watch} from 'vue';
  import { $fetch } from 'ohmyfetch';
  import { useRoute } from 'vue-router';
  import AppMovieCard from '../components/AppMovieCard.vue'

  const route = useRoute();
  const movieByCategoryLibrary = ref([]);
  const categoryName  = ref({});

  watch(
    () => route.params.id,
    () =>{
    $fetch(`http://localhost:3000/genres/${route.params.id}?_embed=movies`).then(response =>{
    movieByCategoryLibrary.value = response.movies;
    categoryName.value = response.name
    })}
  );

  $fetch(`http://localhost:3000/genres/${route.params.id}?_embed=movies`).then(response =>{
    movieByCategoryLibrary.value = response.movies;
    categoryName.value = response.name
  });
  
</script>

<template>
  <h1 class="text-bold text-3xl text-gray-900 text-center my-10 uppercase">{{ categoryName }}</h1>
  <p v-if="movieByCategoryLibrary.length === 0" class="text-center text-6xl text-gray-400 font-black pt-40 flex items-center justify-center">Cette catégorie est vide.</p>
  <div class=" my-6 flex flex-col flex-wrap sm:flex-row justify-evenly mx-12">
    <AppMovieCard v-for="item in movieByCategoryLibrary" :key="item.id" :movie="item"></AppMovieCard>
  </div>
</template>