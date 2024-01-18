import { useState } from 'react'

export const UseCounter = (quantityProduct = 1) => {
  const [quantity, setQuantity] = useState(quantityProduct)

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    if (quantity === 1) return
    setQuantity((prevState) => prevState - 1)
  }

  return {
    quantity,
    handleIncrement,
    handleDecrement,
  }
}
