<!-- reusable card -->

<template>
  <article class="card bg-white w-full h-[350px] max-sm:h-80 pb-1" :key="props.id">
    <div class="image w-full h-[68%] max-sm:h-[64%] relative">
      <!-- main image -->
      <img :src="props.image" :alt="props.title" class="w-full h-full object-contain" />

      <!-- overlay -->
      <div class="overlay opacity-0 absolute bg-white top-0 right-0 left-0 bottom-0 w-full h-full">
        <RouterLink :to="{ name: 'product-details', params: { productID: props?.id?.toString() } }">
          <img
            :src="props.image"
            :alt="props.title"
            class="w-full h-full object-contain transform -scale-x-100 transition-all relative"
          />
        </RouterLink>

        <div class="flex justify-center items-center absolute right-0 left-0 bottom-0 z-50">
          <button
            class="flex justify-center items-center gap-1 cursor-pointer bg-[#4A5559] text-white text-[.65rem] p-3.5 max-sm:p-2.5 max-sm:text-[.55rem] font-semibold hover:scale-105 hover:scale-3d hover:opacity-90 w-[84%]"
            @click="cart.addToCart(props)"
          >
            <span> <b>ADD TO CART</b> </span>
            <b> <FontAwesomeIcon :icon="faPlus" /></b>
          </button>
        </div>
      </div>
    </div>
    <span class="flex justify-between items-center my-2 mx-2 pl-2 max-sm:pl-0">
      <h6 class="text-sm max-sm:text-[.7rem]">
        {{ props.title?.length < 50 ? props.title : props.title?.slice(0, 50).concat('...') }}
      </h6>
    </span>
    <div
      class="flex justify-between items-center mx-2 pl-2 max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:pl-0"
    >
      <span class="max-sm:flex gap-2">
        <h6 class="text-sm max-sm:text-[.8rem]">{{ props.price }} USD</h6>
        <p class="text-gray-500 text-sm">
          <span class="line-through max-sm:text-[.5rem]">{{ (props.price * 150) / 100 }}</span>
          NGN
        </p>
      </span>
    </div>
  </article>
</template>


<script setup lang='ts'>
import { useCart } from '@/stores/cartController'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const cart = useCart()

// interface product

interface Products {
  id: any
  title: string
  image?: string
  discount: number | undefined
  description: string
  price: number
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