import { ArrowDown, StarIcon } from 'lucide-react'
import prisma from '../../../lib/prisma'
import { ProductImages } from '../components/ProductImages'
import { CounterProduct } from '@/components/CounterProduct'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TruckIcon } from '@/iconsSvg/TruckIcon'
import { ProductList } from '@/components/ProductList'
import { ProductInfo } from '../components/ProductInfo'

type ProductProps = {
  params: {
    slug: string
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) return null

  const newPriceWithDiscount = calculatePriceWithDiscount(
    Number(product.basePrice),
    product.discountPercentage,
  )
  return (
    <main className="lg:px-24 lg:py-10">
      <section className="lg:flex lg:justify-center lg:gap-8 ">
        <ProductImages
          imageUrls={product.imageUrls}
          productName={product.name}
        />

        <div className="mt-8 rounded-lg px-5 lg:mt-0   lg:w-[450px] lg:bg-secondary lg:p-6 ">
          <ProductInfo
            product={product}
            newPriceWithDiscount={newPriceWithDiscount}
          />
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
      <section className="mt-10 pb-5 pl-5">
        <h2 className="mb-5 font-bold uppercase">produtos recomendados</h2>
        <ProductList products={product.category.products} />
      </section>
    </main>
  )
}
