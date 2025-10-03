// router/index.ts
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/stores/authStore'

const BASE_URL: string = import.meta.env.BASE_URL as string

// Extend RouteMeta interface for TypeScript (optional but recommended)
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    roles?: string[] // Define a roles property
  }
}

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
      meta: {
        requiresAuth: true,
        roles: ['Admin', 'Editor'], // Only 'admin' and 'editor' can access
      },
      component: () => import('@/components/dashboard/Dashboard.vue'),
    },

    {
      path: '/admin-settings',
      name: 'admin-settings',
      meta: {
        requiresAuth: true,
        roles: ['Admin'], // Only 'admin' can access
      },
      component: () => import('@/components/dashboard/AdminSettings.vue'),
    },
    {
      path: '/overview',
      name: 'overview',
      meta: {
        requiresAuth: true,
        roles: ['Admin'], // Only 'admin' can access
      },
      component: () => import('@/components/dashboard/Overview.vue'),
    },
    {
      path: '/manage-orders',
      name: 'manage-orders',
      meta: {
        requiresAuth: true,
        roles: ['Admin'], // Only 'admin' can access
      },
      component: () => import('@/components/dashboard/Orders.vue'),
    },
    {
      path: '/manage-products',
      name: 'manage-products',
      meta: {
        requiresAuth: true,
        roles: ['Admin'], // Only 'admin' can access
      },
      component: () => import('@/components/dashboard/Products.vue'),
    },
    {
      path: '/manage-customers',
      name: 'manage-products',
      meta: {
        requiresAuth: true,
        roles: ['Admin'], // Only 'admin' can access
      },
      component: () => import('@/components/dashboard/Customers.vue'),
    },
    {
      path: '/manage-messages',
      name: 'manage-messages',
      meta: {
        requiresAuth: true,
        roles: ['Admin'], // Only 'admin' can access
      },
      component: () => import('@/components/dashboard/Messages.vue'),
    },

    {
      path: '/product-details/:productID',
      name: 'product-details',
      component: () => import('@/pages/productDetails.vue'),
    },
    ,
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

router.beforeEach((to, from, next) => {
  const store = authStore()
  const { isAuthenticated, hasAnyRole } = storeToRefs(store)

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const requiredRoles = to.matched.reduce((accummulator: string[], record) => {
    if (record.meta.roles) {
      accummulator.push(...record.meta.roles)
    }
    return accummulator
  }, [])

  if (requiresAuth) {
    if (!isAuthenticated.value) {
      alert('You need to log in to access this page.')
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      if (requiredRoles.length === 0 || hasAnyRole.value(requiredRoles)) {
        next()
      } else {
        alert('You do not have the necessary permissions to access this route.')
        next({ name: 'home' })
      }
    }
  } else {
    next()
  }
})
export default router
