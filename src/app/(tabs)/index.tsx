import { ActivityIndicator, Button, FlatList, Text, View } from "react-native"
import React, { useEffect, useLayoutEffect, useState } from "react"

import { type Product as ProductT } from "../../types/product.types"
import { useProductsStore } from "../../store/products.store"
import Product from "../../components/Product"
import { COLORS } from "../../themes/colors"

const Home = () => {
  const { products, getProducts } = useProductsStore()
  const [error, setError] = useState(false)

  const fetchProducts = async () => {
    try {
      await getProducts()
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const renderItem = ({ item }: { item: ProductT }) => <Product item={item} />
  return (
    <View className="flex-1 justify-start items-start px-4">
      {error ? (
        <Text>Ocurrió un error al obtener los productos</Text>
      ) : products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          className="w-full"
        />
      ) : (
        <ActivityIndicator
          size={"large"}
          color={COLORS.PRIMARY}
          className="self-center mt-8"
        />
      )}
    </View>
  )
}

export default Home
