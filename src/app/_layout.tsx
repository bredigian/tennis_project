import { Stack } from "expo-router"

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="[id]/index"
        options={{
          title: "Product",
        }}
      />
    </Stack>
  )
}

export default Layout
