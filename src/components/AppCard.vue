<script setup>
import AppButton from './AppButton.vue';

const props = defineProps(['qqchose', 'qqchoseaussi', 'peutetreqqchose']);


</script>

<template>
  <div>
    <div>
      <img :src="devTeamMember.avatar" :alt="devTeamMember.firstName.value + devTeamMember.lastName.value" class="rounded-full h-12 w-12">
      <p>{{ devTeamMember.lastName.value }} {{ devTeamMember.firstName.value }}</p>
    </div>
    <div>
      <p>{{ devTeamMember.role.value }}</p>
      <AppButton @click="qqchose">Biographie</AppButton>
      <p :v-if="qqchose">{{ devTeamMember.bio.value }}</p>
    </div>

  </div>
</template>