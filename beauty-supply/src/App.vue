<template>
  <Header />
  <div class="app">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import HomePage from './pages/HomePage.vue'
import Header from '././components/Header.vue'
import Footer from '././components/Footer.vue'
</script>

<style >
html {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
}
body {
  background: #fafafa;
  width: 100%;
  height: 100vh;
}
</style>
