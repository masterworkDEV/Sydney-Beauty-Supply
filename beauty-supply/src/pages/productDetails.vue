<template>
  <div class="min-h-screen w-full mt-20">
    <nav class="flex items-center gap-5 ml-12">
      <small class="flex items-center gap-5">
        <RouterLink to="/">Home</RouterLink>
        <FontAwesomeIcon :icon="faArrowRight" />
      </small>
      <small>Shop</small>
    </nav>

    <div class="mx-12 mt-10 flex gap-5">
      <div class="w-full static">
        <img :src="product?.image" :alt="product?.title" />
      </div>

      <div class="w-full">
        <h2 class="text-2xl text-wrap">{{ product?.title }}</h2>
        <h4 class="my-2 text-xl">
          <b> ${{ product?.price }}</b>
        </h4>
        <p class="my-4 text-gray-600 uppercase">
          color
          <span class="text-sm">name</span>
        </p>

        <div></div>
        <div class="mt-6 mb-2 text-gray-600 uppercase flex justify-between">
          <span> Size </span>
          <small class="underline capitalize">Size guide</small>
        </div>
        <div class="flex items-center gap-1">
          <button
            v-for="size in sizes"
            :key="size"
            class="w-14 p-2 border border-gray-300 bg-[#f1f1f1] shadow"
          >
            {{ size }}
          </button>
        </div>
        <div class="mt-6 mb-2 text-gray-600 uppercase">Quantity</div>

        <div class="flex items-center text-center">
          <button class="w-10 h-10 border border-gray-200">
            <FontAwesomeIcon :icon="faMinus" />
          </button>
          <input type="text" class="w-10 h-10 text-center" value="1" />
          <button class="w-10 h-10 border border-gray-200 bg-[#f1f1f1]">
            <FontAwesomeIcon :icon="faPlus" />
          </button>
        </div>
        <button class="w-full border-2 border-gray-400 p-3 my-5">SELECT SIZE</button>

        <div class="relative">
          <div
            v-if="!isExpanded"
            class="absolute bg-[#fefbfb3d] right-0 left-0 top-10 bottom-0"
          ></div>
          <p @click="handleIsExpanded" class="text-sm leading-7 transition-all">
            {{
              !isExpanded
                ? product?.description?.length < 250
                  ? product.description
                  : product?.description?.slice(0, 250).concat('...Read more')
                : product?.description
            }}
          </p>

          <div class="text-center">
            <button class="text-sm">
              {{ !isExpanded ? '' : 'Read less' }}
            </button>
          </div>
        </div>

        <h2 class="text-2xl text-wrap">Complete This Look</h2>
        <div class="flex gap-5 w-full mt-5 overflow-auto">
          <ProductCard :products="store.products.slice(2, 4)" />
        </div>
      </div>
    </div>

    <div class="mx-12 mt-10">
      <h2 class="text-2xl text-wrap">Customers Review</h2>
      <div class="flex items-center gap-2">
        <span class="text-2xl">4.5</span>
        <span class="flex items-center gap-1">
          <FontAwesomeIcon :icon="faStar" />
          <FontAwesomeIcon :icon="faStar" />
          <FontAwesomeIcon :icon="faStar" />
          <FontAwesomeIcon :icon="faStar" />
          <FontAwesomeIcon :icon="faStarHalf" />
        </span>
      </div>
      <small class="">Based on 156 reveiws</small>
      <!-- lines -->

      <ul class="my-5 flex flex-col gap-3">
        <li class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" />
          <div class="bg-gray-200 h-2 w-[40%]"></div>
          <span class="text-sm">140</span>
        </li>
        <li class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" />
          <div class="bg-gray-200 h-2 w-[40%]"></div>
          <span class="text-sm">7</span>
        </li>
        <li class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" />
          <div class="bg-gray-200 h-2 w-[40%]"></div>
          <span class="text-sm">12</span>
        </li>
        <li class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" />
          <div class="bg-gray-200 h-2 w-[40%]"></div>
          <span class="text-sm"> 10</span>
        </li>
        <li class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" />
          <div class="bg-gray-200 h-2 w-[40%]"></div>
          <span class="text-sm">6</span>
        </li>
      </ul>
      <!--  Reviews and questions-->
      <div>
        <div class="flex items-center gap-10">
          <span class="border-b-5 border-gray-200">Reviews {156} </span>
          <span> Questions</span>
        </div>

        <!-- buttons -->
        <div class="mt-5 mb-10 flex justify-between items-center">
          <button
            class="flex items-center justify-center gap-3 p-3 border border-gray-400 bg-gray-200"
          >
            <FontAwesomeIcon :icon="faFilter" size="sm" />
            <span class="text-sm">Fliters</span>
          </button>
          <button
            class="flex items-center justify-center gap-3 p-3 border border-gray-400 bg-gray-200"
          >
            <FontAwesomeIcon :icon="faPen" size="sm" />
            <span class="text-sm">Write a review</span>
          </button>
        </div>
        <!-- reviews -->
        <div class="gap-3 border-b border-gray-300 pb-1">
          <span class="text-sm">166 reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { dataStore } from '@/stores/dataStore'
import { useRoute, RouterLink } from 'vue-router'
import axios, { AxiosResponse } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowRight,
  faMinus,
  faPlus,
  faStar,
  faStarHalf,
  faFilter,
  faPen,
} from '@fortawesome/free-solid-svg-icons'

//  use product card
import ProductCard from '@/components/ProductCard.vue'

// store
const store = dataStore()

// Define the Product interface
interface Product {
  id: number
  title: string
  price: number
  description?: string
  image?: string
}

// Fetch product by id
const API_URL = import.meta.env.VITE_API_URL
const route = useRoute()
const product = ref<Product | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)

const fetchProductById = async () => {
  isLoading.value = true
  error.value = null
  try {
    const response: AxiosResponse<Product> = await axios.get(
      `${API_URL}/products/${route.params.productID}`
    )
    product.value = response.data
  } catch (err: any) {
    error.value = err.message || 'An unexpected error occurred'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => fetchProductById())

// Watch route in case of  any changes
watch(route, () => {
  fetchProductById()
})

// Sizes
const sizes = ref<string[]>(['xs', 's', 'm', 'l', 'xl', 'xxl'])

const isExpanded = ref<boolean>(false)
const handleIsExpanded = () => {
  isExpanded.value = !isExpanded.value
  console.log(isExpanded.value)
}
</script>

<style>
</style>