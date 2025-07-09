import { Label } from '@tszhong0411/ui/components/label'
import { Switch } from '@tszhong0411/ui/components/switch'

const SwitchDemo = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  )
}

export default SwitchDemo
