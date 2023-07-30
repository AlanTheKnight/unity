<script setup lang="ts">
import type { Member } from '@/firebase'
import { useAuthStore } from '@/stores/auth'
import UserIcon from './UserIcon.vue'

const authStore = useAuthStore()

const props = defineProps<{ member: Member; onClickCallback?: (member: Member) => void }>()

const cardClicked = () => {
  if (props.onClickCallback) props.onClickCallback(props.member)
}
</script>

<template>
  <div class="col-12 col-xl-6 mb-3">
    <div class="card card-body h-100" @click="cardClicked" data-bs-toggle="modal" data-bs-target="#userModalElement">
      <div class="row h-100">
        <div
          class="col-12 col-md-auto mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center"
        >
          <UserIcon :user="member" size="100px" />
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
          <div v-if="member.birthday" class="">
            <i class="bi-balloon-fill text-secondary me-2"></i>
            <span class="link-light text-decoration-none">{{ new Date(member.birthday).toLocaleDateString() }}</span>
          </div>
          <div v-if="member.education" class="">
            <i class="bi-building-fill text-secondary me-2"></i>
            <span class="link-light text-decoration-none">{{ member.education }}</span>
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

.userAvatar {
  border-radius: 20%;
}

.bg-indigo {
  background-color: #c89afe;
  color: rgba(0, 0, 0, 0.762);
}
</style>
