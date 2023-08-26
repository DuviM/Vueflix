<script setup>
  import {ref} from 'vue';
  import { $fetch } from 'ohmyfetch';
  import AppMovieCard from '../components/AppMovieCard.vue';
  import { useCartStore } from '../stores/cart';

  const movieLibrary = ref([]);

  $fetch('http://localhost:3000/movies').then(response =>{
    movieLibrary.value = response;
  });

  const store = useCartStore();
</script>

<template>
  <h1 class="text-bold text-3xl text-gray-900 text-center my-10">FILMS</h1>
  <ul>
    <li v-for="item in store.cart">
    {{ item }}</li>
  </ul>
  <div class=" my-6 flex flex-col flex-wrap sm:flex-row justify-evenly mx-12">
    <AppMovieCard v-for="item in movieLibrary" :key="item.id" :movie="item"></AppMovieCard>
  </div>
</template>