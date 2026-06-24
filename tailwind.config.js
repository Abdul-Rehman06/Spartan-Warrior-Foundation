/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fefdfd',
        primary: '#002041',
        secondary: '#f1f5f9',
        accent: '#a78b51', 
        accentHover: '#8c7340',
        text: '#002041',
        muted: '#4b5563'
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #fefdfd 0%, #f8fafc 50%, #f1f5f9 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.8) 100%)'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0,32,65,0.08)',
        'gold': '0 4px 20px -2px rgba(167,139,81,0.25)',
      }
    },
  },
  plugins: [],
}