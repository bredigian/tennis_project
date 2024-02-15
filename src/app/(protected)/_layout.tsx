import { Stack } from "expo-router"

const ProtectedLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
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

export default ProtectedLayout
