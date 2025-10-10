import { defineStore } from 'pinia'
import { ref, watch, onUnmounted } from 'vue'

export const useInterSectionObserver = defineStore('intersectionObserver', () => {
  const element = ref<Element | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const observe = (el: Element) => {
    observer?.disconnect() // Disconnect previous
    isVisible.value = false // Reset state

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true

            observer?.unobserve(entry.target) // Stop observing once visible
          } else {
            isVisible.value = false
          }
        })
      },
      { threshold: 0 },
    )
    observer.observe(el)
  }

  // Watch for the element to be set from the component
  watch(element, (newEl) => {
    if (newEl) {
      observe(newEl)
    }
  })

  // Cleanup
  onUnmounted(() => {
    observer?.disconnect()
  })

  return { element, isVisible }
})
