import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../../api-folder/apiClient'
import { AxiosError } from 'axios'

interface User {
  id: string
  username: string
  roles: []
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
      const response = await apiClient.post('', credentials)
      const userData = await response.data
      console.log(`registeration is successfully ${userData}`)
      router.push('/')
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        console.log('This user already exist', error.message)
      } else {
        console.error(`Something went wrong ${error}`)
      }
    }
  }

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const response = await apiClient.post('/login', credentials)
      const userData = await response.data
      console.log(`Logged in successfully `, userData)
      const newAccessToken = userData.data.accessToken
      const newRefreshToken = userData.data.refreshToken
      user.value = userData.data.userInfo
      setTokens(newAccessToken, newRefreshToken)
      router.push('/')
      alert(user.value?.username)
    } catch (error: any) {
      handleAuthError(error)
    }
  }

  const sendRefreshToken = async () => {
    try {
      const response = await apiClient.post<{ accessToken: string; refreshToken?: string }>('')
      const userData = response.data
      setTokens(userData.accessToken, userData.refreshToken || refreshToken.value)
      console.log('Access token refreshed successfully')
    } catch (error) {
      console.error('Failed to refresh access token:', error)
      handleLogout()
      throw error
    }
  }

  const handleLogout = () => {
    clearTokens()
    router.push('/login')
  }

  const handleAuthError = (error: AxiosError) => {
    if (error.response) {
      console.error('API Error Response:', error.response.status, error.response.data)
      if (error.response.status === 401 || error.response.status === 403) {
        console.error(
          'Authentication Error:',
          (error.response.data as any)?.message || error.message,
        )
        handleLogout()
      } else if (error.response.status === 409) {
        console.warn(
          'Registration/Login Error (409 Conflict):',
          (error.response.data as any)?.message || error.message,
        )
      }
      if (error.response.status === 404) {
        console.log('This user does not have an account with us')
      } else {
        console.error(
          'Unhandled API Error (Status ' + error.response.status + '):',
          error.response.data || error.message,
        )
      }
    } else if (error.request) {
      console.error('Network Error (No response received):', error.message, error)
    } else {
      console.error('Request Setup Error:', error.message, error)
    }
  }

  return {
    isAuthenticated,
    accessToken,
    refreshToken,
    user,
    handleLogin,
    sendRefreshToken,
    handleLogout,
    handleRegisteration,
  }
})
