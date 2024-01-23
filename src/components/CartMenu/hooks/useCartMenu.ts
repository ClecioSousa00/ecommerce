import { useCallback } from 'react'
import { createCheckout } from '@/actions/checkout'
import { useCartContext } from '@/context/contextProducts'
import { loadStripe } from '@stripe/stripe-js'

export const useCartMenu = () => {
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
  return {
    products,
    calculateSubTotal,
    totalDiscount,
    totalPriceByProducts,
    handleFinishPurchase,
  }
}
