


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

      <form class="flex justify-center flex-col w-3/4" @submit.prevent="">
        <input
          v-for="step in displayedFormSteps"
          :key="step.name"
          :type="step.type"
          :name="step.name"
          :placeholder="step.placeholder"
          v-model="step.value"
          minlength="5"
          maxlength="50"
          class="p-2 text-[1rem] placeholder:text-sm w-full mb-3 border border-gray-400 rounded hover:bg-[#ff95001e] focus:outline-yellow-900 transition-all"
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
          class="w-1/4 my-10 p-2.5 text-amber-50 rounded text-sm bg-[#4A5559] hover:opacity-90"
          @click="nextStep"
          v-if="activeSlide < formSteps.length"
        >
          {{ activeSlide < formSteps.length / 2 - 1 ? 'Next' : 'Submit' }}
        </button>
      </form>
      <div>
        <small class="text-gray-800">Don't have an account?</small>
        <router-link
          :to="{ name: 'login' }"
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
import { onMounted, onUnmounted, ref, computed } from 'vue' // Import computed
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

const formSteps = ref([
  // Made formSteps reactive with ref
  {
    value: '',
    type: 'email',
    placeholder: 'Email address',
    name: 'email',
  },
  {
    value: '',
    type: 'text', // Changed to text for username, but could be email if unique
    placeholder: 'Username',
    name: 'username',
  },
  {
    value: '',
    type: 'password',
    placeholder: 'Password',
    name: 'password',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Firstname',
    name: 'firstname',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Lastname',
    name: 'lastname',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Phone number',
    name: 'phone',
  },
])

const activeSlide = ref(0)

const displayedFormSteps = computed(() => {
  const startIndex = activeSlide.value * 2
  const endIndex = startIndex + 2

  // Basic logic to show pairs of inputs
  if (startIndex < formSteps.value.length) {
    return formSteps.value.slice(startIndex, endIndex)
  }

  return formSteps.value.slice(0, 2)
})

const nextStep = () => {
  if (activeSlide.value * 2 + 2 < formSteps.value.length) {
    activeSlide.value++
  }
}
const prevStep = () => {
  if (activeSlide.value > 0) {
    activeSlide.value--
  }
}
</script>
  
  <style>
/* Your existing styles */
</style>