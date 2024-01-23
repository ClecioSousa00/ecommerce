export const calculatePriceWithDiscount = (
  basePrice: number,
  discountPercentage: number,
) => {
  if (discountPercentage) {
    const priceWithDiscount = basePrice - (basePrice * discountPercentage) / 100

    return priceWithDiscount
  }

  return basePrice
}
