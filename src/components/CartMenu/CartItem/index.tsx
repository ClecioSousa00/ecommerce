import { CounterProduct } from '@/components/CounterProduct'
import { Button } from '@/components/ui/button'
import { CartProduct, useCartContext } from '@/context/contextProducts'
import { useCart } from '@/hooks/useCart'
import { UseCounter } from '@/hooks/useCounter'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import { Trash } from 'lucide-react'
import Image from 'next/image'

type CartItemProps = {
  product: CartProduct
}

export const CartItem = ({ product }: CartItemProps) => {
  const {
    quantity,
    decrementPriceByProducts,
    incrementPriceByProducts,
    newPriceWithDiscount,
    removeProductToCart,
    priceProductWithQuantity,
  } = useCart(product)

  // criar um utils do u reduce

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-20  w-20 items-center justify-center rounded-sm bg-accent lg:rounded-md lg:bg-black `}
      >
        <Image
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          unoptimized
        />
      </div>

      <div className="flex-1 space-y-2">
        <div>
          <h3 className="max-w-[9.75rem]   truncate text-xs capitalize">
            {product.name}
          </h3>
          <div>
            <strong className="font-medium">{newPriceWithDiscount}</strong>
            <span className=" ml-1 text-xs line-through opacity-75 lg:text-sm">
              R$ {priceProductWithQuantity}
            </span>
          </div>
        </div>
        <CounterProduct
          quantity={quantity}
          handleDecrement={decrementPriceByProducts}
          handleIncrement={incrementPriceByProducts}
        />
      </div>
      <Button
        variant={'outline'}
        size={'icon'}
        className="h-8 w-8 "
        onClick={() => removeProductToCart(product.id)}
      >
        <Trash size={16} />
      </Button>
    </div>
  )
}
