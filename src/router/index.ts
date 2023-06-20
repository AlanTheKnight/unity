import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoAccess from '../views/NoAccess.vue'
import MembersView from '../views/MembersView.vue'
import ProfileView from '../views/ProfileView.vue'

import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/no-access',
      name: 'no-access',
      component: NoAccess
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()

  if (!authStore.loggedIn && to.name !== 'no-access') return { name: 'no-access' }

  return true
})

export default router
