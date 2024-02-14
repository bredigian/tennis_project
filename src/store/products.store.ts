import { API_URL } from "@/config/api"
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
}))
