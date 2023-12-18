import { buttonVariants } from '@/components/ui/button'
import { Category } from '@prisma/client'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareDashedBottomIcon,
} from 'lucide-react'
import Link from 'next/link'

type ButtonCategoryProps = {
  category: Category
}

const categoryIcons = {
  keyboards: <KeyboardIcon size={16} />,
  monitors: <MonitorIcon size={16} />,
  headphones: <HeadphonesIcon size={16} />,
  mousepads: <SquareDashedBottomIcon size={16} />,
  speakers: <SpeakerIcon size={16} />,
  mouses: <MouseIcon size={16} />,
}

export const ButtonCategory = ({ category }: ButtonCategoryProps) => {
  return (
    <Link
      href={'/'}
      className={`${buttonVariants({
        variant: 'outline',
      })} h-10 w-full gap-2 rounded-lg text-xs font-bold capitalize lg:h-12 lg:w-44 `}
    >
      {categoryIcons[category.slug as keyof typeof categoryIcons]}
      {category.name}
    </Link>
  )
}
