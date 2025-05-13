<template>
  <div>
    {{ useCart.cart.length }}
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import { useAddToCart } from '@/stores/addToCart'
const useCart = useAddToCart()
onMounted(() => {
  console.log(useCart.cart.length)
})
</script>