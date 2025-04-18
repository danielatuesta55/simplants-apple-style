// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// pull in the PostCSS plugins directly
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [ react() ],

  css: {
    postcss: {
      plugins: [
        tailwindcss(),    // <-- ensure Tailwind’s PostCSS plugin is actually run
        autoprefixer(),
      ],
    }
  }
})
