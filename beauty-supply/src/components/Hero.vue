<template>
  <section class="relative w-full h-[85vh] max-xl:h-auto max-sm:mt-10 max-sm:h-[550px]">
    <img
      :src="heroBanner"
      alt="Hero image"
      class="w-full h-full object-center z-0"
      loading="lazy"
    />
    <div
      class="flex justify-between items-center absolute right-0 left-0 bottom-0 max-sm:flex-col-reverse max-sm:gap-5"
    >
      <div
        class="w-full pl-12 max-xl:px-7 max-sm:px-5 max-sm:pb-7 max-sm:text-center animate__animated animate__fadeInLeft"
      >
        <h1
          class="animate__animated animate__fadeIn animate__delay-2s text-6xl uppercase tracking-normal max-xl:text-5xl max-md:text-4xl"
        >
          Healthy skin happy life always
        </h1>
        <p
          class="tracking-normal my-3 text-sm animate__animated animate__fadeInUp animate__delay-3s"
        >
          Transform your skincare routine with <br />
          clean, effective products
        </p>
        <a
          href="#shop"
          class="shop-btn hover:text-black hover:bg-white hover:shadow transition-all"
        >
          <button
            class="animate__animated animate__fadeInUp animate__delay-4s text-sm max-sm:text-[.8rem] rounded-full bg-amber-950 text-white w-40 p-3"
          >
            Shop Now
          </button>
        </a>
      </div>
      <div class="w-full h-3/4 max-sm:px-5 animate__animated animate__fadeIn">
        <img
          :src="imageBanner2"
          :alt="imageBanner"
          class="w-full max-h-full max-sm:max-h-[400px] object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- category list -->
</template>

<script setup lang="ts">
// static images
import heroBanner from '../assets/images/hero.jpg'
import imageBanner2 from '../assets/images/image-banner2.png'
import imageBanner from '../assets/images/image-banner.png'
</script>

<style>
.category::-webkit-scrollbar {
  display: none;
}
</style>
