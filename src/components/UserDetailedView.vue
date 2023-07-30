<script setup lang="ts">
import { getMarked } from '@/utils/markdown'
import UserIcon from './UserIcon.vue'
import { type Member } from '@/firebase'

defineProps<{ member: Member | null }>()
</script>

<template>
  <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="true">
    <div class="modal-dialog modal-lg modal-fullscreen-md-down p-2 p-md-0">
      <div class="modal-content">
        <div v-if="member" class="modal-body p-0">
          <div class="card w-100">
            <div class="card-img-top" id="profileBackground">
              <div>
                <UserIcon :user="member" size="5rem" />
              </div>
              <button
                type="button"
                class="btn-close text-light position-absolute end-0 top-0 mt-2 me-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body px-0">
              <div class="fs-3 username fw-bold">{{ member.username }}</div>

              <div id="detailsSection" class="pe-4">
                <div v-if="member.isAdmin" class="mt-2 mb-3">
                  <span class="badge bg-primary">ADMIN</span>
                </div>
                <div v-else class="mb-3"></div>

                <div class="">
                  <i class="bi-telegram text-secondary me-2"></i>
                  <a class="link-light text-decoration-none" :href="'https://t.me/' + member.username"
                    >@{{ member.username }}</a
                  >
                </div>
                <div v-if="member.birthday" class="">
                  <i class="bi-balloon-fill text-secondary me-2"></i>
                  <span class="link-light text-decoration-none">{{
                    new Date(member.birthday).toLocaleDateString()
                  }}</span>
                </div>
                <div v-if="member.education" class="">
                  <i class="bi-building-fill text-secondary me-2"></i>
                  <span class="link-light text-decoration-none">{{ member.education }}</span>
                </div>
              </div>

              <div v-if="member.bio" class="mt-3 px-4">
                <h3>About</h3>
                <div v-html="getMarked(member.bio)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

.btn-close {
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgb(214, 214, 214)' %3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") !important; */
  --bs-btn-close-color: black !important;
  --bs-btn-close-hover-opacity: 0.9 !important;
  --bs-btn-close-opacity: 0.8 !important;
}
</style>
