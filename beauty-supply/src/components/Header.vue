<template>
  <div
    :class="isActive && 'active'"
    class="header bg-white fixed right-0 left-0 top-0 py-4 max-sm:py-3 flex items-center justify-between px-12 max-xl:px-7 max-sm:px-5 transition-all z-20"
  >
    <button class="menu-btn hidden absolute right-3 max-sm:block hover:border">
      <FontAwesomeIcon
        :icon="faTimes"
        v-if="isMenu"
        :color="`${isActive ? 'white' : 'black'}`"
        @click="handleMenuClose"
        stroke-width="1"
      />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-else
        @click="handleMenuOpen"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 7L7 7M20 7L11 7"
            :stroke="`${isActive ? 'white' : 'black'}`"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M20 17H17M4 17L13 17"
            :stroke="`${isActive ? 'white' : 'black'}`"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M4 12H7L20 12"
            :stroke="`${isActive ? 'white' : 'black'}`"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
    </button>

    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span
        class="self-center text-xl max-xl:text-[1rem] font-semibold whitespace-nowrap text-black"
        :class="isActive && 'text-white'"
        >MBS</span
      >
    </a>
    <nav class="p-1" :class="isActive && 'bg-[#fafafa] rounded max-sm:hidden'">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="nav-links flex justify-center gap-10 max-xl:gap-5">
          <li class="link text-sm transition-all" :class="isActive && 'active dark:text-black  '">
            <a href="#" aria-current="page">Home</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active dark:text-black  '">
            <a href="#about">Hair Care</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active dark:text-black  '">
            <a href="#service">Skin & Beauty</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active dark:text-black  '">
            <a href="#projects">Clothing</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active dark:text-black   '">
            <a href="#contact">Accessories</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active dark:text-black  '">
            <a href="#contact">Specialty</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="max-sm:hidden">
      <ul class="flex items-center gap-5 max-xl:gap-3">
        <li>
          <FontAwesomeIcon :icon="faSearch" :color="`${isActive ? 'white' : 'black'}`" />
        </li>
        <li>
          <FontAwesomeIcon :icon="faBagShopping" :color="`${isActive ? 'white' : 'black'}`" />
        </li>
        <li class="flex items-end gap-2">
          <small :class="isActive ? 'text-white' : 'text-black'">NGN</small>
          <FontAwesomeIcon :icon="faArrowDown" :color="`${isActive ? 'white' : 'black'}`" />
        </li>
      </ul>
    </div>
  </div>
  <div
    v-if="isMenu"
    class="hidden max-sm:block w-3/4 h-full bg-white fixed top-10 right-0 z-40"
  ></div>
  <div v-if="isMenu" class="hidden max-sm:block fixed w-full h-full bg-[rgb(0,0,0,0.5)] z-20"></div>
</template>
<script setup lang="ts">
import {
  faArrowAltCircleDown,
  faArrowDown,
  faArrowDown19,
  faArrowDownAZ,
  faBagShopping,
  faHamburger,
  faSearch,
  faTarpDroplet,
} from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons/faArrowTurnDown'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { ref } from 'vue'

const isActive = ref<'true' | false>(false)
const isMenu = ref<'true' | false>(false)

window.addEventListener('scroll', () => {
  window.scrollY > 590 ? (isActive.value = 'true') : (isActive.value = false)
})

const handleMenuOpen = () => {
  isMenu.value = 'true'
}

const handleMenuClose = () => {
  isMenu.value = false
}
</script>
<style>
.header.active {
  background: linear-gradient(to bottom, #18171858, #0a070939, #08080839);
  backdrop-filter: blur(12px);
}

.link {
  padding: 0.3rem;
  transition: 0.3s ease;
  font-size: 0.8rem;
}
.link:hover {
  text-decoration: underline pink 2px;
  scale: 0.95;
}
.link.active {
  color: #333;
}

.menu-btn {
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-btn > svg {
  width: 80%;
  height: 100%;
}
</style>
