/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        'mainheight' : '45rem',
        'main' : 'calc(100% - 11.5rem)',
        'pwidH' : '50rem'
      },
      width: {
        'mainwd' : '38rem',
        'pwidW' : '45rem',
        'line' : 'calc(100% - 2rem)',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

