import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
  esbuild: {
    // Set target to 'es2015' or 'esnext' to transpile CommonJS modules
    target: 'es2015',
  },
});
