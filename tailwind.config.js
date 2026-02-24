/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This creates the 'font-share' utility class
        share: ['"Share Tech"', 'sans-serif'],
        // Keep your existing serif font if you have one
        serif: ['"Playfair Display"', 'serif'], 
      },
      colors: {
        'healer-cream': '#F5EBE0',
        'healer-green': '#1B4332',
        'healer-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}

