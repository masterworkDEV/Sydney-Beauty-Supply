<template>
  <div
    :class="isActive && 'active'"
    class="header bg-white fixed right-0 left-0 top-0 py-4 max-sm:py-3 flex items-center justify-between px-12 max-xl:px-7 max-sm:px-5 transition-all z-20"
  >
    <button
      class="menu-btn hidden absolute right-3 max-sm:block hover:border active:animate__animated animate__fadeIn"
    >
      <svg
        v-if="isMenu"
        @click="handleMenuClose"
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
      <!-- else -->

      <svg
        v-else
        @click="handleMenuOpen"
        viewBox="0 0 24 24"
        fill="#000"
        stroke="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M5 6.5H19V8H5V6.5Z" fill="#0000"></path>
          <path d="M5 16.5H19V18H5V16.5Z" fill="#0000"></path>
          <path d="M5 11.5H19V13H5V11.5Z" fill="#0000"></path>
        </g>
      </svg>
    </button>

    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span
        class="self-center text-xl max-xl:text-[1rem] font-semibold whitespace-nowrap text-black"
        >Blem</span
      >
    </a>
    <nav class="p-1">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="nav-links flex justify-center gap-10 max-xl:gap-5">
          <li class="link text-sm transition-all">
            <a href="#" aria-current="page">Home</a>
          </li>
          <li class="link text-sm">
            <a href="#about">Hair Care</a>
          </li>
          <li class="link text-sm">
            <a href="#service">Skin & Beauty</a>
          </li>
          <li class="link text-sm">
            <a href="#projects">Clothing</a>
          </li>
          <li class="link text-sm">
            <a href="#contact">Accessories</a>
          </li>
          <li class="link text-sm">
            <a href="#contact">Specialty</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="max-sm:hidden">
      <ul class="flex items-center gap-5 max-xl:gap-3">
        <li>
          <FontAwesomeIcon :icon="faSearch" />
        </li>
        <li>
          <FontAwesomeIcon :icon="faBagShopping" />
        </li>
        <li class="flex items-end gap-2">
          <small>NGN</small>
          <FontAwesomeIcon :icon="faArrowDown" />
        </li>
      </ul>
    </div>
  </div>

  <!-- mobile -->
  <transition name="menu">
    <div v-if="isMenu" class="hidden max-sm:block w-3/4 h-full bg-white fixed top-10 right-0 z-40">
      <ul class="my-5 mx-5">
        <li
          class="text-sm mb-5 active:scale-105 active:bg-gray-100 active:text-white transition-all"
          @click="isMenu = !isMenu"
        >
          <a href="#" aria-current="page">Home</a>
        </li>
        <li
          class="text-sm mb-5 active:scale-105 active:bg-gray-100 active:text-white transition-all"
          @click="isMenu = !isMenu"
        >
          <a href="#about">Hair Care</a>
        </li>
        <li
          @click="isMenu = !isMenu"
          class="text-sm mb-5 active:scale-105 active:bg-gray-100 active:text-white transition-all"
        >
          <a href="#service">Skin & Beauty</a>
        </li>
        <li
          @click="isMenu = !isMenu"
          class="text-sm mb-5 active:scale-105 active:bg-gray-100 active:text-white transition-all"
        >
          <a href="#projects">Clothing</a>
        </li>
        <li
          @click="isMenu = !isMenu"
          class="text-sm mb-5 active:scale-105 active:bg-gray-100 active:text-white transition-all"
        >
          <a href="#contact">Accessories</a>
        </li>
        <li
          @click="isMenu = !isMenu"
          class="text-sm mb-5 active:scale-105 active:bg-gray-100 active:text-white transition-all"
        >
          <a href="#contact">Specialty</a>
        </li>
      </ul>
    </div>
  </transition>
  <div
    v-if="isMenu"
    class="hidden max-sm:block fixed w-full h-full bg-[rgb(0,0,0,0.5)] z-20 animate__animated animate__fadeIn"
  ></div>
</template>
<script setup lang="ts">
import { faArrowDown, faBagShopping, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
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
  backdrop-filter: blur(12px);
  box-shadow: 0px 3px 4px #dddddd82;
}

.link {
  padding: 0.3rem;
  transition: 0.3s ease;
  font-size: 0.8rem;
}
.link:hover {
  text-decoration: underline grey 2px;
  scale: 0.95;
}

.menu-enter-active {
  transition: all 0.25s ease;
  transition-delay: 100ms;
}
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from {
  transform: translateX(400px);
  opacity: 0;
}

.menu-leave-to {
  opacity: 0.2;
  transform: translateX(400px);
}

.menu-btn {
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.menu-btn > svg {
  width: 80%;
  height: 100%;
}

@media (max-width: 700px) {
  .menu-btn {
    display: block;
  }
}
</style>
