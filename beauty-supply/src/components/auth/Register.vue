<template>
  <main class="flex flex-row-reverse items-center max-sm:mt-10">
    <div class="w-full h-full mx-14 max-xl:mx-7 max-sm:mx-5">
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
        <h1 class="text-5xl max-xl:text-4xl max-sm:text-2xl">Hello,<br />Welcome Back</h1>
        <small class="text-[#333]">Hello welcome back to your special place.</small>
      </div>

      <form class="flex justify-center flex-col w-3/4 max-sm:w-full" @submit.prevent="">
        <div v-for="step in displayedFormSteps" :key="step.name" class="mb-3">
          <input
            :type="step.type"
            :name="step.name"
            :placeholder="step.placeholder"
            v-model="step.value"
            minlength="5"
            maxlength="50"
            class="p-2 text-[1rem] placeholder:text-sm w-full border border-gray-400 rounded hover:bg-[#ff95001e] focus:outline-yellow-900 transition-all"
            @input="step.error = ''"
          />
          <p v-if="step.error" class="text-red-500 text-xs mt-1">{{ step.error }}</p>
        </div>

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
          class="w-1/4 my-10 max-sm:w-full p-2.5 text-amber-50 rounded text-sm bg-[#4A5559] hover:opacity-90"
          @click="activeSlide < formSteps.length / 2 - 1 ? nextStep() : submitForm()"
        >
          {{ activeSlide < formSteps.length / 2 - 1 ? 'Next' : 'Submit' }}
        </button>
      </form>
      <div>
        <small class="text-gray-800">Already have an account?</small>
        <router-link
          :to="{ name: 'login' }"
          class="text-xs font-bold text-[#4A5559] hover:underline"
          >Sign In</router-link
        >
      </div>
    </div>
    <div class="w-full h-screen relative max-sm:hidden">
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
import type { AnyCnameRecord } from 'dns'
import { authStore } from '@/stores/authStore'

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
  {
    value: '',
    type: 'email',
    placeholder: 'Email address',
    name: 'email',
    rules: [
      (v: any) => !!v || 'Email is required',
      (v: any) => /.+@.+\..+/.test(v) || 'Email must be valid',
    ],
    error: '',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Username',
    name: 'username',
    rules: [
      (v: any) => !!v || 'Username is required',
      (v: any) => (v && v.length >= 5) || 'Username must be at least 5 characters',
    ],
    error: '',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Firstname',
    name: 'firstName',
    rules: [(v: any) => !!v || 'First name is required'],
    error: '',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Lastname',
    name: 'lastName',
    rules: [(v: any) => !!v || 'Last name is required'],
    error: '',
  },
  {
    value: '',
    type: 'text',
    placeholder: 'Phone number',
    name: 'phoneNumber',
    rules: [
      (v: any) => !!v || 'Phone number is required',
      (v: any) => /^\d{10,15}$/.test(v) || 'Phone number must be 10-15 digits',
    ],
    error: '',
  },
  {
    value: '',
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    rules: [
      (v: any) => !!v || 'Password is required',
      (v: any) => (v && v.length >= 8) || 'Password must be at least 8 characters',
      (v: any) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
      (v: any) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
      (v: any) => /[0-9]/.test(v) || 'Password must contain a number',
    ],
    error: '',
  },
])

const displayedFormSteps = computed(() => {
  const startIndex = activeSlide.value * 2
  const endIndex = startIndex + 2

  if (startIndex < formSteps.value.length) {
    return formSteps.value.slice(startIndex, endIndex)
  }

  return formSteps.value.slice(0, 2)
})

const activeSlide = ref(0)

const validateStep = () => {
  let isValid = true
  displayedFormSteps.value.forEach((step: any) => {
    step.error = ''
    for (const rule of step.rules) {
      const result = rule(step.value)
      if (typeof result === 'string') {
        step.error = result
        isValid = false
        break
      }
    }
  })
  return isValid
}

const nextStep = () => {
  if (validateStep()) {
    if (activeSlide.value * 2 + 2 < formSteps.value.length) {
      activeSlide.value++
    } else {
      submitForm()
    }
  }
}

const useAuthStore = authStore()

const submitForm = () => {
  if (validateStep()) {
    const formData = formSteps.value.reduce((acc: any, step) => {
      acc[step.name] = step.value
      return acc
    }, {})

    useAuthStore.handleRegisteration(formData)
  } else {
    console.log('Form has validation errors. Please correct them.')
  }
}

// const prevStep = () => {
//   if (activeSlide.value > 0) {
//     activeSlide.value--
//   }
// }
</script>
  
  <style>
/* Your existing styles */
</style>