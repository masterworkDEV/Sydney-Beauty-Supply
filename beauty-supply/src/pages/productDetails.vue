<template>
  <div
    v-if="isLoading"
    class="min-h-screen flex flex-col items-center text-center justify-center gap-2"
  >
    <svg viewBox="25 25 50 50" class="loader-svg">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
    <p class="text-[#333] font-semibold">Loading...</p>
  </div>

  <div v-else-if="error" class="min-h-screen flex items-center text-center justify-center flex-col">
    <p class="text-center">Something went wrong, cannot fetch product at this time: {{ error }}</p>
    <a href="/">Go back home</a>
  </div>

  <main class="min-h-screen w-full" v-else>
    <nav class="flex items-center gap-5 ml-12 max-xl:ml-7 max-sm:ml-5">
      <small class="flex items-center gap-2 pt-20 max-sm:pt-16">
        <RouterLink to="/">Home</RouterLink>
        <svg
          class="greater-than-svg"
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"
            ></path>
          </g>
        </svg>
      </small>
      <router-link class="pt-20 max-sm:pt-16 text-sm" to="/store">Store</router-link>
    </nav>

    <div
      class="mx-12 pt-7 flex gap-5 max-lg:grid max-lg:grid-cols-1 max-xl:mx-7 max-sm:mx-5 max-sm:flex-col max-sm:pt-32"
    >
      <div class="flex gap-5 w-full max-h-[525px] max-sm:h-96 max-sm:flex-col-reverse">
        <div class="w-[20%] h-30 max-sm:h-20 flex flex-col gap-5 max-sm:flex-row">
          <img
            v-if="product?.images"
            v-for="(image, index) in product.images"
            :key="index"
            :src="image.imageUrl"
            class="object-cover border-2 border-gray-300 w-full h-full max-sm:h-20 cursor-pointer"
            :class="{ 'opacity-75 border-black': isActiveThumbnail === index }"
            @click="thumbnailClick(index)"
          />
        </div>
        <div class="w-full h-full">
          <Transition mode="out-in">
            <img
              v-if="product?.images?.length"
              :src="product.images[isActiveThumbnail].imageUrl"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </Transition>
        </div>
      </div>

      <div class="w-full">
        <ul class="flex gap-1">
          <li v-for="i in 4" :key="i">
            <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
          </li>
          <li v-for="i in 1" :key="i + 4">
            <FontAwesomeIcon :icon="faStar" class="text-gray-300" />
          </li>
          <span>
            <small class="text-gray-700 underline text-xs mb-2">(156 reviews)</small>
          </span>
        </ul>
        <h1 class="text-3xl text-wrap max-sm:text-2xl font-semibold">{{ product?.name }}</h1>
        <h4 class="my-2 text-xl font-semibold">{{ product?.currency }}{{ product?.price }}</h4>
        <div class="my-4 text-gray-600 uppercase">
          color
          <span class="text-sm font-semibold text-black">Black</span>
        </div>

        <div></div>
        <div class="mt-6 mb-2 text-gray-600 uppercase flex justify-between">
          <span>
            Size
            <span v-if="selectedSize" class="text-sm font-semibold text-black">
              ({{ selectedSize }})
            </span></span
          >
          <small class="underline capitalize cursor-pointer">Size guide</small>
        </div>
        <div class="flex items-center gap-1">
          <button
            v-for="size in sizes"
            :key="size"
            class="w-14 p-2 border border-gray-300 bg-[#f1f1f1] shadow cursor-pointer transition-colors"
            :class="{ 'border-black bg-white ring-2 ring-black': selectedSize === size }"
            @click="selectSize(size)"
          >
            {{ size.toUpperCase() }}
          </button>
        </div>
        <div class="mt-6 mb-2 text-gray-600 uppercase">Quantity</div>

        <div class="flex items-center text-center gap-3">
          <button
            class="w-10 h-10 border border-gray-200 cursor-pointer hover:bg-gray-100 disabled:opacity-50"
            :disabled="quantity <= 1"
            @click="decreaseQuantity"
          >
            <FontAwesomeIcon :icon="faMinus" />
          </button>
          <input
            type="number"
            class="w-10 h-10 text-center border border-gray-300 appearance-none"
            min="1"
            :value="quantity"
            @change="updateQuantity($event)"
          />
          <button
            class="w-10 h-10 border border-gray-200 bg-[#f1f1f1] cursor-pointer hover:bg-gray-300"
            @click="increaseQuantity"
          >
            <FontAwesomeIcon :icon="faPlus" />
          </button>
        </div>
        <button
          class="w-full border-2 border-gray-400 p-3 my-5 transition-all cursor-pointer"
          :class="{
            'bg-gray-200 text-gray-600 cursor-not-allowed': !selectedSize,
            'hover:bg-[#101010] hover:text-white bg-black text-white': selectedSize,
          }"
          :disabled="!selectedSize"
          @click="
            cartStore.addToCart({ ...product, selectedSize: selectedSize, quantity: quantity })
          "
        >
          {{ selectedSize ? 'ADD TO CART' : 'SELECT SIZE' }}
        </button>

        <div class="relative">
          <div
            v-if="!isExpanded && product?.description && product.description.length > 250"
            class="absolute bg-gradient-to-t from-white to-transparent right-0 left-0 top-10 bottom-0 pointer-events-none"
          ></div>
          <p class="text-sm leading-7 transition-all">
            {{ product?.description }}
          </p>

          <div v-if="product?.description && product.description.length > 250" class="text-center">
            <button @click="handleIsExpanded" class="text-sm font-semibold underline text-gray-800">
              {{ !isExpanded ? 'Read more' : 'Read less' }}
            </button>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-2xl text-wrap">Complete This Look</h2>

          <div class="flex gap-5 w-full mt-5 overflow-auto pb-4" v-if="store.products">
            <div v-for="product in store.products.slice(0, 2)" :key="product._id">
              <ProductCard
                :key="product._id"
                :_id="product._id"
                :currency="product.currency"
                :description="product.description"
                :discount="product.discount"
                :thumbnail="product.thumbnail"
                :price="product.price"
                :name="product.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-12 mt-10 max-xl:mx-7 max-sm:mx-5">
      <h2 class="text-xl text-wrap">Customers Review</h2>
      <div class="flex items-center gap-2">
        <span class="text-2xl">4.5</span>

        <ul class="flex items-center gap-1">
          <li v-for="icon in Array(4)" :key="icon">
            <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
          </li>
          <li>
            <FontAwesomeIcon :icon="faStarHalf" class="text-yellow-500" />
          </li>
        </ul>
      </div>
      <small class="">Based on 156 reviews</small>
      <ul class="my-5 flex flex-col gap-3 max-sm:gap-2">
        <li v-for="(icon, index) in Array(5)" :key="index" class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
          <div class="bg-gray-200 h-2 w-[40%] max-sm:h-1.5 max-sm:w-full"></div>
          <span class="text-xs">140</span>
        </li>
      </ul>
      <div>
        <div class="flex items-center gap-10">
          <span class="border-b-5 max-sm:border-b-3 border-black font-semibold text-[1rem] pb-1"
            >Reviews {156}
          </span>
          <span class="text-gray-500"> Questions</span>
        </div>

        <div class="mt-5 mb-10 flex justify-between items-center">
          <button
            class="flex items-center justify-center gap-3 p-3 max-sm:p-2.5 border border-gray-400 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <FontAwesomeIcon :icon="faFilter" size="sm" />
            <span class="text-sm">Fliters</span>
          </button>
          <button
            class="flex items-center justify-center gap-3 p-3 max-sm:p-2.5 border border-gray-400 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <FontAwesomeIcon :icon="faPen" size="sm" />
            <span class="text-sm">Write a review</span>
          </button>
        </div>

        <div class="text-xs font-semibold">150 reviews</div>

        <div class="flex justify-between border-t border-gray-300">
          <div
            class="flex items-start gap-16 w-[80%] mt-5 max-sm:gap-5 max-sm:flex-col max-sm:w-full"
          >
            <div>
              <small><b>Godwin Kelvin</b></small>
              <small class="flex items-center gap-2 mt-2">
                <p class="text-green-600">Verified Buyer</p>
                <FontAwesomeIcon :icon="faCheckCircle" class="text-green-600" />
              </small>
              <div class="card flex gap-3 mt-2">
                <img
                  :src="product?.thumbnail?.imageUrl"
                  :alt="product?.name"
                  class="w-16 h-17 border border-gray-300 object-cover max-sm:w-10 max-sm:h-10"
                />
                <div class="flex flex-col justify-center items-start">
                  <small class="my-2 max-sm:my-0">
                    <b> Reviewing</b>
                  </small>
                  <small class="text-xs">{{ product?.name }}</small>
                </div>
              </div>
            </div>
            <div>
              <ul class="flex gap-1">
                <li v-for="icon in Array(5)" :key="icon">
                  <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
                </li>
              </ul>
              <p class="my-2 text-sm font-semibold">Nice Products!</p>
              <p class="text-xs">Nice and quality products are sold here. I'd recommend!</p>
            </div>
          </div>
          <div class="text-end w-full mt-5">
            <small class="text-xs">{{ todayString }} </small>
            <div class="flex justify-end items-center gap-3 mt-20 border-b pb-3">
              <small class="text-xs">Was this helpful? </small>
              <ol class="flex gap-4">
                <li class="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                  <FontAwesomeIcon :icon="faThumbsUp" size="xs" />
                  <small>0</small>
                </li>
                <li class="flex items-center gap-1 cursor-pointer hover:text-red-600">
                  <FontAwesomeIcon :icon="faThumbsDown" size="xs" />
                  <small>0</small>
                </li>
              </ol>
            </div>
            <div class="my-5 flex text-start items-start gap-3">
              <div
                class="h-10 w-10 max-sm:w-7 max-sm:h-7 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100 text-xs font-bold"
              >
                C
              </div>
              <div class="w-full">
                <div class="flex justify-between items-center">
                  <h5 class="text-xs my-2"><b> Cosmetica (Store Owner) </b></h5>
                  <small class="text-xs">{{ todayString }} </small>
                </div>
                <p class="text-[.7rem] pr-2">
                  Thank you so much for your positive review, Godwin! We're thrilled to hear you
                  love our products. Your recommendation means a lot!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between border-t border-gray-300 pt-5 max-sm:flex-col">
          <div class="flex items-start gap-16 w-[80%] max-sm:gap-5 max-sm:flex-col max-sm:w-full">
            <div>
              <small><b>Ibukun Benjamin</b></small>
              <small class="flex items-center gap-2 mt-2 max-sm:mt-0">
                <p class="text-green-600">Verified Buyer</p>
                <FontAwesomeIcon :icon="faCheckCircle" class="text-green-600" />
              </small>
              <div class="card flex gap-3 mt-2">
                <img
                  :src="product?.thumbnail?.imageUrl"
                  :alt="product?.name"
                  class="w-16 h-17 border border-gray-300 object-cover max-sm:w-10 max-sm:h-10"
                />
                <div class="flex flex-col justify-center items-start">
                  <small class="my-2 max-sm:mt-0">
                    <b> Reviewing</b>
                  </small>
                  <small class="text-xs">{{ product?.name }}</small>
                </div>
              </div>
            </div>
            <div>
              <ul class="flex gap-1">
                <li v-for="icon in Array(3)" :key="icon">
                  <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
                </li>
                <li>
                  <FontAwesomeIcon :icon="faStarHalf" class="text-yellow-500" />
                </li>
              </ul>
              <p class="my-2 text-sm font-semibold">Love!</p>
              <p class="text-xs">So nice and i love this color. Cosmetica never disappoints!</p>
            </div>
          </div>
          <div class="text-end w-full mt-5">
            <small class="text-xs">{{ todayString }} </small>
            <div class="flex justify-end items-center gap-3 mt-20 border-b pb-3">
              <small class="text-xs">Was this helpful? </small>
              <ol class="flex gap-4">
                <li class="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                  <FontAwesomeIcon :icon="faThumbsUp" size="xs" />
                  <small>3</small>
                </li>
                <li class="flex items-center gap-1 cursor-pointer hover:text-red-600">
                  <FontAwesomeIcon :icon="faThumbsDown" size="xs" />
                  <small>0</small>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { dataStore } from '@/stores/dataStore'
import { useCart } from '@/stores/cartController'
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
  faImage,
} from '@fortawesome/free-solid-svg-icons'

//  Components
// NOTE: ProductCard is assumed to be defined elsewhere and correctly imported
import ProductCard from '@/components/ProductCard.vue'
// NOTE: LoadingCircle is not used in the template, but kept here if intended for later
import LoadingCircle from '@/components/LoadingCircle.vue'
// NOTE: apiClient is assumed to be a working axios instance configured elsewhere
import apiClient from '../../api-folder/apiClient'

// store
const store = dataStore() // For "Complete This Look" section
const cartStore = useCart() // For cart functionality

// --- Type Definitions ---
interface Thumbnail {
  imageUrl: string
  imageId: string
}

// Updated Product interface to make fields optional if they can be missing
interface Product {
  _id: number | string // Allow string for _id as it's common in MongoDB/API
  currency: string
  name: string
  price: number
  description?: string
  thumbnail?: Thumbnail
  images: Thumbnail[] // Assuming this array is always present but can be empty
}

// --- Reactive State ---
const route = useRoute()
const product = ref<Product>()
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)

// Product Options State
const sizes = ref<string[]>(['xs', 's', 'm', 'l', 'xl', 'xxl'])
const selectedSize = ref<string | null>(null) // To track the user's selected size
const quantity = ref<number>(1) // To track the user's selected quantity

// Description Expansion State
const isExpanded = ref<boolean>(false)

// Image Thumbnail State
const isActiveThumbnail = ref<number>(0)

// --- Lifecycle & Data Fetching ---

const fetchProductById = async () => {
  // Reset state before new fetch
  isLoading.value = true
  error.value = null
  product.value = undefined
  selectedSize.value = null
  quantity.value = 1
  isActiveThumbnail.value = 0

  try {
    // NOTE: This assumes apiClient is correctly configured and the API endpoint works
    const response: AxiosResponse<{ data: Product }> = await apiClient.get(
      `/products/${route.params.productID}`
    )

    product.value = response.data.data
  } catch (err: any) {
    error.value = err.message || 'An unexpected error occurred'
    console.error('Error fetching product:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => fetchProductById())

// Watch route in case the user navigates to a new product details page
watch(
  () => route.params.productID,
  (newId, oldId) => {
    // Only re-fetch if the productID actually changed
    if (newId !== oldId) {
      fetchProductById()
    }
  }
)

// --- Utility & Handler Functions ---

// Size Selection
const selectSize = (size: string) => {
  selectedSize.value = size
}

// Quantity Handlers
const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}

const updateQuantity = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newQuantity = parseInt(target.value)

  if (!isNaN(newQuantity) && newQuantity >= 1) {
    quantity.value = newQuantity
  } else {
    target.value = quantity.value.toString()
  }
}

// Description Toggler
const handleIsExpanded = () => {
  isExpanded.value = !isExpanded.value
}

// Thumbnail Click
const thumbnailClick = (index: number) => {
  isActiveThumbnail.value = index
}

// Date String for Reviews (Static)
const nowTimestamp = Date.now()
const today = new Date(nowTimestamp)
const todayString = today.toLocaleDateString()
</script>

<style scoped>
/* Existing styles for transition and loader */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.loader-svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

circle {
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

.greater-than-svg {
  width: 16px;
  height: 16px;
}

/* Hide number input arrows/spinners */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}
</style>