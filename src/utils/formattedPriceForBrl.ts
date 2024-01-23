export const formattedPriceForBrl = (price: number) => {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
  return formattedPrice
}
