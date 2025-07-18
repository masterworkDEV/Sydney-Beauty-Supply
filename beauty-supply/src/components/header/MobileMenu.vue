<template>
  <transition name="menu">
    <div
      v-if="props.isMenu"
      class="hidden max-sm:flex flex-col justify-between w-3/4 h-full bg-white fixed right-0 z-40 overflow-auto pb-30"
    >
      <!-- close menu -->
      <button
        class="menu-btn hidden absolute top-8 right-3 max-sm:block hover:border active:animate__animated animate__fadeIn"
      >
        <svg
          @click="emits('menuState', props.isMenu)"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>cancel</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
                <polygon
                  id="Close"
                  points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <ul class="m-7 flex flex-col justify-center text-center items-start">
        <li
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white transition-all flex items-center gap-3"
          @click="emits('menuState', props.isMenu)"
        >
          <!--  check if there is a profile image available or else uses the the user's name-->
          <img :src="store.user.image" :alt="store.user?.username" v-if="store.user?.image" />
          <div
            v-else-if="store.isAuthenticated && !store.user?.image"
            class="bg-green-500 w-9 h-9 border border-green-300 text-white uppercase rounded-full flex justify-center items-center text-center"
          >
            {{ store.user?.username.slice(0, 1) }}
          </div>
          <a href="#"> {{ store.user?.username }} </a>
        </li>

        <li
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white transition-all flex items-center gap-3"
          @click="emits('menuState', props.isMenu)"
        >
          <FontAwesomeIcon :icon="faHome" size="xl" />

          <router-link to="/"> Home </router-link>
        </li>
        <li
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white transition-all flex items-center gap-3"
          @click="emits('menuState', props.isMenu)"
        >
          <FontAwesomeIcon :icon="faStore" size="xl" />
          <router-link to="/store">Store </router-link>
        </li>

        <li
          @click="emits('menuState', props.isMenu)"
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white flex items-center gap-3 transition-all"
        >
          <FontAwesomeIcon :icon="faShirt" size="xl" />

          <a href="#projects">Clothing</a>
        </li>
        <li
          @click="emits('menuState', props.isMenu)"
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white transition-all flex items-center gap-3"
        >
          <FontAwesomeIcon :icon="faBucket" size="xl" />

          <a href="#contact"> Accessories </a>
        </li>

        <li
          @click="emits('menuState', props.isMenu)"
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white transition-all flex items-center gap-3"
        >
          <FontAwesomeIcon :icon="faCartShopping" size="xl" />

          <Router-link to="/cart-store"> Shopping Cart </Router-link>
        </li>
      </ul>

      <!-- ONLY SHOW  WHEN USER IS AUTHENTICATED -->
      <div
        v-if="store.isAuthenticated"
        class="flex items-center gap-3 text-start mx-7"
        @click="store.handleLogout"
      >
        <FontAwesomeIcon :icon="faSignOut" color="#f82020cf" size="xl" />
        <p class="text-red-600 text-sm">Sign Out</p>
      </div>
      <div class="flex text-center justify-center mx-7" v-else>
        <router-link
          to="/login"
          class="bg-[#e78f2d] text-white text-sm w-full p-2 hover:opacity-90 rounded"
          >Sign In</router-link
        >
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { authStore } from '@/stores/authStore'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBucket,
  faCartShopping,
  faCircle,
  faHome,
  faShirt,
  faSignOut,
  faStore,
} from '@fortawesome/free-solid-svg-icons'

interface Menu {
  isMenu: boolean
}

const props = defineProps<Menu>()
const emits = defineEmits(['menuState'])

// Auth store
const store = authStore()
</script>


<style>
</style>