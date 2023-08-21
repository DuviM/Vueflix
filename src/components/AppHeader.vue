<script setup>
  import {ref} from 'vue';
  import { RouterLink } from 'vue-router';
  import AppButton from './AppButton.vue'
  const isAuthenticated = ref(false);
</script>

<template>
  <header class="bg-gray-900 flex justify-between items-center px-6 py-4">
    <p id="logo" class="text-3xl m-0 text-gray-50 font-black">Vue<span class="text-gray-50 bg-red-600 rounded-md px-2 py-1 ml-1">Flisk</span></p>
    <nav>
      <ul class="flex items-center list-none grid-flow-row text-gray-50">
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Acceuil'}">Accueil</RouterLink>
        </li>
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Films'}">Films</RouterLink>
        </li>
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Apropos'}">À-propos</RouterLink>
        </li>
        <li v-if="isAuthenticated" class="flex items-center ">
          <img class="rounded-full w-7 h-7 mr-2" src="https://xsgames.co/randomusers/avatar.php?g=male">
          <span>UserName</span>
        </li>
        <li v-else>
          <AppButton>Connexion</AppButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>