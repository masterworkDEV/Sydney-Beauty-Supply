<template>
  <header
    :class="isActive && 'active'"
    class="header bg-white fixed right-0 left-0 top-0 py-6 max-sm:py-4 flex flex-wrap items-center justify-between px-12 max-xl:px-7 max-sm:px-5 transition-all z-20"
  >
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span
        class="self-center text-xl max-sm:text-[1rem] font-semibold whitespace-nowrap text-black"
        >Sydney Beauty Supply</span
      >
    </a>
    <nav class="p-1" :class="isActive && 'dark:bg-[#fafafa] rounded'">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 nav-links"
        >
          <li class="link text-sm transition-all" :class="isActive && 'active dark:text-black  '">
            <a href="#" aria-current="page">Home</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active dark:text-black  '">
            <a href="#about">Hair care</a>
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
      <ul class="flex items-center gap-5">
        <li>
          <FontAwesomeIcon :icon="faSearch" />
        </li>
        <li>
          <FontAwesomeIcon :icon="faBagShopping" />
        </li>
        <li class="flex items-end gap-2">
          <span>NGN</span>
          <FontAwesomeIcon :icon="faArrowTurnDown" />
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import {
  faArrowAltCircleDown,
  faArrowDown,
  faArrowDown19,
  faArrowDownAZ,
  faBagShopping,
  faSearch,
  faTarpDroplet,
} from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons/faArrowTurnDown'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const isActive = ref(null)
window.addEventListener('scroll', () => {
  window.scrollY > 590 ? (isActive.value = true) : (isActive.value = null)
})
</script>
<style>
.header.active {
  background: linear-gradient(to bottom, #4d454c58, #b394a539, #6a585839);
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
  color: white;
}
</style>
