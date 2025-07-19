import { Button } from '@tszhong0411/ui/components/button'
import { LoaderIcon } from 'lucide-react'

const ButtonPendingDemo = () => {
  return (
    <Button>
      <LoaderIcon className='animate-spin' />
      Pending
    </Button>
  )
}

export default ButtonPendingDemo
