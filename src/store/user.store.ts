import * as SecureStore from "expo-secure-store"

import { AuthForm, Token } from "@/types/auth.types"

import { API_URL } from "@/config/api"
import { ErrorResponse } from "@/types/response.types"
import { User } from "@/types/user.types"
import { create } from "zustand"

interface DoneResponse {
  user: User
  token: Token
}

export const useUserStore = create((set: any) => ({
  user: null as User | null,
  token: null as Token | null,

  verifyToken: async () => {
    const token_value = await SecureStore.getItemAsync("token_value")
    const token_id = await SecureStore.getItemAsync("token_id")
    if (token_value && token_id) {
      const response = await fetch(`${API_URL}/auth/verify`, {
        method: "GET",
        headers: {
          Authorization: `${token_value}`,
        },
      })
      const data: ErrorResponse | DoneResponse = await response.json()
      if ("statusCode" in data) {
        await SecureStore.deleteItemAsync("token_id")
        await SecureStore.deleteItemAsync("token_value")
        throw new Error(data.message)
      }

      set({ user: data.user, token: data.token })
    } else return
  },

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

    await SecureStore.setItemAsync("token_id", data.token.id)
    await SecureStore.setItemAsync("token_value", data.token.value)

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

    await SecureStore.setItemAsync("token_id", data.token.id)
    await SecureStore.setItemAsync("token_value", data.token.value)

    set({ user: data.user, token: data.token })
  },

  signout: async () => {
    const response = await fetch(`${API_URL}/auth/signout`, {
      method: "DELETE",
      headers: {
        Authorization: `${useUserStore.getState().token?.id}`,
      },
    })
    const data: ErrorResponse | DoneResponse = await response.json()
    if ("statusCode" in data) throw new Error(data.message)

    await SecureStore.deleteItemAsync("token_id")
    await SecureStore.deleteItemAsync("token_value")
    set({ user: null, token: null })
  },
}))
