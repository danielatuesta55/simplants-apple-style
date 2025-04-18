// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // Tailwind’s JIT‑on‑PostCSS plugin
    require('autoprefixer')(),         // Autoprefixer
  ],
}
