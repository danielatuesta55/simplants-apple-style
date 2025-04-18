// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),  // load the official Tailwind PostCSS plugin
    require('autoprefixer')(),          // then autoprefixer
  ]
}
