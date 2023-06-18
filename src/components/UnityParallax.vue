<script setup lang="ts">
const unity_join_link = import.meta.env.VITE_APP_UNITY_JOIN_LINK
</script>

<template>
  <div class="text-center">
    <a class="display-3 parallax text-gothic text-decoration-none" :href="unity_join_link">unity</a>
  </div>
</template>

<style scoped>
.parallax {
  background: linear-gradient(43deg, #4158d0 0%, #d45fcd 46%, #ffbd43 100%);
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
  background-size: 300%;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  letter-spacing: 5px;
}

@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0px 50%;
  }
}

#slogan {
  font-family: Inter;
  font-weight: 900;
  letter-spacing: -1.5px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}
</style>
