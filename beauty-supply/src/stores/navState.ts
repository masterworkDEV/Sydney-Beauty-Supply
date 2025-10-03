import { defineStore } from 'pinia'
import { ref } from 'vue'

export const navState = defineStore('header', () => {
  const navState = ref<boolean>(true)
  const footerState = ref<boolean>(true)

  return { navState, footerState }
})
