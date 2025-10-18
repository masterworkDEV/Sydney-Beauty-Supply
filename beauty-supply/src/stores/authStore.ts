import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import apiClient from '../../api-folder/apiClient'
import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'

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
  username: string
  email: string
  password: string
}

export const authStore = defineStore('auth-store', () => {
  const toast = useToast()
  const accessToken = ref<string | null>(localStorage.getItem('accessToken'))

  const refreshToken = ref<string | null>(localStorage.getItem('refreshToken'))
  const storedUser = localStorage.getItem('user')
  // Vue router
  const router = useRouter()

  const user = ref<User | null>(storedUser ? JSON.parse(storedUser) : null)

  // --- NEW: A helper function to check if a JWT is expired ---
  const isTokenExpired = (token: string): boolean => {
    try {
      const decodedToken = jwtDecode(token)
      if (!decodedToken.exp) {
        return true // No expiration date, consider it expired for safety
      }
      const currentTime = Date.now() / 1000 // Convert to seconds
      return decodedToken.exp < currentTime
    } catch (error) {
      // If decoding fails, the token is invalid, so consider it expired
      console.error('Error decoding token:', error)
      return true
    }
  }

  // --- UPDATED: isAuthenticated now uses isTokenExpired ---
  const isAuthenticated = computed<boolean>(() => {
    const token = accessToken.value
    if (!token) {
      return false // No token, not authenticated
    }
    return !isTokenExpired(token)
  })

  const userRoles = computed<object>(() => user.value?.roles || {})

  const hasAnyRole = computed(() => (roles: object): boolean => {
    if (!user.value) return false
    const availableRoles = Object.keys(userRoles.value)

    return Object.values(roles).some((roleName) => {
      return availableRoles.includes(roleName)
    })
  })

  const authErrorMessage = ref<string | null>('')

  watch(accessToken, (newValue) => {
    if (newValue) {
      localStorage.setItem('accessToken', newValue)
    } else {
      localStorage.removeItem('accessToken')
    }
  })

  // Watch accessToken, refreshToken and isAuthenticated.

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

  const handleRegisteration = async (credentials: RegisterCredentials) => {
    try {
      const response = await apiClient.post('/register', credentials)
      await response.data
      window.location.href = '/login'
      toast.success(`Account created successfully `)
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
      toast.success(`Welcome back ${user.value?.username}`)
      router.push('/')
    } catch (error: any) {
      handleAuthError(error)
    }
  }

  const sendRefreshToken = async () => {
    if (!accessToken.value) {
      throw new Error('No refresh token available.')
    }
    try {
      const response = await apiClient.get('/refresh')
      const userData = response.data
      const newAccessToken = userData.data.accessToken
      return newAccessToken
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

        // ✅ FIX 2: Pass the string value (.value)
        toast.error(authErrorMessage.value)

        localStorage.removeItem('accessToken') //clear access token

        return
      } else if (error.response.status === 409) {
        // ...
        authErrorMessage.value = (error.response.data as any)?.message
        // ✅ FIX 2: Pass the string value (.value)
        toast.error(authErrorMessage.value)
      }
      if (error.response.status === 404) {
        authErrorMessage.value = `This user does not exist: ${error.message}`
        // ✅ FIX 2: Pass the string value (.value)
        toast.error(authErrorMessage.value)
      } else {
        // ...
      }
    } else if (error.request) {
      // ...
      authErrorMessage.value = error.message
      // ✅ FIX 2: Pass the string value (.value)
      toast.error(authErrorMessage.value)
    } else {
      // ...
      authErrorMessage.value = error.message
      // ✅ FIX 2: Pass the string value (.value)
      toast.error(authErrorMessage.value)
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
