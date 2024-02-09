import { Text } from "react-native"

const Subtitle = ({ children }: { children: string }) => {
  return (
    <Text className="text-sm text-primary-normal opacity-80 font-medium text-justify">
      {children}
    </Text>
  )
}

export default Subtitle
