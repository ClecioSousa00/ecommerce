import prisma from '@/lib/prisma'

import { ProductItem } from '@/components/ProductItem'

import { CATEGORY_ICON } from '@/constants/categoryIcon'
import { BadgeCategory } from '@/components/BadgeCategory'

type CategoryProps = {
  params: {
    slug: string
  }
}

export default async function Category({ params }: CategoryProps) {
  const listProductsByCategory = await prisma.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!listProductsByCategory) return null

  const icon = CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]

  return (
    <main className="px-8 py-8 lg:px-24">
      <section>
        <BadgeCategory name={listProductsByCategory.name}>{icon}</BadgeCategory>

        <div className="mt-6 grid grid-cols-2   gap-4 sm:grid-cols-[repeat(auto-fit,minmax(170px,170px))] lg:gap-6">
          {listProductsByCategory?.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  )
}
