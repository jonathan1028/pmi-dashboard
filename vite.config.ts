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
  }
  // server: {
  //   proxy: {
  //     '/foo': 'http://localhost:4567',
  //     '/api': {
  //       target: 'https://pmiaustin.rentvine.com/api/managers', // The backend server
  //       changeOrigin: true, // Needed for virtual hosted sites
  //       // secure: false // Set to false if the backend server is using self-signed SSL certificates
  //       rewrite: (path) => path.replace(/^\/api/, '') // Remove /api from the URL path
  //     }
  //   }
  // }
})
