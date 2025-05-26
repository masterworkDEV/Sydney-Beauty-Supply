import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

// Define the Product interface
interface Products {
  id: number
  title: string
  price: number
  description?: string
  image?: string
}

// API URL here
const API_URL = import.meta.env.VITE_API_URL

export const dataStore = defineStore('data', () => {
  const products = ref<Products | null>(null)
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const errorMessage = ref<string | null>(null)

  const fetchProducts = async () => {
    isLoading.value = true
    error.value = null
    errorMessage.value = null
    try {
      const response: Products[] = await axios.get(`${API_URL}/products`)
      products.value = response.data
    } catch (err: any) {
      console.error('Error fetching products:', err)
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
