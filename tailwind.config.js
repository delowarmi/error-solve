/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'allContainer': '1440px',
      },
      fontFamily: {
        'DMSans': ['DM Sans'],
      },
      colors:{
        'menuColor':'#767676',
        'borderColor':'#979797',
        'menuBg':'#F5F5F3',
        'color':'#262626',
      },
      backgroundImage: {
        'banner': "url('../src/assets/Image.jpg')",
      }
    },
  },
  plugins: [],
}

