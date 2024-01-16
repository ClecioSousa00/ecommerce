import { ReactNode } from 'react'
import { Badge } from '../ui/badge'

type BadgeCategoryProps = {
  name: string
  children: ReactNode
}

export const BadgeCategory = ({ name, children }: BadgeCategoryProps) => {
  return (
    <Badge className="mt-8  gap-1 border-primary px-3 py-1" variant={'outline'}>
      {children}
      <span className="text-base font-bold uppercase">{name}</span>
    </Badge>
  )
}
