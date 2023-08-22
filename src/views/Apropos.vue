<script setup>
import {ref} from 'vue';
import Sasukette from '../assets/images/Sasukette.png';
import Dédé from '../assets/images/Dédé.webp';
import Mathieu from '../assets/images/Mathieu.jpg';
import AppCard from '../components/AppCard.vue';

const devTeamMembers = ref([  
  {
    id : 'dev-1',
    firstName : 'Dédé',
    lastName : 'Glingo',
    role : 'Tech-lead',
    bio : 'Deserunt perspiciatis voluptatum dolorum perferendis voluptatibus sed mollitia nobis, reiciendis officia nam fugiat, saepe distinctio at fuga. Sed voluptate odit provident dolorem maxime cumque ab.',
    avatar : Dédé
  },
  {
    id : 'dev-2',
    firstName : 'Sasukette',
    lastName : 'Dark',
    role : 'Front/Back',
    bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi corporis minima laudantium voluptate, dolores libero harum repellat ducimus voluptates, consequuntur, neque magni eveniet eligendi.',
    avatar : Sasukette
  },
  {
    id : 'dev-3',
    firstName : 'Mathieu',
    lastName : 'Duvillers',
    role : 'Stagiaire',
    bio : 'Expedita maxime pariatur eum placeat necessitatibus amet, laudantium nihil quaerat vitae nesciunt dolorem iusto quas ipsam, libero natus id, repellat voluptas. Culpa repellat iure a.',
    avatar : Mathieu
  }
]);

const selected = ref(null);

</script>

<template>
  <div>
    <h1 class="text-bold text-3xl text-gray-900 text-center my-10">À PROPROS</h1>
    <div class=" my-24 flex flex-col flex-wrap sm:flex-row justify-between mx-12 ">      
      <AppCard v-for="devTeamMember in devTeamMembers" :key="devTeamMember.id" :user = "devTeamMember" @opened="selected = $event.id" :open="selected === devTeamMember.id"/>      
    </div>
  </div>
</template>