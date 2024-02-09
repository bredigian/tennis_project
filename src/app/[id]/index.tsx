import { Image, StatusBar, Text, View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import Subtitle from "../../components/Subtitle"
import Title from "../../components/Title"
import { useEffect } from "react"
import { useLocalSearchParams } from "expo-router"
import { useProductsStore } from "../../store/products.store"

const ProductDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { detail, getProductById } = useProductsStore()

  useEffect(() => {
    getProductById(id as string)
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
        style={{ width: 400, height: 400, borderRadius: 33 }}
        resizeMode="contain"
      />
      <View className="flex flex-row items-center justify-between w-full">
        <Title variant="transparent">{detail?.title as string}</Title>
        <Title variant="dark">{`US$ ${detail?.price}`}</Title>
      </View>
      <Subtitle>{detail?.description as string}</Subtitle>
    </SafeAreaView>
  )
}

export default ProductDetail
