import axios from 'axios'
import { authStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

const apiClient = axios.create({
  baseURL: 'http://localhost:3500',
  withCredentials: true,
})

apiClient.interceptors.request.use(
  (config) => {
    const store = authStore()


    if (store.accessToken) {
      config.headers.Authorization = `Bearer ${store.accessToken}`
      console.log(config.headers.Authorization)
    }
    return config
  },
  (error) => {
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
      originalRequest._retry = true // Mark the request as retried to prevent infinite loops

      try {
        // Attempt to refresh the access token
        const newAccessToken = await store.sendRefreshToken()
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        console.log(newAccessToken) // Uncomment for debugging if needed

        // Re-send the original request with the new token
        return apiClient(originalRequest)
      } catch (refreshError) {
        console.error('Token refresh failed. Redirecting to login.', refreshError)
        store.handleLogout()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

export default apiClient
