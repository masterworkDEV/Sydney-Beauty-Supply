import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

// API URL here
const API_URL = import.meta.env.VITE_API_URL

export const dataStore = defineStore('data', () => {
  const products = ref([])
  const isLoading = ref<'true' | false>(false)
  const error = ref<'true' | false>(false)
  const errorMessage = ref<string | null>(null)

  const fetchProducts = async () => {
    isLoading.value = 'true'
    error.value = false
    errorMessage.value = null
    try {
      const response = await axios.get(`${API_URL}/products`)
      products.value = response.data
    } catch (err: any) {
      console.error('Error fetching products:', err)
      error.value = 'true'
      errorMessage.value = `Sorry, there was an error fetching products at this time
        kindly reload or check your network:
        ${err.message}! `
    } finally {
      isLoading.value = false
    }
  }
  ;(async () => await fetchProducts())()

  return {
    products,
    isLoading,
    error,
    errorMessage,
  }
})
