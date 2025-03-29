<template>
  <section class="relative w-full h-[85vh] max-xl:h-auto max-sm:mt-10 max-sm:h-[500px]">
    <img :src="heroBanner" alt="Hero image" class="w-full h-full object-center z-0" />
    <div
      class="flex items-center absolute right-0 left-0 bottom-0 max-sm:flex-col-reverse max-sm:gap-5"
    >
      <div class="w-full px-12 max-xl:px-7 max-sm:px-5 max-sm:pb-3 max-sm:text-center">
        <h1
          class="text-6xl uppercase tracking-normal max-sm:leading-7 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl"
        >
          Healthy skin <br />
          happy life always
        </h1>
        <p class="tracking-normal my-3 text-sm max-sm:text-[.8rem]">
          Transform your skincare routine with <br />
          clean, effective products
        </p>
        <button
          class="bg-amber-950 text-white w-36 p-2.5 text-sm max-sm:text-[.8rem] rounded-full max-xl:w-32 max-xl:p-2 max-md:w-30"
        >
          Shop Now
        </button>
      </div>
      <div class="w-full h-3/4 px-12 max-xl:px-7 max-sm:px-5">
        <img
          :src="imageBanner2"
          :alt="imageBanner"
          class="w-full max-h-[700px] max-sm:max-h-[400px] object-cover"
        />
      </div>
    </div>
  </section>

  <!-- category list -->

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
</template>

<script setup lang="ts">
// productCategories

const productCategories = [
  'Natural Oil',
  'Textured Hair care',
  'Glow up',
  'Comfort Wear',
  'Beauty tools',
]

// static images
import heroBanner from '../assets/images/hero.jpg'
import imageBanner2 from '../assets/images/image-banner2.png'
import imageBanner from '../assets/images/image-banner.png'
</script>

