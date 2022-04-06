import { defineConfig } from 'vite'
import nodePolyfills from 'rollup-plugin-polyfill-node';
const production = process.env.NODE_ENV === 'production';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      // ↓ Needed for development mode
      !production && nodePolyfills({
        include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')]
      }),
      react(),
  ],
  build: {
    rollupOptions: {
      plugins: [
        // ↓ Needed for build
        nodePolyfills()
      ]
    },
    // ↓ Needed for build if using WalletConnect and other providers
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
