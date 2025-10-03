<template>
  <transition name="menu">
    <div
      v-if="props.isMenu"
      class="hidden max-sm:flex flex-col justify-between w-full h-full bg-[#007bff] fixed right-0 z-40 overflow-auto pb-30"
    >
      <!-- close menu -->
      <button
        class="menu-btn hidden absolute top-2 right-3 max-sm:flex hover:border active:animate__animated animate__fadeIn"
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
      <ul class="mx-3 mt-20 flex flex-col justify-center items-start">
        <li
          class="text-sm mb-10 active:scale-105 active:bg-gray-100 active:text-white transition-all flex items-center gap-1.5"
          @click="emits('menuState', props.isMenu)"
          v-if="store.isAuthenticated"
        >
          <!--  check if there is a profile image available or else uses the the user's name-->
          <img :src="store.user.image" :alt="store.user?.username" v-if="store.user?.image" />
          <div
            v-else-if="store.isAuthenticated && !store.user?.image"
            class="bg-orange-300 w-8 h-8 border border-orange-500 text-white uppercase rounded-full flex justify-center items-center text-center"
          >
            <b> {{ store.user?.firstName.slice(0, 1) }}{{ store.user?.lastName.slice(0, 1) }}</b>
          </div>
          <a href="#" class="capitalize font-semibold"> {{ store.user?.username }} </a>
        </li>

        <li v-else></li>
        <li class="w-full">
          <router-link
            to="/"
            @click="emits('menuState', props.isMenu)"
            class="block p-2 text-sm mb-6 active:scale-105 active:bg-orange-300 transition-all hover:bg-orange-400 hover:text-white rounded font-semibold"
            active-class="bg-orange-400 text-white"
          >
            <div class="flex gap-5">
              <FontAwesomeIcon :icon="faHome" size="xl" />

              <span> Home </span>
            </div>
          </router-link>
        </li>
        <li class="w-full" v-if="store.isAuthenticated">
          <Router-link
            to="/dashboard"
            @click="emits('menuState', props.isMenu)"
            class="block p-2 text-sm mb-6 active:scale-105 active:bg-orange-300 transition-all hover:bg-orange-400 hover:text-white rounded font-semibold"
            active-class="bg-orange-400 text-white"
          >
            <div class="flex gap-5 items-center">
              <svg
                class="mobile-svgs"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9.5 5.75C9.91421 5.75 10.25 5.41421 10.25 5C10.25 4.58579 9.91421 4.25 9.5 4.25V5.75ZM4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75C5.91421 11.75 6.25 11.4142 6.25 11H4.75ZM9.5 4.25C9.08579 4.25 8.75 4.58579 8.75 5C8.75 5.41421 9.08579 5.75 9.5 5.75V4.25ZM18.75 11C18.75 11.4142 19.0858 11.75 19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11H18.75ZM10.25 5C10.25 4.58579 9.91421 4.25 9.5 4.25C9.08579 4.25 8.75 4.58579 8.75 5H10.25ZM8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75C9.91421 11.75 10.25 11.4142 10.25 11H8.75ZM9.5 11.75C9.91421 11.75 10.25 11.4142 10.25 11C10.25 10.5858 9.91421 10.25 9.5 10.25V11.75ZM5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75V10.25ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25V11.75ZM6.25 11C6.25 10.5858 5.91421 10.25 5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11H6.25ZM20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25C19.0858 10.25 18.75 10.5858 18.75 11H20.25ZM9.5 4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25ZM4.75 9V11H6.25V9H4.75ZM9.5 5.75H15.5V4.25H9.5V5.75ZM15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9H20.25C20.25 6.37665 18.1234 4.25 15.5 4.25V5.75ZM18.75 9V11H20.25V9H18.75ZM8.75 5V11H10.25V5H8.75ZM9.5 10.25H5.5V11.75H9.5V10.25ZM9.5 11.75H19.5V10.25H9.5V11.75ZM4.75 11V15H6.25V11H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H15.5V18.25H9.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V11H18.75V15H20.25Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
              <span> Dashboard </span>
            </div>
          </Router-link>
        </li>
        <li class="w-full">
          <Router-link
            to="/store"
            @click="emits('menuState', props.isMenu)"
            class="block p-2 text-sm mb-6 active:scale-105 active:bg-orange-300 transition-all hover:bg-orange-400 hover:text-white rounded font-semibold"
            active-class="bg-orange-400 text-white"
          >
            <div class="flex gap-5">
              <FontAwesomeIcon :icon="faStore" size="xl" />

              <span> Store </span>
            </div>
          </Router-link>
        </li>
        <li class="collections pl-2 mb-6 w-full transition-all duration-300 ease-in-out">
          <div class="flex gap-5 items-center">
            <FontAwesomeIcon :icon="faCartShopping" size="xl" />
            <span class="text-sm font-semibold"> Collections </span>
            <svg
              class="mobile-svgs"
              viewBox="0 0 32 32"
              version="1.1"
              rotate="90"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="icomoon-ignore"></g>
                <path
                  d="M19.159 16.767l0.754-0.754-6.035-6.035-0.754 0.754 5.281 5.281-5.256 5.256 0.754 0.754 3.013-3.013z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <!-- Wrapped/Nested (Men and Women) route-->
          <ul class="hidden mt-2">
            <li class="mb-2 p-2">Men</li>
            <li class="mb-2 p-2">Women</li>
          </ul>
        </li>
        <li class="w-full">
          <Router-link
            to="/cart-store"
            @click="emits('menuState', props.isMenu)"
            class="block p-2 text-sm mb-6 active:scale-105 active:bg-orange-300 transition-all hover:bg-orange-400 hover:text-white rounded font-semibold"
            active-class="bg-orange-400 text-white"
          >
            <div class="flex gap-5">
              <FontAwesomeIcon :icon="faShoePrints" size="xl" />

              <span> Footwares </span>
            </div>
          </Router-link>
        </li>
        <li class="w-full">
          <Router-link
            to="/cart-store"
            @click="emits('menuState', props.isMenu)"
            class="block p-2 text-sm mb-6 active:scale-105 active:bg-orange-300 transition-all hover:bg-orange-400 hover:text-white rounded font-semibold"
            active-class="bg-orange-400 text-white"
          >
            <div class="flex gap-5">
              <FontAwesomeIcon :icon="faCartShopping" size="xl" />

              <span> Shopping Cart </span>
            </div>
          </Router-link>
        </li>
      </ul>

      <!-- ONLY SHOW  WHEN USER IS AUTHENTICATED -->
      <div
        v-if="store.isAuthenticated"
        class="flex items-center gap-3 text-start mx-3"
        @click="store.handleLogout"
      >
        <svg
          class="mobile-svgs"
          fill="#000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          stroke="#000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M17,2H7C5.3,2,4,3.3,4,5v6h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4,4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H4v6c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V5C20,3.3,18.7,2,17,2z"
            ></path>
          </g>
        </svg>
        <p class="text-sm font-semibold">Sign Out</p>
      </div>
      <div class="flex text-center justify-center mx-5" v-else>
        <router-link
          name="login"
          to="/login"
          class="bg-black text-white text-sm w-full p-2 hover:opacity-90 rounded"
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
  faArrowsAlt,
  faBucket,
  faCartShopping,
  faCircle,
  faGenderless,
  faHome,
  faShirt,
  faShoePrints,
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


<style scoped>
.menu-enter-active {
  transition: all 0.35s ease;
  transition-delay: 100ms;
}
.menu-leave-active {
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.menu-enter-from {
  scale: 0;
  opacity: 0;
}

.menu-leave-to {
  scale: 1;
}

.mobile-svgs {
  width: 35px;
  height: 35px;
}

.collections:hover .mobile-svgs {
  rotate: 90deg;
}
.collections:hover .hidden {
  display: block;
  li:hover {
    background: rgb(237, 126, 30);
    border-radius: 0.32rem;
    color: #fff;
  }
}
</style>