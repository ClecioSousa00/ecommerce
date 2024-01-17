'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { UseCounter } from '@/hooks/useCounter'

type CounterProductProps = {
  quantity: number
  handleDecrement: () => void
  handleIncrement: () => void
}

export const CounterProduct = ({
  quantity,
  handleDecrement,
  handleIncrement,
}: CounterProductProps) => {
  return (
    <div className="flex items-center gap-2 ">
      <Button
        className="h-8 w-8"
        variant={'outline'}
        size={'icon'}
        onClick={() => handleDecrement()}
      >
        <ChevronLeft />
      </Button>
      <span className="text-sm ">{quantity}</span>
      <Button
        className="h-8 w-8"
        variant={'outline'}
        size={'icon'}
        onClick={() => handleIncrement()}
      >
        <ChevronRight />
      </Button>
    </div>
  )
}
