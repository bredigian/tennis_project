import { Slot, useRouter, useSegments } from "expo-router"

import { useEffect } from "react"
import { useUserStore } from "@/store/user.store"

const Layout = () => {
  const { user } = useUserStore()
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

  return <Slot />
}

export default Layout
