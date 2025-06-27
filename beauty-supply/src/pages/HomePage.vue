<template>
  <main>
    <Hero />
    <select-category />
    <TrendingNow />
    <NewArrival />
    <ShowCase />
    <Contact />
  </main>
</template>

<script setup lang="ts">
// Other components
import Hero from '@/components/home-page/Hero.vue'
import TrendingNow from '@/components/home-page/TrendingNow.vue'
import NewArrival from '@/components/home-page/NewArrival.vue'
import SelectCategory from '@/components/home-page/SelectCategory.vue'
import ShowCase from '@/components/home-page/ShowCase.vue'
import Contact from '@/components/home-page/Contact.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
.line-through {
  text-decoration: line-through;
}
</style>
