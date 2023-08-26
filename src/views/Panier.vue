<script setup>
  import {ref} from 'vue';
  import { useCartStore } from '../stores/cart';  
  import AppMovieCard from '../components/AppMovieCard.vue';
import AppButton from '../components/AppButton.vue';

  const cartStore = useCartStore ();
</script>

<template>
  <h1 class="text-bold text-3xl text-gray-900 text-center my-10">PANIER</h1>
  <div class=" my-6 flex flex-col flex-wrap sm:flex-row justify-evenly mx-12">
    <AppMovieCard v-for="item in cartStore.cart" :key="item.movie.id" :movie="item.movie"></AppMovieCard>
  </div>
  <div class="flex justify-center">
    <AppButton @click="cartStore.clearCart" v-if="cartStore.cart.length > 0">Vider le panier</AppButton>
  </div>
</template>