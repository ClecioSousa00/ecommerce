import { mocks } from '@/mocks/mock'
import { getProductInStorage } from './getProductInStorage'

describe('Storage: getProductInStorage', () => {
  it('should get products in storage', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      return JSON.stringify(mocks.keyboards)
    })
    const result = getProductInStorage()

    expect(result).toEqual(mocks.keyboards)

    jest.restoreAllMocks()
  })
  it('should return no products', () => {
    const result = getProductInStorage()

    expect(result.length).toBe(0)
  })
})
