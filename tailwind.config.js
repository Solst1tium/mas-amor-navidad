/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navidad-red': '#8B1A1A',
        'navidad-green': '#2D5016',
        'navidad-gold': '#D4AF37',
        'navidad-cream': '#F5F0E8',
        'navidad-dark': '#1a1a1a',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'subtitle': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}