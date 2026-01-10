import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import compression from "vite-plugin-compression";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",

  plugins: [
    react(),

    // Gzip compression for Nginx
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240, // compress files > 10kb
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: true,
    port: 5173,
  },

  build: {
    cssCodeSplit: true,
    sourcemap: false,

    // DO NOT externalize lodash unless loaded via CDN
    // external breaks tree-shaking if lodash is bundled
    rollupOptions: {
      output: {
        // ✅ Proper vendor chunk splitting
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },

    // Minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
    },

    // Avoid noisy warnings after optimization
    chunkSizeWarningLimit: 1000,
  },

  css: {
    devSourcemap: false,
  },
});
