import AppLayout from "../layouts/AppLayout"
import AuthLayout from "../layouts/AuthLayout"
import { Stack } from "expo-router"
import { useUserStore } from "../store/user.store"

const Layout = () => {
  const { user } = useUserStore()

  if (!user) return <AuthLayout />
  else return <AppLayout />
}

export default Layout
