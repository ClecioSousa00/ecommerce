import { ArrowDown, StarIcon } from 'lucide-react'
import prisma from '../../../lib/prisma'
import { ProductImages } from '../components/ProductImages'
import { CounterProduct } from '@/components/CounterProduct'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import { Badge } from '@/components/ui/badge'

type ProductProps = {
  params: {
    slug: string
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await prisma.product.findMany({
    where: {
      slug: params.slug,
    },
  })

  console.log(product)
  const newPriceWithDiscount = calculatePriceWithDiscount(
    Number(product[0].basePrice),
    product[0].discountPercentage,
  )
  return (
    <main>
      <ProductImages
        imageUrls={product[0].imageUrls}
        productName={product[0].name}
      />
      <section className="mt-8 px-5">
        <h1 className="text-lg">Logitech MX Master 3s</h1>
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
        <div>
          <div className="flex items-center gap-2">
            <strong className="text-2xl">{newPriceWithDiscount}</strong>
            {!!product[0].discountPercentage && (
              <Badge>
                <ArrowDown size={14} />
                <span className="text-xs font-bold">
                  {product[0].discountPercentage}%
                </span>
              </Badge>
            )}
          </div>
          {product[0].discountPercentage > 0 && (
            <span className="text-secondary-foreground/30  line-through ">
              De: R$ {Number(product[0].basePrice)}
            </span>
          )}
        </div>

        <CounterProduct />
      </section>
    </main>
  )
}
