<template>
  <Header />
  <main class="min-h-screen w-full">
    <section class="relative w-full h-screen max-xl:h-auto max-sm:h-[650px]">
      <img :src="heroImage" alt="Hero image" class="w-full h-full object-center z-0" />
      <div
        class="flex items-center absolute right-0 left-0 bottom-0 max-sm:flex-col-reverse max-sm:gap-10"
      >
        <div class="w-full px-12 max-xl:px-7 max-sm:px-5 max-sm:pb-3 max-sm:text-center">
          <h1
            class="text-6xl uppercase tracking-normal leading-14 max-sm:leading-7 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl"
          >
            Healthy skin <br />
            happy life always
          </h1>
          <p class="tracking-normal my-3 text-sm max-sm:text-[.8rem]">
            Transform your skincare routine with <br />
            clean, effective products
          </p>
          <button
            class="bg-amber-950 text-white w-36 p-2.5 text-sm max-sm:text-[.8rem] rounded-full max-xl:w-32 max-xl:p-2 max-lg: max-md:w-24"
          >
            Shop Now
          </button>
        </div>
        <div class="w-full h-3/4 px-12 max-xl:px-7 max-sm:px-5">
          <img :src="imageBanner" :alt="imageBanner" class="w-full max-h-[550px] object-cover" />
        </div>
      </div>
    </section>

    <div class="mt-16 max-sm:mt-12 max-sm:overflow-x-auto">
      <ul class="flex justify-center items-center gap-10 max-sm:justify-between">
        <li
          class="flex items-center flex-col text-center"
          v-for="(category, index) in productCategories"
          :key="index"
        >
          <img
            :src="imageBanner"
            alt=""
            class="w-12 h-12 max-sm:w-10 max-sm:h-10 object-cover rounded-full"
          />
          <p class="my-2 text-[.8rem] max-sm:text-[.7rem]">{{ category }}</p>
        </li>
      </ul>
    </div>

    <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-16">
      <button
        class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10"
      >
        <span> Trending Now </span>
        <small class="text-blue-600"> View all </small>
      </button>
      <div class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-3">
        <div
          class="card border border-gray-300 pb-1"
          v-for="product in trendingProducts"
          :key="product.id"
        >
          <img :src="imageBanner" alt="" />
          <span class="flex justify-between items-center my-2 mx-2">
            <h6 class="text-sm max-sm:text-[.8rem]">{{ product.title }}</h6>
            <h6
              class="flex justify-center items-center bg-red-700 text-white p-0.5 text-[.7rem] max-sm:text-[.5rem] uppercase"
            >
              {{ product.discount }}% off
            </h6>
          </span>
          <p class="text-gray-600 mb-5 ml-4 text-sm max-sm:text-[.7rem] max-sm:mb-2">
            {{ product.description }}
          </p>
          <div class="flex justify-between items-center mx-2">
            <span>
              <h6 class="text-sm max-sm:text-[.8rem]">{{ product.price }} NGN</h6>
              <p class="text-gray-500 text-sm">
                <span class="line-through max-sm:text-[.55rem]">{{ product.originalPrice }}</span>
                NGN
              </p>
            </span>
            <button class="bg-black text-white text-[.7rem] rounded-full p-2 max-sm:text-[.55rem]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-16">
      <button
        class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10"
      >
        <span> New Arrival </span>
        <small class="text-blue-600"> View all </small>
      </button>
      <div class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-3">
        <div
          class="card border border-gray-300 pb-1"
          v-for="product in newArrivalProducts"
          :key="product.id"
        >
          <img :src="imageBanner" alt="" />
          <span class="flex justify-between items-center my-2 mx-2">
            <h6 class="text-sm max-sm:text-[.8rem]">{{ product.title }}</h6>
            <h6
              class="flex justify-center items-center bg-red-700 text-white p-0.5 text-[.7rem] max-sm:text-[.5rem] uppercase"
            >
              {{ product.discount }}% off
            </h6>
          </span>
          <p class="text-gray-600 mb-5 ml-4 text-sm max-sm:text-[.7rem] max-sm:mb-2">
            {{ product.description }}
          </p>
          <div class="flex justify-between items-center mx-2">
            <span>
              <h6 class="text-sm max-sm:text-[.8rem]">{{ product.price }} NGN</h6>
              <p class="text-gray-500 text-sm">
                <span class="line-through max-sm:text-[.55rem]">{{ product.originalPrice }}</span>
                NGN
              </p>
            </span>
            <button class="bg-black text-white text-[.7rem] rounded-full p-2 max-sm:text-[.55rem]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-sm:py-20">
      <div class="mt-20 mx-12 max-xl:mx-7 max-sm:mx-5">
        <div class="flex justify-center gap-10 max-h-96 max-sm:flex-col max-sm:gap-10">
          <div class="w-full h-full">
            <img :src="imageBundle" alt="Daily skin care bundle" class="w-full h-96" />
          </div>

          <div class="grid grid-cols-2 place-items-center gap-5 w-[90%] max-sm:w-full h-96">
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          </div>
        </div>
      </div>
      <div class="mt-20 mx-12 max-xl:mx-7 max-sm:hidden">
        <div class="flex justify-between max-sm:flex-col-reverse gap-10 max-h-96">
          <div class="grid grid-cols-2 gap-5 place-items-center w-[90%] h-96">
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
            <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          </div>
          <div class="w-full h-full flex justify-end">
            <img :src="imageBundle" alt="Daily skin care bundle" class="w-full h-96" />
          </div>
        </div>
      </div>
    </section>
    <div class="mt-20 max-sm:h-screen ml-12 max-xl:ml-7 max-sm:mx-5">
      <div class="flex items-center justify-between h-full max-sm:flex-col max-sm:pt-20">
        <div
          class="w-[90%] max-sm:w-full border-r-2 border-[#ccc] max-sm:border-l-0 max-sm:border-b-1 max-sm:pb-4"
        >
          <img
            :src="imageBundle"
            alt="Daily skin care bundle"
            class="w-full h-96 object-cover pr-4 max-sm:pr-0"
          />
        </div>
        <form
          class="w-full h-full flex justify-center flex-col items-center"
          @submit.prevent="subscribe"
        >
          <h3 class="text-4xl max-sm:text-2xl text-center">Contact Me For More Update</h3>
          <p class="tracking-normal text-sm text-center my-5">
            Sign up now to hear about our latest offers, new products,<br />
            collaborations, all things straight to your inbox.
          </p>
          <div class="flex justify-center items-center gap-2 w-full">
            <label for="email"></label>
            <input
              v-model="email"
              type="email"
              name="email"
              min="8"
              placeholder="Your e-mail"
              class="border border-[#ccc] p-1 h-10 rounded-md text-[1rem] w-[40%] max-sm:w-2/4"
            />
            <button type="submit" class="bg-black text-white w-24 h-10 p-1 text-[.7rem] rounded-md">
              SUBSCRIBE
            </button>
          </div>
          <p
            v-if="subscriptionMessage"
            class="mt-4 text-sm text-center"
            :class="subscriptionStatus === 'success' ? 'text-green-600' : 'text-red-600'"
          >
            {{ subscriptionMessage }}
          </p>
        </form>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

// Static image imports (better for build-time optimization)
import heroImage from '../assets/images/hero.jpg'
import imageBanner from '../assets/images/image-banner.jpg'
import imageBundle from '../assets/images/bundle.png'

// Interface for Product Data (BEST PRACTICE)
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

// Refactor product data into separate variables (BEST PRACTICE)
const trendingProducts: Product[] = [
  {
    id: 1,
    title: 'KERATHIN Hair Mask',
    description: 'Dry & Damaged Hair Repair',
    price: 500,
    originalPrice: 700,
    discount: 73,
    currency: 'NGN', // Added currency
    image: imageBanner, // Use the imported image
    brand: 'Example Brand',
    category: 'Hair Care',
    stock: 100,
    rating: 4.5,
    ingredients: ['Keratin', 'Argan Oil'],
    benefits: ['Repair', 'Hydrate'],
  },
  {
    id: 2,
    title: 'KERATHIN Hair Mask',
    description: 'Dry & Damaged Hair Repair',
    price: 500,
    originalPrice: 700,
    discount: 73,
    currency: 'NGN', // Added currency
    image: imageBanner, // Use the imported image
    brand: 'Example Brand',
    category: 'Hair Care',
    stock: 100,
    rating: 4.5,
    ingredients: ['Keratin', 'Argan Oil'],
    benefits: ['Repair', 'Hydrate'],
  },
  {
    id: 3,
    title: 'KERATHIN Hair Mask',
    description: 'Dry & Damaged Hair Repair',
    price: 500,
    originalPrice: 700,
    discount: 73,
    currency: 'NGN', // Added currency
    image: imageBanner, // Use the imported image
    brand: 'Example Brand',
    category: 'Hair Care',
    stock: 100,
    rating: 4.5,
    ingredients: ['Keratin', 'Argan Oil'],
    benefits: ['Repair', 'Hydrate'],
  },
]

const newArrivalProducts: Product[] = [
  {
    id: 4,
    title: 'New Arrival 1',
    description: 'Description of New Arrival 1',
    price: 600,
    originalPrice: 800,
    discount: 25,
    currency: 'NGN',
    image: imageBanner,
    brand: 'New Brand',
    category: 'Skincare',
    stock: 50,
    rating: 4.8,
    ingredients: ['New Ingredient 1', 'New Ingredient 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
  },
  {
    id: 5,
    title: 'New Arrival 2',
    description: 'Description of New Arrival 2',
    price: 600,
    originalPrice: 800,
    discount: 25,
    currency: 'NGN',
    image: imageBanner,
    brand: 'New Brand',
    category: 'Skincare',
    stock: 50,
    rating: 4.8,
    ingredients: ['New Ingredient 1', 'New Ingredient 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
  },
  {
    id: 6,
    title: 'New Arrival 3',
    description: 'Description of New Arrival 3',
    price: 600,
    originalPrice: 800,
    discount: 25,
    currency: 'NGN',
    image: imageBanner,
    brand: 'New Brand',
    category: 'Skincare',
    stock: 50,
    rating: 4.8,
    ingredients: ['New Ingredient 1', 'New Ingredient 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
  },
]

const productCategories = [
  'Natural Oil',
  'Textured Hair care',
  'Glow up',
  'Comfort Wear',
  'Beauty tools',
]

const email = ref('')
const subscriptionMessage = ref('')
const subscriptionStatus = ref<'success' | 'error' | null>(null) // Added type

const subscribe = () => {
  // Basic email validation (you'd use a better library in production)
  if (!email.value.includes('@')) {
    subscriptionMessage.value = 'Please enter a valid email address.'
    subscriptionStatus.value = 'error'
    return
  }

  // Simulate a subscription process (replace with your actual API call)
  setTimeout(() => {
    // Simulate success or failure
    const success = Math.random() > 0.2 // 80% chance of success

    if (success) {
      subscriptionMessage.value = 'Thank you for subscribing!'
      subscriptionStatus.value = 'success'
      email.value = '' // Clear the input
    } else {
      subscriptionMessage.value = 'Sorry, there was an error. Please try again.'
      subscriptionStatus.value = 'error'
    }
  }, 2000) // Simulate a 2-second delay
}
</script>

<style>
.line-through {
  text-decoration: line-through;
}
</style>
