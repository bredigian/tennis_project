import { AuthForm } from "./auth.types"

export interface User extends AuthForm {
  id: string
  createdAt: string
  updatedAt: string
}
