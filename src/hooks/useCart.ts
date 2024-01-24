import { CartProduct, useCartContext } from '@/context/contextProducts'
import { UseCounter } from './useCounter'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'

export const useCart = (product: CartProduct) => {
  const { quantity, handleIncrement, handleDecrement } = UseCounter(
    product.quantity,
  )

  const {
    increaseProductQuantity,
    decrementProductQuantity,
    removeProductToCart,
  } = useCartContext()

  const priceProductWithQuantity =
    quantity > 0
      ? quantity * Number(product.basePrice)
      : Number(product.basePrice)

  const newPriceWithDiscount = calculatePriceWithDiscount(
    priceProductWithQuantity,
    product.discountPercentage,
  )

  const incrementPriceByProducts = () => {
    increaseProductQuantity(product.id)
    handleIncrement()
  }

  const decrementPriceByProducts = () => {
    decrementProductQuantity(product.id)
    handleDecrement()
  }

  return {
    newPriceWithDiscount,
    quantity,
    decrementPriceByProducts,
    incrementPriceByProducts,
    removeProductToCart,
    priceProductWithQuantity,
  }
}
