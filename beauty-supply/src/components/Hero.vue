<template>
  <section class="relative w-full h-[90vh] max-xl:h-[35vh] max-sm:h-96">
    <div class="h-full items-center w-full relative max-sm:flex-col-reverse max-sm:gap-5">
      <img
        :src="imageBgOne"
        alt="this is the first background image"
        class="absolute right-0 left-0 bottom-0 top-0 h-full w-full object-cover z-0"
        lazy
      />
      <div
        class="bg-black opacity-30 absolute w-full h-full left-0 right-0 bottom-0 top-0 z-0"
      ></div>

      <div
        class="w-full h-full pt-52 text-center max-xl:px-7 max-sm:px-5 max-sm:pt-24 max-sm:text-center animate__animated animate__fadeInLeft"
      >
        <h1
          class="animate__animated animate__fadeIn animate__delay-2s text-6xl uppercase tracking-normal max-xl:text-5xl max-md:text-4xl text-white"
        >
          Healthy skin happy life always
        </h1>
        <p
          class="tracking-normal my-3 text-sm animate__animated animate__fadeInUp animate__delay-3s text-white"
        >
          Discover our range of clean, effective skincare products designed <br />
          to transform your routine and deliver visible results.
        </p>
        <a href="#shop" class="shop-btn hover:shadow">
          <button
            class="animate__animated animate__fadeInUp animate__delay-4s text-sm max-sm:text-[.8rem] shadow rounded-full bg-yellow-600 text-white hover:text-black w-40 p-3 hover:bg-white transition-all"
          >
            Shop Now
          </button>
        </a>
      </div>
    </div>
  </section>

  <!-- category list -->
</template>

<script setup lang="ts">
// static images

import imageBgOne from '../assets/images/bg-one.jpg'

import videoFirst from '../assets/videos/first.mp4'
</script>

<style>
.category::-webkit-scrollbar {
  display: none;
}
</style>





