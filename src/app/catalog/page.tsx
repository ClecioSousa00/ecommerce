import { Badge } from '@/components/ui/badge'
import { ShapesIcon } from 'lucide-react'
import { CatalogItem } from './components/CatalogItem'
import prisma from '@/lib/prisma'

export default async function Catalog() {
  const catalogItems = await prisma.category.findMany()

  return (
    <main className="px-8 pb-8 lg:px-24">
      <section>
        <Badge
          className="mt-8 gap-1 border-primary px-3 py-1"
          variant={'outline'}
        >
          <ShapesIcon size={18} />
          <span className="font-bold uppercase lg:text-lg">catálogo</span>
        </Badge>

        <div className="mt-6 grid grid-cols-2 gap-4  lg:grid-cols-3 lg:gap-10">
          {catalogItems.map((catalogItem) => (
            <CatalogItem key={catalogItem.id} category={catalogItem} />
          ))}
        </div>
      </section>
    </main>
  )
}
