import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, watch, type SVGAttributes } from 'vue'

const API_URL: string = import.meta.env.VITE_API_URL as string

interface Thumbnail {
  imageUrl: string
  imageId: string
}

interface Images {
  images: Thumbnail
}

interface Product {
  _id: string
  name: string
  price: number
  currency: string
  category: string
  isActive: boolean
  season: string[]
  dateAdded: Date
  reviews: number | null
  description?: string[]
  discount: number
  gender: string
  countInStock: number | null
  sizes: string[]
  materials: string
  style: string
  collection: string
  designer: string
  rating: number | null
  numReviews: number | null
  subCategory: string
  brand: string
  thumbnail?: Thumbnail | any
  images: Images[]
}
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
