import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : 'https://github.com/Phanindra1801/Portfolio.git'
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
