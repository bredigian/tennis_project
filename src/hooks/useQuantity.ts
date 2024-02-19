import { useState } from "react"

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1)

  const plus = () => {
    if (quantity) setQuantity(quantity + 1)
  }
  const minus = () => {
    setQuantity(quantity - 1)
  }

  return {
    quantity,
    plus,
    minus,
  }
}
