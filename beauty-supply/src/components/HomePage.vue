<template>
  <header>
    <Header />
  </header>
  <main class="min-h-screen w-full">
    <Hero />
    <select-category />
    <component :is="TrendingNow" />
    <component :is="NewArrival" />
    <ShowCase />
    <Contact />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

// Lazy loading these components
const TrendingNow = defineAsyncComponent({
  loader: () => import('../components/TrendingNow.vue'),
  loadingComponent: () => import('../components/LoadingCard.vue'),
  errorComponent: () => import('../components/Error.vue'),
  delay: 500,
  timeout: 3000,
})
const NewArrival = defineAsyncComponent({
  loader: () => import('../components/NewArrival.vue'),
  loadingComponent: () => import('../components/LoadingCard.vue'),
  errorComponent: () => import('../components/Error.vue'),
  delay: 500,
  timeout: 3000,
})

// Other components
import Header from './Header.vue'
import Hero from './Hero.vue'
import SelectCategory from './SelectCategory.vue'
import ShowCase from './ShowCase.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

onMounted(() => window.addEventListener('scroll', () => window.scrollBy({ top: 0 })))
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
