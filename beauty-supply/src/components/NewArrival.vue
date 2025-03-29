<template>
  <!-- new arrival -->
  <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-16">
    <button
      class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10 max-sm:p-1"
    >
      <span class="text-[1rem] max-sm:text-sm"> New Arrival </span>
      <small class="text-blue-600 text-[.7rem]"> View all </small>
    </button>
    <div class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-3">
      <div
        class="card border border-gray-300 pb-1 hover:shadow-2xl transition-all"
        v-for="product in newArrivalProducts"
        :key="product.id"
      >
        <div class="image w-full">
          <img :src="imageBanner" alt="" />
        </div>
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
          <button
            class="bg-black text-white text-[.65rem] rounded-full p-2 max-sm:text-[.55rem] font-semibold hover:scale-105 hover:scale-3d hover:opacity-90"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imageBanner from '../assets/images/image-banner.png'

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
</script>

