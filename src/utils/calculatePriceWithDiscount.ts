const formattedPriceForBrl = (price: number) => {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
  return formattedPrice
}

export const calculatePriceWithDiscount = (
  basePrice: number,
  discountPercentage: number,
) => {
  if (discountPercentage) {
    const priceWithDiscount = basePrice - (basePrice * discountPercentage) / 100

    return formattedPriceForBrl(priceWithDiscount)
  }

  return formattedPriceForBrl(basePrice)
}
