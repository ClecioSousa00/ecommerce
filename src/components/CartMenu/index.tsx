'use client'

import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { BadgeCategory } from '../BadgeCategory'
import { CartItem } from './CartItem'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

import { useCartMenu } from './hooks/useCartMenu'
import { formattedPriceForBrl } from '@/utils/formattedPriceForBrl'

export const CartMenu = () => {
  const {
    calculateSubTotal,
    handleFinishPurchase,
    products,
    totalDiscount,
    totalPriceByProducts,
  } = useCartMenu()

  return (
    <div className="flex h-full flex-col items-start">
      <BadgeCategory name="carrinho">
        <ShoppingCart size={18} />
      </BadgeCategory>
      <ScrollArea className="h-full w-full ">
        <div className="mt-8 space-y-4 ">
          {products.length > 0 &&
            products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
        </div>
      </ScrollArea>
      <div className="w-full">
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>subtotal</p>
          <p>{formattedPriceForBrl(calculateSubTotal())}</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>entrega</p>
          <p className="uppercase"> grátis</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>descontos</p>
          <p>- {formattedPriceForBrl(totalDiscount)}</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-bold uppercase ">
          <p>total</p>
          <p>{formattedPriceForBrl(totalPriceByProducts)}</p>
        </div>
        <Button
          onClick={handleFinishPurchase}
          className="mt-2 w-full rounded-lg bg-primary text-sm font-bold uppercase"
        >
          finalizar compra
        </Button>
      </div>
    </div>
  )
}
