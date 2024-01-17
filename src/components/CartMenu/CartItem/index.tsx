import { CounterProduct } from '@/components/CounterProduct'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import Image from 'next/image'

export const CartItem = () => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-20  w-20 items-center justify-center rounded-sm bg-accent lg:rounded-md lg:bg-black `}
      >
        <Image
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          src={'/image2.png'}
          alt=""
          height={0}
          width={0}
          unoptimized
        />
      </div>

      <div className="flex-1">
        <div>
          <h3 className="max-w-[9.75rem]   truncate text-xs capitalize">
            Logitech MX Master 3s
          </h3>
          <div>
            <strong className="font-medium">R$ 467,93</strong>
            <span className=" ml-1 text-xs line-through opacity-75 lg:text-sm">
              R$ R$ 467,93
            </span>
          </div>
        </div>
        <CounterProduct />
      </div>
      <Button variant={'outline'} size={'icon'} className="h-8 w-8 ">
        <Trash size={16} />
      </Button>
    </div>
  )
}
