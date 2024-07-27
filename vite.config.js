import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Determine base URL based on environment
const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction ? '/vuejs-search-meals/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})
