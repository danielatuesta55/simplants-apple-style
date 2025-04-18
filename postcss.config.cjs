// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // Tailwind’s PostCSS JIT plugin
    require('autoprefixer')(),         // Autoprefixer
  ],
}
