import { View, Text, Pressable, Image } from "react-native"
import { type Product as ProductT } from "@/types/product.types"
import { useRouter } from "expo-router"

const Product = ({ item }: { item: ProductT }) => {
  const parsedDescription =
    item?.description.split(" ").slice(0, 16).join(" ") + "..."

  const { navigate } = useRouter()

  return (
    <Pressable
      onPress={() =>
        navigate({
          pathname: `/${item?.id}`,
          params: item.id as any,
        })
      }
      className="flex flex-row items-center w-full bg-white my-4 p-4"
    >
      <Image
        source={{
          uri: item.image,
        }}
        style={{ width: 140, height: 140 }}
        resizeMode="center"
      />
      <View className="flex-1 flex-col items-start gap-4">
        <Text className="text-xl">{item?.title}</Text>
        <Text>{parsedDescription}</Text>
        <Text className="bg-primary-dark text-white py-1 px-2">
          US$ {item?.price}
        </Text>
      </View>
    </Pressable>
  )
}

export default Product
