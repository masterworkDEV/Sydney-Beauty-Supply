import { createRouter, createWebHistory } from 'vue-router'

const BASE_URL: string = import.meta.BASE_URL as string

const router = createRouter({
  history: createWebHistory(BASE_URL),

  scrollBehavior: () => {
    return { top: 0, behavior: 'auto' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/components/Dashboard.vue'),
    },
    {
      path: '/product-details/:productID',
      name: 'product-details',
      component: () => import('@/pages/productDetails.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/pages/Store.vue'),
    },
    {
      path: '/cart-store',
      name: 'cart',
      component: () => import('@/pages/Cart.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/auth/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/auth/Login.vue'),
    },
  ],
})

export default router
