<script setup>
import { RouterView, RouterLink} from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />    
  <RouterView />
  <AppFooter />
</template>
