<template>
  <header>
    <div
      :class="isActive && 'active'"
      class="header bg-white fixed right-0 left-0 top-0 py-4 max-sm:py-3 flex items-center justify-between px-12 max-xl:px-7 max-sm:px-5 transition-all z-20"
    >
      <button
        class="menu-btn hidden absolute right-3 max-sm:block hover:border active:animate__animated animate__fadeIn"
      >
        <svg
          v-if="isMenu"
          @click="isMenu = !isMenu"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>cancel</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
                <polygon
                  id="Close"
                  points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        <!-- else -->

        <svg
          v-else
          @click="isMenu = !isMenu"
          viewBox="0 0 24 24"
          fill="#000"
          stroke="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5 6.5H19V8H5V6.5Z" fill="#0000"></path>
            <path d="M5 16.5H19V18H5V16.5Z" fill="#0000"></path>
            <path d="M5 11.5H19V13H5V11.5Z" fill="#0000"></path>
          </g>
        </svg>
      </button>

      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center text-xl max-xl:text-[1rem] font-semibold whitespace-nowrap text-yellow-600"
          >Costmetica</span
        >
      </a>
      <nav class="p-1">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="nav-links flex justify-center gap-10 max-xl:gap-2">
            <li class="link text-sm transition-all">
              <router-link to="/" aria-current="page">Home</router-link>
            </li>
            <li class="link text-sm">
              <a href="#shop">Hair Care</a>
            </li>

            <li class="link text-sm">
              <a href="#service">Skin </a>
            </li>
            <li class="link text-sm">
              <a href="#projects">Clothing</a>
            </li>
            <li class="link text-sm">
              <a href="#contact">Accessories</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="max-sm:hidden">
        <ul class="flex items-center gap-5">
          <li>
            <FontAwesomeIcon
              :icon="faSearch"
              class="cursor-pointer hover:scale-110 transition-all"
              title="Search"
            />
          </li>
          <li
            @click="cartModal = !cartModal"
            class="relative cursor-pointer hover:scale-110 flex items-center justify-center gap-1 transition-all"
            :class="
              Object.values(cart.cartItems).reduce((acc, product) => {
                return acc + product.quantity
              }, 0) &&
              ' scale-110 animate__animated animate__delay-5s animate-bounce hover:animate-none'
            "
            title="Cart"
          >
            <FontAwesomeIcon :icon="faBagShopping" />
            <div
              class="absolute p-1 right-[-20%] top-0 bg-red-500 rounded-full"
              v-if="
                Object.values(cart.cartItems).reduce((acc, product) => {
                  return acc + product.quantity
                }, 0)
              "
            ></div>
          </li>
          <li class="flex items-center gap-2 cursor-pointer">
            <small>Sign up</small>
            <button
              class="w-20 max-lg:w-14 max-lg:p-2.5 cursor-pointer flex justify-center text-center bg-black text-white p-3 rounded-full hover:opacity-80"
            >
              <small> Login </small>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- mobile -->
    <div
      v-if="isMenu"
      class="hidden max-sm:block fixed w-full h-full top-[45px] bg-[rgba(34,24,24,0.7)] z-20 animate__animated animate__fadeIn"
    ></div>

    <transition name="menu">
      <div
        v-if="isMenu"
        class="hidden max-sm:block w-3/4 h-full bg-white fixed top-[45px] right-0 z-40"
      >
        <ul class="my-10 mx-5">
          <li
            class="text-sm mb-7 active:scale-105 active:bg-gray-100 active:text-white transition-all animate__animated animate__fadeInUp"
            @click="isMenu = !isMenu"
          >
            <router-link to="/"> Home </router-link>
          </li>
          <li
            class="text-sm mb-7 active:scale-105 active:bg-gray-100 active:text-white transition-all animate__animated animate__slideInRight"
            @click="isMenu = !isMenu"
          >
            <a href="#about">Hair Care</a>
          </li>
          <li
            @click="isMenu = !isMenu"
            class="text-sm mb-7 active:scale-105 active:bg-gray-100 active:text-white transition-all animate__animated animate__slideInRight"
          >
            <a href="#service">Skin & Beauty</a>
          </li>
          <li
            @click="isMenu = !isMenu"
            class="text-sm mb-7 active:scale-105 active:bg-gray-100 active:text-white transition-all animate__animated animate__slideInRight"
          >
            <a href="#projects">Clothing</a>
          </li>
          <li
            @click="isMenu = !isMenu"
            class="text-sm mb-7 active:scale-105 active:bg-gray-100 active:text-white transition-all animate__animated animate__fadeInUp animate__delay-1s"
          >
            <a href="#contact"> Accessories </a>
          </li>

          <li
            @click="isMenu = !isMenu"
            class="text-sm mb-7 active:scale-105 active:bg-gray-100 active:text-white transition-all animate__animated animate__fadeInUp animate__delay-2s"
          >
            <Router-link to="/cart-store"> Shopping Cart </Router-link>
          </li>
        </ul>
      </div>
    </transition>

    <!-- cartModal -->
    <Overlay v-if="cartModal" />
    <CartModal
      :cart-modal="cartModal"
      @handle-cart-modal-state="cartModal = !cartModal"
      @delete-cart-item="cart.deleteFromCart"
    />
  </header>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

// fontawesome
import { faArrowDown, faBagShopping, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// cart store
import { useCart } from '@/stores/cartController'

// Components
import Overlay from './Overlay.vue'
import CartModal from './CartModal.vue'
import ProductCard from './ProductCard.vue'

//  use cart store...
const cart = useCart()

// other states
const isActive = ref<boolean | null>(null)
const isMenu = ref<boolean | null>(null)
const cartModal = ref<boolean | false>(false)

// scroll event for header
window.addEventListener('scroll', () => {
  window.scrollY > 590 ? (isActive.value = true) : (isActive.value = false)
})
</script>





<style>
.header.active {
  backdrop-filter: blur(12px);
  box-shadow: 0px 3px 4px #dddddd97;
}

.router-link-active {
  text-decoration: underline goldenrod 2px;
}

.link {
  padding: 0.3rem;
  transition: 0.3s ease;
  font-size: 0.8rem;
}
.link:hover {
  text-decoration: underline #0e166b 2px;
  scale: 0.95;
}

.menu-enter-active {
  transition: all 0.25s ease;
  transition-delay: 100ms;
}
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from {
  transform: translateX(400px);
  opacity: 0;
}

.menu-leave-to {
  opacity: 0.2;
  transform: translateX(400px);
}

.menu-btn {
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.menu-btn > svg {
  width: 80%;
  height: 100%;
}

@media (max-width: 700px) {
  .menu-btn {
    display: block;
  }
}
</style>
