<template>
  <footer
    v-if="footer.footerState"
    class="mt-20 max-sm:mt-0 pt-14 border-t-2 max-sm:pt-10 max-sm:border-t border-[#ccc]"
  >
    <div
      class="flex justify-start gap-24 px-12 max-xl:gap-10 max-xl:px-10 max-sm:gap-12 max-sm:grid max-sm:grid-cols-1 max-sm:px-5"
    >
      <h3 class="text-4xl max-xl:text-3xl max-sm:text-2xl text-center">
        SK Fashion & <br />Design
      </h3>
      <div class="flex justify-center gap-10 max-sm:grid max-sm:grid-cols-2">
        <div class="col">
          <p class="text-[.8rem] mb-4">QUICK LINKS</p>
          <ul>
            <li
              v-for="link in quickLinks"
              :key="link"
              class="quick-links text-[.8rem] mb-3 capitalize"
            >
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="text-[.8rem] mb-4">SUPPORT</p>
          <ul>
            <li v-for="support in supports" :key="support" class="quick-links text-[.8rem] mb-3">
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
              class="quick-links text-[.8rem] mb-3 capitalize"
            >
              <a href="#">{{ policy }}</a>
            </li>
          </ul>
        </div>

        <div class="col">
          <p class="text-[.8rem] mb-4 uppercase">Follow Us</p>
          <ul class="grid grid-cols-5 max-sm:grid-cols-3 max-sm:flex max-sm:flex-wrap">
            <li
              class="p-2 w-12 flex justify-center border border-[#ccc] max-sm:w-10 hover:bg-[#e78f2d] hover:has-[a]:scale-[1.1] overflow-hidden transition"
              v-for="icon in icons"
              :key="icon"
            >
              <a href="#">
                <FontAwesomeIcon :icon="icon.icon" size="1x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-center mt-10 pb-3 text-[.8rem] max-sm:text-[.55rem] max-sm:mt-10">
      @2025 Cosmetica Beauty Supply. Design by Haseeb.ur.rehman All Rights Reserved.
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
    icon: faSnapchat,
  },
  {
    icon: faTiktok,
  },
  {
    icon: faTwitter,
  },
  {
    icon: faYoutube,
  },
])
</script>

<style scoped>
.quick-links:hover {
  text-decoration: underline #333 2px;
  opacity: 0.9;
}
</style>