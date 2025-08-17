import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { toast } from '@tszhong0411/ui/components/sonner'
import { useTranslations } from 'next-intl'

import { orpc } from '@/orpc/client'

export const useGuestbookMessages = () => {
  return useInfiniteQuery(
    orpc.guestbook.list.infiniteOptions({
      input: (pageParam: Date | undefined) => ({ cursor: pageParam }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      placeholderData: keepPreviousData
    })
  )
}

export const useCreateGuestbookMessage = (onSuccess?: () => void) => {
  const t = useTranslations()
  const queryClient = useQueryClient()

  return useMutation(
    orpc.guestbook.create.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: orpc.guestbook.list.key() })
        toast.success(t('guestbook.create-message-successfully'))

        onSuccess?.()
      }
    })
  )
}

export const useDeleteGuestbookMessage = () => {
  const t = useTranslations()
  const queryClient = useQueryClient()

  return useMutation(
    orpc.guestbook.delete.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: orpc.guestbook.list.key() })
        toast.success(t('guestbook.delete-message-successfully'))
      }
    })
  )
}
