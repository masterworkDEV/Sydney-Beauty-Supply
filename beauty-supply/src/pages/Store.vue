<template>
  <main class="min-h-screen mt-14">
    <div
      class="w-full bg-[#f1f1f1] h-52 max-sm:h-40 text-center max-xl:px-7 max-sm:px-5 max-sm:pt-10 max-sm:text-center animate__animated animate__fadeInLeft"
    >
      <h1
        class="animate__animated animate__fadeIn animate__delay-2s text-5xl pt-20 max-sm:pt-0 flex items-center justify-center text-center tracking-normal max-xl:text-4xl max-md:text-2xl text-[#333]"
      >
        All Products
      </h1>
      <ul class="mt-3 flex justify-center items-center text-center gap-1">
        <li class="text-sm">
          <router-link to="/"> Home </router-link>
        </li>
        /
        <li class="text-sm">
          <router-link to=""> Shop </router-link>
        </li>
        /
        <li class="text-sm">
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
        <!-- by category -->
        <h3 class="mb-3">
          <b> Category </b>
        </h3>
        <div v-for="category in categories" :key="category" class="flex gap-1">
          <input type="checkbox" />
          <label :for="category" class="text-sm">{{ category }}</label>
        </div>
        <!-- by color -->
        <h3 class="mt-5 mb-3">
          <b> Color </b>
        </h3>
        <div class="grid grid-cols-2 gap-3 place-content-center">
          <div v-for="color in colors" :key="color" class="flex items-center gap-1">
            <div :class="`border bg-[${color}] w-7 h-7 rounded-full `"></div>
            <span class="text-sm">{{ color }}</span>
          </div>
        </div>

        <!-- filter options on smaller devices -->

        <!-- by size -->
        <h3 class="mt-5 mb-3">
          <b> Size </b>
        </h3>
        <div class="grid grid-cols-3">
          <div v-for="size in sizes" :key="size" class="flex gap-2">
            <input type="checkbox" />
            <label :for="size" class="text-sm">{{ size }}</label>
          </div>
        </div>

        <!-- track your order  -->
        <h3 class="mt-5 mb-3">
          <b> Track your order </b>
        </h3>
        <div class="w-[96%] h-24 border border-[#ccc]"></div>
      </div>

      <div class="products-display w-[80%]">
        <div class="flex justify-between pt-3">
          <h2>
            <b> Showing 1-4 of result </b>
          </h2>
          <div>
            Sort By:
            <select class="border rounded">
              <option value=""></option>
              <option v-for="sort in sorts" :key="sort" :value="sort">{{ sort }}</option>
            </select>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-3 max-sm:grid-cols-2 place-items-center gap-5">
          <ProductCard
            v-for="product in store.products"
            :key="product.id"
            :id="product.id"
            :description="product.description"
            :discount="product.discount"
            :image="product.image"
            :price="product.price"
            :title="product.title"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { dataStore } from '@/stores/dataStore'
import { ref } from 'vue'

const store = dataStore()

// filter options
const sorts = ref(['Newest', 'Regular', 'Old'])
const categories = ref(['Men', 'Hats', 'Footwares'])
const colors = ref(['brown', 'white', 'green', 'blue', 'black'])
const sizes = ref(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'])
</script>

<style>
</style>