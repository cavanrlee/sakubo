import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <--- add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ituro ito papunta sa public folder ng iyong Laravel project
    outDir: '../sakubo-web/public',
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <--- now @ maps to src folder
    },
  },
})