import Cart from '@/components/Cart.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Cart {
  id: number
  quantity: number
  message: string
  notification: string
}
export const useAddToCart = defineStore('add-to-cart', () => {
  const cart = ref([])
  const addToCart = (product: any) => {
    // check if  product is already in cart.
    const checkExistingItem = cart.value.find((item: any) => item.id === product.id)
    checkExistingItem ? checkExistingItem.quantity++ : cart.value.push({ ...product, quantity: 1 })
    console.log(product)
  }

  return {
    cart,
    addToCart,
  }
})
