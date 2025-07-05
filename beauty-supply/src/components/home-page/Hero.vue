<template>
  <vueper-slides
    autoplay
    :slide-ratio="1 / 4"
    class="w-full h-screen max-xl:h-auto"
    :arrows="false"
    :fade="false"
    :touchable="false"
  >
    <vueper-slide v-for="(slide, i) in details" :key="i">
      <template #content>
        <div class="vueperslide__content-wrapper h-screen" style="flex-direction: row">
          <div class="h-full w-full relative max-sm:flex-col-reverse max-sm:gap-5">
            <img
              :src="slide.image"
              alt="this is the first background image"
              class="absolute right-0 left-0 bottom-0 h-full w-full z-0 max-sm:object-cover"
              lazy
            />
            <div
              class="bg-black opacity-40 absolute w-full h-full left-0 right-0 bottom-0 top-0 z-0"
            ></div>

            <div
              class="w-full h-full flex flex-col items-center justify-center text-center max-xl:px-7 max-sm:px-5 max-sm:text-center animate__animated animate__fadeInLeft"
            >
              <h1
                class="animate__animated animate__fadeIn text-7xl uppercase tracking-normal max-xl:text-5xl max-md:text-4xl text-white"
              >
                {{ slide.title }}
              </h1>

              <p
                class="tracking-normal mb-3 text-sm text-wrap animate__animated animate__fadeInUp animate__delay-3s text-white"
              >
                {{ slide.description }}
              </p>

              <button
                class="shop-btn animate__animated animate__fadeInUp animate__delay-4s max-sm:text-[.8rem] shadow rounded-full bg-[#4A5559] text-white hover:text-black p-3 hover:bg-white transition-all"
              >
                <router-link to="/store"> {{ slide.buttonText }} </router-link>
              </button>
            </div>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>
<script setup lang="ts">
// static images
import { ref } from 'vue'

import heroImage from '../../assets/images/ hero3.jpg'
import heroImage2 from '../../assets/images/hero.jpg'

const details = ref([
  {
    image: heroImage2,
    title: 'Redefining Elegance, One Stitch at a Time.',
    description:
      'Discover timeless sophistication and unparalleled craftsmanship. Indulge in exclusive pieces designed to elevate your wardrobe.',
    buttonText: 'Explore Collections',
  },
  {
    image: heroImage,
    title: 'Your Style Journey Starts Here.',
    description:
      'Effortless chic meets everyday luxury. Discover pieces that seamlessly blend comfort, quality, and contemporary fashion.',
    buttonText: 'Shop New Arrivals',
  },
])

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<style>
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
    height: 55vh;
  }
  .vueperslides__parallax-wrapper {
    height: 55vh;
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
@media (max-width: 376px) {
  .vueperslides__inner {
    height: 70vh;
  }
  .vueperslides__parallax-wrapper {
    height: 70vh;
  }
}
</style>





