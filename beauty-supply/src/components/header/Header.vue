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
            <li class="link transition-all">
              <router-link
                to="/"
                name="link"
                active-class="link-active"
                :class="headerState ? 'text-black' : 'text-white'"
                >Home</router-link
              >
            </li>

            <li class="link">
              <router-link
                to="/store"
                name="link"
                active-class="link-active"
                :class="headerState ? 'text-black' : 'text-white'"
              >
                Store
              </router-link>
            </li>

            <li class="link">
              <a href="#shop" :class="headerState ? 'text-black' : 'text-white'">Clothing</a>
            </li>
            <li class="link">
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
                <a
                  @click="profileModal = !profileModal"
                  href="/dashboard"
                  target="_blank"
                  class="flex gap-2 p-2 hover:bg-[#ddd] hover:text-[#333] items-center"
                >
                  <FontAwesomeIcon :icon="faDashboard" />

                  <small>View Profile </small>
                </a>
                <router-link
                  @click="profileModal != profileModal"
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

          <li
            v-if="!useAuthStore.isAuthenticated"
            class="flex items-center gap-2 cursor-pointer relative"
          >
            <FontAwesomeIcon
              :icon="faUser"
              :color="headerState ? 'black' : 'white'"
              @click="profileDropdown = !profileDropdown"
            />

            <div
              class="absolute bg-white top-10 right-0 w-52 p-3 rounded drop-shadow-2xl"
              :class="profileDropdown ? 'block' : 'hidden'"
            >
              <FontAwesomeIcon
                :icon="faTimes"
                class="absolute right-0"
                @click="profileDropdown = !profileDropdown"
              />
              <h3 class="font-bold w-full mt-4 mb-1 text-[1rem] text-center">
                Sign In To Your Account
              </h3>
              <!-- From Uiverse.io by sahilxkhadka -->
              <router-link
                @click="profileDropdown = !profileDropdown"
                to="/login"
                class="block w-full text-center p-2 bg-black text-white rounded hover:bg-black hover:shadow-lg transition-all group active:w-11 active:h-11 active:rounded-full active:duration-300 ease-in-out"
              >
                <svg
                  class="animate-spin hidden group-active:block mx-auto"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1792 0.129353C10.6088 0.646711 8.22715 1.74444 6.16886 3.36616C4.13416 4.96799 2.42959 7.14686 1.38865 9.48493C0.202866 12.1414 -0.241805 15.156 0.125386 18.0413C0.684593 22.4156 3.02922 26.3721 6.63375 29.0186C8.01155 30.0301 9.65549 30.8757 11.2725 31.3997C12.0405 31.6518 13.4857 32 13.7518 32H13.8361V30.7232V29.4464L13.762 29.4331C11.8485 29.0252 10.2787 28.3818 8.7493 27.3802C7.50961 26.5644 6.29688 25.4402 5.40416 24.2794C3.88824 22.3095 2.98206 20.0908 2.66203 17.5736C2.57781 16.8905 2.57781 15.1029 2.66203 14.4396C2.88773 12.7317 3.31556 11.3288 4.06678 9.863C5.88589 6.3045 9.23103 3.67791 13.1286 2.746C13.4352 2.67303 13.7182 2.60671 13.762 2.59676L13.8361 2.58349V1.29009C13.8361 0.577066 13.8327 -0.00330353 13.8293 1.33514e-05C13.8226 1.33514e-05 13.5329 0.0597076 13.1792 0.129353Z"
                    fill="white"
                  ></path>
                  <path
                    d="M19.563 1.38627V2.67967L19.7078 2.71615C20.8768 3.01463 21.7527 3.32968 22.6723 3.78071C24.8249 4.84528 26.6878 6.467 28.042 8.47011C29.248 10.251 29.9858 12.2375 30.2654 14.4562C30.3126 14.831 30.326 15.1792 30.326 16.0149C30.326 17.169 30.2923 17.5869 30.1205 18.5022C29.7365 20.575 28.8404 22.5681 27.5266 24.2761C26.8158 25.2014 25.8019 26.2029 24.862 26.9027C23.3056 28.0634 21.7324 28.7997 19.7078 29.3137L19.563 29.3502V30.6436V31.9403L19.691 31.9204C20.0616 31.8541 21.1362 31.5689 21.6516 31.4031C24.8216 30.365 27.6041 28.3951 29.6152 25.7652C30.2789 24.8996 30.7337 24.1667 31.2356 23.1618C31.8959 21.8419 32.3102 20.6479 32.5999 19.2318C33.4354 15.1394 32.6606 10.9441 30.417 7.40886C28.4126 4.24833 25.3067 1.8373 21.692 0.640079C21.1867 0.470943 20.038 0.169149 19.7078 0.112772L19.563 0.0895557V1.38627Z"
                    fill="white"
                  ></path>
                </svg>
                <span class="group-active:hidden">Login</span>
              </router-link>
            </div>
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
    <Overlay v-if="cartModal" @click="cartModal = !cartModal" />

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

const profileDropdown = ref<boolean>(false)

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





<style scoped >
.header.active {
  backdrop-filter: blur(12px);
  box-shadow: 0px 3px 4px #dddddd97;
  background: white;
}

.link {
  padding: 0.3rem;
  font-size: 16px;
  &:hover {
    background: linear-gradient(315deg, orange, goldenrod);
  }
}

.router-link-active,
.router-link-exact-active {
  padding: 0.3rem;
  background: linear-gradient(315deg, orange, goldenrod);
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
