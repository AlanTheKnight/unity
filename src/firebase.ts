import { initializeApp } from 'firebase/app'
import {
  collection,
  getFirestore,
  type DocumentData,
  CollectionReference,
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore'
import type { TelegramUserData } from './stores/auth'
import { updateUser } from './utils/user'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSANGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export interface Member {
  id: number
  bio: string | null
  username: string
  first_name: string
  last_name: string | null
  isAdmin: boolean
  photo_url: string | null
  education: string | null
  birthday: string | null
}

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

export const membersRef = createCollection<Member>('members')

/**
 * Add new user to `members` collection based on auth data
 * from Telegram. If user is already present, update his
 * profile photo and username.
 */
export const addMember = async (userData: TelegramUserData) => {
  const userRef = doc(membersRef, String(userData.id))
  const docSnap = await getDoc(userRef)

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      id: userData.id,
      first_name: userData.first_name,
      last_name: userData.last_name ? userData.last_name : null,
      username: userData.username,
      photo_url: userData.photo_url ? userData.photo_url : null,
      isAdmin: false,
      bio: null,
      birthday: null,
      education: null
    })
  } else {
    updateUser(userRef, {
      photo_url: userData.photo_url ? userData.photo_url : null,
      username: userData.username
    })
  }
}
