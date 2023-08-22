<script setup>
  import {computed} from 'vue';

  const props = defineProps(['movie']);

  const note = computed(() => 
    Math.floor(props.movie.vote_average * 10)
  );
</script>

<template>
  <div class="w-full md:w-1/3 lg:w-1/6 my-6 mx-2">
    <div class="h-full rounded-lg bg-gray-100 hover:shadow-lg hover:shadow-gray-600 transition ease-[cubic-bezier(.155,1.105,.295,1.12)] delay-300 hover:scale-105 flex flex-col justify-between">
      <div class="relative">
        <img :src="props.movie.poster_path" :alt="props.movie.original_title + 'affiche'" class="object-cover h-[375px]">
        <span class="rounded-full bg-gray-950 text-gray-50 absolute bottom-1 left-1 w-12 h-12 flex items-center justify-center">{{ note }} %</span>        
      </div>
      <div class="flex flex-col justify-between h-full">
        <h5 class="ml-2 font-bold">{{props.movie.original_title}}</h5>
        <p class="ml-2">{{props.movie.release_date}}</p>
      </div>
    </div>
  </div>
</template>