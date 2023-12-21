import { StarIcon } from 'lucide-react'
import prisma from '../../../lib/prisma'
import { ProductImages } from '../components/ProductImages'

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
      </section>
    </main>
  )
}
