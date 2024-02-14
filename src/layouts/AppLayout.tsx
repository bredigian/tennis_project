import { Stack } from "expo-router"

const AppLayout = () => {
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
          headerShown: true,
          headerTitleAlign: "center",
          title: "",
        }}
      />
    </Stack>
  )
}

export default AppLayout
