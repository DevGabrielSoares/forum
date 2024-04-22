import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfifPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    tsConfifPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
