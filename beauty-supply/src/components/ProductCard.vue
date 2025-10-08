<!-- reusable card -->

<template>
  <div
    class="space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
  >
    <router-link
      :to="{ name: 'product-details', params: { productID: props._id, productName: props.name } }"
    >
      <img
        class="mx-auto h-44 w-full dark:hidden"
        :src="props.thumbnail?.imageUrl"
        :alt="`${props.name} image`"
      />
      <img
        class="mx-auto hidden h-1/4 w-full dark:block"
        :src="props.thumbnail?.imageUrl"
        :alt="`${props.name} image`"
      />
    </router-link>

    <div class="p-4 max-sm:p-2">
      <a
        href="#"
        class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >{{ props.name }}</a
      >
      <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
        {{
          props.description?.length < 50
            ? props.description
            : props.description?.slice(0, 50).concat('...')
        }}
      </p>
    </div>
    <div class="px-4 max-sm:px-2">
      <p class="text-lg font-bold text-gray-900 dark:text-white">
        <span class="line-through"> NGN {{ props.price }} </span>
      </p>
      <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
        NGN {{ currentPrice(props.price) }}
      </p>
    </div>
    <div class="flex items-center gap-2.5 p-4 max-sm:p-2">
      <button
        data-tooltip-target="favourites-tooltip-1"
        type="button"
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 max-sm:p-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
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
            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
          ></path>
        </svg>
      </button>
      <div
        id="favourites-tooltip-1"
        role="tooltip"
        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
      >
        Add to favourites
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        @click="cart.addToCart(props)"
        type="button"
        class="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-3 max-sm:py-1.5 text-sm max-sm:text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <svg
          class="-ms-2 me-2 h-5 w-5"
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
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
          />
        </svg>
        <span class="max-sm:hidden"> Add to cart</span>
      </button>
    </div>
  </div>
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
  price: number | any
  currency: string
}

const props = defineProps<Products>()

const currentPrice = (originalPrice: number) => {
  const newPrice = originalPrice * 0.9
  return parseFloat(newPrice.toFixed(2))
}
</script>

<style>
/* From Uiverse.io by Rodrypaladin */
.card {
  position: relative;
  width: 100%;
  max-height: 450px;
  height: 100%;
}

.card::after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 50%;
  height: 10px;
  bottom: 15px;
  right: 0;
  transform: rotate(5deg);
  transition: all 0.1s ease-in;
}

.card::before {
  z-index: -1;
  content: '';
  position: absolute;
  width: 50%;
  height: 10px;
  bottom: 15px;
  left: 0;
  transform: rotate(-5deg);
  transition: all 0.1s ease-in;
}

.card__img {
  position: relative;
  background: #007bff;
  background: linear-gradient(315deg, #007bff, #00637c);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  width: 100%;
  height: 200px;

  img {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
}

.card__span {
  cursor: pointer;
  font-size: 11px;
  position: absolute;
  background-color: white;
  top: 10px;
  left: 10px;
  padding: 3px 7px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease-in;
  user-select: none;
}

.card__span:hover {
  transform: translateX(5px);
}

.card-int__title {
  font-family: Arial, Helvetica, sans-serif;
}

@keyframes effect_one {
  0% {
    transform: translateX(-99%);
  }

  25% {
    transform: translateX(-90%);
  }

  50% {
    transform: translateX(-80%);
  }

  75% {
    transform: translateX(-95%);
  }

  100% {
    transform: translateX(-99%);
  }
}

@keyframes effect_two {
  to {
    transform: translateX(-1%);
  }

  from {
    transform: translateX(-99%);
  }
}
</style>