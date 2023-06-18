import type { TelegramUserData } from '@/stores/auth'
import CryptoJS from 'crypto-js'

export const checkAuthValidity = (data: TelegramUserData) => {
  const bot_token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN
  const secret = CryptoJS.SHA256(bot_token)

  const data_check_string = []
  for (const key in data) {
    if (key != 'hash') {
      data_check_string.push(key + '=' + data[key as keyof TelegramUserData])
    }
  }

  const check_hash = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(data_check_string.sort().join('\n'), secret)
  )

  const delta = new Date().getTime() - new Date(data.auth_date * 1000).getTime()

  if (check_hash === data.hash && delta <= 10080000) return true
  return false
}
