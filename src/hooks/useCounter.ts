import { useState } from 'react'

export const UseCounter = () => {
  const [quantity, setQuantity] = useState(0)

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    if (quantity === 0) return
    setQuantity((prevState) => prevState - 1)
  }

  return {
    quantity,
    handleIncrement,
    handleDecrement,
  }
}
