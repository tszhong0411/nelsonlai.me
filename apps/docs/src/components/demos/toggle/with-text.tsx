import { Toggle } from '@tszhong0411/ui/components/toggle'
import { ItalicIcon } from 'lucide-react'

const ToggleWithTextDemo = () => {
  return (
    <Toggle aria-label='Toggle italic'>
      <ItalicIcon />
      Italic
    </Toggle>
  )
}

export default ToggleWithTextDemo
