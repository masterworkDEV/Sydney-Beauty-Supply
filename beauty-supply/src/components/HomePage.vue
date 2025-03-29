<template>
  <header>
    <Header />
  </header>
  <main class="min-h-screen w-full">
    <Hero />
    <TrendingNow />
    <NewArrival />
    <ShowCase />
    <Contact />
  </main>
  <Footer />
</template>

<script setup lang="ts">
// imported components
import Header from './Header.vue'
import Hero from './Hero.vue'
import TrendingNow from './TrendingNow.vue'
import NewArrival from './NewArrival.vue'
import ShowCase from './ShowCase.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
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
