export interface AuthForm {
  name?: string
  email?: string
  username: string
  password: string
}

export interface Token {
  id: string
  user_id: string
  value: string
  created_at: Date
}
