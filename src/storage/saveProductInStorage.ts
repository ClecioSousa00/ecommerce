import { CartProduct } from '@/context/contextProducts'
import { getProductInStorage } from './getProductInStorage'
import { PRODUCT_STORAGE_KEY } from './storageConfig'

export const saveProductInStorage = (newProduct: CartProduct) => {
  const productsInStorage = getProductInStorage()

  const storage = JSON.stringify([...productsInStorage, newProduct])

  localStorage.setItem(PRODUCT_STORAGE_KEY, storage)
}
