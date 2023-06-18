<script setup lang="ts">
import LockIcon from '@/components/icons/LockIcon.vue'
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card card-body d-flex align-items-center">
          <LockIcon id="lock-icon" class="my-3" />
          <h5 class="text-center">You do not have access to this page</h5>
          <div class="text-muted text-center">Please use Telegram login to confirm your identity</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #161c23;
}

#lock-icon {
  color: lightgray;
  width: 60px;
}
</style>
