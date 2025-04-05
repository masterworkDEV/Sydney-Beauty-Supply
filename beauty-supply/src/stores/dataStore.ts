import { defineStore } from 'pinia'
import axios from 'axios' // Make sure you have axios installed (`npm install axios`)

interface Product {
  id: number
  title: string
  description: string
  price: number
  originalPrice: number
  discount: number
  currency: string
  image: string
  brand: string
  category: string
  stock: number
  rating: number
  ingredients: string[]
  benefits: string[]
}

interface State {
  products: Product[]
  isLoading: boolean
  error: boolean
  errorMessage: string | null
}

const API_URL = import.meta.env.VITE_API_URL

export const dataStore = defineStore('data', {
  state: (): State => ({
    products: [],
    isLoading: false,
    error: false,
    errorMessage: null,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true
      this.error = false
      this.errorMessage = null
      try {
        const response = await axios.get(`${API_URL}/products`)
        console.log('Fetched Products:', response.data)
        this.products = response.data
      } catch (err: any) {
        console.error('Error fetching products:', err)
        this.error = true
        this.errorMessage = `Sorry, there was an error fetching products at this time: ${err.message}!`
      } finally {
        this.isLoading = false
      }
    },
  },
  // getters: {}, // Add your getters here if needed
})
