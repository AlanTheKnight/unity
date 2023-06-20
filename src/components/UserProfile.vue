<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import UserIcon from './UserIcon.vue'
import { useDocument } from 'vuefire'
import { doc, getDoc } from 'firebase/firestore'
import { membersRef } from '@/firebase'
import { ref } from 'vue'
import MarkDownEditor from './MarkDownEditor.vue'
import { getUserProfileFormFields, type UserProfileUpdate, updateUser, type UserProfileFormData } from '@/utils/user'
import { onMounted } from 'vue'

const authStore = useAuthStore()

const userRef = doc(membersRef, String(authStore.user?.id))

const user = useDocument(userRef)

const userData = ref<null | UserProfileFormData>(null)

onMounted(async () => {
  const rawUser = await getDoc(userRef)
  userData.value = getUserProfileFormFields(rawUser.data())
})

const bioInput = ref<typeof MarkDownEditor | null>(null)

const saveUserProfile = (data: UserProfileFormData) => {
  const bioVal = bioInput.value?.getValue() as string | undefined
  const newData: UserProfileUpdate = {
    bio: bioVal ? bioVal : null,
    birthday: data.birthday ? data.birthday : null,
    education: data.education ? data.education : null,
    last_name: data.last_name ? data.last_name : null,
    first_name: data.first_name
  }

  updateUser(userRef, newData)
}
</script>

<template>
  <div class="card w-100" v-if="authStore.user && user">
    <div class="card-img-top" id="profileBackground">
      <div>
        <UserIcon :user="user" size="5rem" />
      </div>
    </div>
    <div class="card-body px-0">
      <div class="fs-3 username fw-bold">{{ user.username }}</div>

      <div id="detailsSection" class="pe-4">
        <div v-if="user.isAdmin" class="mt-2 mb-4">
          <span class="badge bg-primary">ADMIN</span>
        </div>
        <div v-else class="mb-5"></div>

        <div class="alert">
          <i class="bi bi-exclamation-circle me-3"></i>Your username and avatar update automatically after login
        </div>

        <FormKit v-if="userData !== null" type="form" submit-label="Save" :value="userData" @submit="saveUserProfile">
          <div class="row">
            <div class="col-12 col-md-6">
              <FormKit
                type="text"
                name="first_name"
                outer-class="mb-3"
                label="First name"
                validation="required|length:1,30"
              ></FormKit>
            </div>
            <div class="col-12 col-md-6">
              <FormKit type="text" name="last_name" outer-class="mb-3" label="Last name" validation="length:0,30">
              </FormKit>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <FormKit type="date" label="Birthday" outer-class="mb-3" name="birthday" validation-visibility="live" />
            </div>

            <div class="col-12 col-md-6">
              <FormKit
                type="text"
                label="Place of study"
                name="education"
                validation-visibility="live"
                help="e.g. ITMO University, Software Engineering BSc, I course"
                outer-class="mb-3"
              />
            </div>
          </div>

          <MarkDownEditor label="Profile description" name="bio" :options="{}" ref="bioInput" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped>
#profileBackground {
  width: 100%;
  height: 8rem;
  background-image: linear-gradient(43deg, #4158d0 0%, #d45fcd 46%, #ffbd43 100%);
  position: relative;
}

.userAvatar {
  border-radius: 20%;
  margin-top: calc(8rem - 1.5rem);
  margin-left: 1.5rem;
  position: absolute;
}

#detailsSection {
  margin-left: 1.5rem;
}

.username {
  margin-left: calc(2rem + 6rem);
}
</style>
