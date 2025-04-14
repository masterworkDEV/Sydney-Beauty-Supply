<template>
  <div>
    {{ useCart.cart.length }}
  </div>
</template>

<script setup lang='ts'>
import { useAddToCart } from '@/stores/addToCart'
const useCart = useAddToCart()
console.log(useCart.cart.length)
</script>