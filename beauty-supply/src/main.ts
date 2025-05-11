import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)
app.use(createPinia())
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

app.mount('#app')
