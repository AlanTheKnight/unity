<script setup lang="ts">
import type { Member } from '@/firebase'
import type { TelegramUserData } from '@/stores/auth'
import { toSvg } from 'jdenticon'
import { computed } from 'vue'

const props = defineProps<{ size: string; user: Member | TelegramUserData; radius: string }>()

const jdenticon = computed(() => {
  if (props.user.photo_url) return null
  return toSvg(props.user.id, parseInt(props.size))
})
</script>

<template>
  <div>
    <img
      v-if="user.photo_url"
      :src="user.photo_url"
      alt=""
      class="userAvatar"
      :style="{ width: `${size}px`, height: `${size}px`, borderRadius: `${radius}%` }"
    />
    <div
      v-else
      v-html="jdenticon"
      class="userAvatar jdenticon-wrapper"
      :style="{ borderRadius: `${radius}%` }"
    ></div>
  </div>
</template>

<style scoped>
.jdenticon-wrapper {
  background-color: rgb(47, 47, 47);
}
</style>
