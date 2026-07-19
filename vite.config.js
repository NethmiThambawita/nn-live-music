import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /nn-live-music/; Vercel serves it from the domain root.
  base: process.env.GH_PAGES ? '/nn-live-music/' : '/',
  plugins: [react(), tailwindcss()],
})
