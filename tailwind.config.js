/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'healer-cream': '#F5EBE0',
        'healer-green': '#1B4332',
        'healer-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}

