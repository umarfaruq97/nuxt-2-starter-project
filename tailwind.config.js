/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        fcfcfc: '#FCFCFC',
        f4f4f4: '#F4F4F4',
        101828: '#101828',
        475467: '#475467',
        '2065da': '#2065DA',
        feebee: '#FEEBEE',
        b23842: '#B23842',
        fffaeb: '#FFFAEB',
        b54708: '#B54708',
        ecfdf3: '#ECFDF3',
        '027a48': '#027A48',
      },
    },
  },
  plugins: [],
}
