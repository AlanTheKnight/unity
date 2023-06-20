<template>
  <footer class="footer w-100" id="footer" :class="{ 'd-none': route.name === 'home' }">
    <hr />

    <div class="container pb-2 px-4">
      <div class="d-flex flex-row align-items-center">
        <img
          src="@/assets/images/logo/logo.png"
          width="20"
          height="20"
          class="d-inline-block align-center me-2"
          alt=""
        />
        <div class="fw-bold me-2">Unity</div>
        <div id="version">v{{ version }}</div>
      </div>

      <div>
        Coding by
        <a
          class="fw-bold link-light text-decoration-none"
          href="https://github.com/AlanTheKnight"
          target="_blank"
          >Maxim Gusev</a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const version = __APP_VERSION__

const route = useRoute()
</script>

<style scoped>
#footer {
  line-height: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
}

#version {
  white-space: nowrap;
}
</style>
