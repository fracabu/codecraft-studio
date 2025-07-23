import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const checkAuth = () => {
    console.log('🔐 Auth check')
  }

  return { user, checkAuth }
})
