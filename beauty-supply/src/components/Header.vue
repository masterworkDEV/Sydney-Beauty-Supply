<template>
  <header
    :class="isActive && 'active'"
    class="header fixed right-0 left-0 top-0 py-6 max-sm:py-4 flex flex-wrap items-center justify-between px-12 max-xl:px-7 max-sm:px-5 bg-white transition-all"
  >
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-xl max-sm:text-xl font-semibold whitespace-nowrap text-black"
        >Sydney Beauty Supply</span
      >
    </a>
    <nav class="dark:bg-white custom-nav-background z-30">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 nav-links"
        >
          <li class="link text-sm" :class="isActive && 'active'">
            <a href="#" aria-current="page">Home</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active'">
            <a href="#about">Hair care</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active'">
            <a href="#service">Skin & Beauty</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active'">
            <a href="#projects">Clothing</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active'">
            <a href="#contact">Accessories</a>
          </li>
          <li class="link text-sm" :class="isActive && 'active'">
            <a href="#contact">Specialty</a>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <ul class="flex items-center gap-5">
        <li>
          <FontAwesomeIcon :icon="faSearch" />
        </li>
        <li>
          <FontAwesomeIcon :icon="faBagShopping" />
        </li>
        <li>
          <FontAwesomeIcon :icon="faArrowDown" />
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import {
  faArrowDown,
  faBagShopping,
  faSearch,
  faTarpDroplet,
} from '@fortawesome/free-solid-svg-icons'
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
}
.link.active {
  padding: 0.3rem;
  border-radius: 1rem;
  background: transparent;
  backdrop-filter: blur(200px);
}
</style>
