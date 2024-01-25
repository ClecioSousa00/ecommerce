import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { BadgeCategory } from '../BadgeCategory'
import { CartItem } from './CartItem'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

import { useCartMenu } from './hooks/useCartMenu'
import { formattedPriceForBrl } from '@/utils/formattedPriceForBrl'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export const CartMenu = () => {
  const {
    calculateSubTotal,
    handleFinishPurchase,
    products,
    totalDiscount,
    totalPriceByProducts,
  } = useCartMenu()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent hover:bg-gray-500/30"
          size={'icon'}
          variant={'outline'}
          aria-label="Ver carrinho"
        >
          <ShoppingCart size={18} color="white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
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
            {products.length === 0 && (
              <div>
                <p className="text-center text-secondary-foreground/40">
                  Carrinho Vazio
                </p>
              </div>
            )}
          </ScrollArea>

          {products.length > 0 && (
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
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
