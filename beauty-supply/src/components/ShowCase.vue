<template>
  <!-- showcase -->
  <section class="max-sm:py-20">
    <div class="mt-20 mx-12 max-xl:mx-7 max-sm:mx-5">
      <div class="flex justify-center gap-10 max-h-96 max-sm:flex-col max-sm:gap-10">
        <div class="w-full h-full">
          <img :src="imageBundle" alt="Daily skin care bundle" class="w-full h-96" />
        </div>

        <div class="grid grid-cols-2 place-items-center gap-5 w-[90%] max-sm:w-full h-96">
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
        </div>
      </div>
    </div>
    <div class="mt-20 mx-12 max-xl:mx-7 max-sm:hidden">
      <div class="flex justify-between max-sm:flex-col-reverse gap-10 max-h-96">
        <div class="grid grid-cols-2 gap-5 place-items-center w-[90%] h-96">
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
        </div>
        <div class="w-full h-full flex justify-end">
          <img :src="imageBundle" alt="Daily skin care bundle" class="w-full h-96" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imageBanner from '../assets/images/image-banner.png'
import imageBundle from '../assets/images/bundle.png'
</script>
