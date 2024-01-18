import { getProductInStorage } from './getProductInStorage'
import { PRODUCT_STORAGE_KEY } from './storageConfig'

export const removeProductInStorage = (productId: string) => {
  const productsStorage = getProductInStorage()

  if (productsStorage.length) {
    const productsFiltered = productsStorage.filter(
      (product) => product.id !== productId,
    )
    const productStorage = JSON.stringify(productsFiltered)
    localStorage.setItem(PRODUCT_STORAGE_KEY, productStorage)
  }
}
