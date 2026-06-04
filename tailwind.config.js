/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        display: ['PT Sans','sans-serif'], 
        body: ['DM Sans','sans-serif'] 
      },
      colors: { 
        accent: '#DE3E3E', 
        'accent-light': '#E95B5B' 
      }
    }
  },
  plugins: [],
}
