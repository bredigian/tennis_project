import PRODUCTS from "../db/products.json"
import { Product } from "../types/product.types"
import { create } from "zustand"

export const useProductsStore = create((set: any, get: any) => ({
  products: [] as Product[],
  detail: null as Product | null,

  getProducts: async () => {
    const products = PRODUCTS as Product[]

    set({ products })
  },

  getProductById: async (id: string) => {
    const byId = await get().products.find(
      (product: Product) => product.id === id
    )
    set({ detail: byId })
  },
}))
