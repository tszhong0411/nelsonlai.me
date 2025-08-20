import { env } from '@tszhong0411/env'

export const getBaseUrl = () => {
  let baseURL

  if (env.VERCEL_ENV === 'preview') {
    baseURL = `https://${env.NEXT_PUBLIC_VERCEL_URL}`
  }

  baseURL = env.NEXT_PUBLIC_SITE_URL

  return baseURL
}
