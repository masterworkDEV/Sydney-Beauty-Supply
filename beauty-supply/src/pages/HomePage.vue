<template>
  <main>
    <Hero />
    <NewArrival />
    <WhatOurCustomersSay />
    <BestSellers />
    <OurBestDresses />
  </main>
</template>

<script setup lang="ts">
// Sections
import Hero from '@/components/home-page/Hero.vue'
import NewArrival from '@/components/home-page/NewArrival.vue'
import WhatOurCustomersSay from '@/components/home-page/WhatOurCustomersSay.vue'
import BestSellers from '@/components/home-page/BestSellers.vue'
import OurBestDresses from '@/components/home-page/OurBestDresses.vue'
</script>

<style>
.line-through {
  text-decoration: line-through;
}
</style>
