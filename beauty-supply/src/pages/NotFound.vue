<template>
     <!-- Theme Toggle Button -->
     <button 
     @click="toggleTheme" 
     class="absolute top-20 right-10 p-3 rounded-full shadow-lg transition duration-300"
     :class="theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'"
     aria-label="Toggle theme"
 >
     <!-- Sun/Moon Icon based on current theme -->
     <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
     </svg>
     <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
     </svg>
 </button>

 <main class="min-h-screen flex items-center justify-center text-center flex-col p-4">
     <div class="flex flex-col items-center justify-center w-full max-w-lg">
         
         <!-- The main container for the error message and button -->
         <div class="relative w-full text-center">
             
             <!-- Animated floating element (The Digital Void Cube) -->
             <div class="block-error" :style="blockErrorStyles"></div>

             <!-- Large 404 Text -->
             <h1 class="text-9xl md:text-[10rem] font-extrabold tracking-widest z-10 relative" :class="textPrimary">404</h1>
             
             <!-- Status Label with a subtle tilt -->
             <div class="bg-orange-600 px-4 py-1 text-sm rounded-lg rotate-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl border-2 border-orange-700 uppercase tracking-widest text-white">
                 Page Not Found
             </div>
         </div>
         
         <!-- Informational Text -->
         <div class="mt-12 max-w-sm text-center">
             <p class="text-xl mb-8 font-light leading-relaxed" :class="textSecondary">
                 Looks like you've wandered into the digital void. The URL you requested may be broken or the page no longer exists.
             </p>

             <!-- Action Button with a sleek hover effect -->
             <a @click.prevent="goHome"
                href="/"
                class="relative inline-block text-sm font-medium text-orange-600 group focus:outline-none focus:ring-4 focus:ring-orange-500/50 rounded-lg transition duration-200">
                 <!-- Shadow layer for depth -->
                 <span class="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-orange-700 rounded-lg group-hover:translate-y-0 group-hover:translate-x-0"></span>
                 
                 <!-- Foreground button content (background changes with theme) -->
                 <span class="relative block px-10 py-4 border-2 border-orange-600 rounded-lg group-hover:text-orange-400 transition duration-200 uppercase font-semibold tracking-wider shadow-inner" 
                       :class="[buttonBg, textPrimary]">
                     Return Home
                 </span>
             </a>
         </div>
     
     </div>
 </main>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'


const theme = ref('dark'); // 'dark' or 'light'

// --- THEME LOGIC ---

const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
};

// Dynamic classes based on theme
const bodyClasses = computed(() => 
    theme.value === 'dark' 
        ? 'bg-gray-900 text-white min-h-screen' 
        : 'bg-gray-50 text-gray-900 min-h-screen'
);

const textPrimary = computed(() => 
    theme.value === 'dark' ? 'text-white' : 'text-gray-900'
);

const textSecondary = computed(() => 
    theme.value === 'dark' ? 'text-gray-300' : 'text-gray-700'
);

const buttonBg = computed(() => 
    theme.value === 'dark' ? 'bg-blue-900' : 'bg-white'
);

// Dynamic styles for the floating error block
const blockErrorStyles = computed(() => {
    const shadowColor = theme.value === 'dark' 
        ? 'rgba(255, 61, 86, 0.3)' // Red glow for dark mode
        : 'rgba(255, 140, 0, 0.4)'; // Orange glow for light mode
    
    const borderColor = theme.value === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(0, 0, 0, 0.1)';
        
    const gradient = theme.value === 'dark'
        ? 'radial-gradient(circle, rgba(255, 61, 86, 0.15) 0%, rgba(31, 41, 55, 0.05) 70%)'
        : 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(209, 213, 219, 0.05) 70%)';

    return {
        'box-shadow': `0 0 80px ${shadowColor}`,
        'border-color': borderColor,
        'background': gradient
    };
});





  // --- INTERACTION LOGIC ---
                
  const goHome = () => {
                    console.log("Navigating to home page (/)");

                    window.location.href = '/';
                };
</script>

<style>

:root {
    font-family: 'Inter', sans-serif;
}


@keyframes floating {
    0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0.8; }
    25% { transform: translate(-45%, -55%) rotate(5deg); opacity: 0.7; }
    50% { transform: translate(-55%, -45%) rotate(-5deg); opacity: 0.9; }
    75% { transform: translate(-50%, -50%) rotate(2deg); opacity: 0.75; }
    100% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0.8; }
}


.block-error {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(255, 61, 86, 0.15) 0%, rgba(31, 41, 55, 0.05) 70%);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    animation: floating 10s ease-in-out infinite;
    box-shadow: 0 0 80px rgba(255, 61, 86, 0.3);
    z-index: 0;
    transition: all 0.3s;
}
</style>