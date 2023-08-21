<script setup>
import {ref} from 'vue';
import Sasukette from '../assets/images/Sasukette.png';
import Dédé from '../assets/images/Dédé.webp'
import Mathieu from '../assets/images/Mathieu.jpg'

const devTeamMembers = ref [
  {
    firstName : 'Mathieu',
    LastName : 'Duvillers',
    role : 'Stagiaire',
    bio : 'Expedita maxime pariatur eum placeat necessitatibus amet, laudantium nihil quaerat vitae nesciunt dolorem iusto quas ipsam, libero natus id, repellat voluptas. Culpa repellat iure a.',
    avatar : Mathieu
  },
  {
    firstName : 'Dédé',
    lastName : 'Glingo',
    role : 'Tech-lead',
    bio : 'Deserunt perspiciatis voluptatum dolorum perferendis voluptatibus sed mollitia nobis, reiciendis officia nam fugiat, saepe distinctio at fuga. Sed voluptate odit provident dolorem maxime cumque ab.',
    avatar : Dédé
  },
  {
    firstName : 'Sasukette',
    lastName : 'Dark',
    role : 'Front/Back',
    bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi corporis minima laudantium voluptate, dolores libero harum repellat ducimus voluptates, consequuntur, neque magni eveniet eligendi.',
    avatar : Sasukette
  }
];
</script>

<template>
  <div>
    <h1 class="text-bold text-gray-900">À propos</h1>
    <div v-for="devTeamMember in devTeamMembers" :key="devTeamMember
    .role">
    </div>
  </div>
</template>