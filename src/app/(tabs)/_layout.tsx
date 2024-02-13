import { AntDesign, Ionicons } from "@expo/vector-icons"
import { Image, View } from "react-native"

import { COLORS } from "../../themes/colors"
import React from "react"
import { Tabs } from "expo-router"

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.INACTIVE,
        tabBarStyle: {
          height: 60,
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
          headerShown: true,
          header: () => {
            return (
              <View className="bg-white">
                <Image
                  source={require("../../assets/logo.png")}
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
    </Tabs>
  )
}

export default AppLayout
