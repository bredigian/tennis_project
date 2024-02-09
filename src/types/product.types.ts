export type ProductType =
  | "raqueta"
  | "pelota"
  | "accesorio"
  | "ropa"
  | "calzado"

export interface Product {
  id: string
  title: string
  description: string
  price: number
  stock: number
  image: string
  type: ProductType
}
