import { ArrowDown, StarIcon } from 'lucide-react'
import prisma from '../../../lib/prisma'
import { ProductImages } from '../components/ProductImages'
import { CounterProduct } from '@/components/CounterProduct'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TruckIcon } from '@/iconsSvg/TruckIcon'

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
      <section className="lg:flex lg:justify-between lg:gap-8 lg:p-10 lg:px-24">
        <ProductImages
          imageUrls={product[0].imageUrls}
          productName={product[0].name}
        />

        <div className="mt-8 rounded-lg px-5 lg:mt-0 lg:w-[450px] lg:bg-secondary lg:p-4 ">
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
          <div className="mb-4">
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
            {!!product[0].discountPercentage && (
              <span className="text-secondary-foreground/30  line-through ">
                De: R$ {Number(product[0].basePrice)}
              </span>
            )}
          </div>
          <CounterProduct />
          <h3 className="mb-2 mt-8 text-sm font-bold">Descrição</h3>
          <p className="mb-8 text-justify text-xs text-secondary-foreground/30">
            {product[0].description}
          </p>
          <Button className="w-full rounded-lg bg-primary text-sm font-bold uppercase">
            adicionar ao carrinho
          </Button>
          <div className="mt-5 flex h-14 w-full items-center justify-between rounded-lg bg-secondary-foreground/10 px-5 py-2">
            <div className="flex items-center gap-3">
              <TruckIcon />
              <div>
                <p className="text-sm">
                  Entrega via <strong>FSPacket®</strong>
                </p>
                <p className="text-xs text-primary ">
                  Envio para <strong>todo Brasil</strong>
                </p>
              </div>
            </div>
            <strong className="text-xs  capitalize ">frete grátis</strong>
          </div>
        </div>
      </section>
    </main>
  )
}
