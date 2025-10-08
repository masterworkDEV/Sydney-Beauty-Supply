<template>
  <main class="min-h-screen">
    <div class="max-sm:text-center animate__animated animate__fadeInLeft p-8 max-sm:p-4 relative">
      <img
        :src="image"
        alt=""
        class="absolute right-0 left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div class="absolute w-full h-full right-0 left-0 top-0 bottom-0 bg-[#00000081]"></div>

      <h1
        class="animate__animated animate__fadeIn animate__delay-2s text-5xl flex items-center justify-center text-center tracking-normal max-xl:text-4xl max-md:text-2xl text-white z-20"
      >
        All Products
      </h1>
      <ul class="mt-3 flex justify-center items-center text-center gap-1">
        <li class="text-sm z-20 text-white">
          <router-link to="/"> Home </router-link>
        </li>
        /
        <li class="text-sm z-20 text-white">
          <router-link to=""> Shop </router-link>
        </li>
        /
        <li class="text-sm z-20 text-white">
          <router-link to="/"> Details </router-link>
        </li>
      </ul>
    </div>
    <div
      class="mx-12 max-xl:mx-7 max-sm:mx-5 flex gap-5 max-sm:flex-col mt-10 border-t-2 max-sm:border-none border-[#ccc]"
    >
      <div class="filter-options w-[20%] border-r-2 border-[#ccc] max-sm:hidden">
        <h2 class="my-3">
          <b> Filter options </b>
        </h2>
        <h3 class="mb-3">
          <b> Category </b>
        </h3>
        <div v-for="category in categories" :key="category" class="flex gap-1">
          <input type="checkbox" :id="category" :value="category" v-model="selectedCategories" />
          <label :for="category" class="text-sm">{{ category }}</label>
        </div>
        <h3 class="mt-5 mb-3">
          <b> Color </b>
        </h3>
        <div class="grid grid-cols-2 gap-3 place-content-center">
          <div v-for="color in colors" :key="color" class="flex items-center gap-1">
            <input type="checkbox" :id="color" :value="color" v-model="selectedColors" />
            <div :class="`border bg-[${color}] w-7 h-7 rounded-full `"></div>
            <span class="text-sm">{{ color }}</span>
          </div>
        </div>

        <h3 class="mt-5 mb-3">
          <b> Size </b>
        </h3>
        <div class="grid grid-cols-3">
          <div v-for="size in sizes" :key="size" class="flex gap-2">
            <input type="checkbox" :id="size" :value="size" v-model="selectedSizes" />
            <label :for="size" class="text-sm">{{ size }}</label>
          </div>
        </div>

        <h3 class="mt-5 mb-3">
          <b> Track your order </b>
        </h3>
        <div class="w-[96%] h-24 border border-[#ccc]"></div>
      </div>

      <div class="products-display w-[80%] max-sm:w-full">
        <div class="flex justify-between pt-3">
          <h2>
            <b> Showing {{ store?.products?.length }} of result </b>
          </h2>
          <div>
            Sort By:
            <select class="border rounded">
              <option value=""></option>
              <option v-for="sort in sorts" :key="sort" :value="sort">{{ sort }}</option>
            </select>
          </div>
        </div>

        <div v-if="store.isLoading" class="w-full mt-5 grid grid-cols-3 max-sm:grid-cols-2 gap-3">
          <LoadingCard v-for="loader in new Array(8)" :key="loader" />
        </div>

        <div v-else-if="error" class="text-center mt-10">
          <p class="text-lg text-red-600">Oops! Something went wrong: {{ error }} 😢</p>
          <p class="text-md text-gray-500">Please try refreshing the page.</p>
        </div>

        <div v-else-if="store?.products?.length === 0" class="text-center mt-10">
          <p class="text-lg text-gray-600">No products found matching your criteria. 😔</p>
          <p class="text-md text-gray-500">Try adjusting your filters.</p>
        </div>

        <div v-else class="mt-10 grid grid-cols-3 max-sm:grid-cols-2 place-items-center gap-5">
          <ProductCard
            v-for="product in store.products"
            :key="product._id"
            :_id="product._id"
            :description="product.description"
            :discount="product.discount"
            :thumbnail="product.thumbnail"
            :price="product.price"
            :name="product.name"
            :currency="product.currency"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import { dataStore } from '@/stores/dataStore'
import { navState } from '@/stores/navState'
import { ref, onMounted, onUnmounted, watch } from 'vue' // Import watch

// static image
import image from '@/assets/images/store.jpg'

const updateNavState = navState()

onMounted(() => {
  updateNavState.navState = !updateNavState.navState
})

onUnmounted(() => {
  updateNavState.navState = true
})

const store = dataStore()

// Reactive variables for loading and error states
const isLoading = ref(true)
const error = ref<string | null>(null)

// Filter options data
const sorts = ref(['Newest', 'Regular', 'Old'])
const categories = ref(['Men', 'Hats', 'Footwares'])
const colors = ref(['brown', 'white', 'green', 'blue', 'black'])
const sizes = ref(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'])

// Reactive variables for selected filters
const selectedCategories = ref<string[]>([])
const selectedColors = ref<string[]>([])
const selectedSizes = ref<string[]>([])

const fetchFilteredProducts = async () => {
  isLoading.value = true
  error.value = null // Clear previous errors
  try {
    await store.fetchProducts()
  } catch (err: any) {
    error.value = err.message || 'Failed to fetch products.'
    console.error('Error fetching products:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchFilteredProducts()
})

// Watch for changes in filter selections and re-fetch products
watch(
  [selectedCategories, selectedColors, selectedSizes],
  () => {
    fetchFilteredProducts()
  },
  { deep: true }
) // Use deep: true for watching array changes
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  padding: 0.3rem;
  background: linear-gradient(315deg, orange, goldenrod);
}
</style>