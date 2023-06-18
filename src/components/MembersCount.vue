<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCountFromServer } from 'firebase/firestore'
import { membersRef } from '@/firebase'

const membersCount = ref<null | number>(null)

onMounted(async () => {
  membersCount.value = (await getCountFromServer(membersRef)).data().count
})
</script>

<template>
  <div class="card card-body p-0 h-100">
    <div v-if="membersCount !== null" class="p-3">
      <div class="display-3 fw-bold">{{ membersCount }}</div>
      <div class="text-muted">{{ membersCount === 1 ? 'Member' : 'Members' }} in database</div>
    </div>
    <div v-else class="skeleton-box h-100 w-100"></div>
  </div>
</template>

<style scoped>
.card {
  background-color: #01c29a;
  --bs-card-color: rgba(0, 0, 0, 0.831) !important;
  --bs-secondary-color: rgba(0, 0, 0, 0.649) !important;
}

@keyframes loading {
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
}

.skeleton-box {
  cursor: progress;
  background: linear-gradient(0.25turn, transparent, #00dfb3, transparent), linear-gradient(#01c29a, #01c29a),
    radial-gradient(38px circle at 19px 19px, #01c29a 50%, transparent 51%),
    linear-gradient(#01c29a, #01c29a);
  background-repeat: no-repeat;
  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1.5s infinite;
  border-radius: var(--bs-border-radius);
}
</style>
