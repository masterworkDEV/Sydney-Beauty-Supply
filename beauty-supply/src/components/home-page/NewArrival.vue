<template>
  <!-- new arrival -->
  <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-14">
    <button
      class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10 max-sm:p-1"
    >
      <span class="text-[1rem] max-sm:text-sm"> New Arrival </span>
      <small class="text-blue-600 text-[.7rem]">View all </small>
    </button>

    <div
      v-if="useStore.isLoading"
      class="w-full mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-3"
    >
      <LoadingCard v-for="loader in new Array(10)" :key="loader" />
    </div>
    <div v-else-if="useStore.error">
      <p class="text-center my-5 text-sm">{{ useStore.errorMessage }}</p>
    </div>

    <div v-else class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-3">
      <ProductCard
        v-for="product in newArrival"
        :key="product._id"
        :_id="product._id"
        :description="product.description"
        :discount="product.discount"
        :image="product.image"
        :price="product.price"
        :currency="product.currency"
        :name="product.name"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { dataStore } from '../../stores/dataStore'

//  components
import ProductCard from '../ProductCard.vue'
import LoadingCard from '../LoadingCard.vue'

// interface

const useStore = dataStore()
const newArrival = computed(() => useStore.products || [])
</script>

