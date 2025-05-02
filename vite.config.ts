import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['bloque-icon.svg'],
      manifest: {
        name: 'Game Bloque tournament',
        short_name: 'GBTournament',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
          {
            src: 'bloque-icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              const isLeaderboard = url.toString().endsWith('/game/leaderboard');
              return isLeaderboard; 
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'leaderboard-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60,
                purgeOnQuotaError: true, 
              },
              networkTimeoutSeconds: 4,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => {
              const isMarket = url.toString().endsWith('/game/market');
              return isMarket;
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'market-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60,
                purgeOnQuotaError: true,
              },
              networkTimeoutSeconds: 4,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ]
      }
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: false,
      filename: 'dist/stats.html',
    }),
  ],
})
