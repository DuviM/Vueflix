<script setup>
  import {computed} from 'vue';
  import * as dayjs from 'dayjs';
  import 'dayjs/locale/fr';
  import Appbutton from '../components/AppButton.vue'
  import { useCartStore } from '../stores/cart';
  

  dayjs.locale('fr');

  const props = defineProps(['movie']);

  const date = props.movie.release_date;

  const formatedDate = () => dayjs(date).format('DD MMMM YYYY');

  const note = computed(() => 
    Math.floor(props.movie.vote_average * 10)
  );

  const store = useCartStore();

</script>

<template>
  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 my-6 mx-2">
    <div class="h-full rounded-lg bg-gray-100 hover:shadow-lg hover:shadow-gray-600 transition ease-[cubic-bezier(.155,1.105,.295,1.12)] delay-300 hover:scale-105 flex flex-col justify-between">
      <div class="relative">
        <RouterLink :to = "{name : 'PageFilm', params: {id: movie.id}}">
          <img :src="props.movie.poster_path" :alt="props.movie.original_title + 'affiche'" class="object-cover w-full h-[575px] lg:h-[375px] rounded-t-lg">
        </RouterLink>
        <span class="rounded-full bg-gray-950 text-gray-50 absolute bottom-1 left-1 w-12 h-12 flex items-center justify-center border-2" :class="{
          'border-green-500' : note >= 70,
          'border-yellow-500' : note < 70 && note > 60,
          'border-red-500' : note <= 60
          }">{{ note }} %</span>        
      </div>
      <div class="flex flex-col justify-between h-full">
        <h5 class="ml-2 font-bold mt-2">
          <RouterLink :to = "{name : 'PageFilm', params: {id: movie.id}}">{{props.movie.original_title}}</RouterLink>          
        </h5>
        <p class="ml-2 capitalize mb-2">{{ formatedDate() }}</p>
      </div>
      <div class="flex items-center justify-center">
        <Appbutton @click="store.add(movie)" v-if="!store.has(movie)" class="w-full rounded-t-none rounded-b-lg">Ajouter au panier</Appbutton>
        <Appbutton @click="store.delete(movie)" v-if="store.has(movie)" class="w-full rounded-t-none rounded-b-lg ">Retirer du panier</Appbutton>
      </div>
    </div>
  </div>
</template>