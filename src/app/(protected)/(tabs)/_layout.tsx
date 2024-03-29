import { AntDesign, Ionicons } from "@expo/vector-icons"
import { Image, View } from "react-native"

import { COLORS } from "@/themes/colors"
import React from "react"
import { Tabs } from "expo-router"

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.INACTIVE,
        header: () => {
          return (
            <View className="bg-white rounded-b-3xl">
              <Image
                source={require("@/assets/logo.png")}
                style={{
                  height: 75,
                  width: 75,
                  marginTop: 40,
                  marginBottom: 10,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </View>
          )
        },
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={26}
                color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="products/index"
        options={{
          title: "Mis Productos",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"tennisball-outline"}
                size={26}
                color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person-outline"
                size={26}
                color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
              />
            )
          },
        }}
      />
    </Tabs>
  )
}

export default AppLayout
