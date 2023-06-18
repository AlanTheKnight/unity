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
  <div v-if="membersCount !== null" class="card card-body py-3 h-100">
    <div class="display-3 fw-bold">{{ membersCount }}</div>
    <div class="text-muted">{{ membersCount === 1 ? 'Member' : 'Members' }} in database</div>
  </div>
</template>

<style scoped>
.card {
  background-color: #01c29a;
  --bs-card-color: rgba(0, 0, 0, 0.831) !important;
  --bs-secondary-color: rgba(0, 0, 0, 0.649) !important;
}
</style>
