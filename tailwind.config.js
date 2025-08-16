/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
  extend: {
    animation: {
      blob: 'blob 8s infinite',
      'text-shine': 'shine 4s linear infinite',
    },
    keyframes: {
      blob: {
        '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
        '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
        '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
      },
      shine: {
        '0%': { backgroundPosition: '-200%' },
        '100%': { backgroundPosition: '200%' },
      },
    },
  },
},

  plugins: [require('@tailwindcss/aspect-ratio')],
};