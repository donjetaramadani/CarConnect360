// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "bootstrap/dist/css/bootstrap";',
      },
    },
  },
  // Remove the optimizeDeps configuration that includes PostCSS
  // This will disable any optimizations related to PostCSS
  // optimizeDeps: {
  //   include: ['postcss', 'autoprefixer'],
  // },
});
