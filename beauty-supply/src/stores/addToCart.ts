import Cart from '@/components/Cart.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Cart {
  id: number
  quantity: number
}
export const useAddToCart = defineStore('add-to-cart', () => {
  let cart: Cart[] = []
  const addToCart = (product) => {
    // check if  product is already in cart.
    const checkExistingItem = cart.find((item) => item.id === product.id)
    checkExistingItem ? checkExistingItem.quantity++ : cart.push({ ...product, quantity: 1 })
    console.log(product)
  }

  return {
    cart,
    addToCart,
  }
})
