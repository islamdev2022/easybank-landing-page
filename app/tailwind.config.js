/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {zIndex: {
      '100': '100',
    },colors: {
      darkblue:"hsl(233, 26%, 24%)",
      hsl: {
        button: 'hsl(136, 65%, 51%)',
        'button-to': 'hsl(192, 70%, 51%)',
      },
    },},
  },
  plugins: [],
}
