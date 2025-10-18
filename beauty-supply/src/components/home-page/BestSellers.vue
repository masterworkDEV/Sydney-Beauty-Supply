<template>
  <section class="my-20 mx-24 max-xl:mx-20 max-md:mx-14 max-sm:mx-0 max-sm:my-14">
    <div
      class="text-center transition-all duration-1000 ease-in-out"
      :class="{
        'is-visible': intersectionObserver.isVisible,
        'not-visible': !intersectionObserver.isVisible,
      }"
      ref="sectionElementRef"
    >
      <h2 class="text-5xl mb-5 max-sm:mb-3 max-lg:text-4xl max-sm:text-3xl font-semibold">
        Best Sellers
      </h2>
      <p class="mb-5 tracking-normal leading-relaxed max-sm:text-sm capitalize max-sm:mx-5">
        Discover what our customers are saying about us - from designs to unmatched comfort and
        quality. their words reflect the love for our collections.
      </p>
    </div>

    <div
      v-if="useDataStore.isLoading"
      class="w-full mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-3 max-sm:mx-5"
    >
      <LoadingCard v-for="loader in new Array(8)" :key="loader" />
    </div>
    <div v-else-if="useDataStore.error">
      <!-- <p class="text-center my-5 text-sm">{{ useStore.errorMessage }}</p> -->
    </div>

    <div
      v-else
      class="mt-10 mb-20 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-5 max-sm:mx-5 transition-all duration-1500 ease-in-out"
      :class="{
        'is-visible': intersectionObserver.isVisible,
        'not-visible': !intersectionObserver.isVisible,
      }"
      ref="sectionElementRef"
    >
      <div v-for="product in bestSellers" :key="product._id">
        <ProductCard
          :key="product._id"
          :_id="product._id"
          :name="product.name"
          :price="product.price"
          :currency="product.currency"
          :thumbnail="product.thumbnail"
          :discount="product.discount"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useInterSectionObserver } from '@/stores/intersectionObserver'
import { dataStore } from '@/stores/dataStore'
import ProductCard from '@/components/ProductCard.vue'

const useDataStore = dataStore()

const bestSellers = computed(() => useDataStore.products?.slice(0, 4) || [])

// Intersection Observer
const intersectionObserver = useInterSectionObserver()

const sectionElementRef = ref<Element | null>(null)

intersectionObserver.element = sectionElementRef.value
</script>

<style  scoped>
.not-visible {
  /* Initial (Hidden) State */
  opacity: 0;
  transform: translateY(100px);
}

.is-visible {
  /* Final (Visible) State */
  opacity: 1;
  transform: translateY(0px);
}
/* Keep other styles */
</style>