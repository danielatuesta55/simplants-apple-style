// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { 'sf-pro': ['"San Francisco"', 'system-ui', 'sans-serif'] },
      colors: { primary: '#0071e3' },
    },
  },
  plugins: [],
}