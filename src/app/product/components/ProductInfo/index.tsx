'use client'

import { CounterProduct } from '@/components/CounterProduct'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCartContext } from '@/context/contextProducts'
import { UseCounter } from '@/hooks/useCounter'
import { saveProductInStorage } from '@/storage/saveProductInStorage'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import { Product } from '@prisma/client'
import { ArrowDown, StarIcon } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { getProductInStorage } from '@/storage/getProductInStorage'

type ProductInfoProps = {
  product: Product
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
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

  return (
    <>
      <h1 className="text-lg">{product.name}</h1>
      <span className="text-xs text-primary">Disponível em estoque </span>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <StarIcon size={12} />
          <StarIcon size={12} />
          <StarIcon size={12} />
          <StarIcon size={12} />
          <StarIcon size={12} />
        </div>
        <span className="text-xs text-secondary-foreground/30">
          (25) avaliações
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <strong className="text-2xl">{newPriceWithDiscount}</strong>
          {!!product.discountPercentage && (
            <Badge>
              <ArrowDown size={14} />
              <span className="text-xs font-bold">
                {product.discountPercentage}%
              </span>
            </Badge>
          )}
        </div>
        {!!product.discountPercentage && (
          <span className="text-secondary-foreground/30  line-through ">
            De: R$ {priceProductWithQuantity}
          </span>
        )}
      </div>
      <CounterProduct
        quantity={quantity}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
      <h3 className="mb-2 mt-8 text-sm font-bold">Descrição</h3>
      <p className="mb-8 text-justify text-xs text-secondary-foreground/30">
        {product.description}
      </p>
      <Button
        onClick={() => handleAddProductToCartAndStorage()}
        className="w-full rounded-lg bg-primary text-sm font-bold uppercase"
      >
        adicionar ao carrinho
      </Button>
    </>
  )
}
