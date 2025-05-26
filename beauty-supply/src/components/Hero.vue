<template>
  <section class="relative w-full h-[85vh] max-xl:h-auto max-sm:mt-10 max-sm:h-96">
    <div class="h-full items-center w-full relative max-sm:flex-col-reverse max-sm:gap-5">
      <video
        :src="videoFirst"
        loop
        autoplay
        muted
        preload="yes"
        class="absolute right-0 left-0 bottom-0 top-0 h-full w-full object-cover z-0"
      ></video>
      <div
        class="bg-black opacity-75 absolute w-full h-full left-0 right-0 bottom-0 top-0 z-0"
      ></div>

      <div
        class="w-full h-full pt-52 text-center max-xl:px-7 max-sm:px-5 max-sm:py-14 max-sm:text-center animate__animated animate__fadeInLeft"
      >
        <h1
          class="animate__animated animate__fadeIn animate__delay-2s text-6xl max-2xl:text-5xl uppercase tracking-normal max-xl:text-4xl max-md:text-4xl text-white"
        >
          Healthy skin happy life always
        </h1>
        <p
          class="tracking-normal my-3 text-sm animate__animated animate__fadeInUp animate__delay-3s text-white"
        >
          Transform your skincare routine with <br />
          clean, effective products
        </p>
        <a href="#shop" class="shop-btn hover:shadow">
          <button
            class="animate__animated animate__fadeInUp animate__delay-4s text-sm max-sm:text-[.8rem] rounded-full bg-amber-950 text-white hover:text-black w-40 p-3 hover:bg-white transition-all"
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
import imageBanner2 from '../assets/images/image-banner2.png'
import imageBanner from '../assets/images/image-banner.png'

import videoFirst from '../assets/videos/first.mp4'
</script>

<style>
.category::-webkit-scrollbar {
  display: none;
}
</style>
