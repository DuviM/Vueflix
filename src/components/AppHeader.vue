<script setup>
  import {ref, watch} from 'vue';
  import { RouterLink } from 'vue-router';
  import { useRoute } from 'vue-router';
  import { $fetch } from 'ohmyfetch';
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import AppButton from './AppButton.vue'

  const route = useRoute();
  const isAuthenticated = ref(false);
  const genresLibrary = ref([]);



  $fetch(`http://localhost:3000/genres/`).then(response =>{
    genresLibrary.value = response;
  });

</script>

<template>
  <header class="bg-gray-900 flex justify-between items-center px-6 py-4">
    <p id="logo" class="text-3xl m-0 text-gray-50 font-black">
      <RouterLink :to = "{name : 'Accueil'}">Vue<span class="text-gray-50 bg-red-600 rounded-md px-2 py-1 ml-1">Flisk</span></RouterLink></p>
    <nav>
      <ul class="flex items-center list-none grid-flow-row text-gray-50">
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Accueil'}">Accueil</RouterLink>
        </li>
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Films'}">Films</RouterLink>          
        </li>
        <li class="flex items-center my-0 mx-4">
          <Menu as="div" class="relative inline-block text-left z-50" v-slot="{close}">
            <div>
              <MenuButton class="inline-flex w-full justify-center items-center font-medium text-gray-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-50 focus-visible:ring-opacity-75">
                Genres
                <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-gray-200 hover:text-gray-100" aria-hidden="true"/>
              </MenuButton>
            </div>
            <Transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" @click="close">
                <div class="px-1 py-1">
                  <MenuItem v-for="item in genresLibrary" :key="item.id" as="template" v-slot="{active}">
                  <RouterLink :to = "{name : 'Genres', params: {id: item.id}}" :class="[
                  active ? 'bg-gray-500 text-gray-50' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">{{item.name}}</RouterLink>
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
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