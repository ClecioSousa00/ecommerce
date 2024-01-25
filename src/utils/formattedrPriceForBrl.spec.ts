import { formattedPriceForBrl } from './formattedPriceForBrl'

describe('Utils: formattedPriceForBrl', () => {
  const PRICE = 500
  it('should formatted the price for BRL correctly', () => {
    const priceFormatted = formattedPriceForBrl(PRICE)

    expect(priceFormatted).toMatch(/R\$\s*500,00/)
  })
})
