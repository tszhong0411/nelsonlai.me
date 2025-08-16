import { env } from '@tszhong0411/env'
import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from './schema'

export const db = drizzle(env.DATABASE_URL, { schema })
