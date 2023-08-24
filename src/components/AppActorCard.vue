<script setup>
  import {ref} from 'vue';
  import * as dayjs from 'dayjs';
  import 'dayjs/locale/fr';

  dayjs.locale('fr');

  const props = defineProps(['actor']);

  const birthDate = dayjs(props.actor.birthday).format("YYYY")

  const age = ref(() => new Date().getFullYear() - birthDate)

</script>

<template>
  <div class="w-full md:w-1/3 lg:w-1/6 my-6 mx-2">
    <div class="h-full rounded-lg bg-gray-100 flex flex-col justify-between">
      <div class="relative">
          <img :src="props.actor.profile_path" :alt="props.actor.original_name + 'photo'" class="object-cover h-[375px] rounded-t-lg ">     
      </div>
      <div class="flex flex-col justify-between h-full">
        <h5 class="font-bold mt-2 text-center">{{ props.actor.original_name }} <span class="text-sm font-thin">{{ age() }} ans</span></h5>
        <p class="mb-2 text-center">as {{ props.actor.character }}</p>
      </div>
    </div>
  </div>
</template>