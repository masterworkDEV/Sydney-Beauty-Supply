// tailwind.config.js
module.exports = {
  content: [
    // Your existing content paths
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // Add a `safelist` to prevent PurgeCSS from removing Swiper's utility classes.
  safelist: ['swiper-button-prev', 'swiper-button-next', 'swiper-button-disabled'],
  theme: {
    extend: {},
  },
  plugins: [],
}
