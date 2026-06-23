import { defineConfig } from 'vite'

export default defineConfig({
  base: '/my-fitness-app/', // GitHub Pages repo name — change if your repo name is different
  build: {
    outDir: 'dist'
  }
})
