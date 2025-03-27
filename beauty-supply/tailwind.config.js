/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],

  theme: {
    extend: {
      fontSize: {
        h1: '3rem',
        h2: '2.5rem',
        h3: '2rem',
        h4: '1.75rem',
        h5: '1.5rem',
        base: '1rem',
        sm: '0.7rem',
        xs: '0.65rem',
        xxs: '0.6rem',
        xxxs: '0.5rem',
      },
      colors: {
        primaryText: '#1e1e1e',
        secondaryText: '#fff',
        mutedText: '#5e5e5e',
      },
      borderColor: {
        default: '#ccc',
      },
      backgroundColor: {
        white: '#fff',
        lightGray: '#f1f1f1',
        semiTransparentBlack: 'rgba(0,0,0,0.5)',
        darkGray: '#1e1e1e',
        mediumGray: '#5e5e5e',
        gray: '#8a8a8a',
        lightMediumGray: '#a3a3a3',
        input: '#ddd',
        primaryBlue: '#1DA1F2',
      },
      screens: {
        xs: '350px',
      },
    },
  },
}
