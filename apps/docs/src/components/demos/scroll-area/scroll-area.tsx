import { ScrollArea } from '@tszhong0411/ui/components/scroll-area'
import { range } from '@tszhong0411/utils'

const TAGS = range(50).map((i) => `v1.2.0-beta.${50 - i}`)

const ScrollAreaDemo = () => {
  return (
    <ScrollArea className='h-72 w-48 rounded-lg border'>
      <div className='px-4 text-sm'>
        <h4 className='py-2 font-medium'>Tags</h4>
        {TAGS.map((tag) => (
          <div key={tag} className='flex h-10 items-center border-t'>
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default ScrollAreaDemo
