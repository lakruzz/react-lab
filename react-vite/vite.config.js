import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // This is the server configuration for Vite
    host: true, // This enables localhost access
    port: 5173 // This is the port number 5173 is the default port number
  },
  build: { // This is the build configuration for Vite
    outDir: 'dist', // This is the output directory for the build dist is the default directory
    sourcemap: true // This enables source maps
  },
  preview: { // This is the preview configuration for Vite (hosting static files)
    host: true, // This enables localhost access
    port: 4173, // This is the port number 4173 is the default port number
    open: true, // This opens the browser automatically
  }
})
