/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'noto': ['思源黑体'],
      'mono': ['Sarasa Gothic SC'],
      'roboto': ['Roboto'],

    },
    extend: {},
  },
  plugins: [],
}

