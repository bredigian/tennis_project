export enum PurchaseStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

export interface Purchase {
  id: string
  product_id: string
  user_id: string
  quantiy: number
  total: number
  created_at: Date
  status: PurchaseStatus
  unit_price: number
}
