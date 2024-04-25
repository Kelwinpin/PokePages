/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/*/',],
      exclude: ['src/main.tsx'],
      provider: 'istanbul',
      reporter: ['json', 'html', 'text', 'text-summary'],
    },
    setupFiles: './src/test/setupTests.ts',
  },

})