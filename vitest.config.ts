import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['apps/*', 'packages/*'],
    coverage: {
      reporter: ['lcov', 'html'],
      provider: 'v8',
      include: ['**/src/**/*.{ts,tsx}'],
      exclude: ['**/tests/**', '**/e2e/**', '**/fixtures/**']
    }
  }
})
