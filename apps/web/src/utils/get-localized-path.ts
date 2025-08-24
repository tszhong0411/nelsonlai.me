import { i18n } from '@repo/i18n/config'

import { getBaseUrl } from './get-base-url'

type LocalizedDocument = {
  slug: string
  locale: string
  absolute: boolean
}

export const getLocalizedPath = (doc: LocalizedDocument) => {
  const { slug, locale, absolute } = doc

  let localePath: string

  if (locale === i18n.defaultLocale) {
    localePath = absolute ? getBaseUrl() : '/'
  } else {
    localePath = absolute ? `${getBaseUrl()}/${locale}` : `/${locale}`
  }

  return `${localePath}${slug}`
}
