import { Badge } from '@/components/ui/badge'
import { ShapesIcon } from 'lucide-react'
import { CatalogItem } from './CatalogItem'
import prisma from '@/lib/prisma'

export default async function Catalog() {
  const catalogItems = await prisma.category.findMany()
  console.log(catalogItems)

  return (
    <main className="px-8 lg:px-24">
      <section>
        <Badge
          className="mt-8 gap-1 border-primary px-3 py-1"
          variant={'outline'}
        >
          <ShapesIcon size={16} />
          <span className="font-bold uppercase">catálogo</span>
        </Badge>

        <div className="mt-6 grid grid-cols-2 gap-4  lg:grid-cols-3 lg:gap-10">
          {catalogItems.map((catalogItem) => (
            <CatalogItem key={catalogItem.id} imageUrl={catalogItem.imageUrl} />
          ))}
        </div>
      </section>
    </main>
  )
}
