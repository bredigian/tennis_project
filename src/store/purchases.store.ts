import { API_URL } from "@/config/api"
import { ErrorResponse } from "@/types/response.types"
import { Product } from "@/types/product.types"
import { create } from "zustand"

export const usePurchasesStore = create((set: any) => ({
  getStripeKey: async () => {
    const response = await fetch(`${API_URL}/purchases/authorization`, {
      method: "GET",
    })
    const data: ErrorResponse | { key: string } = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    return data.key
  },

  createIntent: async (product: Product, quantity: number) => {
    const response = await fetch(`${API_URL}/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product.id,
        unit_price: product.price,
        quantity,
      }),
    })
    const data: ErrorResponse | { id: string; client_secret: string } =
      await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    return { id: data.id, client_secret: data.client_secret }
  },

  cancelIntent: async (id: string) => {
    const response = await fetch(`${API_URL}/purchases/cancel`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    const data: ErrorResponse | { ok: boolean } = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    return data.ok
  },
}))
