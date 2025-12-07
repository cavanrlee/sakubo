import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
<<<<<<< HEAD
})
=======
    server: {
        proxy: {
            '/users': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
>>>>>>> origin/junjun-new
