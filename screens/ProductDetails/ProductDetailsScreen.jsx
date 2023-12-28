import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ProductDetails } from '../../templates'

const ProductDetailsScreen = ({ navigation }) => {
  const [count,setCount]=useState(1);
  return (
    <ProductDetails count={count} 
    onAddCount={()=>setCount(count+1)} 
    onSubstractCount={ ()=>count>1 && setCount(count-1)}
    navigation={navigation}
    />
  )
}

export default ProductDetailsScreen