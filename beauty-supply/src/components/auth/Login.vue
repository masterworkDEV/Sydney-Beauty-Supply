<template>
  <main class="flex flex-row-reverse items-center max-sm:mt-10">
    <div class="w-full h-full mx-14 max-xl:mx-7 max-sm:mx-5">
      <a href="/" class="flex justify-end items-center space-x-2rtl:space-x-reverse">
        <span
          class="self-center text-xl max-xl:text-[1rem] font-bold whitespace-nowrap border-b-2 border-[#E78F2D] hover:translate-x-[40%] transition-all"
          >Sk
        </span>
        <span class="max-sm:text-sm hover:translate-x-[-50%] transition-all">
          <FontAwesomeIcon :icon="faScissors" rotation="180" size="sm" />
        </span>
      </a>
      <div class="my-10">
        <h1 class="text-5xl max-xl:text-4xl max-sm:text-2xl">Hello,<br />Welcome Back</h1>
        <small class="text-[#333]">Hello welcome back to your special place.</small>
      </div>

      <form class="flex justify-center flex-col w-3/4 max-md:w-full" @submit.prevent="handleLogin">
        <input
          type="text"
          name="email"
          minlength="5"
          maxlength="50"
          v-model="email"
          class="p-2 text-[1rem] placeholder:text-sm w-full mb-3 border rounded hover:bg-[#ff95001e] focus:outline-yellow-900 transition-all"
          :class="emailError ? 'border-red-500' : 'border-gray-400'"
          placeholder="Email address"
          @input="validateEmail"
          :disabled="isLoading"
        />
        <p v-if="emailError" class="text-red-500 text-xs mb-3">{{ emailError }}</p>

        <input
          type="password"
          name="password"
          v-model="password"
          id="currentPassword"
          autocomplete="current-password"
          minlength="8"
          maxlength="50"
          class="p-2 text-[1rem] placeholder:text-sm w-full mb-2 border rounded hover:bg-[#ffae0022] focus:outline-yellow-900 transition-all"
          :class="passwordError ? 'border-red-500' : 'border-gray-400'"
          placeholder="Password"
          @input="validatePassword"
          :disabled="isLoading"
        />
        <p v-if="passwordError" class="text-red-500 text-xs mb-3">{{ passwordError }}</p>

        <div class="w-full flex justify-between items-center">
          <div class="flex items-center gap-1">
            <input
              type="checkbox"
              checked="true"
              class="rounded-lg checked:bg-yellow-900 text-yellow-900 focus:ring-yellow-900"
              :disabled="isLoading"
            />

            <label for="checkbox" class="text-xs text-[#333]">Remember me </label>
          </div>
          <router-link :to="{ name: 'home' }" class="text-xs text-[#333]"
            >Forgot password</router-link
          >
        </div>
        <button
          type="submit"
          class="w-1/4 max-sm:w-full my-10 p-2.5 text-amber-50 rounded text-sm bg-[#4A5559] hover:opacity-90"
          :disabled="!isFormValid || isLoading"
          :class="{ 'opacity-50 cursor-not-allowed': !isFormValid || isLoading }"
        >
          <span v-if="isLoading">Loading...</span>
          <span v-else>Sign In</span>
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
    <div class="w-full h-screen relative max-sm:hidden">
      <img :src="image" alt="login background image" class="w-full h-full object-cover" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
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

// use auth store
import { authStore } from '@/stores/authStore'

const store = authStore()

const email = ref<string>('')
const password = ref<string>('')
const emailError = ref<string | null>(null)
const passwordError = ref<string | null>(null)
const isLoading = ref<boolean>(false) // New loading state variable

// --- Validation Functions ---

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Please enter a valid email address.'
  } else {
    emailError.value = null
  }
}

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = 'Password is required.'
  } else if (password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters long.'
  } else {
    passwordError.value = null
  }
}

// --- Form Validation Check ---
const isFormValid = computed(() => {
  return !emailError.value && !passwordError.value && email.value && password.value
})

// --- Login Handler ---
const handleLogin = async () => {
  validateEmail()
  validatePassword()

  if (isFormValid.value) {
    isLoading.value = true
    try {
      await store.handleLogin({
        email: email.value,
        password: password.value,
      })
    } catch (error) {
      // set error comes in here but, i have ones that alerts a user on their auth status.
      console.error('Login failed:', error)
    } finally {
      isLoading.value = false
    }
  } else {
    console.error('Form has validation errors.')
  }
}
</script>