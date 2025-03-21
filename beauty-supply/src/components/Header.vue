<template>
  <header
    class="fixed right-0 left-0 top-0 pt-4 pb-4 max-sm:pt-2 max-sm:pb-2 flex flex-wrap items-center justify-between px-12 max-xl:px-7 max-sm:px-5"
  >
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span
        class="self-center text-[1rem] max-sm:text-xl font-semibold whitespace-nowrap text-[#7562e0] dark:text-white"
        >Sydney Beauty Supply</span
      >
    </a>
    <nav class="bg-white border-gray-200 dark:bg-white custom-nav-background z-30">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 nav-links"
        >
          <li>
            <a href="#" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#about">Hair care</a>
          </li>
          <li>
            <a href="#service">Skin & Beauty</a>
          </li>
          <li>
            <a href="#projects">Clothing</a>
          </li>
          <li>
            <a href="#contact">Accessories</a>
          </li>
          <li>
            <a href="#contact">Specialty</a>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <ul class="flex items-center gap-5">
        <li>search</li>
        <li>cart</li>
        <li>country</li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style>
</style>