import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

type CatalogItemProps = {
  category: Category
}

export const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <Link
      className="flex  h-48  w-40 flex-col items-center overflow-hidden rounded-lg lg:h-64 lg:w-full lg:max-w-sm"
      href={`/category/${category.slug}`}
    >
      <div className="flex w-full flex-1 items-center justify-center bg-primary">
        <Image
          className="w-28 lg:w-40"
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          unoptimized
        />
      </div>
      <p className="w-full bg-secondary py-2 text-center capitalize">
        {category.name}
      </p>
    </Link>
  )
}
