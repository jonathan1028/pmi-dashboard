import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://pmiaustin.rentvine.com/', // The backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false // If the backend server uses self-signed SSL certificates
        // This rewrite (path) must not be used since the actual real url as '/api' in it
        // rewrite: (path) => path.replace(/^\/api/, '') // Remove /api from the URL path
      }
    }
  }
})
