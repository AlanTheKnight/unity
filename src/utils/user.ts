import type { Member } from '@/firebase'
import { updateDoc, type DocumentReference } from 'firebase/firestore'

export interface UserProfileUpdate {
  first_name?: string
  last_name?: string | null
  birthday?: string | null
  education?: string | null
  bio?: string | null
  photo_url?: string | null
  username?: string
}

export interface UserProfileFormData {
  first_name: string
  last_name: string
  birthday?: string
  education?: string
  bio: string
}

export const getUserProfileFormFields = (user: Member | undefined) => {
  return {
    first_name: user === undefined ? '' : user.first_name,
    last_name: user === undefined || user.last_name === null ? '' : user.last_name,
    bio: user === undefined || user.bio === null ? '' : user.bio,
    birthday: user === undefined || user.birthday === null ? '' : user.birthday,
    education: user === undefined || user.education === null ? '' : user.education
  }
}

export const updateUser = async (userRef: DocumentReference<Member>, newData: UserProfileUpdate) => {
  await updateDoc(userRef, newData)
}
