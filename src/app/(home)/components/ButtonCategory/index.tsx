import { buttonVariants } from '@/components/ui/button'
import { CATEGORY_ICON } from '@/constants/categoryIcon'
import { Category } from '@prisma/client'

import Link from 'next/link'

type ButtonCategoryProps = {
  category: Category
}

export const ButtonCategory = ({ category }: ButtonCategoryProps) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`${buttonVariants({
        variant: 'outline',
      })} h-10 w-full gap-2 rounded-lg text-xs font-bold capitalize lg:h-12 lg:w-44 `}
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      {category.name}
    </Link>
  )
}
