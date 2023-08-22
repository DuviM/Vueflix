<script setup>
import AppButton from './AppButton.vue';
import {ref} from 'vue';

const props = defineProps(['user', 'open']);
const emit = defineEmits(['opened']);


const showBio = () => emit('opened', props.user);
</script>

<template>
  <div class="w-full md:w-1/2 lg:w-1/3 my-3 ">
    <div class= "flex flex-row items-center rounded-xl bg-gray-50 py-6 shadow-xl shadow-gray-600 gap-4 mx-6">
      <div class="w-1/2">
        <img :src="props.user.avatar" :alt="props.user.firstName + props.user.lastName" class="rounded-full h-36 w-36 mx-auto">
        <p class="text-center mt-4">{{ props.user.firstName }} {{ props.user.lastName }}</p>
      </div>
      <div class="w-1/2 text-center px-2">
        <p class="font-bold mb-2">{{ props.user.role }}</p>
        <AppButton @click="showBio" v-if="!open">Biographie</AppButton>
        <p v-if="open" class="font-light text-xs text-left">{{ props.user.bio }}</p>
      </div>
    </div>
  </div>
</template> 