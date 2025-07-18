import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../../api-folder/apiClient'
import { AxiosError } from 'axios'

interface User {
  _id: string
  firstName: string
  lastName: string
  username: string
  email: string
  roles: object
  image: string
}

interface LoginCredentials {
  email: string
  password: string
}

interface RegisterCredentials {
  firstName: string
  lastName: string
  username: string
  phoneNumber: string
  email: string
  password: string
}

export const authStore = defineStore('auth-store', () => {
  const accessToken = ref<string | null>(localStorage.getItem('accessToken'))
  const refreshToken = ref<string | null>(localStorage.getItem('refreshToken'))
  const storedUser = localStorage.getItem('user')

  const user = ref<User | null>(storedUser ? JSON.parse(storedUser) : null)
  const isAuthenticated = computed<boolean>(() => !!accessToken.value)

  const userRoles = computed<object>(() => user.value?.roles || {})

  const hasAnyRole = computed(() => (roles: object): boolean => {
    if (!user.value) return false
    const availableRoles = Object.keys(userRoles.value)

    return Object.values(roles).some((roleName) => {
      return availableRoles.includes(roleName)
    })
  })

  const authErrorMessage = ref<string | null>(null)

  watch(accessToken, (newValue) => {
    if (newValue) {
      localStorage.setItem('accessToken', newValue)
    } else {
      localStorage.removeItem('accessToken')
    }
  })

  watch(refreshToken, (newValue) => {
    if (newValue) {
      localStorage.setItem('refreshToken', newValue)
    } else {
      localStorage.removeItem('refreshToken')
    }
  })

  watch(user, (newUser) => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('user')
    }
  })

  //  Set tokens
  const setTokens = (accessTok: string | null, refreshTok: string | null) => {
    accessToken.value = accessTok
    refreshToken.value = refreshTok
  }

  //  Clear tokens

  const clearTokens = () => {
    accessToken.value = null
    refreshToken.value = null
    user.value = null
  }

  // Vue router
  const router = useRouter()

  const handleRegisteration = async (credentials: RegisterCredentials) => {
    try {
      const response = await apiClient.post('/register', credentials)
      await response.data
      window.location.href = '/login'
      return
    } catch (error: any) {
      handleAuthError(error)
    }
  }

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const response = await apiClient.post('/login', credentials)
      const userData = await response.data
      const newAccessToken = userData.data.accessToken
      const newRefreshToken = userData.data.refreshToken
      user.value = userData.data.userInfo
      setTokens(newAccessToken, newRefreshToken)
      router.push('/')
      alert(`Welcome back ${user.value?.username}`)
    } catch (error: any) {
      handleAuthError(error)
    }
  }

  const sendRefreshToken = async () => {
    try {
      const response = await apiClient.post('/refresh')
      const userData = await response.data
      const newAccessToken = userData.data.accessToken
      const newRefreshToken = userData.data.refreshToken
      setTokens(newAccessToken, newRefreshToken || refreshToken.value)
      console.log('Access token refreshed successfully')
    } catch (error) {
      console.error('Failed to refresh access token:', error)
      handleLogout()
      throw error
    }
  }

  const handleLogout = () => {
    clearTokens()
    window.location.href = '/login'
  }

  const handleAuthError = (error: AxiosError) => {
    if (error.response) {
      console.error('API Error Response:', error.response.status, error.response.data)
      if (error.response.status === 401 || error.response.status === 403) {
        console.error(
          'Authentication Error:',
          (error.response.data as any)?.message || error.message,
        )
        authErrorMessage.value = (error.response.data as any)?.message
        alert(authErrorMessage.value)
        return
      } else if (error.response.status === 409) {
        console.warn(
          'Registration/Login Error (409 Conflict):',
          (error.response.data as any)?.message || error.message,
        )
        authErrorMessage.value = (error.response.data as any)?.message
        alert(authErrorMessage.value)
      }
      if (error.response.status === 404) {
        authErrorMessage.value = `This user does not exist: ${error.message}`
        alert(authErrorMessage.value)
      } else {
        console.error(
          'Unhandled API Error (Status ' + error.response.status + '):',
          error.response.data || error.message,
        )
      }
    } else if (error.request) {
      console.error('Network Error (No response received):', error.message, error)
      authErrorMessage.value = error.message
      alert(authErrorMessage.value)
    } else {
      console.error('Request Setup Error:', error.message, error)
      authErrorMessage.value = error.message
      alert(authErrorMessage.value)
    }
  }

  return {
    isAuthenticated,
    accessToken,
    refreshToken,
    user,
    userRoles,
    hasAnyRole,
    handleLogin,
    authErrorMessage,
    sendRefreshToken,
    handleLogout,
    handleRegisteration,
  }
})
