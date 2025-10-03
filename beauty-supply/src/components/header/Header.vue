<template>
  <header v-if="header.navState">
    <div
      :class="headerState && 'active'"
      class="header bg-transparent fixed right-0 left-0 top-0 py-6 max-sm:py-4 flex items-center justify-between px-24 max-xl:px-20 max-md:px-14 max-sm:px-10 transition-all duration-300 ease-in-out z-20"
      ref="headerRef"
    >
      <button
        class="menu-btn hidden absolute right-3 max-sm:block hover:border active:animate__animated animate__fadeIn"
      >
        <svg
          @click="isMenu = !isMenu"
          viewBox="0 0 24 24"
          :fill="headerState ? `black` : `white`"
          :stroke="headerState ? `black` : `white`"
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

      <a
        href="/"
        class="flex justify-end items-center space-x-2 rtl:space-x-reverse font-larger"
        :class="headerState ? 'text-black' : 'text-white'"
      >
        <b class="flex flex-col items-center">MzChi </b>
      </a>
      <nav class="p-1">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="nav-links flex justify-center gap-10 max-xl:gap-7">
            <li class="link text-sm transition-all">
              <router-link
                to="/"
                name="link"
                active-class="link-active"
                :class="headerState ? 'text-black' : 'text-white'"
                >Home</router-link
              >
            </li>

            <li class="link text-sm">
              <router-link
                to="/store"
                name="link"
                active-class="link-active"
                :class="headerState ? 'text-black' : 'text-white'"
              >
                Store
              </router-link>
            </li>

            <li class="link text-sm">
              <a href="#shop" :class="headerState ? 'text-black' : 'text-white'">Clothing</a>
            </li>
            <li class="link text-sm">
              <a href="#service" :class="headerState ? 'text-black' : 'text-white'">Footwares</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="max-sm:hidden">
        <ul class="flex items-center gap-5">
          <li
            @click="cartModal = !cartModal"
            class="relative cursor-pointer hover:scale-110 flex items-center justify-center gap-1 transition-all"
            title="Cart"
          >
            <FontAwesomeIcon :icon="faCartShopping" :color="headerState ? 'black' : 'white'" />
            <div
              class="absolute w-full h-full p-2 right-[-60%] top-[-70%] bg-red-500 rounded-full text-white flex items-center justify-center"
              v-if="Object.values(cart.cartItems).length"
            >
              <small class="font-semibold text-[.5rem]">
                {{
                  Object.values(cart.cartItems).reduce((acc, product) => {
                    return acc + product.quantity
                  }, 0)
                }}
              </small>
            </div>
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
              <FontAwesomeIcon :icon="faTimes" @click="toggleAvatarModal" />
              <div class="flex items-center gap-5 border-b border-[#ddd] py-4">
                <img
                  :src="useAuthStore.user.image"
                  :alt="useAuthStore.user?.username"
                  v-if="useAuthStore.user?.image"
                />

                <div
                  v-else-if="useAuthStore.isAuthenticated && !useAuthStore.user?.image"
                  class="relative bg-gray-700 border-2 border-black p-1 text-xl text-white uppercase rounded-full flex justify-center items-center text-center"
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
                  @click="toggleAvatarModal"
                  to="/"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faUser" :color="headerState ? 'black' : 'white'" />
                  <small> Account </small>
                </router-link>

                <a
                  @click="profileModal = !profileModal"
                  href="/dashboard"
                  target="_blank"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faDashboard" />

                  <small> Dashbord </small>
                </a>
                <router-link
                  @click="profileModal = !profileModal"
                  to="/"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faFirstOrder" />

                  <small> Orders </small>
                </router-link>

                <router-link
                  @click="profileModal = !profileModal"
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
            <router-link
              to="/login"
              class="p-2.5 text-sm cursor-pointer flex justify-center text-center rounded-full hover:opacity-80"
            >
              <FontAwesomeIcon :icon="faUser" :color="headerState ? 'black' : 'white'" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- cartModal for bigger screen -->

    <CartModal
      :cart-modal="cartModal"
      @handle-cart-modal-state="cartModal = !cartModal"
      @delete-cart-item="cart.deleteFromCart"
    />
    <Overlay v-if="cartModal" @click="profileModal = !profileModal" />

    <!-- mobile  view-->
    <MobileMenu :isMenu="isMenu" @menuState="updateMenuState" />
    <Overlay v-if="isMenu" @click="updateMenuState" />
  </header>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

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
const cart = useCart()

const header = navState()
const profileModal = ref<boolean>(false)

// other states
const isMenu = ref<boolean>(false)
const cartModal = ref<boolean | false>(false)

const updateMenuState = () => {
  isMenu.value = !isMenu.value
}

const toggleAvatarModal = () => {
  profileModal.value = !profileModal.value
}

const headerState = ref<boolean>(false)
const headerRef = ref<HTMLElement | null>(null)
const initialScrollValue = ref<number>(0)
const scrollThreshold = 100

// scroll event for navstate
window.addEventListener('scroll', () => {
  window.scrollY > 100 ? (headerState.value = true) : (headerState.value = false)
})

const handleNavScroll = () => {
  if (!headerRef.value) return

  const currentScroll = window.scrollY

  if (currentScroll > initialScrollValue.value && initialScrollValue.value > scrollThreshold) {
    headerRef.value.classList.add('-translate-y-full')
  } else {
    headerRef.value.classList.remove('-translate-y-full')
  }
  initialScrollValue.value = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleNavScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleNavScroll)
})
</script>





<style >
.header.active {
  backdrop-filter: blur(12px);
  box-shadow: 0px 3px 4px #dddddd97;
  background: white;
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
  border-bottom: 2px solid orange;
  scale: 0.95;
}

.menu-btn {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.menu-btn > svg {
  width: 100%;
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
