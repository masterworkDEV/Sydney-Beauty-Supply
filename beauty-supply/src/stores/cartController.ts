import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Product {
  _id: string | number
  name: string
  price: number
  currency: string
  description?: string[] | undefined
  discount: number
  image?: string
}

interface CartItem extends Product {
  quantity: number
}

export const useCart = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])

  const addToCart = (productToAdd: Product) => {
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
