<template>
  <!-- trendingProducts -->
  <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-16">
    <button
      class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10 max-sm:p-1"
    >
      <span class="text-[1rem] max-sm:text-sm"> Trending Now </span>
      <small class="text-blue-600 text-[.7rem]"> View all </small>
    </button>

    <div v-if="useStore.isLoading">
      <p>loading please wait...</p>
    </div>
    <div v-else-if="useStore.error">
      <p class="text-center text-red-500 my-5">{{ useStore.errorMessage }}</p>
    </div>
    <div v-if="!trendingProducts">
      <p>Oops no product! was found, kindly reload or check your network</p>
    </div>
    <div class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-3">
      <ProductCard :product-data="trendingProducts" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { dataStore } from '../stores/dataStore'

// product card
import ProductCard from './ProductCard.vue'

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

const useStore = dataStore()
const trendingProducts: Product[] = useStore.products
</script>

