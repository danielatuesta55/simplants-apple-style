// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    'bg-red-500',
    'text-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
