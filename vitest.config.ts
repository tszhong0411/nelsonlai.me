import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['apps/*', 'packages/*'],
    coverage: {
      reporter: ['lcov', 'html'],
      all: true,
      provider: 'v8',
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/coverage/**',
        '**/fixtures/**',
        '**/tests/**',
        './turbo/**',
        './scripts/**'
      ]
    }
  }
})
