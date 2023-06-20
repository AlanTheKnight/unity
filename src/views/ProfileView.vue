<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-auto mb-3 mb-md-0 nav flex-column nav-pills me-3" role="tablist">
        <button
          class="nav-link active"
          id="profile-tab-btn"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
        >
          <i class="bi-person-fill me-2"></i>
          My Profile
        </button>
        <button
          class="nav-link"
          id="settings-tab-btn"
          data-bs-toggle="pill"
          data-bs-target="#pills-settings"
          type="button"
          role="tab"
        >
          <i class="bi-gear-fill me-2"></i>
          Settings
        </button>
      </div>
      <div class="col tab-content">
        <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" tabindex="0">
          <UserProfile />
        </div>
        <div class="tab-pane fade" id="pills-settings" role="tabpanel" tabindex="0">
          <div class="card card-body">Coming soon...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
</script>
