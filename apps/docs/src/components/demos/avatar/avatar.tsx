import { Avatar, AvatarFallback, AvatarImage } from '@tszhong0411/ui/components/avatar'

const AvatarDemo = () => {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/tszhong0411.png' alt='@tszhong0411' />
      <AvatarFallback>TH</AvatarFallback>
    </Avatar>
  )
}

export default AvatarDemo
