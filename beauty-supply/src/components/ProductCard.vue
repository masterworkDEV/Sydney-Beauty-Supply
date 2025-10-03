<!-- reusable card -->

<template>
  <article class="card w-full max-h-96 h-full pb-1" :key="props._id">
    <div class="image w-full h-3/4 relative">
      <!-- main image -->

      <img
        :src="props.thumbnail?.imageUrl || '/images/placeholder.jpg'"
        :alt="props.name"
        class="w-full h-full object-cover"
      />
      <!-- overlay -->
      <div class="overlay opacity-0 absolute bg-white top-0 right-0 left-0 bottom-0 w-full h-full">
        <RouterLink :to="{ name: 'product-details', params: { productID: props._id } }">
          <img
            :src="props.thumbnail?.imageUrl || '/images/placeholder.jpg'"
            :alt="props.name"
            class="w-full h-full object-contain"
          />
        </RouterLink>

        <div class="flex justify-center items-center absolute right-0 left-0 bottom-0 z-50">
          <button
            class="flex justify-center items-center gap-1 cursor-pointer bg-[#101010] text-white text-[.65rem] p-3.5 max-sm:p-2.5 max-sm:text-[.55rem] font-semibold hover:scale-105 hover:scale-3d hover:opacity-90 w-[84%]"
            @click="cart.addToCart(props)"
          >
            <span> <b>ADD TO CART</b> </span>
            <b> <FontAwesomeIcon :icon="faPlus" /></b>
          </button>
        </div>
      </div>
    </div>
    <span class="flex justify-between items-center mt-5 mb-1 max-sm:pl-0">
      <h6 class="font-normal">
        {{ props.name }}
      </h6>
    </span>
    <div
      class="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:pl-0"
    >
      <h6 class="max-sm:text-sm font-semibold">{{ props.currency }}{{ props.price }}</h6>
    </div>
  </article>
</template>


<script setup lang='ts'>
import { useCart } from '@/stores/cartController'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const cart = useCart()

// interface product
interface Thumbnail {
  imageUrl: string
  imageId: string
}

interface Products {
  _id: string
  key: string
  name: string
  thumbnail?: Thumbnail
  discount: number | undefined
  description: string[] | undefined
  price: number
  currency: string
}

const props = defineProps<Products>()
</script>

<style>
.card::-webkit-scrollbar {
  display: none;
}

.card {
  overflow: hidden;
  transition: all 1s ease;
}

.card:hover {
  box-shadow: 0px 4px 10px #ddd;
}

.card .overlay {
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 500ms;
}

.card:hover .overlay {
  opacity: 1;
  scale: 1.05;
}
</style>