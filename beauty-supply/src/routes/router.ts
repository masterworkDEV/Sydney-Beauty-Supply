import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),

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
  ],
})

export default router
