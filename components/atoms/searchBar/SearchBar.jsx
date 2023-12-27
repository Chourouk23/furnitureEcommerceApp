import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const SearchBar = ({ navigation}) => {
  //const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" style={styles.searchIcon} size={24} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="search"
          style={styles.searchInput}
          value=""
          onPressIn={() => navigation.navigate("Search")}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
