import { Pressable, Text } from "react-native"
import React, { ReactNode } from "react"

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
  variant,
  onPress,
  backgroundColor,
}: {
  children: string
  width?: WidthType
  icon?: ReactNode
  variant?: "sm" | "lg" | "xl"
  backgroundColor?: "bg-primary-dark" | "bg-primary-normal" | "bg-transparent"
  onPress: () => void
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex flex-row items-center justify-center ${
        backgroundColor !== "bg-transparent"
          ? `${backgroundColor} text-white`
          : "border-2 border-primary-dark"
      } h-14 rounded-xl ${width}`}
      style={{ gap: 16 }}
    >
      <Text
        className={`${
          variant === "sm"
            ? "text-sm"
            : variant === "lg"
            ? "text-lg"
            : "text-3xl"
        } ${
          backgroundColor !== "bg-transparent"
            ? "text-white"
            : "text-primary-dark"
        } font-bold`}
      >
        {children}
      </Text>
      {icon}
    </Pressable>
  )
}

export default Button
