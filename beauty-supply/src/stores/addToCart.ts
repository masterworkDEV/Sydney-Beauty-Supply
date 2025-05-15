import Cart from '@/components/Cart.vue'
import { defineStore } from 'pinia'

interface Cart {
  id: number
  quantity: number
  message: string
  notification: string
}
export const useAddToCart = defineStore('add-to-cart', () => {
  let cart: Cart[] = []
  const addToCart = (product: Cart) => {
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
