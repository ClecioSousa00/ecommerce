import { ProductItem } from '@/components/ProductItem'
import { Product } from '@prisma/client'

type ProductListProps = {
  products: Product[]
}

export const ProductList = async ({ products }: ProductListProps) => {
  return (
    <div className="flex  gap-4 overflow-y-hidden  [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
