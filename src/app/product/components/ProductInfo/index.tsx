'use client'

import { CounterProduct } from '@/components/CounterProduct'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Product } from '@prisma/client'
import { ArrowDown, StarIcon } from 'lucide-react'
import { formattedPriceForBrl } from '@/utils/formattedPriceForBrl'
import { useProductInfo } from '../../hooks/useProductInfo'

type ProductInfoProps = {
  product: Product
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const {
    handleAddProductToCartAndStorage,
    handleDecrement,
    handleIncrement,
    newPriceWithDiscount,
    priceProductWithQuantity,
    quantity,
  } = useProductInfo(product)

  return (
    <>
      <h1 className="text-lg">{product.name}</h1>
      <span className="text-xs text-primary">Disponível em estoque </span>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" />
        </div>
        <span className="text-xs text-secondary-foreground/30">
          (25) avaliações
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <strong className="text-2xl">
            {formattedPriceForBrl(newPriceWithDiscount)}
          </strong>
          {!!product.discountPercentage && (
            <Badge data-testid="badge">
              <ArrowDown size={14} />
              <span className="text-xs font-bold">
                {product.discountPercentage}%
              </span>
            </Badge>
          )}
        </div>
        {!!product.discountPercentage && (
          <span className="text-secondary-foreground/30  line-through ">
            De: {formattedPriceForBrl(priceProductWithQuantity)}
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
