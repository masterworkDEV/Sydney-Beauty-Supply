<template>
  <vueper-slides
    autoplay
    disable-arrows-on-edges
    :slide-ratio="1 / 4"
    class="w-full h-screen max-xl:h-2/4 max-sm:h-[55vh]"
    :fade="true"
    :touchable="false"
  >
    <vueper-slide v-for="(slide, i) in images" :key="i">
      <template #content>
        <div class="vueperslide__content-wrapper h-screen" style="flex-direction: row">
          <div class="h-full items-center w-full relative max-sm:flex-col-reverse max-sm:gap-5">
            <img
              :src="slide"
              alt="this is the first background image"
              class="absolute right-0 left-0 bottom-0 top-0 h-full w-full z-0"
              lazy
            />
            <div
              class="bg-black opacity-60 absolute w-full h-full left-0 right-0 bottom-0 top-0 z-0"
            ></div>

            <div
              class="w-full h-full pt-52 text-center max-xl:px-7 max-sm:px-5 max-sm:pt-24 max-sm:text-center animate__animated animate__fadeInLeft"
            >
              <h1
                class="animate__animated animate__fadeIn animate__delay-2s text-7xl uppercase tracking-normal max-xl:text-5xl max-md:text-4xl text-white"
              >
                Unleash Your Inner Fashionista
              </h1>

              <p
                class="tracking-normal mb-3 text-sm animate__animated animate__fadeInUp animate__delay-3s text-white"
              >
                Our collection is a canvas for your personal style, featuring distinctive designs
                and curated finds that inspire creativity and self-expression.
              </p>
              <a href="#shop" class="shop-btn hover:shadow">
                <button
                  class="animate__animated animate__fadeInUp animate__delay-4s max-sm:text-[.8rem] shadow rounded-full bg-[#4A5559] text-white hover:text-black w-40 p-3 hover:bg-white transition-all"
                >
                  <router-link to="/store"> Shop Now </router-link>
                </button>
              </a>
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

import hero from '../../assets/images/female.jpg'
import hero2 from '../../assets/images/hero.jpg'

const images = ref([hero, hero2])

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

@media (max-width: 600px) {
  .vueperslides__inner {
    height: 50vh;
  }
  .vueperslides__parallax-wrapper {
    height: 50vh;
  }
}
@media (max-width: 376px) {
  .vueperslides__inner {
    height: 55vh;
  }
  .vueperslides__parallax-wrapper {
    height: 55vh;
  }
}
</style>





