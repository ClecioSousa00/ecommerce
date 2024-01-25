import { calculatePriceWithDiscount } from './calculatePriceWithDiscount'

describe('Utils: calculatePriceWithDiscount', () => {
  it('should calculate the product price with discount ', () => {
    const productBasePrice = 600
    const productDiscount = 10
    const newPriceWithDiscount = 540
    const productPrice = calculatePriceWithDiscount(
      productBasePrice,
      productDiscount,
    )

    expect(productPrice).toEqual(newPriceWithDiscount)
  })
  it('should return the basePrice if there is no discount', () => {
    const productBasePrice = 600
    const productDiscount = 0
    const newPriceWithDiscount = productBasePrice
    const productPrice = calculatePriceWithDiscount(
      productBasePrice,
      productDiscount,
    )

    expect(productPrice).toEqual(newPriceWithDiscount)
  })
})
