import { env } from '@tszhong0411/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schema/index.ts',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  out: './src/migrations',
  strict: true,
  verbose: true
})
