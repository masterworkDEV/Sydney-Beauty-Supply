<template>
  <!-- showcase -->
  <section class="max-sm:py-20 min-h-96">
    <div class="mt-20 mx-12 max-xl:mx-7 max-sm:mx-5">
      <div class="flex justify-center gap-10 max-h-96 max-sm:flex-col max-sm:gap-10">
        <div class="w-full h-full">
          <img :src="imageBundle" alt="Daily skin care bundle" class="w-full h-96" />
        </div>

        <div v-if="useStore.isLoading" class="grid grid-cols-2 place-items-center gap-5 w-full">
          <LoadingCard v-for="loader in new Array(2)" :key="loader" />
        </div>
        <div v-else-if="useStore.error" class="grid grid-cols-2 place-items-center w-full">
          <LoadingCard v-for="loader in new Array(2)" :key="loader" />
        </div>

        <div v-else class="grid grid-cols-2 place-items-center gap-5 w-[90%] max-sm:w-full h-96">
          <img
            class="h-24 w-full object-cover"
            v-for="product in productShowCase.slice(10, 14)"
            :key="product.id"
            :src="product.image"
            :alt="product.title"
          />
        </div>
      </div>
    </div>
    <div class="mt-20 mx-12 max-xl:mx-7 max-sm:hidden">
      <div class="flex justify-between max-sm:flex-col-reverse gap-10 max-h-96">
        <div class="grid grid-cols-2 w-full" v-if="useStore.isLoading">
          <LoadingCard v-for="loader in new Array(2)" :key="loader" />
        </div>
        <div v-else-if="useStore.error" class="grid grid-cols-2 place-items-center w-full">
          <LoadingCard v-for="loader in new Array(2)" :key="loader" />
        </div>
        <div class="grid grid-cols-2 gap-5 place-items-center w-[90%] h-96" v-else>
          <img
            v-for="product in productShowCase.slice(5, 9)"
            :key="product.id"
            :src="product.image"
            :alt="product.title"
            class="h-24 w-full object-cover"
          />
        </div>
        <div class="w-full h-full flex justify-end">
          <img :src="imageBundle" alt="Daily skin care bundle" class="w-full h-96" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { dataStore } from '@/stores/dataStore'
import LoadingCard from './LoadingCard.vue'

const useStore = dataStore()

interface Products {
  id: number
  title: string
  image: string
}
const productShowCase: Products[] = computed(() => useStore.products)
// console.log(productShowCase)

// static image
import imageBundle from '../assets/images/bundle.jpg'
import { computed } from 'vue'
</script>
