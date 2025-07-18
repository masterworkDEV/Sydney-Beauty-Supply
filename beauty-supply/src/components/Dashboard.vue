<template>
  <div class="h-screen">
    <aside class="bg-white w-1/4 h-screen">
      <nav class="mx-12 pt-22 max-xl:mx-7 max-sm:mx-5">
        <ul>
          <li class="p-2 text-sm hover:bg-[#ddd]">
            <router-link to="/">Home</router-link>
          </li>
          <li class="p-2 text-sm hover:bg-[#ddd]">
            <router-link to="/">Products</router-link>
          </li>
          <li class="p-2 text-sm hover:bg-[#ddd]">
            <router-link to="/">Customers</router-link>
          </li>
          <li class="p-2 text-sm hover:bg-[#ddd]">
            <router-link to="/">Shop</router-link>
          </li>
          <li class="p-2 text-sm hover:bg-[#ddd]">
            <router-link to="/">Income</router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="p-22">
      <div v-if="isAdmin">You are an admin</div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { authStore } from '@/stores/authStore'
import { computed } from 'vue'

const store = authStore()

const isAdmin = computed(() => store.hasAnyRole(['Admin']))
</script>

<style>
</style>