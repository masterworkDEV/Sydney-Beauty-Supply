<template>
  <!-- new arrival -->
  <section class="mt-20 mx-20 max-xl:mx-20 max-md:mx-14 max-sm:mx-5 max-sm:mt-14">
    <div class="text-center">
      <h2 class="text-5xl mb-5 max-sm:mb-3 max-lg:text-4xl max-sm:text-3xl">New Arrival</h2>
      <p class="mb-5 tracking-normal leading-relaxed max-sm:text-sm">
        Discover The Latest Styles Fresh Off The Rack. From Everyday Essentials To Statement Pieces-
        New Trends, Updated Weekly
      </p>
      <div class="flex justify-center gap-5 items-center">
        <button
          class="p-3 text-sm max-sm:p-2.5"
          :class="button.isClicked && 'gradient-black-btn text-white'"
          v-for="button in unfilteredList"
          :key="button.title"
          @click="handleFilteredList(button.title)"
        >
          {{ button.title }}
        </button>
      </div>
    </div>

    <div v-if="store.isLoading" class="w-full mt-5 grid grid-cols-3 max-sm:grid-cols-2 gap-3">
      <LoadingCard v-for="loader in new Array(8)" :key="loader" />
    </div>
    <div v-else-if="store.error">
      <!-- <p class="text-center my-5 text-sm">{{ store.errorMessage }}</p> -->
    </div>

    <div v-else class="mt-10 grid grid-cols-3 max-sm:grid-cols-2 gap-10">
      <div v-for="product in filteredList" :key="product._id">
        <ProductCard
          :key="product._id"
          :_id="product._id"
          :name="product.name"
          :price="product.price"
          :currency="product.currency"
          :thumbnail="product.thumbnail"
          :discount="product.discount"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { dataStore } from '../../stores/dataStore'

//  components
import ProductCard from '../ProductCard.vue'
import LoadingCard from '../LoadingCard.vue'

// interface

const store = dataStore()

interface Button {
  title: string
  isClicked: boolean
}

const unfilteredList = ref<Button[]>([
  {
    title: 'Unisex',
    isClicked: true,
  },
  {
    title: 'Women',
    isClicked: false,
  },
  {
    title: 'Men',
    isClicked: false,
  },
])

const buttonTitle = ref<string>('')

const handleFilteredList = (title: string) => {
  const clickedButton = unfilteredList.value.find((b) => b.title === title)

  if (!clickedButton) return

  const willBeActive = !clickedButton.isClicked

  unfilteredList.value.forEach((button) => {
    button.isClicked = false
  })

  if (willBeActive) {
    clickedButton.isClicked = true
    buttonTitle.value = title // App
  } else {
    buttonTitle.value = ''
  }
}

const filteredList = computed(() => {
  if (!store.products || !buttonTitle.value) {
    return store.products
  }

  console.log(buttonTitle.value)
  // Filter based on the active buttonTitle
  return store.products.filter((list) => {
    return list.gender?.toLowerCase().includes(buttonTitle.value.toLowerCase())
  })
})
</script>

<style>
.gradient-black-btn {
  /* Core Styles */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff; /* White text for contrast */
  border: none;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer;

  /* Gradient and Background */
  /* Transitions from a dark gray (#333) to black (#000) */
  background-image: linear-gradient(to bottom, #333, #000);
  background-color: #000; /* Fallback for older browsers */

  /* Shadow for Depth */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  /* Smooth transition for hover effect */
  transition: all 0.2s ease-in-out;
}

/* Hover Effect: Lighten the gradient slightly and increase the lift */
.gradient-black-btn:hover {
  background-image: linear-gradient(to top, #1c1b1b, #111);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}

/* Active Effect: Push the button down */
.gradient-black-btn:active {
  background-image: linear-gradient(to bottom, #111, #444); /* Reverse gradient */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(0);
}
</style>
