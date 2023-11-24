import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: ['main', 'browser'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
      output: {
        format: 'es',
      },
      external: ['electron'], // <-- suppresses the warning
      preserveModules: true, // <-- suppresses the warning
      // rollup plugin options
    },
  },
  optimizeDeps: {
    include: ['nextjs-websocket', 'websocket', 'react', 'react-dom'], // Add any other dependencies that need commonjs support 
  },
  server: {
    fs: {
      // Allow reading commonjs modules
      allow: ['node_modules'],
      //Allow everyone to connect to the server
      strict: false,
    },
  },
});
