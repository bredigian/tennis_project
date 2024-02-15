import { API_URL } from "@/config/api"
import { AuthForm } from "@/types/auth.types"
import { ErrorResponse } from "@/types/response.types"
import { User } from "@/types/user.types"
import { create } from "zustand"

interface DoneResponse {
  user: User
  token: string
}

export const useUserStore = create((set: any) => ({
  user: null as User | null,
  token: null as string | null,

  signup: async (user: AuthForm) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    const data: ErrorResponse | DoneResponse = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    set({ user: data.user, token: data.token })
  },

  signin: async (user: AuthForm) => {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    const data: ErrorResponse | DoneResponse = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    set({ user: data.user, token: data.token })
  },

  signout: async () => {
    set({ user: null })
  },
}))
