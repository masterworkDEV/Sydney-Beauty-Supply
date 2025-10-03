<template>
  <vueper-slides
    autoplay
    :slide-ratio="1 / 4"
    class="w-full"
    :arrows="false"
    :fade="true"
    :touchable="false"
  >
    <vueper-slide v-for="(slide, i) in details" :key="i">
      <template #content>
        <div
          class="vueperslide__content-wrapper slide-container h-full w-full flex justify-end items-center text-center relative"
          style="flex-direction: row"
        >
          <img
            :src="heroImage"
            alt=""
            class="image h-full w-full absolute right-0 left-0 bottom-0 top-0 z-0 object-cover"
          />
          <div class="image-layer"></div>

          <div class="mx-24 max-xl:mx-20 max-md:mx-14 max-sm:mx-10 z-20">
            <h1
              class="animate__animated animate__fadeIn text-9xl text-white max-xl:text-8xl max-lg:text-7xl max-md:text-6xl mb-3 text-center font-semibold"
            >
              {{ slide.title }}
            </h1>
            <p class="text-white mb-24">
              {{ slide.description }}
            </p>
            <button
              class="bg-[#007bff] text-white w-1/4 p-3 cursor-pointer max-sm:p-2.5 max-sm:w-2/4 focus:bg-blue-500 focus:ring-3 focus:ring-blue-900 font-semibold"
            >
              {{ slide.button }}
            </button>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>
<script setup lang="ts">
// static images
import { ref } from 'vue'

import heroLayer from '@/assets/images/hero-layer.png'
import heroImage from '@/assets/images/hero-new.jpg'
const details = ref([
  {
    title: 'MzChi',
    description:
      'Your new look is here. Explore fresh drops and unique pieces that express your style.',
    button: 'Shop Now',
  },
  {
    title: 'Collection',
    description:
      'Elevate your style with our curated collection of luxury fashion, meticulously designed to empower you.',
    button: 'Explore Store',
  },
])

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { title } from 'process'
</script>

<style>
.slide-container {
  background: radial-gradient(circle, #389cd4, #0b5983);
}
.category::-webkit-scrollbar {
  display: none;
}

.vueperslides__inner {
  height: 90vh;
}
.vueperslides__parallax-wrapper {
  height: 90vh;
}

@media (max-width: 1200px) {
  .vueperslides__inner {
    height: 65vh;
  }
  .vueperslides__parallax-wrapper {
    height: 65vh;
  }
}
@media (max-width: 600px) {
  .vueperslides__inner {
    height: 70vh;
  }
  .vueperslides__parallax-wrapper {
    height: 70vh;
  }
}

.image-layer {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
</style>





