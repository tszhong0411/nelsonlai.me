import { env } from '@tszhong0411/env'

export const getBaseUrl = () => {
  if (env.VERCEL_ENV === 'preview') return `https://${env.VERCEL_BRANCH_URL}`

  return env.NEXT_PUBLIC_SITE_URL
}
