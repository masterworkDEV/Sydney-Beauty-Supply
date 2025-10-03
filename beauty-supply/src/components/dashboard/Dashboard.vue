<template>
  <div class="min-h-screen w-full flex">
    <!-- Sidebar -->
    <aside class="px-5 w-1/4 bg-white border-r border-gray-300 shadow">
      <div class="mt-5 mb-10">
        <h2>
          <b>Mz<span class="text-pink-400">chi</span> </b>
        </h2>
      </div>

      <nav class="w-full flex flex-col items-center gap-54">
        <ul class="w-full">
          <li
            class="flex items-center justify-start gap-5 mb-3 p-2 hover:bg-[#ddd]"
            @click="currentView = Overview"
          >
            <font-awesome-icon :icon="faStore" />
            <span>Dashboard</span>
          </li>
          <li
            class="flex items-center justify-between gap-5 mb-3 p-2 hover:bg-[#ddd]"
            @click="currentView = Products"
          >
            <div class="flex gap-5 items-center">
              <font-awesome-icon :icon="faShop" />
              <span>My Shop</span>
            </div>
            <font-awesome-icon :icon="faArrowDown" />
          </li>
          <li class="flex items-center justify-between gap-5 mb-3 p-2 hover:bg-[#ddd]">
            <div class="flex gap-5 items-center" @click="currentView = Analytics">
              <font-awesome-icon :icon="faBusinessTime" />
              <span>Business Analytics</span>
            </div>
            <font-awesome-icon :icon="faArrowDown" />
          </li>
          <li class="flex items-center justify-between gap-5 mb-3 p-2 hover:bg-[#ddd]">
            <div class="flex gap-5 items-center" @click="currentView = Messages">
              <font-awesome-icon :icon="faMessage" />
              <span>Message</span>
            </div>
          </li>

          <li
            class="flex items-center justify-between gap-5 mb-2 p-2 hover:bg-[#ddd]"
            @click="currentView = AdminSettings"
          >
            <div class="flex items-center gap-5">
              <font-awesome-icon :icon="faToolbox" />
              <span>Settings</span>
            </div>
            <font-awesome-icon :icon="faArrowDown" />
          </li>
        </ul>

        <!-- avatar -->
        <div class="flex gap-3 items-center">
          <div v-if="useAuthStore.isAuthenticated">
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
          </div>
          <!-- username and email -->
          <div class="flex flex-col">
            <span class="capitalize font-semibold"
              >{{ useAuthStore.user?.firstName }} {{ useAuthStore.user?.lastName }}</span
            >
            <span class="capitalize text-xs">{{ useAuthStore.user?.email }}</span>
          </div>
        </div>
      </nav>
    </aside>

    <!-- main content -->

    <component :is="currentView" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { navState } from '@/stores/navState'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { authStore } from '@/stores/authStore'
import apiClient from '../../../api-folder/apiClient'
import {
  faArrowDown,
  faBusinessTime,
  faHomeAlt,
  faMessage,
  faShop,
  faSignOutAlt,
  faStore,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons'

// Import components for every route in admin dashboard, since we are displaying it dynamically
import Overview from './Overview.vue'
import Products from './Products.vue'
import Analytics from './Analytics.vue'
import Orders from './Orders.vue'
import Messages from './Messages.vue'
import Customers from './Customers.vue'
import AdminSettings from './AdminSettings.vue'

const currentView = ref(Overview) // Render components dynamically

// stores
const updateNavState = navState()
const useAuthStore = authStore()

onMounted(() => {
  updateNavState.navState = !updateNavState.navState
  updateNavState.footerState = !updateNavState.footerState
})

onUnmounted(() => {
  updateNavState.navState = true
  updateNavState.footerState = true
})

// Upload products functions

const name = ref<string>('')
const designer = ref<string>('')
const description = ref<string>('')
const category = ref<string>('')
const price = ref<string>('')
const selectedFile = ref<object | null>(null)
const imageUrl = ref<string>('')

const handleSelectedFile = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files && input.files.length) {
    const file = input.files[0]
    selectedFile.value = file

    if (file.type.startsWith('image/')) {
      const reader = new FileReader()

      reader.onload = (event) => {
        imageUrl.value = event.target?.result as string
      }
      reader.readAsDataURL(file)
    } else {
      imageUrl.value = ''
      console.log('Selected file is not an image')
    }
  }
}

const handleSubmit = async () => {
  const formData = new FormData()

  formData.append('name', name.value)
  formData.append('designer', designer.value)
  formData.append('description', description.value)
  formData.append('price', price.value)
  formData.append('category', category.value)
  formData.append('thumbnail', imageUrl.value)

  try {
    const response = await apiClient.post('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    if (response.status === 200 || response.status === 201) {
      console.log('Product has been created', response.data)
      alert('Your product is successfully created')
    }
  } catch (error) {
    console.log(`Something went wrong ${error}`)
  }
}
</script>