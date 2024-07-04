/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f59e0b',
        dbg:'#05061B',
        dcd:'#070E27'
      }
    },
  },
  plugins: [],
}

