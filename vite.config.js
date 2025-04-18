// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
// pull in the PostCSS plugins directly
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [ react() ],

  css: {
    postcss: {
      plugins: [
        tailwindcss(),    // ← now loading the real Tailwind
        autoprefixer(),
      ],
    }
  }
})
