<template>
  <section class="bg-[#f1f1f1] mt-20 p-20 max-sm:p-10 max-sm:mt-14 w-full">
    <div class="text-center">
      <h2 class="text-5xl mb-5 max-sm:mb-3 max-lg:text-4xl max-sm:text-3xl">
        What Our Customers Say
      </h2>
      <p class="mb-5 tracking-normal leading-relaxed max-sm:text-sm capitalize">
        Discover what our customers are saying about us - from designs to unmatched comfort and
        quality. their words reflect the love for our collections.
      </p>
    </div>
    <div class="mt-10 mx-auto max-w-7xl">
      <swiper
        class="no-shadow"
        :slides-per-view="3"
        :space-between="25"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :dragging-distance="70"
        :modules="[Navigation, Pagination]"
        navigation
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }"
      >
        <swiper-slide v-for="i in customersReview" :key="i.customersName">
          <article class="bg-white p-5">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z"
                  fill="#000000"
                ></path>
                <path
                  d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <p class="my-5">{{ i.customersComment }}</p>
            <div class="flex gap-2">
              <img :src="customersAvatar" alt="" class="w-12 h-12 rounded-full object-cover" />

              <div>
                <h6 class="font-semibold">{{ i.customersName }}</h6>
                <small>{{ i.customersPosition }}</small>
              </div>
            </div>
          </article>
        </swiper-slide>
        <div class="swiper-button-prev z-10"></div>
        <div class="swiper-button-next z-10"></div>
      </swiper>
    </div>
  </section>
</template>



<script lang="ts" setup>
import { ref } from 'vue'
import customersAvatar from '@/assets/images/new.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import required modules
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const customersReview = ref([
  {
    customersName: 'Emily Chen',
    customersComment:
      'This brand is a game-changer! The quality is outstanding, and the designs are so unique and sophisticated. I feel incredible every time I wear their pieces. Highly recommended!',
    customersPosition: 'UX Designer',
    customersImage: '',
  },
  {
    customersName: 'Kevin Smith',
    customersComment:
      "I bought a coat for my partner and she's obsessed. The craftsmanship is flawless, and it's clear a lot of thought went into every detail. Definitely a brand that values quality.",
    customersPosition: 'Software Engineer',
    customersImage: '',
  },
  {
    customersName: 'Maria Lopez',
    customersComment:
      "Finally, clothes that fit perfectly and last! The fabrics are luxurious, and the styles are timeless. I've found my new favorite brand.",
    customersPosition: 'Public Relations Manager',
    customersImage: '',
  },
  {
    customersName: 'Daniel Kim',
    customersComment:
      "Every piece I've purchased has exceeded my expectations. The elegance and durability are unparalleled. A true investment in my wardrobe.",
    customersPosition: 'Architect',
    customersImage: '',
  },
  {
    customersName: 'Isabella Rossi',
    customersComment:
      "I'm so impressed by their commitment to ethical production. The clothes are not only beautiful but also made with care. It's a brand I can feel good about supporting.",
    customersPosition: 'Social Worker',
    customersImage: '',
  },
])

const onSwiper = (swiper: any) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style scoped>
svg {
  width: 30px;
  height: 30px;
}
</style>