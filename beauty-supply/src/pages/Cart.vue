<template>
  <main class="min-h-screen w-full mt-22 max-xl:mt-18 max-sm:mt-16">
    <nav class="flex items-center gap-5 ml-12 max-xl:ml-7 max-sm:ml-5">
      <small class="flex items-center gap-2">
        <RouterLink to="/">Home</RouterLink>

        <!-- arrow right -->
        <svg
          class="w-3 h-3"
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"
            ></path>
          </g>
        </svg>
      </small>
      <small>Shopping Bag</small>
    </nav>
    <div class="my-7 mx-12 max-xl:mx-7 max-sm:mx-5">
      <div class="flex items-end gap-2 bg-white rounded-md p-5 max-xl:p-3 max-sm:p-2.5 shadow-lg">
        <h2 class="text-2xl max-xl:text-2xl max-sm:text-[1rem]">Shopping Bag</h2>
        <small
          >({{
            cart.cartItems.length > 1
              ? cart.cartItems.length + ' ' + 'items'
              : cart.cartItems.length + ' ' + 'item'
          }})
        </small>
      </div>

      <div class="cart-items flex justify-between items-start my-7 gap-7 max-sm:flex-col">
        <ul class="bg-white p-5 w-full shadow-lg">
          <li
            v-for="item in cart.cartItems"
            :key="item.id"
            class="flex justify-between items-center border-b border-gray-300 mb-2 pb-7"
          >
            <div class="flex justify-start items-start">
              <img :src="item.image" :alt="item.title" class="w-10 h-10" />
              <span>
                <h4 class="ml-2 text-sm">{{ item.title }}</h4>
                <small>{{ item.discount }}</small>
                <RouterLink
                  class="ml-2 text-blue-500 text-xs"
                  :to="{ name: 'product-details', params: { productID: item.id } }"
                >
                  View specs
                  <FontAwesomeIcon :icon="faArrowAltCircleDown" />
                </RouterLink>
              </span>
            </div>

            <div>
              <div class="flex justify-end gap-5 mb-5">
                <FontAwesomeIcon :icon="faHeart" />
                <FontAwesomeIcon :icon="faTrashAlt" color="red" />
              </div>

              <div class="flex gap-5">
                <div class="quantity-adjustment flex">
                  <button
                    class="w-7 h-7 flex justify-center items-center bg-[#ddd] border border-[#ddd]"
                    @click="item.quantity--"
                  >
                    <FontAwesomeIcon :icon="faMinus" size="xs" v-model="item.quantity" />
                  </button>
                  <input
                    type="text"
                    :value="item.quantity"
                    class="w-10 h-7 text-center text-xs bg-[#fff] border border-gray-300"
                  />
                  <button
                    @click="item.quantity++"
                    class="w-7 h-7 flex justify-center items-center bg-[#ddd] border border-[#ddd]"
                  >
                    <FontAwesomeIcon :icon="faAdd" size="xs" />
                  </button>
                </div>

                <div class="flex flex-col items-end">
                  <span class="text-sm">${{ item.price }}</span>

                  <small class="text-green-500 text-xs">Save 20%</small>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <!-- order summary-->
        <div class="bg-white h-full w-[40%] p-5 rounded-md shadow-lg max-sm:w-full">
          <div class="border border-[#ddd] rounded-md p-5">
            <h3>Order summary</h3>
            <div class="flex justify-between my-2 pt-2 border-t border-[#ddd]">
              <small>Items price:</small>
              <small
                >${{
                  cart.cartItems.reduce(
                    (acc, product) => acc + parseInt(product.price.toFixed(2)) * product.quantity,
                    0
                  )
                }}</small
              >
            </div>
            <div class="flex justify-between border-b border-[#ddd] pb-2 mb-2">
              <small>Delivery charge:</small>
              <small> FREE </small>
            </div>
            <div class="my-5 w-full flex items-center gap-3">
              <input
                type="text "
                placeholder="Enter coupon No."
                class="border border-[#ddd] w-3/4 h-8 text-[1rem] placeholder:p-2 placeholder:text-sm rounded-lg"
              />
              <button class="w-1/4 h-8 bg-[#ddd] rounded-lg text-sm">Apply</button>
            </div>
            <div class="flex justify-between my-3">
              <small>Subtotal:</small>
              <small
                >${{
                  cart.cartItems.reduce(
                    (acc, product) => acc + parseInt(product.price.toFixed(2)) * product.quantity,
                    0
                  )
                }}</small
              >
            </div>
            <div class="flex justify-between my-3">
              <small>Total:</small>
              <div class="flex flex-col items-end">
                <small class="text-red-400"
                  >${{
                    cart.cartItems.reduce(
                      (acc, product) => acc + parseInt(product.price.toFixed(2)) * product.quantity,
                      0
                    )
                  }}</small
                >
                <small class="text-[.6rem]">Price inclusive of VAT </small>
              </div>
            </div>
            <div class="action">
              <button
                class="bg-blue-600 w-full p-2 rounded-full text-white text-sm mb-4 hover:opacity-90"
              >
                Proceed to checkout
              </button>
              <button
                class="bg-[#ddd] w-full p-2 rounded-full text-black text-sm hover:bg-opacity-90"
              >
                <router-link to="/"> Continue Shopping </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCart } from '@/stores/cartController'
import {
  faAdd,
  faArrowAltCircleDown,
  faHeart,
  faMinus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRoute } from 'vue-router'

const cart = useCart()
</script>

