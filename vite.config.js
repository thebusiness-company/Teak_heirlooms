import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import { fileURLToPath } from 'url';
import compression from 'vite-plugin-compression';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),compression(), tailwindcss(),
  ],
  resolve: {
      alias: {
        "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
      },
    },
    server: {
      host: true,         // Allow access via local IP
      port: 5173,         // Optional: specify a custom port
    },
    build: {
      rollupOptions: {
        external: ["lodash"],
      },

      cssCodeSplit: true, // Splits CSS for better performance
      minify: 'terser', // Ensures Terser is used
      terserOptions: {
        compress: {
          drop_console: true, // Removes console logs
          drop_debugger: true, // Removes debugger statements
        },
      },
    },
    css: {
      devSourcemap: false, // Removes sourcemaps for production
    },
    
  }
)
