<script setup lang="ts">
import type { Member } from '@/firebase'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

defineProps<{ member: Member }>()
</script>

<template>
  <div class="col-12 col-xl-6">
    <div class="card card-body">
      <div class="row">
        <div
          class="col-12 col-md-auto mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start"
        >
          <img :src="member.photo_url" alt="" class="user-avatar" />
        </div>
        <div class="col">
          <div class="fs-5 position-absolute top-0 end-0 mt-2 me-2 d-flex flex-column flex-md-row">
            <div class="badge bg-indigo me-0 me-md-2 mb-2 mb-md-0" v-if="member.isAdmin">ADMIN</div>
            <div class="badge bg-primary" v-if="member.id == authStore.user?.id">ME</div>
          </div>
          <h1 class="fs-3">{{ member.first_name }} {{ member.last_name }}</h1>
          <div class="">
            <i class="bi-telegram text-secondary me-2"></i>
            <a class="link-light text-decoration-none" :href="'https://t.me/' + member.username"
              >@{{ member.username }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card:hover {
  scale: 1.01;
  transition: scale 0.1s ease-in-out;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 20%;
}

.bg-indigo {
  background-color: #c89afe;
  color: rgba(0, 0, 0, 0.762);
}
</style>
