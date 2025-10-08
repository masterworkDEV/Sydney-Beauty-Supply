<template>
  <main class="min-h-screen w-full">
    <nav class="flex items-center gap-2 mx-20 max-xl:mx-20 max-md:mx-14 max-sm:mx-5">
      <small class="flex items-center gap-2 mt-22 max-xl:mt-20">
        <RouterLink class="font-semibold text-gray-500" to="/store">Store</RouterLink>
        <!-- arrow right -->
        <svg
          class="link-svg"
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

      <small class="mt-22 max-xl:mt-20 font-semibold text-gray-500">Shopping Bag</small>
    </nav>

    <section
      class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 mx-20 max-xl:mx-20 max-md:mx-14 max-sm:mx-5"
    >
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
      </div>

      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
            <div
              class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
              v-for="item in cart.cartItems"
              :key="item._id"
            >
              <div
                class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0"
              >
                <router-link
                  :to="{
                    name: 'product-details',
                    params: { productID: item._id, productName: item.name },
                  }"
                >
                  <img
                    class="h-20 w-20 dark:hidden"
                    :src="item.thumbnail.imageUrl"
                    :alt="`${item.name} image`"
                  />
                  <img
                    class="hidden h-20 w-20 dark:block"
                    :src="item.thumbnail.imageUrl"
                    :alt="`${item.name} image`"
                  />
                </router-link>

                <label for="counter-input" class="sr-only">Choose quantity:</label>
                <div class="flex items-center justify-between md:order-3 md:justify-end">
                  <div class="flex items-center">
                    <button
                      @click="item.quantity < 2 ? 1 : item.quantity--"
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="counter-input"
                      class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <svg
                        class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="counter-input"
                      data-input-counter
                      class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      :value="item.quantity"
                      required
                    />
                    <button
                      @click="item.quantity++"
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="counter-input"
                      class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <svg
                        class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="text-end md:order-4 md:w-32">
                    <p class="text-base font-bold text-gray-900 dark:text-white">
                      NGN{{ item.price * item.quantity }}
                    </p>
                  </div>
                </div>

                <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                  <a
                    href="#"
                    class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                    >{{
                      item.description?.length < 100
                        ? item.description
                        : item.description?.toString().slice(0, 100)
                    }}</a
                  >

                  <div class="flex items-center gap-4">
                    <button
                      type="button"
                      class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        class="me-1.5 h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      Add to Favorites
                    </button>

                    <button
                      type="button"
                      class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      @click="toggleDeleteModal(item._id)"
                    >
                      <svg
                        class="me-1.5 h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18 17.94 6M18 18 6.06 6"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden xl:mt-8 xl:block">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                People also bought
              </h3>
              <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                <!-- product card -->
                <div v-for="product in rawData.products" :key="product._id">
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
            </div>
          </div>
        </div>

        <!-- delete controller -->
        <Overlay v-if="deleteModal" />

        <div
          v-if="deleteModal"
          class="animate__animated animate__bounceIn rounded max-sm:w-[90%] flex justify-center flex-col p-7 bg-white shadow fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-40"
        >
          <FontAwesomeIcon
            @click="deleteModal = !deleteModal"
            :icon="faTimes"
            class="absolute top-2 right-2 cursor-pointer text-xl text-gray-500 hover:scale-90 hover:text-gray-900 transition-all duration-300"
          />

          <div class="text-center">
            <h3 class="text-xl max-sm:text-[1rem] mb-2 font-semibold">
              You are about to delete "{{ productName }}"
            </h3>
            <p class="max-sm:text-sm text-[#777]">This will delete your product from cart</p>
            <p class="text-sm text-[#777]">Are you sure?</p>
          </div>
          <div class="actions w-full flex justify-end gap-5 mt-2">
            <button
              @click="deleteModal = !deleteModal"
              class="bg-gray-200 p-2 font-semibold text-slate-800 rounded hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              @click="deleteFromCart"
              class="bg-red-600 w-1/4 p-2 text-white rounded hover:opacity-80 font-semibold cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>

        <!-- delete controller -->

        <!-- summary -->
        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div
            class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
          >
            <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Original price
                  </dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">
                    {{
                      cart.cartItems.reduce(
                        (acc, product) =>
                          acc + parseInt(product.price.toFixed(2)) * product.quantity,
                        0
                      )
                    }}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd class="text-base font-medium text-green-600">-$299.00</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Store Pickup
                  </dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                </dl>
              </div>

              <dl
                class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700"
              >
                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">
                  $

                  {{
                    cart.cartItems.reduce(
                      (acc, product) => acc + parseInt(product.price.toFixed(2)) * product.quantity,
                      0
                    )
                  }}
                </dd>
              </dl>
            </div>

            <a
              href="#"
              class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Proceed to Checkout</a
            >

            <div class="flex items-center justify-center gap-2">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
              <a
                href="#"
                title=""
                class="inline-flex items-center gap-2 text-sm font-medium text-orange-600 underline hover:no-underline dark:text-orange-500"
              >
                Continue Shopping
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
          >
            <form class="space-y-4">
              <div>
                <label
                  for="voucher"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Do you have a voucher or gift card?
                </label>
                <input
                  type="text"
                  id="voucher"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="submit"
                class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-primary-800"
              >
                Apply Code
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRoute } from 'vue-router'

// components
import Overlay from '@/components/Overlay.vue'
import ProductCard from '@/components/ProductCard.vue'
import { dataStore } from '@/stores/dataStore'

const cart = useCart()
const rawData = dataStore()
const deleteModal = ref<boolean | null>(false)
const itemIdToDelete = ref<number | string | null>(null)
const productName = ref<string | null>('')

const toggleDeleteModal = (id: number | string | null = null) => {
  if (id !== null) {
    const checkExistence = cart.cartItems.find((item) => item._id === id)
    // Now product with the associated ID exists. We can then move on.
    if (checkExistence) {
      itemIdToDelete.value = id // storing id in a variable
      productName.value = checkExistence.name
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
      productName.value = null
    }
  }
}

const deleteFromCart = () => {
  // Now using the ID we've stored
  if (!itemIdToDelete.value !== null) {
    cart.cartItems = cart.cartItems.filter((item) => item._id !== itemIdToDelete.value)
    itemIdToDelete.value = null
    productName.value = null

    deleteModal.value = false
  } else {
    console.log('Something went wrong!!')
  }
}
</script>




<style>
.link-svg {
  width: 14px;
  height: 14px;
}
</style>