import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig, loadEnv} from 'vite'
import svgr from 'vite-plugin-svgr'

import type {ServerEnvType} from './src/utils/env-config.ts'

const ENV_PREFIX = 'APP'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const ENV = loadEnv(mode, process.cwd(), ENV_PREFIX) as ServerEnvType

  return {
    plugins: [svgr(), react()],
    envPrefix: ENV_PREFIX,
    resolve: {
      alias: {
        '~': path.resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
    server: {
      proxy: {
        [ENV.APP_BASE_API_URL]: {
          target: ENV.APP_BASE_API_URL_LOCAL_PROXY,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
