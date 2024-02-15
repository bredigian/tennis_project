import { Image, Text, View } from "react-native"
import { useEffect, useState } from "react"

import Button from "@/components/Button"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import QuantitySelector from "@/components/QuantitySelector"
import { SafeAreaView } from "react-native-safe-area-context"
import Subtitle from "@/components/Subtitle"
import Title from "@/components/Title"
import { useLocalSearchParams } from "expo-router"
import { useProductsStore } from "@/store/products.store"

const ProductDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { detail, getProductById } = useProductsStore()

  const [quantity, setQuantity] = useState(0)

  const plus = () => {
    if (quantity) setQuantity(quantity + 1)
  }

  const minus = () => {
    setQuantity(quantity - 1)
  }

  useEffect(() => {
    getProductById(id as string)
    if ((detail?.stock as number) > 0) setQuantity(1)
  }, [id])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        gap: 24,
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: detail?.image,
        }}
        style={{ width: 280, height: 280, borderRadius: 33 }}
        resizeMode="contain"
      />
      <View className="flex flex-row items-center justify-between w-full">
        <Title maxWidth={200} variant="transparent">
          {detail?.title as string}
        </Title>
        <Title variant="dark">{`US$ ${detail?.price}`}</Title>
      </View>
      <Subtitle maxHeight={200}>{detail?.description as string}</Subtitle>
      <View className="flex flex-row items-center justify-between w-full">
        <Text className="text-sm font-semibold text-primary-dark">
          Stock disponible
        </Text>
        <QuantitySelector
          stock={detail?.stock as number}
          quantity={quantity}
          plus={plus}
          minus={minus}
        />
      </View>
      <Button
        width="w-full"
        onPress={() => console.log("Comprando " + detail?.title)}
        backgroundColor="bg-primary-normal"
        icon={
          <MaterialCommunityIcons
            name="shopping-outline"
            color={"white"}
            size={30}
          />
        }
      >
        Comprar
      </Button>
    </SafeAreaView>
  )
}

export default ProductDetail
