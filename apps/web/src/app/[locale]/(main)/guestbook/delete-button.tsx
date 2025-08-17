import type { ListMessagesOutput } from '@/orpc/routers'

import { useTranslations } from '@tszhong0411/i18n/client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@tszhong0411/ui/components/alert-dialog'
import { Button, buttonVariants } from '@tszhong0411/ui/components/button'

import { useDeleteGuestbookMessage } from '@/hooks/queries/guestbook'

type DeleteButtonProps = {
  message: ListMessagesOutput['messages'][number]
}

const DeleteButton = (props: DeleteButtonProps) => {
  const { message } = props
  const t = useTranslations()

  const guestbookMutation = useDeleteGuestbookMessage()

  const handleDeleteMessage = (id: string) => {
    guestbookMutation.mutate({ id })
  }

  return (
    <div className='mt-4 flex justify-end'>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant='destructive'
            disabled={guestbookMutation.isPending}
            aria-disabled={guestbookMutation.isPending}
            data-testid='guestbook-delete-button'
          >
            {t('common.delete')}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent data-testid='guestbook-dialog'>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('guestbook.delete-dialog.title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('guestbook.delete-dialog.description')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('common.cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleDeleteMessage(message.id)}
              className={buttonVariants({ variant: 'destructive' })}
              data-testid='guestbook-dialog-delete-button'
            >
              {t('common.delete')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default DeleteButton
