import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProductCard from '../../atoms/productCard/ProductCard'

const ProductsList = ({ navigation }) => {
    const products=[1,2,3,4]
  return (
    <View>
      <FlatList
      data={products}
      renderItem={({item})=><ProductCard navigation={navigation}/>}
      horizontal
      contentContainerStyle={{columnGap:15}}
      />
    </View>
  )
}

export default ProductsList