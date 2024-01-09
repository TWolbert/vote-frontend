<script setup lang="ts">
import { user } from '@/store';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="min-w-full min-h-[100vh] overflow-hidden bg-black text-white">
    <div v-if="user.username?.length > 0"  class="flex flex-col items-center justify-center w-full h-[100vh]">
      <p>
        Hier, {{ user.realname }}, ingelogd ja? Top. 

      </p>
      <RouterLink class="px-3 py-2 bg-blue-500 rounded-xl" to="/vote">Begin met stemmen</RouterLink>
    </div>
    <div v-else class="flex flex-col items-center justify-center w-full h-[100vh]">
      <p>
        Je bent niet ingelogd, wat een loser, log ff in om door te gaan
      </p>
      <RouterLink class="px-3 py-2 bg-blue-500 rounded-xl" to="/login">Log in</RouterLink>

    </div>
  </main>
</template>
