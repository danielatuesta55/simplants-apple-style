// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // the official Tailwind JIT‐on‐PostCSS plugin
    require('autoprefixer')(),         // autoprefixer
  ]
}
