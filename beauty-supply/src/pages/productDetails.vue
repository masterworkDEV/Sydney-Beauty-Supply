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
        <ul class="flex gap-1">
          <li v-for="icon in Array(4)" :key="icon">
            <FontAwesomeIcon :icon="faStar" />
          </li>
          <span>
            <small class="text-gray-700 underline text-xs">(156 reviews)</small>
          </span>
        </ul>
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
      <h2 class="text-xl text-wrap">Customers Review</h2>
      <div class="flex items-center gap-2">
        <span class="text-2xl">4.5</span>

        <ul class="flex items-center gap-1">
          <li v-for="icon in Array(4)" :key="icon">
            <FontAwesomeIcon :icon="faStar" />
          </li>
          <li>
            <FontAwesomeIcon :icon="faStarHalf" />
          </li>
        </ul>
      </div>
      <small class="">Based on 156 reveiws</small>
      <!-- lines -->

      <ul class="my-5 flex flex-col gap-3">
        <li v-for="(icon, index) in Array(5)" :key="index" class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" />
          <div class="bg-gray-200 h-2 w-[40%]"></div>
          <span class="text-xs">140</span>
        </li>
      </ul>
      <!--  Reviews and questions-->
      <div>
        <div class="flex items-center gap-10">
          <span class="border-b-5 border-gray-200 text-[1rem]">Reviews {156} </span>
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

        <div class="text-xs"><b>156 reviews</b></div>

        <!-- comments -->
        <div class="flex justify-between border-t border-gray-300">
          <div class="flex items-start gap-16 w-[80%] mt-5">
            <div>
              <small><b>Godwin Kelvin</b></small>
              <small class="flex items-center gap-2 mt-2">
                <p>Verified Buyer</p>
                <FontAwesomeIcon :icon="faCheckCircle" />
              </small>
              <div class="card flex gap-3 mt-2">
                <img
                  :src="product?.image"
                  :alt="product?.title"
                  class="w-16 h-17 border border-gray-300 object-cover"
                />
                <div class="flex flex-col justify-center items-start">
                  <small class="my-2">
                    <b> Reviewing</b>
                  </small>
                  <small class="text-xs">{{ product?.title }}</small>
                </div>
              </div>
            </div>
            <div>
              <ul class="flex gap-1">
                <li v-for="icon in Array(5)" :key="icon">
                  <FontAwesomeIcon :icon="faStar" />
                </li>
              </ul>
              <p class="my-2 text-sm">Nice Products!</p>
              <p class="text-xs">Nice and quality products are sold here. I'd recommend!</p>
            </div>
          </div>
          <div class="text-end w-full mt-5">
            <small class="text-xs">{{ todayString }} </small>
            <div class="flex justify-end items-center gap-3 mt-20 border-b pb-3">
              <small class="text-xs">Was this helpful? </small>
              <ol class="flex gap-4">
                <li class="flex items-center gap-1">
                  <FontAwesomeIcon :icon="faThumbsUp" size="xs" />
                  <small>0</small>
                </li>
                <li class="flex items-center gap-1">
                  <FontAwesomeIcon :icon="faThumbsDown" size="xs" />
                  <small>0</small>
                </li>
              </ol>
            </div>
            <!-- Website Comments -->
            <div class="my-5 flex text-start items-start gap-3">
              <img
                :src="product?.image"
                :alt="product?.title"
                class="h-10 w-10 rounded-full border border-gray-300"
              />
              <div class="">
                <div class="flex justify-between">
                  <h5 class="text-xs my-2"><b> Cosmetica </b></h5>
                  <small class="text-xs">{{ todayString }} </small>
                </div>
                <p class="text-[.7rem]">
                  We're building Nola, an app designed to revolutionize the way you learn. Get ready
                  for interactive quizzes, personalized study plans, and a suite of tools to help
                  you master any subject. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- comments -->
        <div class="flex justify-between border-t border-gray-300">
          <div class="flex items-start gap-16 w-[80%] mt-5">
            <div>
              <small><b>Ibukun Benjamin</b></small>
              <small class="flex items-center gap-2 mt-2">
                <p>Verified Buyer</p>
                <FontAwesomeIcon :icon="faCheckCircle" />
              </small>
              <div class="card flex gap-3 mt-2">
                <img
                  :src="product?.image"
                  :alt="product?.title"
                  class="w-16 h-17 border border-gray-300 object-cover"
                />
                <div class="flex flex-col justify-center items-start">
                  <small class="my-2">
                    <b> Reviewing</b>
                  </small>
                  <small class="text-xs">{{ product?.title }}</small>
                </div>
              </div>
            </div>
            <div>
              <ul class="flex gap-1">
                <li v-for="icon in Array(3)" :key="icon">
                  <FontAwesomeIcon :icon="faStar" />
                </li>
                <li>
                  <FontAwesomeIcon :icon="faStarHalf" />
                </li>
              </ul>
              <p class="my-2 text-sm">Love!</p>
              <p class="text-xs">So nice and i love this color. Cosmetica never disappoints!</p>
            </div>
          </div>
          <div class="text-end w-full mt-5">
            <small class="text-xs">{{ todayString }} </small>
            <div class="flex justify-end items-center gap-3 mt-20 border-b pb-3">
              <small class="text-xs">Was this helpful? </small>
              <ol class="flex gap-4">
                <li class="flex items-center gap-1">
                  <FontAwesomeIcon :icon="faThumbsUp" size="xs" />
                  <small>3</small>
                </li>
                <li class="flex items-center gap-1">
                  <FontAwesomeIcon :icon="faThumbsDown" size="xs" />
                  <small>0</small>
                </li>
              </ol>
            </div>
          </div>
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
  faCheckCircle,
  faThumbsUp,
  faThumbsDown,
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

// get date

const nowTimestamp = Date.now()

const today = new Date(nowTimestamp)
const todayString = today.toLocaleDateString() // e.g., "5/30/2025" (format depends on locale)
</script>

<style>
</style>