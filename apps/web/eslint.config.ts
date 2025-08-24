import { defineConfig } from '@tszhong0411/eslint-config'

export default defineConfig({
  tsconfigRootDir: import.meta.dirname,
  next: true,
  tailwindEntryPoint: './src/styles/globals.css'
})
