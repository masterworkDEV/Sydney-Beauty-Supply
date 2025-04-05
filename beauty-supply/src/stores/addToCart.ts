import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddToCart = defineStore('add-to-cart', () => {
  const cart = ref([])

  const addToCart = (product = Object) => {
    // check if  product is already in cart.
    const checkExistingItem = cart.value.find((item) => item.id === product.id)
    checkExistingItem ? checkExistingItem.quantity++ : cart.value.push({ ...product, quantity: 1 })
  }

  return {
    cart,
    addToCart,
  }
})
