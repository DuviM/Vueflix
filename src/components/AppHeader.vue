<script setup>
  import {ref} from 'vue';
  import { RouterView } from 'vue-router';
  const isAuthenticated = ref(true);
</script>

<template>
  <RouterView />
  <nav>
    <ul>
      <li>Accueil</li>
      <li>A propos</li>
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