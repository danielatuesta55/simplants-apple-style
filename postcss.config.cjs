// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ← correct: pulls in the JIT PostCSS plugin  
    autoprefixer: {},
  }
}
