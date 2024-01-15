import { ProductItem } from '@/components/ProductItem'
import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/categoryIcon'
import prisma from '@/lib/prisma'

type CategoryProps = {
  params: {
    slug: string
  }
}

export default async function Category({ params }: CategoryProps) {
  console.log(params.slug)

  const listProductsByCategory = await prisma.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  console.log(listProductsByCategory)

  return (
    <main className="px-8 pb-8 lg:px-24">
      <section>
        <Badge
          className="mt-8 gap-1 border-primary px-3 py-1"
          variant={'outline'}
        >
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          <span className="font-bold uppercase ">{params.slug}</span>
        </Badge>

        <div className="mt-6 grid grid-cols-2   gap-4 sm:grid-cols-[repeat(auto-fit,minmax(170px,170px))] lg:gap-6">
          {listProductsByCategory?.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  )
}
