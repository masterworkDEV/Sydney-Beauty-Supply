<template>
  <!-- Cart Modal -->
  <transition name="menu">
    <div
      v-if="props.cartModal"
      class="w-[30%] max-xl:w-2/4 h-full bg-white fixed top-0 right-0 pb-5 overflow-auto z-40 max-sm:hidden"
    >
      <div class="flex justify-between items-center m-5">
        <h2 class="text-2xl">Cart</h2>

        <button
          @click="emits('handleCartModalState', props.cartModal)"
          class="close-cart-modal bg-gray-300 w-5 h-5 m-2 flex items-center justify-center rounded-sm hover:bg-gray-200 transition-all"
        >
          <FontAwesomeIcon :icon="faTimes" />
        </button>
      </div>

      <!--  -->

      <div v-if="cart.cartItems.length" class="relative mt mx-5">
        <ul class="">
          <li
            class="animate__animated animate__zoomIn flex justify-between my-5 p-2 hover:bg-[#ddd]"
            :class="!props && 'animate__animated animate__zoomOut'"
            v-for="item in cart.cartItems"
            :key="item.id"
          >
            <div class="flex justify-center gap-2">
              <img :src="item.image" :alt="item.title" class="w-20 h-full rounded-lg shadow" />
              <div>
                <h5 class="text-xs my-1">
                  {{
                    item.title?.length < 25 ? item.title : item.title?.slice(0, 25).concat('...')
                  }}
                </h5>
                <h5 class="text-xs my-1">Color: Color</h5>
                <h5 class="text-xs my-1">Size: XS</h5>
                <div class="quantity-adjustment flex gap-2">
                  <button
                    class="w-5 h-5 flex justify-center items-center bg-[#fff] border border-[#ddd]"
                    @click="item.quantity--"
                  >
                    <FontAwesomeIcon :icon="faMinus" size="xs" v-model="item.quantity" />
                  </button>
                  <input
                    type="text"
                    :value="item.quantity"
                    class="w-5 h-5 text-center text-xs bg-[#fff]"
                  />
                  <button
                    @click="item.quantity++"
                    class="w-5 h-5 flex justify-center items-center bg-[#fff] border border-[#ddd]"
                  >
                    <FontAwesomeIcon :icon="faAdd" size="xs" />
                  </button>
                </div>
              </div>
            </div>
            <div class="text-xs flex flex-col items-end justify-between">
              <b> ${{ parseInt(item.price.toFixed(2)) * item.quantity }} </b>

              <FontAwesomeIcon
                :icon="faTrashAlt"
                class="text-sm cursor-pointer"
                title="remove"
                @click="emits('deleteCartItem', item)"
              />
            </div>
          </li>
        </ul>

        <div class="static bg-white">
          <div class="flex justify-between my-2 pt-2 border-t border-[#ddd]">
            <h5>Subtotal:</h5>
            <h5>
              <strong
                >${{
                  cart.cartItems.reduce(
                    (acc, product) => acc + parseInt(product.price.toFixed(2)) * product.quantity,
                    0
                  )
                }}</strong
              >
            </h5>
          </div>
          <Router-link to="/cart-store" @click="emits('handleCartModalState', props.cartModal)">
            <button class="bg-[#4A5559] w-full p-2.5 text-center text-white text-sm rounded-md">
              Continue To Cart
            </button>
          </Router-link>
        </div>
      </div>

      <span v-else class="flex items-center justify-center h-full"> No Items In Cart </span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAdd,
  faArrowDown,
  faBagShopping,
  faMinus,
  faSearch,
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

// cart store
import { useCart } from '@/stores/cartController'

const cart = useCart()

const props = defineProps({
  cartModal: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['handleCartModalState', 'deleteCartItem'])
</script>

