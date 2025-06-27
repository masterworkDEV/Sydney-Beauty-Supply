import { defineStore } from 'pinia'
import { ref } from 'vue'

export const navState = defineStore('header', () => {
  const headerState = ref<boolean>(true)
  const footerState = ref<boolean>(true)

  return { headerState, footerState }
})
