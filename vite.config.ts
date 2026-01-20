import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use '/sigspecials/' as base path
  // For local dev: use '/' (default)
  // You can override with VITE_BASE_PATH env variable
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/sigspecials/' : '/'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
