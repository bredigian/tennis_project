import { API_URL } from "@/config/api"
import { ErrorResponse } from "@/types/response.types"
import { Product } from "@/types/product.types"
import { create } from "zustand"

export const useProductsStore = create((set: any, get: any) => ({
  products: [] as Product[],
  detail: null as Product | null,

  getProducts: async () => {
    const response = await fetch(`${API_URL}/products`, {
      method: "GET",
    })
    const products = await response.json()
    set({ products })
  },

  getProductById: async (id: string) => {
    const byId = await get().products.find(
      (product: Product) => product.id === id
    )
    set({ detail: byId })
  },

  verifyStockById: async (id: string, quantity: number) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        quantity,
      }),
    })
    const data: ErrorResponse | { ok: boolean } = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    return data.ok
  },

  updateById: async (id: string, quantity: number, isDecrement: boolean) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        quantity,
        isDecrement,
      }),
    })
    const data: ErrorResponse | Product = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    return data
  },
}))
