import { Text, TouchableOpacity } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"

type WidthType =
  | "w-full"
  | "w-1/2"
  | "w-1/3"
  | "w-1/4"
  | "w-1/5"
  | "w-1/6"
  | "w-1/12"
  | `w-[${number}px]`

const Button = ({
  children,
  width,
  icon,
}: {
  children: string
  width?: WidthType
  icon?: boolean
}) => {
  return (
    <TouchableOpacity
      className={`flex flex-row items-center justify-center bg-primary-normal px-4 py-2 ${width}`}
      style={{ gap: 16 }}
    >
      <Text className="text-3xl text-white font-bold">{children}</Text>
      {icon && (
        <MaterialCommunityIcons name="shopping" size={32} color={"white"} />
      )}
    </TouchableOpacity>
  )
}

export default Button
