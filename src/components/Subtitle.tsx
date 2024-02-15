import { ScrollView, Text } from "react-native"

const Subtitle = ({
  children,
  maxHeight,
}: {
  children: string
  maxHeight?: number //Especial para detalles tipo parrafos
}) => {
  return (
    <ScrollView style={{ maxHeight }}>
      <Text className="text-sm text-primary-normal opacity-80 font-medium text-justify">
        {children}
      </Text>
    </ScrollView>
  )
}

export default Subtitle
