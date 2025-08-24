import { defineConfig } from '@repo/eslint-config'

export default defineConfig({
  tsconfigRootDir: import.meta.dirname,
  ignores: ['apps/**', 'packages/**']
})
