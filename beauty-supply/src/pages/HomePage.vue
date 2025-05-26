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
import Hero from '../components/Hero.vue'
import TrendingNow from '../components/TrendingNow.vue'
import NewArrival from '../components/NewArrival.vue'
import SelectCategory from '../components/SelectCategory.vue'
import ShowCase from '../components/ShowCase.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
.line-through {
  text-decoration: line-through;
}

.card > .image {
  overflow: hidden;
}
.card img {
  transition: 0.25s ease-in-out;
}
.card:hover .image > img {
  scale: 1.2;
}
</style>
