import { Text } from "react-native"

const Title = ({
  children,
  variant,
  maxWidth,
}: {
  children: string
  variant: "transparent" | "dark"
  maxWidth?: number
}) => {
  return (
    <Text
      className={
        variant === "transparent"
          ? "text-2xl font-bold bg-transparent text-primary-normal self-start py-1"
          : "text-2xl font-bold bg-primary-normal text-white self-start py-1 px-3 rounded-xl"
      }
      style={{ maxWidth }}
    >
      {children}
    </Text>
  )
}

export default Title
