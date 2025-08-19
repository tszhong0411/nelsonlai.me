import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets-zod'
import { z } from 'zod'

export const env = createEnv({
  skipValidation: !!process.env.CI,
  extends: [vercel()],

  server: {
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1),

    GOOGLE_API_KEY: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1),
    WAKATIME_API_KEY: z.string().min(1),

    BETTER_AUTH_SECRET: z.string().min(1),

    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),

    DATABASE_URL: z.string().url(),

    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),

    IP_ADDRESS_SALT: z.string().min(1),

    DISCORD_WEBHOOK_URL: z.string().url(),

    RESEND_API_KEY: z.string().min(1),
    AUTHOR_EMAIL: z.string().email()
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().optional(),

    NEXT_PUBLIC_UMAMI_URL: z.string().url(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid()
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  },

  emptyStringAsUndefined: true
})
