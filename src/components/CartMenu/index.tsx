import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { BadgeCategory } from '../BadgeCategory'
import { CartItem } from './CartItem'
import { ScrollArea } from '../ui/scroll-area'

export const CartMenu = () => {
  return (
    <div className="flex h-full flex-col items-start">
      <BadgeCategory name="carrinho">
        <ShoppingCart size={18} />
      </BadgeCategory>
      <ScrollArea className="h-full">
        <div className="mt-8 space-y-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </ScrollArea>
      <div>
        <Button className="h-10 w-full" variant={'outline'}>
          oi
        </Button>
      </div>
    </div>
  )
}
