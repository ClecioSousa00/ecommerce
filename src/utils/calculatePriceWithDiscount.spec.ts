import { calculatePriceWithDiscount } from './calculatePriceWithDiscount'

describe('Utils: calculatePriceWithDiscount', () => {
  const productBasePrice = 600
  const productDiscount = 10

  it('should calculate the product price with discount ', () => {
    const productPrice = calculatePriceWithDiscount(
      productBasePrice,
      productDiscount,
    )

    expect(
      parseFloat(productPrice.replace('R$', '').replace(',', '.')),
    ).toEqual(540)
  })
})
