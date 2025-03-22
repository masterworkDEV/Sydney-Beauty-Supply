<template>
  <Header />
  <main>
    <!-- hero -->
    <div class="bg-pink-50 h-[100vh] w-full">
      <div class="flex items-center">
        <div class="w-full mt-32 pl-12 max-xl:pl-7 max-sm:pl-5">
          <h1 class="text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl">
            Healthy skin <br />
            happy life always
          </h1>
          <p class="tracking-normal my-3">
            Transform your skincare routine with <br />
            clean, effective products
          </p>
          <button
            class="bg-amber-950 text-white w-36 p-2.5 rounded-full max-xl:w-32 max-xl:p-2 max-lg: max-md:w-24"
          >
            Shop Now
          </button>
        </div>
        <div class="w-full mt-32 pr-12 max-xl:pr-7 max-sm:pr-5">
          <img :src="imageBanner" :alt="imageBanner" class="w-full max-h-96 object-cover" />
        </div>
      </div>
    </div>
    <!-- product list -->
    <div class="mt-14">
      <ul class="flex justify-center items-center gap-10">
        <li class="flex items-center flex-col text-center">
          <img :src="imageBanner" alt="" class="w-14 h-14 object-cover rounded-full" />
          <p class="my-2 text-sm">Natural Oil</p>
        </li>
        <li class="flex items-center flex-col text-center">
          <img :src="imageBanner" alt="" class="w-14 h-14 object-cover rounded-full" />

          <p class="my-2 text-sm">Textured Hair care</p>
        </li>
        <li class="flex items-center flex-col text-center">
          <img :src="imageBanner" alt="" class="w-14 h-14 object-cover rounded-full" />

          <p class="my-2 text-sm">Glow up</p>
        </li>
        <li class="flex items-center flex-col text-center">
          <img :src="imageBanner" alt="" class="w-14 h-14 object-cover rounded-full" />

          <p class="my-2 text-sm">Comfort Wear</p>
        </li>
        <li class="flex items-center flex-col text-center">
          <img :src="imageBanner" alt="" class="w-14 h-14 object-cover rounded-full" />

          <p class="my-2 text-sm">Beauty tools</p>
        </li>
      </ul>
    </div>

    <!-- Trending now -->

    <div class="mt-24 ml-10">
      <button
        class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10"
      >
        <span> Trending Now </span>
        <small class="text-blue-600"> View all </small>
      </button>
      <div class="mt-5 flex justify-center gap-3">
        <div class="card border border-gray-300 pb-1">
          <img :src="imageBanner" alt="" />
          <span class="flex justify-between items-center my-2 mx-2">
            <h6 class="text-sm">KERATHIN Hair Mask</h6>
            <h6 class="bg-red-700 text-white p-0.5 text-[.7rem] uppercase">73% off</h6>
          </span>
          <p class="text-gray-600 mb-5 ml-4 text-sm">Dry & Damaged Hair Repair</p>
          <div class="flex justify-between items-center mx-2">
            <span>
              <h6 class="text-sm">500 NGN</h6>
              <p class="text-gray-500 text-sm"><span class="text-linethrough">700</span>NGN</p>
            </span>
            <button class="bg-black text-white text-[.7rem] rounded-full p-2">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- New arrivals -->
    <div class="mt-16 ml-10">
      <button
        class="bg-gray-100 border border-gray-300 w-full text-start p-2 flex items-center gap-10"
      >
        <span> New Arrival </span>
        <small class="text-blue-600"> View all </small>
      </button>
      <div class="mt-5 flex justify-center gap-3">
        <div class="card border border-gray-300 pb-1">
          <img :src="imageBanner" alt="" />
          <span class="flex justify-between items-center my-2 mx-2">
            <h6 class="text-sm">KERATHIN Hair Mask</h6>
            <h6 class="bg-red-700 text-white p-0.5 text-[.7rem] uppercase">73% off</h6>
          </span>
          <p class="text-gray-600 mb-5 ml-4 text-sm">Dry & Damaged Hair Repair</p>
          <div class="flex justify-between items-center mx-2">
            <span>
              <h6 class="text-sm">500 NGN</h6>
              <p class="text-gray-500 text-sm"><span class="text-linethrough">700</span>NGN</p>
            </span>
            <button class="bg-black text-white text-[.7rem] rounded-full p-2">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <!-- showcase -->
    <div class="mt-10 ml-10">
      <div class="flex justify-center gap-10 max-h-96">
        <div class="w-full h-full">
          <img :src="imageBanner" alt="" class="w-full h-96 object-cover" />
        </div>

        <div class="grid grid-cols-2 place-items-center gap-5 w-full h-96">
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
        </div>
      </div>
    </div>
    <div class="mt-10 ml-10">
      <div class="flex justify-between gap-10 max-h-96">
        <div class="grid grid-cols-2 gap-5 place-items-center w-full h-96">
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
          <img :src="imageBanner" alt="" class="h-[6rem] w-full" />
        </div>
        <div class="w-full h-full">
          <img :src="imageBanner" alt="" class="w-full h-96 object-cover" />
        </div>
      </div>
    </div>
    <div class="mt-20 ml-10">
      <div class="flex justify-between h-96">
        <div class="w-full">
          <img :src="imageBanner" alt="" class="h-full w-3/4 object-cover" />
        </div>
        <form
          class="w-full h-full border-l-2 border-[#ccc] flex justify-center flex-col items-center"
        >
          <h3 class="text-5xl">Contact Me For More Update</h3>
          <p class="text-sm text-center my-5">
            Sign up now to hear about our latest offers, new products,<br />
            collaborations, all things straight to your inbox.
          </p>
          <div class="flex justify-center items-center gap-2 w-full">
            <label for="email"></label>
            <input
              type="text"
              name="email"
              min="8"
              placeholder="Your e-mail"
              class="border border-[#ccc] p-1 h-10 rounded-md text-[1rem] w-[40%]"
            />
            <button class="bg-black text-white w-24 h-10 p-1 text-[.7rem] rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from './Header.vue'
import imageBanner from '../assets/images/image-banner.jpg'
import Footer from './Footer.vue'
</script>

<style>
</style>