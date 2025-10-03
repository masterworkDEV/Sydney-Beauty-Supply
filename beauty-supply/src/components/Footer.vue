<template>
  <footer
    v-if="footer.footerState"
    class="mt-14 pt-24 px-24 pb-0 max-xl:pt-20 max-xl:px-20 max-lg:pt-16 max-lg:px-20 max-md:pt-14 max-md:px-14 max-sm:pt-5 max-sm:px-5 border-t border-[#ddd]"
  >
    <div class="flex gap-40 max-xl:gap-30 max-lg:gap-10 max-lg:flex-col">
      <div>
        <h3 class="font-semibold text-xl mb-4 max-sm:mb-3">MzChi</h3>
        <p class="mb-4 max-sm:text-sm max-sm:mb-3">
          455 West, Orchid Street, Egbeda, Lagos Nigeria
        </p>
        <ul class="flex gap-3">
          <li v-for="i in icons" :key="i.icon.iconName">
            <font-awesome-icon :icon="i.icon" size="xl" />
          </li>
        </ul>
      </div>
      <div
        class="w-full flex place-content-center justify-center items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10"
      >
        <div class="w-full">
          <p class="text-[1rem] mb-3 font-semibold">Support</p>
          <ul class="w-full">
            <li
              v-for="support in supports"
              :key="support"
              class="quick-links text-[1rem] max-sm:text-sm mb-3"
            >
              <a href="#">{{ support }}</a>
            </li>
          </ul>
        </div>
        <div class="w-full">
          <p class="text-[1rem] mb-3 font-semibold">Policy</p>
          <ul class="w-full">
            <li
              v-for="policy in policies"
              :key="policy"
              class="text-[1rem] mb-3 capitalize max-sm:text-sm"
            >
              <a href="#">{{ policy }}</a>
            </li>
          </ul>
        </div>

        <div class="w-full">
          <p class="text-[1rem] mb-3 font-semibold">Sign Up For Email</p>
          <form
            class="w-full h-full flex justify-center flex-col items-center"
            @submit.prevent="subscribe"
          >
            <div class="flex justify-center items-center gap-2 w-full relative">
              <input
                v-model="email"
                type="email"
                name="email"
                min="6"
                placeholder="Your E-mail"
                required
                class="border border-[#ccc] p-2.5 w-full max-xl:p-2 placeholder:pl-3 placeholder:text-sm"
              />
              <button
                type="submit"
                class="absolute bg-black border text-sm text-white p-2 max-x:p-1.5 hover:opacity-95 cursor-pointer right-1"
              >
                SUBSCRIBE
              </button>
            </div>
            <p
              class="tracking-normal leading-relaxed text-sm max-sm:text-xs my-2 max-sm:text-center"
            >
              Sign up now to hear about our latest offers, new products, collaborations, all things
              straight to your inbox.
            </p>
            <p
              v-if="subscriptionMessage"
              class="mt-4 text-sm text-center"
              :class="subscriptionStatus === 'success' ? 'text-green-600' : 'text-red-600'"
            >
              {{ subscriptionMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
    <p class="text-center mt-10 text-[.8rem] max-sm:text-[.6rem] max-sm:mt-10">
      @2025 MzChi Clothing <span class="text-pink-600">&</span> Design. All Rights Reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
import { navState } from '@/stores/navState'

const footer = navState()

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSnapchat,
  faTiktok,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const supports = ref([
  'FAQs',
  'Track Your Order',
  'Warranty Registration',
  'Shipping Details',
  'Terms & Conditions',
])

const policies = ref([
  'privacy policy',
  'warranty policy',
  'cooperate policy',
  'registration complaints',
])

const icons = ref([
  {
    icon: faFacebook,
  },
  {
    icon: faInstagram,
  },
  {
    icon: faPinterest,
  },

  {
    icon: faTiktok,
  },
  {
    icon: faTwitter,
  },
])
</script>

<style scoped>
.quick-links:hover {
  text-decoration: underline #333 2px;
  opacity: 0.9;
}
</style>