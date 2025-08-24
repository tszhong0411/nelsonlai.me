import { defineConfig } from '@repo/eslint-config'

export default defineConfig({
  tsconfigRootDir: import.meta.dirname,
  next: true,
  tailwindEntryPoint: './src/styles/globals.css'
})
