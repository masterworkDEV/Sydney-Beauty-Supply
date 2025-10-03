<template>
  <main class="flex flex-row-reverse items-center max-sm:mt-10">
    <div class="w-2/4 max-lg:w-3/4 max-md:w-full h-full mx-10 max-xl:mx-7 max-sm:mx-5">
      <router-link
        name="logo"
        to="/"
        class="flex justify-end items-center space-x-2 rtl:space-x-reverse"
      >
        <b>Mz<span class="text-pink-400">chi</span> </b>
      </router-link>
      <div class="my-10">
        <h1 class="text-5xl max-xl:text-4xl max-sm:text-2xl font-semibold">
          Hello,<br />Welcome Back
        </h1>
        <p class="text-[#333]">Hello welcome back to your special place.</p>
      </div>

      <form class="flex justify-center flex-col w-full max-md:w-full" @submit.prevent="handleLogin">
        <!-- email -->
        <div>
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
        </div>
        <p v-if="emailError" class="text-red-500 text-xs mb-3">{{ emailError }}</p>

        <!-- password -->
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
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
          <button
            type="button"
            class="absolute top-[45%] translate-y-[-50%] right-5 text-xs cursor-pointer"
            @click="showPassword = !showPassword"
          >
            <span v-if="showPassword"> Hide Password </span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>

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
          class="w-1/4 max-sm:w-full my-10 p-2.5 text-white rounded text-sm bg-black hover:opacity-90"
          :disabled="!isFormValid || isLoading"
          :class="{ 'bg-gray-300 cursor-not-allowed': !isFormValid || isLoading }"
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

import image from '../../assets/images/login-image.jpg'

// call navstate to toggle both and footer upon mount
import { navState } from '@/stores/navState'
import { faScissors } from '@fortawesome/free-solid-svg-icons'

const updateNavState = navState()
onMounted(() => {
  updateNavState.navState = !updateNavState.navState
  updateNavState.footerState = !updateNavState.footerState
})

onUnmounted(() => {
  updateNavState.navState = true
  updateNavState.footerState = true
})

const showPassword = ref<boolean>(false) // Toggle password type

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

<style scoped>
svg {
  width: 25px;
  height: 25px;
}
</style>