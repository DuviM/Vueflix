<script setup>
  import {ref} from 'vue';
  import Appbutton from '../components/AppButton.vue';
  import * as dayjs from 'dayjs';
  import 'dayjs/locale/fr';

  dayjs.locale('fr');

  const props = defineProps(['actor', 'open']);
  const emit = defineEmits(['opened']);

  const birthDate = dayjs(props.actor.birthday).format("YYYY");

  const age = ref(() => new Date().getFullYear() - birthDate);

  const showBio = () => emit('opened', props.actor);
  // const props = defineProps(['user', 'open']);
</script>

<template>
  <div class="w-full sm:w-1/2 md:w-1/4 my-6 mx-2">
    <div class="h-full rounded-lg bg-gray-100 flex flex-col justify-between">
      <div class="relative">
          <img :src="props.actor.profile_path" :alt="props.actor.original_name + 'photo'" class="object-cover h-[550] lg:h-[375px] w-full rounded-t-lg ">     
      </div>
      <div class="flex flex-col lg:flex-row justify-between h-full">
        <div class="flex flex-col justify-between h-full w-full lg:w-2/3">
          <h5 class="font-bold mt-4 ml-4 text-left">{{ props.actor.original_name }} <span class="text-sm font-thin">{{ age() }} ans</span></h5>
          <p class="mb-4 ml-4 text-left">as {{ props.actor.character }}</p>
        </div>
        <div class="flex items-center justify-center h-full w-full lg:w-1/3">
          <Appbutton @click="showBio" v-if="!open">Bio</Appbutton>
          <p v-if="open" class="font-light text-xs text-left">{{ props.singleMovieObject.actors.biography }}</p>
        </div>
      </div>
    </div>
  </div>
</template>