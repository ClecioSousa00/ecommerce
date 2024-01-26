import { mocks } from '@/mocks/mock'
import { saveProductInStorage } from './saveProductInStorage'
import { getProductInStorage } from './getProductInStorage'

describe('Storage: saveProductInStorage', () => {
  it('should save product in storage correctly', () => {
    saveProductInStorage(mocks.productCart)

    const [product] = getProductInStorage()

    expect(product).toEqual(mocks.productCart)
  })
})
