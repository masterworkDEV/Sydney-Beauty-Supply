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
      <div class="flex items-end gap-2 bg-white rounded-md p-5 max-xl:p-3 max-sm:p-2.5 shadow">
        <h2 class="text-2xl max-xl:text-2xl max-sm:text-[1rem]">Shopping Bag</h2>
        <small
          >({{
            cart.cartItems.length > 1
              ? cart.cartItems.length + ' ' + 'items'
              : cart.cartItems.length + ' ' + 'item'
          }})
        </small>
      </div>

      <div
        class="cart-items w-full h-full flex justify-between items-start my-7 gap-7 max-sm:flex-col"
      >
        <ul class="bg-white p-5 w-full shadow-lg" v-if="Object.values(cart.cartItems).length > 0">
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
                <FontAwesomeIcon
                  :icon="faTrashAlt"
                  color="red"
                  class="cursor-pointer"
                  title="remove from cart"
                  @click="toggleDeleteModal(item.id)"
                />
              </div>

              <!-- delete controller -->
              <Overlay v-if="deleteModal" />

              <div
                v-if="deleteModal"
                class="animate__animated animate__bounceIn rounded w-1/4 max-sm:w-[90%] h-40 flex justify-center items-center flex-col p-5 bg-white shadow fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-40"
              >
                <div class="text-center">
                  <h3 class="mb-2">
                    <b> You are about to delete a product </b>
                  </h3>
                  <p class="text-sm text-[#777]">This will delete your product from cart <br /></p>
                  <p class="text-sm text-[#777]">Are you sure?</p>
                </div>
                <div class="actions w-full flex justify-end gap-5 mt-2">
                  <button @click="deleteModal = !deleteModal" class="text-sm">Cancel</button>
                  <button
                    @click="deleteFromCart"
                    class="bg-red-600 p-2 w-1/4 text-white text-xs rounded hover:opacity-80 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <!-- delete controller -->

              <div class="flex gap-5">
                <div class="quantity-adjustment flex">
                  <button
                    class="w-7 h-7 flex justify-center items-center bg-[#ddd] border border-[#ddd]"
                    @click="item.quantity < 2 ? 1 : item.quantity--"
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
                  <span class="text-sm">${{ item.price * item.quantity }}</span>

                  <small class="text-green-500 text-xs">Save 20%</small>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else class="m-auto w-full flex justify-center items-start">
          OOps, There Is No Items In Cart!
        </div>

        <!-- order summary-->
        <div class="bg-white h-full w-[40%] max-xl:w-3/4 max-sm:w-full p-5 rounded-md shadow-md">
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
                class="bg-[#E78F2D] w-full p-2 rounded-full text-white text-sm mb-4 hover:opacity-90"
              >
                Proceed to checkout
              </button>
              <button
                class="bg-[#ddd] w-full p-2 rounded-full text-black text-sm hover:bg-opacity-90"
              >
                <router-link to="/store"> Continue Shopping </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
import Overlay from '@/components/Overlay.vue'

const cart = useCart()
const deleteModal = ref<boolean | null>(false)
const itemIdToDelete = ref<number | string | null>(null)

const toggleDeleteModal = (id: number | string | null = null) => {
  if (id !== null) {
    const checkExistence = cart.cartItems.find((item) => item.id === id)
    // Now product with the associated ID exists. We can then move on.
    if (checkExistence) {
      itemIdToDelete.value = id // storing id in a variable
      deleteModal.value = true
    } else {
      deleteModal.value = false
      itemIdToDelete.value = null
      alert('Error failed to open modal, cannot find this product')
    }
  } else {
    deleteModal.value = !deleteModal.value
    if (!deleteModal.value) {
      itemIdToDelete.value = null
    }
  }
}

const deleteFromCart = () => {
  // Now using the ID we've stored
  if (!itemIdToDelete.value !== null) {
    cart.cartItems = cart.cartItems.filter((item) => item.id !== itemIdToDelete.value)
    itemIdToDelete.value = null
    deleteModal.value = false
  } else {
    console.log('Something went wrong!!')
  }
}
</script>

