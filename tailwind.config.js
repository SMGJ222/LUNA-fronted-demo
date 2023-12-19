/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'heiti': ['黑体', 'SimHei', 'STHeiti', 'sans-serif'],
      'noto': ['source-han-sans-simplified-cn', 'sans-serif'],
      'mono': ['Sarasa Gothic Mono', 'monospace', 'serif'],
      'roboto': ['Roboto', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}

