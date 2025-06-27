<template>
  <main class="flex flex-row-reverse">
    <div class="w-3/4 h-full m-20">
      <a href="/" class="flex justify-end items-center space-x-2 rtl:space-x-reverse">
        <span
          class="self-center text-xl max-xl:text-[1rem] font-bold whitespace-nowrap border-b-2 border-[#E78F2D] hover:translate-x-[40%] transition-all"
          >Sk
        </span>
        <span class="max-sm:text-sm hover:translate-x-[-50%] transition-all">
          <FontAwesomeIcon :icon="faScissors" rotation="180" size="sm" />
        </span>
      </a>
      <div class="my-10">
        <h1 class="text-5xl">Hello,<br />Welcome Back</h1>
        <small class="text-[#333]">Hello welcome back to your special place.</small>
      </div>

      <form class="flex justify-center flex-col w-3/4">
        <input
          type="text"
          name="email"
          minlength="5"
          maxlength="50"
          class="p-2 text-[1rem] placeholder:text-sm w-full mb-3 border border-gray-400 rounded hover:bg-[#ff95001e] focus:outline-yellow-900 transition-all"
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          id="currentPassword"
          autocomplete="current-password"
          minlength="8"
          maxlength="50"
          class="p-2 text-[1rem] placeholder:text-sm w-full mb-3 border border-gray-400 rounded hover:bg-[#ffae0022] focus:outline-yellow-900 transition-all"
          placeholder="Password"
        />
        <div class="w-full flex justify-between items-center">
          <div class="flex items-center gap-1">
            <input
              type="checkbox"
              checked="true"
              class="rounded-lg checked:bg-yellow-900 text-yellow-900 focus:ring-yellow-900"
            />

            <label for="checkbox" class="text-xs text-[#333]">Remember me </label>
          </div>
          <router-link :to="{ name: 'home' }" class="text-xs text-[#333]"
            >Forgot password</router-link
          >
        </div>
        <button
          type="submit"
          class="w-1/4 my-10 p-2.5 text-amber-50 rounded text-sm bg-[#4A5559] hover:opacity-90"
        >
          Sign In
        </button>
      </form>
      <div>
        <small class="text-gray-800">Don't have an account?</small>
        <router-link
          :to="{ name: 'register' }"
          class="text-xs font-bold text-[#4A5559] hover:underline"
          >Sign Up</router-link
        >
      </div>
    </div>
    <div class="w-full h-screen relative">
      <img :src="image" alt="login background image" class="w-full h-full" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import image from '../../assets/images/login.jpg'

// call navstate to toggle both and footer upon mount
import { navState } from '@/stores/navState'
import { faScissors } from '@fortawesome/free-solid-svg-icons'

const updateNavState = navState()
onMounted(() => {
  updateNavState.headerState = !updateNavState.headerState
  updateNavState.footerState = !updateNavState.footerState
})

onUnmounted(() => {
  updateNavState.headerState = true
  updateNavState.footerState = true
})
</script>

<style>
</style>