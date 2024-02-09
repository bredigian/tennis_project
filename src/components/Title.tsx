import { Text } from "react-native"

const Title = ({
  children,
  variant,
}: {
  children: string
  variant: "transparent" | "dark"
}) => {
  return (
    <Text
      className={
        variant === "transparent"
          ? "text-2xl font-bold bg-transparent text-primary-normal self-start py-1"
          : "text-2xl font-bold bg-primary-normal text-white self-start py-1 px-3"
      }
    >
      {children}
    </Text>
  )
}

export default Title
