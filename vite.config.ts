import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        svgr()
    ],

    publicDir: 'static',

    // ✅ ВАЖНО: имя репозитория на GitHub
    base: '/home/',

    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
})
