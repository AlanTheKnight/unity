/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_TELEGRAM_BOT_TOKEN: string
  VITE_APP_TELEGRAM_BOT_NAME: string
  VITE_APP_UNITY_JOIN_LINK: string
  VITE_FIREBASE_API_KEY: string
  VITE_FIREBASE_AUTH_DOMAIN: string
  VITE_FIREBASE_PROJECT_ID: string
  VITE_FIREBASE_STORAGE_BUCKET: string
  VITE_FIREBASE_MESSANGING_SENDER_ID: string
  VITE_FIREBASE_APP_ID: string
  VITE_FIREBASE_MEASUREMENT_ID: string
}

declare const __APP_VERSION__: string
