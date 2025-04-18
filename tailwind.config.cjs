// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  // ensure bg-red-500 and text-white are generated even if only used in @apply
  safelist: [
    'bg-red-500',
    'text-white',
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}
