<script setup lang="ts">
import MainMenu from '@/components/MainMenu.vue'
import UnityParallax from '@/components/UnityParallax.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <main>
    <div v-if="authStore.loggedIn">
      <div class="container mt-5">
        <UnityParallax />
        <MainMenu />
      </div>
    </div>
  </main>
</template>
