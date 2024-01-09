<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { user } from './store';


user.setUser(JSON.parse(localStorage.getItem('user') || '{}'))
</script>

<template>
  <div class="overflow-hidden text-white bg-black">
    <!-- Navbar -->
    <nav class="flex items-center justify-center gap-2 p-2">
      <RouterLink class="hover:text-blue-500" to="/">Home</RouterLink> |
      <RouterLink class="hover:text-blue-500" to="/login">Login</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>