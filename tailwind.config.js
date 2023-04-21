/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '100' : '25rem'
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

