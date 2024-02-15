import { Slot, useRouter, useSegments } from "expo-router"

import { Alert } from "react-native"
import { useEffect } from "react"
import { useUserStore } from "@/store/user.store"

const Layout = () => {
  const { user, verifyToken } = useUserStore()
  const segmentes = useSegments()
  const { replace } = useRouter()

  useEffect(() => {
    const inProtectedStack = segmentes[0] === "(protected)"

    if (user && !inProtectedStack) {
      replace("/(protected)")
    } else if (!user) {
      replace("/(auth)")
    }
  }, [user])

  const verify = async () => {
    try {
      await verifyToken()
    } catch (error: any) {
      Alert.alert(
        "Ocurrió un error al verificar la sesión",
        error.message as string
      )
    }
  }

  useEffect(() => {
    verify()
  }, [])

  return <Slot />
}

export default Layout
