import React from "react"
import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "ios" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-up/index" />
    </Stack>
  )
}

export default AuthLayout
