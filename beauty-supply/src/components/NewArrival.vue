<template>
  <!-- new arrival -->
  <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-16">
    <button
      class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10 max-sm:p-1"
    >
      <span class="text-[1rem] max-sm:text-sm"> New Arrival </span>
      <small class="text-blue-600 text-[.7rem]"> View all </small>
    </button>
    <div class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-3">
      <ProductCard :product-data="newArrivalProducts" />
    </div>
  </section>
</template>

<script setup lang="ts">
// static image
import imageBanner from '../assets/images/image-banner.png'
//  product card
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

