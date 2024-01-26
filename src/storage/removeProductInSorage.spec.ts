import { mocks } from '@/mocks/mock'
import { removeProductInStorage } from './removeProductInStorage'
import { getProductInStorage } from './getProductInStorage'

describe('Storage: removeProductInStorage', () => {
  it('should remove product in storage ', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementationOnce(() => JSON.stringify(mocks.productCart))

    removeProductInStorage(mocks.productCart.id)

    const product = getProductInStorage()

    expect(product.length).toBe(0)
  })
})
