<template>
  <div ref="telegramRef" class="d-flex"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore, type TelegramUserData } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { checkAuthValidity } from '@/utils/auth'

declare global {
  interface Window {
    onTelegramAuth: (data: TelegramUserData) => void
  }
}

const router = useRouter()

const authStore = useAuthStore()

const telegramRef = ref<null | HTMLElement>(null)

const telegramBotName = import.meta.env.VITE_APP_TELEGRAM_BOT_NAME

onMounted(() => {
  const script = document.createElement('script')
  window.onTelegramAuth = onTelegramAuth
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?3'
  script.setAttribute('data-size', 'medium')
  script.setAttribute('data-userpic', 'false')
  script.setAttribute('data-telegram-login', telegramBotName)
  script.setAttribute('data-request-access', 'read')
  script.setAttribute('data-onauth', 'onTelegramAuth(user)')
  script.setAttribute('data-radius', '6px')
  telegramRef.value?.appendChild(script)
})

const onTelegramAuth = (data: TelegramUserData) => {
  authStore.login(data)
  checkAuthValidity(data)
  router.push('/')
}
</script>
