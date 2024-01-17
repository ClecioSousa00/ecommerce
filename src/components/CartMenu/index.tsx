import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { BadgeCategory } from '../BadgeCategory'
import { CartItem } from './CartItem'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

export const CartMenu = () => {
  return (
    <div className="flex h-full flex-col items-start">
      <BadgeCategory name="carrinho">
        <ShoppingCart size={18} />
      </BadgeCategory>
      <ScrollArea className="h-full w-full ">
        <div className="mt-8 space-y-4 ">
          <CartItem />
        </div>
      </ScrollArea>
      <div className="w-full">
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>subtotal</p>
          <p>R$ 1.160,55</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>entrega</p>
          <p className="uppercase"> grátis</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>descontos</p>
          <p>- R$ 1.160,55</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-bold uppercase ">
          <p>total</p>
          <p>R$ 1.160,55</p>
        </div>
        <Button className="mt-2 w-full rounded-lg bg-primary text-sm font-bold uppercase">
          adicionar ao carrinho
        </Button>
      </div>
    </div>
  )
}
