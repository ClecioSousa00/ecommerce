import { getProductInStorage } from '@/storage/getProductInStorage'
import { removeProductInStorage } from '@/storage/removeProductInStorage'
import { Product } from '@prisma/client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type CartProduct = {
  quantity: number
  totalPrice: number
} & Product

type CartContextProps = {
  products: CartProduct[]
  addProductCart: (product: CartProduct) => void
  totalPriceByProducts: number
  increaseProductQuantity: (productId: string) => void
  decrementProductQuantity: (productId: string) => void
  removeProductToCart: (productId: string) => void
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const addProductCart = (product: CartProduct) => {
    setCartProducts([...cartProducts, product])
  }

  // const calculateSubTotal = useCallback(() => {
  //   return cartProducts.reduce((acc, product) => {
  //     return Number(product.basePrice) * product.quantity + acc
  //   }, 0)
  // }, [cartProducts])

  const calculatePriceWithDiscount = (
    basePrice: number,
    discountPercentage: number,
  ) => {
    if (discountPercentage) {
      const priceWithDiscount =
        basePrice - (basePrice * discountPercentage) / 100

      return priceWithDiscount
    }

    return basePrice
  }

  const calculateTotal = useCallback(() => {
    return cartProducts.reduce((acc, product) => {
      return (
        calculatePriceWithDiscount(
          Number(product.basePrice),
          product.discountPercentage,
        ) *
          product.quantity +
        acc
      )
    }, 0)
  }, [cartProducts])

  const increaseProductQuantity = (productId: string) => {
    setCartProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }
        return cartProduct
      }),
    )
  }
  const decrementProductQuantity = (productId: string) => {
    setCartProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          }
        }
        return cartProduct
      }),
    )
  }

  const removeProductToCart = (productId: string) => {
    const products = cartProducts.filter((product) => product.id !== productId)
    setCartProducts(products)
    removeProductInStorage(productId)
  }

  useEffect(() => {
    const productsInStorage = getProductInStorage()
    setCartProducts(productsInStorage)
  }, [])

  // const subTotal = calculateSubTotal()
  const totalPriceByProducts = calculateTotal()

  return (
    <CartContext.Provider
      value={{
        products: cartProducts,
        addProductCart,

        totalPriceByProducts,
        increaseProductQuantity,
        decrementProductQuantity,
        removeProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
