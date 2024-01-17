import { getProductInStorage } from '@/storage/getProductInStorage'
import { Product } from '@prisma/client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export type CartProduct = {
  quantity: number
} & Product

type CartContextProps = {
  products: CartProduct[]
  addProductCart: (product: CartProduct) => void
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    const productsInStorage = getProductInStorage()
    setCartProducts(productsInStorage)
  }, [])

  const addProductCart = (product: CartProduct) => {
    setCartProducts([...cartProducts, product])
  }

  return (
    <CartContext.Provider value={{ products: cartProducts, addProductCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
