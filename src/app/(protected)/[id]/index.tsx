import { Alert, Image, ScrollView, Text, View } from "react-native"
import { StripeProvider, useStripe } from "@stripe/stripe-react-native"
import { useEffect, useState } from "react"

import Button from "@/components/Button"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Product } from "@/types/product.types"
import QuantitySelector from "@/components/QuantitySelector"
import { SafeAreaView } from "react-native-safe-area-context"
import Subtitle from "@/components/Subtitle"
import Title from "@/components/Title"
import { useLocalSearchParams } from "expo-router"
import { useProductsStore } from "@/store/products.store"
import { usePurchasesStore } from "@/store/purchases.store"

const ProductDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { detail, getProductById } = useProductsStore()
  const { createIntent, getStripeKey } = usePurchasesStore()

  const [quantity, setQuantity] = useState(0)
  const [publishableKey, setPublishableKey] = useState<string | null>(null)

  const { initPaymentSheet, presentPaymentSheet } = useStripe()

  const plus = () => {
    if (quantity) setQuantity(quantity + 1)
  }
  const minus = () => {
    setQuantity(quantity - 1)
  }

  const handlePurchase = async () => {
    try {
      const payment_intent = await createIntent(detail as Product, quantity)
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: payment_intent,
        merchantDisplayName: "Tennis Shop",
      })
      if (error)
        throw new Error(
          "Se ha producido un error en el proceso de inicializacion de pago."
        )

      const paymentResult = await presentPaymentSheet()
      if (paymentResult.error) throw new Error(paymentResult.error.message)
    } catch (error: any) {
      Alert.alert("Se ha producido un error", error.message as string)
    }
  }

  const fetchPublishableKey = async () => {
    try {
      const key = await getStripeKey()
      setPublishableKey(key)
    } catch (error: any) {
      Alert.alert("Se ha producido un error", error.message as string)
    }
  }

  useEffect(() => {
    fetchPublishableKey()
    getProductById(id as string)
    if ((detail?.stock as number) > 0) setQuantity(1)
  }, [id])

  return (
    <StripeProvider publishableKey={publishableKey as string}>
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
        <View style={{ maxHeight: 200 }}>
          <ScrollView>
            <Subtitle>{detail?.description as string}</Subtitle>
          </ScrollView>
        </View>
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
          onPress={handlePurchase}
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
    </StripeProvider>
  )
}

export default ProductDetail
