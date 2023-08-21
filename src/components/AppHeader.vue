<script setup>
  import {ref} from 'vue';
  import { RouterLink } from 'vue-router';
  const isAuthenticated = ref(true);
</script>

<template>
  <p id="logo">VueFlix</p>
  <nav>
    <ul>
      <li>
        <RouterLink :to = "{name : 'Acceuil'}">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink :to = "{name : 'Apropos'}">Apropos</RouterLink>
      </li>
      <li v-if="isAuthenticated">
        <img class="avatar" src="https://xsgames.co/randomusers/avatar.php?g=male">
        <span>UserName</span>
      </li>
      <li v-else>
        <button>connexion</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>