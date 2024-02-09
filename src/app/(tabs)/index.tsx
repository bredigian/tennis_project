import { FlatList, View } from "react-native"
import React, { useEffect } from "react"

import { type Product as ProductT } from "../../types/product.types"
import { useProductsStore } from "../../store/products.store"
import Product from "../../components/Product"

const Home = () => {
  const { products, getProducts } = useProductsStore()

  const fetchProducts = async () => {
    await getProducts()
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const renderItem = ({ item }: { item: ProductT }) => <Product item={item} />
  return (
    <View className="flex-1 justify-start items-start px-4">
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        className="w-full"
      />
    </View>
  )
}

export default Home
