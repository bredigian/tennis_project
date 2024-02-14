import { API_URL } from "../config/api"
import { User } from "../types/user.types"
import { create } from "zustand"

export const useUserStore = create((set: any) => ({
  user: null as User | null,

  signup: async (user: User) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    set({ user: data })
  },
}))
