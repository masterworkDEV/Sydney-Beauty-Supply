import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, watch } from 'vue'

interface Product {
  _id: string | number
  name: string
  price: number
  currency: string

  description?: string[] | undefined
  discount: number
  image?: string
}

const API_URL: string = import.meta.env.VITE_API_URL as string

export const dataStore = defineStore('data', () => {
  const products = ref<Product[] | null>(null)
  const isLoading = ref<boolean>(false)
  const error = ref<any | null>(null)
  const errorMessage = ref<string | null>(null)

  const fetchProducts = async () => {
    isLoading.value = true
    error.value = null
    errorMessage.value = null
    try {
      // const response = await axios.get<Product[]>(`${API_URL}/products`)
      const response = await axios.get('http://localhost:3500/products')
      products.value = response.data.data
      console.log(response.data)
    } catch (err: any) {
      console.error('Error fetching products:', err)
      error.value = err
      errorMessage.value = `Sorry, there was an error fetching products at this time.
        Kindly reload or check your network:
        ${err.message || 'Unknown error'}! `
    } finally {
      isLoading.value = false
    }
  }
  ;(async () => {
    await fetchProducts()
  })()

  return {
    products,
    isLoading,
    error,
    errorMessage,
    fetchProducts,
  }
})
