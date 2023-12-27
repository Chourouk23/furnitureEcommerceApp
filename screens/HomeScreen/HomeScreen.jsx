import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../templates/Home/Home'

const HomeScreen = ({ navigation }) => {
  return (
    <Home navigation={navigation}/>
  )
}

export default HomeScreen