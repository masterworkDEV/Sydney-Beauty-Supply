<template>
  <!-- trendingProducts -->
  <section class="mt-20 ml-12 max-xl:ml-7 max-sm:mx-5 max-sm:mt-16">
    <button
      class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10 max-sm:p-1"
    >
      <span class="text-[1rem] max-sm:text-sm"> Trending Now </span>
      <small class="text-blue-600 text-[.7rem]"> View all </small>
    </button>
    <div class="mt-5 grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-3">
      <ProductCard :product-data="trendingProducts" />
    </div>
  </section>
</template>

<script setup lang="ts">
// prod card
import ProductCard from './ProductCard.vue'

// <!-- static images -->
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
</script>

