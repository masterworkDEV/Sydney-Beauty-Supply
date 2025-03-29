<template>
  <footer class="mt-20 max-sm:mt-0 pt-14 border-t-2 max-sm:pt-10 max-sm:border-t border-[#ccc]">
    <div
      class="flex justify-start gap-24 px-12 max-xl:gap-10 max-xl:px-10 max-sm:gap-12 max-sm:grid max-sm:grid-cols-1 max-sm:px-5"
    >
      <h3 class="text-4xl max-xl:text-3xl max-sm:text-2xl text-center">
        Sydney Beauty <br />Supply
      </h3>
      <div class="flex justify-center gap-7 max-sm:grid max-sm:grid-cols-2">
        <div class="col">
          <p class="text-[.8rem] mb-4">QUICK LINKS</p>
          <ul>
            <li
              v-for="link in quickLinks"
              :key="link"
              class="text-[.8rem] mb-3 capitalize hover:underline hover:opacity-95"
            >
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="text-[.8rem] mb-4">SUPPORT</p>
          <ul>
            <li
              v-for="support in supports"
              :key="support"
              class="text-[.8rem] mb-3 hover:underline hover:opacity-95"
            >
              <a href="#">{{ support }}</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="text-[.8rem] mb-4">POLICY</p>
          <ul>
            <li
              v-for="policy in policies"
              :key="policy"
              class="text-[.8rem] mb-3 capitalize hover:underline hover:opacity-95"
            >
              <a href="#">{{ policy }}</a>
            </li>
          </ul>
        </div>

        <div class="col">
          <p class="text-[.8rem] mb-4 uppercase">Follow Us</p>
          <ul class="grid grid-cols-5 max-sm:grid-cols-3">
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faFacebook" size="1x" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faSnapchat" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faTwitter" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faInstagram" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faPinterest" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faYoutube" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faTiktok" />
              </a>
            </li>
            <li class="p-2 w-14 flex justify-center border border-[#ccc]">
              <a href="#">
                <FontAwesomeIcon :icon="faLinkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-center mt-10 pb-3 text-[.8rem] max-sm:text-[.55rem] max-sm:mt-10">
      @2025 Sydney Beauty Supply. Design by Haseeb.ur.rehman All Rights Reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
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

const quickLinks = ref([
  'home',
  'hair care',
  'skin & beauty',
  'men smartwatches',
  'clothing',
  'accessories',
  'blog',
])

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
</script>

