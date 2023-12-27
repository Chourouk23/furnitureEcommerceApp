import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SearchBar from '../../components/atoms/searchBar/SearchBar'

const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: 39 }}>
      <SearchBar navigation={navigation}/>
    </SafeAreaView>
  )
}

export default Search