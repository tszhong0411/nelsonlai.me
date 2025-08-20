import { z } from 'zod'

export const wakatimeStatsSchema = z.object({
  hours: z.number()
})
