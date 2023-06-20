<template>
  <div class="card w-100" v-if="authStore.user">
    <div class="card-img-top" id="profileBackground">
      <div>
        <UserIcon :user="authStore.user" size="5rem" />
      </div>
    </div>
    <div class="card-body px-0">
      <div class="fs-3 username fw-bold mb-5">
        {{ authStore.user?.username }}
      </div>
      <div id="detailsSection">
        <div>

        </div>
        <h4 class="mb-2">Account Details</h4>
        <div class="row">
          <div class="col-4 col-md-3 col-lg-2">
            <div class="fw-bold">First name</div>
          </div>
          <div class="col">
            <div>{{ authStore.user.first_name }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-md-3 col-lg-2">
            <div class="fw-bold">Last name</div>
          </div>
          <div class="col">
            <div>{{ authStore.user.last_name }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-md-3 col-lg-2">
            <div class="fw-bold">Telegram ID</div>
          </div>
          <div class="col">
            <div>{{ authStore.user.id }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import UserIcon from './UserIcon.vue'

const authStore = useAuthStore()
</script>

<style scoped>
#profileBackground {
  width: 100%;
  height: 8rem;
  background-image: linear-gradient(43deg, #4158d0 0%, #d45fcd 46%, #ffbd43 100%);
  position: relative;
}

.userAvatar {
  border-radius: 20%;
  margin-top: calc(8rem - 1.5rem);
  margin-left: 1.5rem;
  position: absolute;
}

#detailsSection {
  margin-left: 1.5rem;
}

.username {
  margin-left: calc(2rem + 6rem);
}
</style>
