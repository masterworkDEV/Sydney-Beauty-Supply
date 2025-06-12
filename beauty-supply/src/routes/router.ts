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
      path: '/product-details/:productID',
      name: 'product-details',
      component: () => import('@/pages/productDetails.vue'),
    },
    {
      path: '/cart-store',
      name: 'cart',
      component: () => import('@/pages/Cart.vue'),
    },
  ],
})

export default router
