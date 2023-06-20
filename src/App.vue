<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from '@/components/MainNav.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <MainNav />
  <div class="view-wrapper">
    <RouterView />
  </div>
  <MainFooter />
</template>

<style scoped>
.view-wrapper {
  margin-bottom: 200px;
}
</style>
