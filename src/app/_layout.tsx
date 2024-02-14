import { Slot, useRouter, useSegments } from "expo-router"

import { useEffect } from "react"
import { useUserStore } from "@/store/user.store"

const Layout = () => {
  const { user } = useUserStore()
  const segmentes = useSegments()
  const { replace } = useRouter()

  useEffect(() => {
    console.log(user)
    const inProtectedStack = segmentes[0] === "(protected)"

    if (user && !inProtectedStack) {
      replace("/(protected)")
    }
  }, [user])

  return <Slot />
}

export default Layout
