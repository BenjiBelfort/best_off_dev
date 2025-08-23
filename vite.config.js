import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    // MDX d'abord (avant React)
    mdx({
      remarkPlugins: [remarkGfm],
      providerImportSource: '@mdx-js/react',
    }),
    react(),
    tailwindcss(),
  ],
  build: {
    target: 'es2018',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
