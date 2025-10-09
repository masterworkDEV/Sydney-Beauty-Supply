<template>
  <div v-if="isLoading" class="loader"></div>

  <div class="app bg-[#fff] dark:bg-[#121212] dark:text-white" v-else>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomePage from './pages/HomePage.vue'
import Header from './components/header/Header.vue'
import Footer from '././components/Footer.vue'
import { storeToRefs } from 'pinia'
import { authStore } from './stores/authStore'
import { watch } from 'vue'

const store = authStore()
const { isAuthenticated } = storeToRefs(store)

watch(isAuthenticated, (isAuth) => {
  if (!isAuth) {
    alert('Login session expired, kindly login')
    window.location.href = '/login'
  }
})

const isLoading = ref(true)

onMounted(() => {
  // Simulate data fetching or component loading
  setTimeout(() => {
    isLoading.value = false
  }, 3000) // Adjust this timeout
})
</script>

<style >
#initial-loading-state {
  display: none;
}
html {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
  height: 100%;
}
</style>
