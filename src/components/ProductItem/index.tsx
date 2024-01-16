import { ArrowDown, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Product } from '@prisma/client'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'

type ProductItemProps = {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const newPriceProduct = calculatePriceWithDiscount(
    Number(product.basePrice),
    product.discountPercentage,
  )

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="relative mb-4 flex h-[10.625rem] w-[9.75rem] items-center justify-center rounded-lg bg-accent">
        <Image
          className="h-full max-h-[60%] w-full max-w-[70%]"
          src={product.imageUrls[0]}
          alt=""
          height={0}
          width={0}
          style={{ objectFit: 'contain' }}
          unoptimized
        />
        {!!product.discountPercentage && (
          <Badge className="absolute left-2 top-2">
            <ArrowDown size={14} />
            <span className="text-xs font-bold">
              {product.discountPercentage}%
            </span>
          </Badge>
        )}
      </div>
      <div>
        <h3 className="max-w-[9.75rem]   truncate text-xs capitalize">
          {product.name}
        </h3>
        <div>
          <strong className="font-medium"> {newPriceProduct}</strong>

          {product.discountPercentage > 0 && (
            <span className=" ml-1 text-xs line-through opacity-75">
              R$ {Number(product.basePrice)}
            </span>
          )}
        </div>
        <div className="flex gap-1 ">
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" fill="#4F32C3" />
          <StarIcon size={12} color="#4F32C3" />
        </div>
      </div>
    </Link>
  )
}
