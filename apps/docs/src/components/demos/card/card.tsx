import { Button } from '@tszhong0411/ui/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@tszhong0411/ui/components/card'
import { Input } from '@tszhong0411/ui/components/input'
import { Label } from '@tszhong0411/ui/components/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@tszhong0411/ui/components/select'

const CardDemo = () => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col gap-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Name of your project' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label htmlFor='framework'>Framework</Label>
              <Select>
                <SelectTrigger id='framework'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='next'>Next.js</SelectItem>
                  <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                  <SelectItem value='astro'>Astro</SelectItem>
                  <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export default CardDemo
