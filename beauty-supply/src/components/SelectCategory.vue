<template>
  <div class="flex justify-center text-center items-center">
    <div class="category mt-16 max-sm:mt-12 max-sm:overflow-x-scroll max-sm:max-w-3/4">
      <ul class="flex justify-center items-center gap-10">
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
  </div>
</template>

<script setup lang="ts">
// static images
import imageBanner from '../assets/images/image-banner.png'

// productCategories
const productCategories = [
  'Natural Oil',
  'Textured Hair care',
  'Glow up',
  'Comfort Wear',
  'Beauty tools',
]
</script>

<style>
</style>