import { Text, TouchableOpacity, View } from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { COLORS } from "../themes/colors"

const QuantitySelector = ({
  stock,
  quantity,
  plus,
  minus,
}: {
  stock: number
  quantity: number
  plus: () => void
  minus: () => void
}) => {
  return (
    <View className="flex flex-row items-center gap-4">
      {quantity > 1 ? (
        <TouchableOpacity onPress={minus}>
          <AntDesign name="minuscircleo" size={28} color={COLORS.PRIMARY} />
        </TouchableOpacity>
      ) : (
        <View className="w-[28px]" />
      )}
      <Text className="text-primary-dark font-semibold text-center text-xl w-[24px]">
        {quantity}
      </Text>
      {quantity !== stock ? (
        <TouchableOpacity onPress={plus}>
          <AntDesign name="pluscircleo" size={28} color={COLORS.PRIMARY} />
        </TouchableOpacity>
      ) : (
        <View className="w-[28px]" />
      )}
    </View>
  )
}

export default QuantitySelector
