<script setup lang="ts"></script>

<template>
  <div class="card card-body h-100 py-3">
    <div class="display-3 bi bi-person-fill"></div>
    <div class="text-muted">
      <div>My profile</div>
      <RouterLink to="/" class="display-none stretched-link"></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #c89afe;
  --bs-card-color: rgba(0, 0, 0, 0.831) !important;
  --bs-secondary-color: rgba(0, 0, 0, 0.649) !important;
}

.card:hover {
  scale: 1.02;
  transition: scale 0.1s ease-in-out;
}
</style>
