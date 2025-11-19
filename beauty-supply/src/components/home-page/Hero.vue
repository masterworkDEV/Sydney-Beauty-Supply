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
          class="vueperslide__content-wrapper slide-container h-full max-sm:h-2/4 w-full flex justify-end items-center text-center relative"
          style="flex-direction: row"
        >
          <img
            :src="slide.image"
            alt=""
            class="image h-full w-full absolute right-0 left-0 bottom-0 top-0 z-0 object-cover"
          />

          <div class="mx-24 max-xl:mx-20 max-md:mx-14 max-sm:mx-10 z-20">
            <h1
              class="animate__animated animate__fadeIn text-9xl text-white max-xl:text-8xl max-lg:text-7xl max-md:text-6xl mb-3 max-sm:mb-2 max-sm:text-4xl text-center font-bold"
            >
              {{ slide.title }}
            </h1>
            <p class="text-white mb-24 max-sm:mb-4">
              {{ slide.description }}
            </p>
            <router-link
              to="/store"
              class="relative inline-flex items-center justify-start inline-block w-2/4 px-5 py-4 overflow-hidden font-medium transition-all rounded-full bg-cyan-900 hover:bg-white group"
            >
              <span
                class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
              ></span>
              <span
                class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500"
                >{{ slide.button }}</span
              >
            </router-link>
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
import heroImage2 from '@/assets/images/hero-new-2.jpg'
const details = ref([
  {
    title: 'MzChi',
    description:
      'Your new look is here. Explore fresh drops and unique pieces that express your style.',
    button: 'Shop Now',
    image: heroImage,
  },
  {
    title: 'Collection',
    description:
      'Elevate your style with our curated collection of luxury fashion, meticulously designed to empower you.',
    button: 'Explore Store',
    image: heroImage2,
  },
])

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<style >
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
    height: 70vh;
  }
  .vueperslides__parallax-wrapper {
    height: 70vh;
  }
}
@media (max-width: 600px) {
  .vueperslides__inner {
    height: 50vh;
  }
  .vueperslides__parallax-wrapper {
    height: 50vh;
  }
}
.image-layer {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}

.gradient-blue-btn {
  /* Core Styles */
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: linear-gradient(315deg, #81c3d7, #2f6690);
  background-color: #000; /* Fallback for older browsers */

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  transition: all 0.2s ease-in-out;
}

.gradient-blue-btn:hover {
  background: linear-gradient(315deg, #81c3d7, #2f6690);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}

.gradient-blue-btn:active {
  background: linear-gradient(315deg, #81c3d7, #2f6690);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(0);
}
</style>





