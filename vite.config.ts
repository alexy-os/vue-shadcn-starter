import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'sheet': ['@/components/ui/sheet']
        }
      }
    }
  }
})