'use client'

import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { BadgeCategory } from '../BadgeCategory'
import { CartItem } from './CartItem'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
import { useCartContext } from '@/context/contextProducts'
import { createCheckout } from '@/actions/checkout'
import { loadStripe } from '@stripe/stripe-js'
import { useCallback } from 'react'

export const CartMenu = () => {
  const { products, totalPriceByProducts } = useCartContext()

  const calculateSubTotal = useCallback(() => {
    return products.reduce((acc, product) => {
      return Number(product.basePrice) * product.quantity + acc
    }, 0)
  }, [products])

  const totalDiscount = calculateSubTotal() - totalPriceByProducts

  const handleFinishPurchase = async () => {
    const stripeCheckout = await createCheckout(products)
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    stripe?.redirectToCheckout({
      sessionId: stripeCheckout.id,
    })
  }

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
          {/* <CartItem /> */}
        </div>
      </ScrollArea>
      <div className="w-full">
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>subtotal</p>
          <p>R$ {calculateSubTotal().toFixed(2)}</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>entrega</p>
          <p className="uppercase"> grátis</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-sm capitalize">
          <p>descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-bold uppercase ">
          <p>total</p>
          <p>R$ {totalPriceByProducts.toFixed(2)}</p>
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
