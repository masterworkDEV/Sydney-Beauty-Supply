import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
}

app.use(Toast, options)
app.use(VueLazyload, {
  // Optional settings
  preLoad: 1.3,
  error: '/path/to/error.png',
  loading: '/path/to/loading.gif',
  attempt: 3,
  listenEvents: [
    'scroll',
    'wheel',
    'mousewheel',
    'resize',
    'transitionend',
    'touchstart',
    'touchmove',
    'animationend',
  ],
  // ... other options
})

app.use(createPinia())

app.use(router)

app.mount('#app')
