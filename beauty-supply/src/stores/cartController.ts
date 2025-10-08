import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Thumbnail {
  imageUrl: string
  imageId: string
}

interface Images {
  images: Thumbnail[]
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
  images: Images
}
interface CartItem extends Product {
  quantity: number
}

export const useCart = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])

  const addToCart = (productToAdd: any) => {
    // 4. Find the existing item. 'find' returns the item or undefined.
    const existingItem = cartItems.value.find((item) => item._id === productToAdd._id)
    if (existingItem) {
      existingItem.quantity++
      alert(`Updated quantity for ${existingItem.name}. New quantity: ${existingItem.quantity}`)
    } else {
      const newItem: CartItem = { ...productToAdd, quantity: 1 }
      cartItems.value.push(newItem)
      alert(`Added ${newItem.name} to cart.`)
    }
    console.log('Current Cart:', cartItems.value)
  }

  const increaseCartQuantity = (productToIncrease: CartItem) => {
    return productToIncrease.quantity++
  }

  const decreaseCartQuantity = (productToIncrease: CartItem) => {
    return productToIncrease.quantity--
  }

  const deleteFromCart = (productToDelete: Product) => {
    return (cartItems.value = cartItems.value.filter((item) => item._id !== productToDelete._id))
  }

  // clear all items in cart
  const clearCart = () => {
    return (cartItems.value = [])
  }

  return {
    cartItems,
    addToCart,
    deleteFromCart,
    clearCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  }
})
