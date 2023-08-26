<script setup>
  import { onMounted, watch, ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { $fetch } from 'ohmyfetch';
  import AppModalBa from '../components/AppModalBa.vue';
  import AppActorCard from '../components/AppActorCard.vue';
  import * as dayjs from 'dayjs';
  import 'dayjs/locale/fr';

  dayjs.locale('fr');

  const route = useRoute();
  const singleMovieObject = ref({}); 
  const showModal = ref(false); 
  const selected = ref(null);
  
  onMounted(() => console.log("c'i lu merde"));
  
  watch(
    () => route.params.id,
    (newId) => console.log(newId)
    );
    
  $fetch(`http://localhost:3000/movies/${route.params.id}?_expand=genre&_expand=actors`).then(response =>{
    singleMovieObject.value = response;
  });
    

  const formatedDate = () => dayjs(singleMovieObject.value.release_date).format('DD MMMM YYYY');
  const formatedYear = () => dayjs(singleMovieObject.value.release_date).format('YYYY');
  
  
  const hours = () => Math.floor(singleMovieObject.value.runtime / 60);
  const minutes = () => singleMovieObject.value.runtime % 60;

  const note = computed(() => 
    Math.floor(singleMovieObject.value.vote_average * 10)
  );
  
</script>

<template>  
  <div class="flex flex-col w-full h-full">
    <div :style="{ backgroundImage : `url(${singleMovieObject.backdrop_path})`}" class="bg-cover">      
      <div class="bg-gray-950/75">
        <div class="flex px-24 py-12">
          <div class="w-1/3 flex items-center justify-center">
            <img :src="singleMovieObject.poster_path" :alt="singleMovieObject.poster_path + 'affiche'" class="h-[400px] rounded-lg">
          </div>
          <div class="py-12 w-2/3">
            <div>
              <h1 class="text-gray-50 font-black text-4xl">{{ singleMovieObject.original_title }}<span class="font-thin">({{ formatedYear() }})</span></h1>
            </div>
            <div>
              <p class="text-gray-50">{{ formatedDate() }} - {{ singleMovieObject.genre?.name }} - {{ hours() }}h{{ minutes() }}</p>
            </div>
            <div class="flex items-center">
              <span class="rounded-full bg-gray-950 text-gray-50 w-12 h-12 flex items-center justify-center border-2 my-6" :class="{
                'border-green-500' : note >= 70,
                'border-yellow-500' : note < 70 && note > 60,
                'border-red-500' : note <= 60
                }">{{ note }} %
              </span>
              <button id="show-modal" @click="showModal = true" class="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-gray-50 stroke-1 ml-6 mr-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </span>
                <span class="text-gray-50">
                  voir la bande annonce
                </span>
              </button>              
              <Teleport to="body">
                <AppModalBa :show="showModal" @close="showModal = false">
                  <template #header>
                    <h3 class="text-gray-900 text-center">Regardez la B.A. de <strong>{{ singleMovieObject.title }}</strong></h3>
                  </template>
                  <iframe width="100%" height="500" :src="`https://www.youtube.com/embed/${singleMovieObject.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </AppModalBa>
              </Teleport>
            </div>
            <div class="text-gray-50 italic font-extralight mb-5">"{{ singleMovieObject.tagline }}"</div>
            <div>
              <h2 class="text-2xl text-gray-50 font-bold mb-5">Sypnosis</h2>
              <p class="text-gray-50 text-sm">{{ singleMovieObject.overview }}</p>
            </div>
          </div>
        </div>       
      </div>
    </div>
    <div class="text-gray-900 text-center text-2xl mt-5 font-extrabold">Casting</div>
    <div class="h-1/2 w-full flex flex-col flex-wrap sm:flex-row justify-evenly px-12">
      <AppActorCard v-for="item in singleMovieObject.actors" :key="item.id" :actor ="item" @opened="selected = $event.id" :open="selected === item.id"></AppActorCard>
    </div>
  </div>
</template>

