import { useToast } from '@/components/ui/use-toast'
import { useCartContext } from '@/context/contextProducts'
import { UseCounter } from '@/hooks/useCounter'
import { saveProductInStorage } from '@/storage/saveProductInStorage'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import { Product } from '@prisma/client'

export const useProductInfo = (product: Product) => {
  const { quantity, handleIncrement, handleDecrement } = UseCounter()
  const { addProductCart, products } = useCartContext()
  const { toast } = useToast()

  const handleAddProductToCartAndStorage = () => {
    const productHasInCart = products.some(
      (productCart) => productCart.id === product.id,
    )

    if (productHasInCart) {
      toast({
        description: 'O produto já está no carrinho',
      })
      return
    }

    addProductCart({ ...product, quantity })
    saveProductInStorage({ ...product, quantity })

    toast({
      title: `${product.name}`,
      description: 'Adicionado com sucesso !!',
    })
  }

  const priceProductWithQuantity =
    quantity > 0
      ? quantity * Number(product.basePrice)
      : Number(product.basePrice)

  const newPriceWithDiscount = calculatePriceWithDiscount(
    priceProductWithQuantity,
    product.discountPercentage,
  )

  return {
    newPriceWithDiscount,
    priceProductWithQuantity,
    quantity,
    handleDecrement,
    handleIncrement,
    handleAddProductToCartAndStorage,
  }
}
