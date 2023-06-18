<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from '@/components/MainNav.vue'
</script>

<template>
  <header>
    <MainNav></MainNav>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
