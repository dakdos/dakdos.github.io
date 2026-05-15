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
        accent: '#0066FF', 
        'accent-light': '#3385FF' 
      }
    }
  },
  plugins: [],
}
