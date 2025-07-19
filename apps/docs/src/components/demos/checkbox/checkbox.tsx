import { Checkbox } from '@tszhong0411/ui/components/checkbox'
import { Label } from '@tszhong0411/ui/components/label'

const CheckboxDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  )
}

export default CheckboxDemo
