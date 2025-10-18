<template>
  <main class="flex flex-row-reverse items-center max-sm:pt-10">
    <div class="w-2/4 max-lg:w-3/4 max-md:w-full h-full mx-10 max-xl:mx-7 max-sm:mx-5">
      <router-link
        name="logo"
        to="/"
        class="flex justify-end items-center space-x-2 rtl:space-x-reverse"
      >
        <b>Mzchi </b>
      </router-link>
      <div class="my-10">
        <h1 class="text-5xl max-xl:text-4xl max-sm:text-2xl font-semibold">Register An Account</h1>
      </div>
      <form class="form w-full" @submit.prevent="handleLogin">
        <div class="flex-column">
          <label>Email </label>
        </div>
        <div class="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
            <g data-name="Layer 3" id="Layer_3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
              ></path>
            </g>
          </svg>
          <input
            placeholder="Enter your Email"
            class="input"
            type="text"
            v-model="email"
            :class="emailError ? 'border-red-500' : 'border-gray-400'"
            @input="validateEmail"
            :disabled="isLoading"
          />
        </div>
        <p v-if="emailError" class="text-red-500 text-xs mb-3">{{ emailError }}</p>

        <div class="flex-column">
          <label>Password </label>
        </div>
        <div class="inputForm relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
          <input
            placeholder="Enter your Password"
            class="input"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :class="passwordError ? 'border-red-500' : 'border-gray-400'"
            @input="validatePassword"
            :disabled="isLoading"
          />

          <button
            type="button"
            class="absolute top-[50%] translate-y-[-50%] right-5 text-xs cursor-pointer"
            @click="showPassword = !showPassword"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="showPassword"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 16H13L10.8368 13.3376C9.96488 13.7682 8.99592 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8L3.07945 4.30466C3.14989 4.22013 3.22229 4.13767 3.29656 4.05731L0 0H3L16 16ZM5.35254 6.58774C5.12755 7.00862 5 7.48941 5 8C5 9.65685 6.34315 11 8 11C8.29178 11 8.57383 10.9583 8.84053 10.8807L5.35254 6.58774Z"
                  fill="#000000"
                ></path>
                <path
                  d="M16 8L14.2278 10.1266L7.63351 2.01048C7.75518 2.00351 7.87739 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <svg v-else viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 8L3.07945 4.30466C4.29638 2.84434 6.09909 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8L12.9206 11.6953C11.7036 13.1557 9.90091 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <p v-if="passwordError" class="text-red-500 text-xs mb-3">{{ passwordError }}</p>
        <div class="flex-column">
          <label>Confirm Password </label>
        </div>
        <div class="inputForm relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
          <input
            placeholder="Enter your Password"
            class="input"
            :type="confirmShowPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            :class="confirmPasswordError ? 'border-red-500' : 'border-gray-400'"
            @input="handlePasswordConfirm"
            :disabled="isLoading"
          />

          <button
            type="button"
            class="absolute top-[50%] translate-y-[-50%] right-5 text-xs cursor-pointer"
            @click="confirmShowPassword = !confirmShowPassword"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="confirmShowPassword"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 16H13L10.8368 13.3376C9.96488 13.7682 8.99592 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8L3.07945 4.30466C3.14989 4.22013 3.22229 4.13767 3.29656 4.05731L0 0H3L16 16ZM5.35254 6.58774C5.12755 7.00862 5 7.48941 5 8C5 9.65685 6.34315 11 8 11C8.29178 11 8.57383 10.9583 8.84053 10.8807L5.35254 6.58774Z"
                  fill="#000000"
                ></path>
                <path
                  d="M16 8L14.2278 10.1266L7.63351 2.01048C7.75518 2.00351 7.87739 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <svg v-else viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 8L3.07945 4.30466C4.29638 2.84434 6.09909 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8L12.9206 11.6953C11.7036 13.1557 9.90091 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <p v-if="confirmPasswordError" class="text-red-500 text-xs mb-3">
          {{ confirmPasswordError }}
        </p>

        <div class="flex-row">
          <div>
            <input type="radio" />
            <label>Remember me </label>
          </div>
          <span class="span">Forgot password?</span>
        </div>
        <button
          class="button-submit"
          :disabled="!isFormValid || isLoading"
          :class="{ 'bg-gray-300 cursor-not-allowed': !isFormValid || isLoading }"
        >
          <span v-if="isLoading"> Submiting... </span>
          <span v-else>Sign Up</span>
        </button>
        <router-link to="/register" class="router-link"
          >Already have an account? <span class="span">Sign In</span></router-link
        >
        <p class="p line">Or With</p>

        <div class="flex-row">
          <button class="btn google">
            <svg
              xml:space="preserve"
              style="enable-background: new 0 0 512 512"
              viewBox="0 0 512 512"
              y="0px"
              x="0px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              width="20"
              version="1.1"
            >
              <path
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
C103.821,274.792,107.225,292.797,113.47,309.408z"
                style="fill: #fbbb00"
              ></path>
              <path
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                style="fill: #518ef8"
              ></path>
              <path
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                style="fill: #28b446"
              ></path>
              <path
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
C318.115,0,375.068,22.126,419.404,58.936z"
                style="fill: #f14336"
              ></path>
            </svg>

            Google</button
          ><button class="btn apple">
            <svg
              xml:space="preserve"
              style="enable-background: new 0 0 22.773 22.773"
              viewBox="0 0 22.773 22.773"
              y="0px"
              x="0px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              width="20"
              height="20"
              version="1.1"
            >
              <g>
                <g>
                  <path
                    d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
                  ></path>
                  <path
                    d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
                  ></path>
                </g>
              </g>
            </svg>

            Apple
          </button>
        </div>
      </form>
    </div>
    <div class="w-full h-screen relative max-sm:hidden">
      <img :src="image" alt="login background image" class="w-full h-full object-cover" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

// use stores
import { authStore } from '@/stores/authStore'
import { navState } from '@/stores/navState'

// Vue Toast
import { useToast } from 'vue-toastification'

//  Fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faScissors } from '@fortawesome/free-solid-svg-icons'

// Static Image
import image from '../../assets/images/login-image.jpg'

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
const confirmShowPassword = ref<boolean>(false) // Toggle password type

const store = authStore()
const toast = useToast()

const email = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')
const emailError = ref<string | null>(null)
const passwordError = ref<string | null>(null)
const confirmPasswordError = ref<string | null>(null)
const isLoading = ref<boolean>(false)

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

const handlePasswordConfirm = () => {
  if (!confirmPassword.value) {
    confirmPasswordError.value = 'Please confirm your password.'
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Password must match.'
  } else {
    confirmPasswordError.value = null
  }
}

// --- Form Validation Check ---
const isFormValid = computed(() => {
  return (
    !emailError.value &&
    !passwordError.value &&
    !confirmPasswordError.value &&
    email.value &&
    password.value &&
    confirmPassword.value
  )
})

// --- Login Handler ---
const handleLogin = async () => {
  validateEmail()
  validatePassword()
  handlePasswordConfirm()

  if (isFormValid.value) {
    isLoading.value = true
    try {
      await store.handleLogin({
        email: email.value,
        password: password.value,
      })
    } catch (error) {
      // set error comes in here but, i have ones that alerts a user on their auth status.
      toast.error('Invalid credentials, try again.')
      console.error('Login failed:', error)
    } finally {
      isLoading.value = false
    }
  } else {
    toast.error('Invalid credentials, try again.')
    console.error('Form has validation errors.')
  }
}
</script>

<style scoped>
svg {
  width: 25px;
  height: 25px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
}
</style>