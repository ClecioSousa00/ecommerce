import { CounterProduct } from '@/components/CounterProduct'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Product } from '@prisma/client'
import { ArrowDown, StarIcon } from 'lucide-react'

type ProductInfoProps = {
  product: Product
  newPriceWithDiscount: string
}

export const ProductInfo = ({
  product,
  newPriceWithDiscount,
}: ProductInfoProps) => {
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
            De: R$ {Number(product.basePrice)}
          </span>
        )}
      </div>
      <CounterProduct />
      <h3 className="mb-2 mt-8 text-sm font-bold">Descrição</h3>
      <p className="mb-8 text-justify text-xs text-secondary-foreground/30">
        {product.description}
      </p>
      <Button className="w-full rounded-lg bg-primary text-sm font-bold uppercase">
        adicionar ao carrinho
      </Button>
    </>
  )
}