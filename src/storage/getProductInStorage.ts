import { CartProduct } from '@/context/contextProducts'
import { PRODUCT_STORAGE_KEY } from './storageConfig'

export const getProductInStorage = () => {
  const localStorageProducts = localStorage.getItem(PRODUCT_STORAGE_KEY)

  const productsList: CartProduct[] =
    localStorageProducts !== null ? JSON.parse(localStorageProducts) : []
  return productsList
}
