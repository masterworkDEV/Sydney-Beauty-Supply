<template>
  <header>
    <Header />
  </header>
  <main>
    <Hero />
    <select-category />
    <TrendingNow />
    <NewArrival />
    <ShowCase />
    <Contact />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

// Other components
import Header from './Header.vue'
import Hero from './Hero.vue'
import TrendingNow from './TrendingNow.vue'
import NewArrival from './NewArrival.vue'
import SelectCategory from './SelectCategory.vue'
import ShowCase from './ShowCase.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

// onMounted(() => window.addEventListener('scroll', () => window.scrollBy({ top: 0 })))
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
