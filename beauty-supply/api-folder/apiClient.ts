import axios from 'axios'
import { authStore } from '@/stores/authStore'

const apiClient = axios.create({
  baseURL: 'http://localhost:3500',
  withCredentials: true,
})

apiClient.interceptors.request.use(
  (config) => {
    const store = authStore()
    const accessToken = store.accessToken

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error: unknown) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const store = authStore()

    if (
      store.isAuthenticated &&
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        // Attempt to refresh the access token
        const newAccessToken = await store.sendRefreshToken()
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        // Re-send the original request
        return apiClient(originalRequest)
      } catch (refreshError) {
        console.error('Token refresh failed. Redirecting to login.', refreshError)
        store.handleLogout() // Redirects to login
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default apiClient
