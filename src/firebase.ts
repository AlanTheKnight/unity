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

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyApOlqInjxEOx_P9tYn0pN7AILOZ4k9jqk',
  authDomain: 'unity-e3225.firebaseapp.com',
  projectId: 'unity-e3225',
  storageBucket: 'unity-e3225.appspot.com',
  messagingSenderId: '66171096635',
  appId: '1:66171096635:web:4ab39fed44b892dc33961e',
  measurementId: 'G-LLPEYCDCSV'
})

const db = getFirestore(firebaseApp)

export interface Member {
  id: number
  email: string
  bio: string
  username: string
  first_name: string
  last_name: string
  isAdmin: boolean
  photo_url: string
}

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

export const membersRef = createCollection<Member>('members')

export const addMember = async (userData: TelegramUserData) => {
  const userRef = doc(membersRef, String(userData.id))

  const docSnap = await getDoc(userRef)

  if (!docSnap.exists()) {
    await setDoc(doc(db, 'members'), {
      id: userData.id,
      first_name: userData.first_name,
      last_name: userData.last_name,
      username: userData.username,
      photo_url: userData.photo_url,
      isAdmin: false
    })
  }
}
