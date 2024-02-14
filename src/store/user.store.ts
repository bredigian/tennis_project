import { API_URL } from "@/config/api"
import { AuthForm } from "@/types/auth.types"
import { ErrorResponse } from "@/types/response.types"
import { User } from "@/types/user.types"
import { create } from "zustand"

export const useUserStore = create((set: any) => ({
  user: null as User | null,

  signup: async (user: AuthForm) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    const data: User = await response.json()
    set({ user: data })
  },

  signin: async (user: AuthForm) => {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    const data: ErrorResponse | User = await response.json()
    if ("statusCode" in data)
      if (data.statusCode === 400) throw new Error(data.message)

    set({ user: data })
  },

  signout: async () => {
    set({ user: null })
  },
}))
