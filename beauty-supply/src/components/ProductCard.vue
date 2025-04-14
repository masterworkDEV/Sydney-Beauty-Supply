<!-- reusable card -->

<template>
  <article
    class="card w-full max-h-80 overflow-auto border border-gray-300 pb-1 hover:shadow-2xl transition-all"
    v-for="product in productData"
    :key="product.id"
  >
    <div class="image w-full h-2/4">
      <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
    </div>
    <span class="flex justify-between items-center my-2 mx-2">
      <h6 class="text-sm max-sm:text-[.8rem]">{{ product.title }}</h6>
      <h6
        class="flex justify-center items-center bg-red-700 text-white p-0.5 text-[.7rem] max-sm:text-[.5rem] uppercase"
      >
        20%% off
      </h6>
    </span>
    <p
      class="text-gray-600 mb-5 ml-4 text-sm max-sm:text-[.7rem] max-sm:mb-2"
      @click="handleSeeMore(product.id)"
    >
      {{
        seeMoreStates[product.id]
          ? product.description.concat('...see less')
          : product.description.slice(0, 25).concat('...see more')
      }}
    </p>

    <div class="flex justify-between items-center mx-2">
      <span>
        <h6 class="text-sm max-sm:text-[.8rem]">{{ product.price }} NGN</h6>
        <p class="text-gray-500 text-sm">
          <span class="line-through max-sm:text-[.55rem]">{{ (product.price * 150) / 100 }}</span>
          NGN
        </p>
      </span>
      <button
        class="bg-black text-white text-[.65rem] rounded-full p-2 max-sm:text-[.55rem] font-semibold hover:scale-105 hover:scale-3d hover:opacity-90"
        @click="useCart.addToCart(product)"
      >
        Add To Cart
      </button>
    </div>
  </article>
</template>


<script setup lang='ts'>
import { useAddToCart } from '@/stores/addToCart'
import { computed, ref, reactive } from 'vue'

const useCart = useAddToCart()
const seeMoreStates = reactive<{ [key: number]: boolean }>({})

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})

interface Products {
  id: number
  title: string
  image: string
  description: string[]
  price: number
  discount: number
}
const productData: Products[] = computed(() => props.products)

const handleSeeMore = (productId: number) => {
  seeMoreStates[productId] = !seeMoreStates[productId]
}
</script>

<style>
.card::-webkit-scrollbar {
  display: none;
}
</style>