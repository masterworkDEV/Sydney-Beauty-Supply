<template>
  <header v-if="header.headerState">
    <div
      :class="isActive && 'active'"
      class="header bg-[#fff] fixed right-0 left-0 top-0 py-4 max-sm:py-3 flex items-center justify-between px-12 max-xl:px-7 max-sm:px-5 transition-all z-20"
    >
      <button
        class="menu-btn hidden absolute right-3 max-sm:block hover:border active:animate__animated animate__fadeIn"
      >
        <svg
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

      <router-link
        name="logo"
        to="/"
        class="flex justify-end items-center space-x-2 rtl:space-x-reverse"
      >
        <span
          class="self-center text-xl max-xl:text-[1rem] font-bold whitespace-nowrap border-b-2 border-[#4A5559]"
          >Sk
        </span>
        <span class="max-sm:text-sm hover:translate-x-[-50%] transition-all">
          <FontAwesomeIcon :icon="faScissors" rotation="180" size="sm" />
        </span>
      </router-link>
      <nav class="p-1">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="nav-links flex justify-center gap-10 max-xl:gap-2">
            <li class="link text-sm transition-all">
              <router-link to="/" name="link" active-class="link-active">Home</router-link>
            </li>

            <li class="link text-sm">
              <router-link to="/store" name="link" active-class="link-active"> Store </router-link>
            </li>

            <li class="link text-sm">
              <a href="#shop">Clothing</a>
            </li>
            <li class="link text-sm">
              <a href="#service">Footwares</a>
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
            <FontAwesomeIcon :icon="faCartShopping" />
            <div
              class="absolute p-1 right-[-20%] top-0 bg-red-500 rounded-full"
              v-if="
                Object.values(cart.cartItems).reduce((acc, product) => {
                  return acc + product.quantity
                }, 0)
              "
            ></div>
          </li>

          <li v-if="useAuthStore.isAuthenticated" @click="toggleAvatarModal">
            <img
              :src="useAuthStore.user.image"
              :alt="useAuthStore.user?.username"
              v-if="useAuthStore.user?.image"
            />
            <div
              v-else-if="useAuthStore.isAuthenticated && !useAuthStore.user?.image"
              class="relative bg-gray-700 w-8 h-8 border-2 p-2 border-gray-900 text-white text-sm uppercase rounded-full flex justify-center items-center text-center"
            >
              {{ useAuthStore.user?.firstName.slice(0, 1)
              }}{{ useAuthStore.user?.lastName.slice(0, 1) }}
            </div>
          </li>

          <!-- profile-modal -->
          <transition name="profile">
            <div
              class="absolute top-16 right-10 bg-white p-4 rounded shadow-2xl"
              v-if="profileModal"
            >
              <div class="flex items-center gap-5 border-b border-[#ddd] py-4">
                <img
                  :src="useAuthStore.user.image"
                  :alt="useAuthStore.user?.username"
                  v-if="useAuthStore.user?.image"
                />

                <div
                  v-else-if="useAuthStore.isAuthenticated && !useAuthStore.user?.image"
                  class="relative bg-gray-700 w-8 h-8 border-2 border-black text-white uppercase rounded-full flex justify-center items-center text-center"
                >
                  {{ useAuthStore.user?.firstName.slice(0, 1)
                  }}{{ useAuthStore.user?.lastName.slice(0, 1) }}
                </div>
                <div class="flex flex-col">
                  <span class="capitalize">
                    {{ useAuthStore.user?.username }}
                  </span>

                  <small>{{ useAuthStore.user?.email }}</small>
                </div>
              </div>
              <div class="flex flex-col border-b border-[#ddd] py-4">
                <router-link
                  to="/"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faUser" />
                  <small> Account </small>
                </router-link>

                <router-link
                  to="/dashboard"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faDashboard" />

                  <small> Dashbord </small>
                </router-link>
                <router-link
                  to="/"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faFirstOrder" />

                  <small> Orders </small>
                </router-link>

                <router-link
                  to="/"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faPaypal" />

                  <small>Payment Method</small>
                </router-link>
              </div>
              <div>
                <button
                  @click="useAuthStore.handleLogout"
                  class="cursor-pointer text-red-600 pt-2 text-sm font-normal"
                  title="Logout"
                >
                  <strong> Sign Out </strong>
                </button>
              </div>
            </div>
          </transition>

          <li v-if="!useAuthStore.isAuthenticated" class="flex items-center gap-2 cursor-pointer">
            <small>Sign up</small>

            <router-link
              to="/login"
              class="w-20 text-sm max-lg:w-14 max-lg:p-2 cursor-pointer flex justify-center text-center bg-black text-white p-2.5 rounded-full hover:opacity-80"
            >
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- cartModal -->
    <Overlay v-if="cartModal" />
    <CartModal
      :cart-modal="cartModal"
      @handle-cart-modal-state="cartModal = !cartModal"
      @delete-cart-item="cart.deleteFromCart"
    />

    <!-- mobile  view-->
    <Overlay v-if="isMenu" />
    <MobileMenu :isMenu="isMenu" @menuState="updateMenuState" />
  </header>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

// fontawesome
import {
  faArrowDown,
  faBagShopping,
  faCarAlt,
  faCartShopping,
  faDashboard,
  faScissors,
  faSearch,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// stores
import { navState } from '@/stores/navState'
import { useCart } from '@/stores/cartController'
import { authStore } from '@/stores/authStore'

// Components
import Overlay from '../Overlay.vue'
import CartModal from '../CartModal.vue'
import ProductCard from '../ProductCard.vue'
import MobileMenu from './MobileMenu.vue'
import { faFirstOrder, faPaypal } from '@fortawesome/free-brands-svg-icons'

const useAuthStore = authStore()
console.log(useAuthStore.user)
const cart = useCart()

const header = navState()
const profileModal = ref<boolean>(false)

// other states
const isActive = ref<boolean | null>(null)
const isMenu = ref<boolean>(false)
const cartModal = ref<boolean | false>(false)

const updateMenuState = () => {
  isMenu.value = !isMenu.value
}

const toggleAvatarModal = () => {
  profileModal.value = !profileModal.value
}

// scroll event for header
window.addEventListener('scroll', () => {
  window.scrollY > 590 ? (isActive.value = true) : (isActive.value = false)
})
</script>





<style >
.header.active {
  backdrop-filter: blur(12px);
  box-shadow: 0px 3px 4px #dddddd97;
}

.link {
  padding: 0.3rem;
  transition: 0.3s ease;
  font-size: 0.8rem;
}

.link:hover {
  text-decoration: underline #333 2px;
  scale: 0.95;
}

/* Add these CSS rules */
.router-link-active,
.router-link-exact-active {
  text-decoration: underline #333 2px;
  scale: 0.95;
}

.link-active {
  text-decoration: underline #333 2px;
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

.profile-enter-active {
  transition: all 0.125s ease;
  transition-delay: 100ms;
}

.profile-leave-active {
  transition: 0.2s ease;
}

.profile-enter-from {
  transform: translateY(-400px);
  opacity: 0;
}

.profile-leave-to {
  opacity: 0;
  scale: 0;
}
</style>
