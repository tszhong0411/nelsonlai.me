import { getBaseUrl } from './get-base-url'

export const getDefaultImage = (id: string) => `${getBaseUrl()}/api/avatar/${id}`
