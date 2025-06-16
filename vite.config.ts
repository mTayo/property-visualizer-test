import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),         // optional alias
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      Layout: path.resolve(__dirname, 'src/Layout'),
      appconfig: path.resolve(__dirname, 'src/appconfig'),
      // data: path.resolve(__dirname, 'src/data'),
      // providers: path.resolve(__dirname, 'src/providers'),
    },
  },
})
