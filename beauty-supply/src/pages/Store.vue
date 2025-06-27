<template>
  <main class="min-h-screen mt-14">
    <div
      class="w-full bg-[#f1f1f1] h-56 text-center max-xl:px-7 max-sm:px-5 max-sm:pt-20 max-sm:text-center animate__animated animate__fadeInLeft"
    >
      <h1
        class="animate__animated animate__fadeIn animate__delay-2s text-5xl pt-20 max-sm:pt-0 flex items-center justify-center uppercase tracking-normal max-md:text-3xl text-[#333]"
      >
        All Products
      </h1>
      <ul class="mt-3 flex justify-center items-center gap-3">
        <li class="text-sm">
          <router-link to="/"> Home /</router-link>
        </li>
        <li class="text-sm">
          <router-link to=""> Shop / </router-link>
        </li>
        <li class="text-sm">
          <router-link to="/"> Details </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style>
</style>