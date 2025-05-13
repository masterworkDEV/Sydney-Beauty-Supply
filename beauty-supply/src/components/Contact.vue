<template>
  <section class="mt-20 max-sm:h-screen ml-12 max-xl:ml-7 max-sm:mx-5">
    <div class="flex items-center justify-between h-full max-sm:flex-col max-sm:pt-10">
      <div
        class="w-[90%] max-xl:w-3/4 max-sm:w-full border-r-2 border-[#ccc] max-sm:border-r-0 max-sm:border-b-1 max-sm:pb-4"
      >
        <img
          :src="imageBanner"
          alt="Daily skin care bundle"
          class="w-full h-96 pr-4 max-sm:pr-0 objective-cover"
        />
      </div>
      <form
        class="w-full h-full flex justify-center flex-col items-center"
        @submit.prevent="subscribe"
      >
        <h3 class="text-4xl max-xl:text-3xl max-sm:text-2xl text-center">
          Contact Me For More Update
        </h3>
        <p
          class="tracking-normal text-sm text-center max-xl:px-2 my-5 max-sm:text-[.8rem] max-sm:px-0"
        >
          Sign up now to hear about our latest offers, new products,<br />
          collaborations, all things straight to your inbox.
        </p>
        <div class="flex justify-center items-center gap-2 w-full">
          <label for="email"></label>
          <input
            v-model="email"
            type="email"
            name="email"
            min="6"
            placeholder="Your e-mail"
            required
            class="border border-[#ccc] h-10 max-xl:h-8 rounded text-[1rem] w-[40%] max-xl:w-2/4 max-xl:p-0 placeholder:pl-3 placeholder:text-sm"
          />
          <button
            type="submit"
            class="bg-amber-950 text-white w-24 h-10 max-xl:h-8 max-xl:p-0 text-[.7rem] max-sm:w-20 rounded hover:opacity-95 cursor-pointer"
          >
            SUBSCRIBE
          </button>
        </div>
        <p
          v-if="subscriptionMessage"
          class="mt-4 text-sm text-center"
          :class="subscriptionStatus === 'success' ? 'text-green-600' : 'text-red-600'"
        >
          {{ subscriptionMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// static image

import imageBanner from '../assets/images/image-banner.png'

const email = ref('')
const subscriptionMessage = ref('')
const subscriptionStatus = ref<'success' | 'error' | null>(null) // Added type

const subscribe = () => {
  // Basic email validation (use a better library in production)
  if (!email.value.includes('@')) {
    subscriptionMessage.value = 'Please enter a valid email address.'
    subscriptionStatus.value = 'error'
    return
  }

  const success = Math.random() > 0.2 // 80% chance of success

  if (success) {
    subscriptionMessage.value = 'Thank you for subscribing!'
    subscriptionStatus.value = 'success'
    email.value = ''
  } else {
    subscriptionMessage.value = 'Sorry, there was an error. Please try again.'
    subscriptionStatus.value = 'error'
  }
  // clear after 3 sec
  setTimeout(() => {
    subscriptionMessage.value = ''
  }, 3000)
}
</script>

