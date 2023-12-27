import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import SearchBar from "../../components/atoms/searchBar/SearchBar";
import { COLORS } from "../../constants";
import Carrousel from "../../components/atoms/carrousel/Carrousel";
import Headings from "../../components/atoms/headings/Headings";
import ProductsList from "../../components/molecules/productsList/ProductsList";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: 39 }}>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text>sfax, Tunisia</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.containerWelcome}>
          <Text style={[styles.welcomeText(COLORS.black), { marginTop: 10 }]}>
            Find The Most
          </Text>
          <Text style={styles.welcomeText(COLORS.primary)}>
            Luxurious Furniture
          </Text>
        </View>
        <SearchBar navigation={navigation} />
        <Carrousel/>
        <Headings/>
        <ProductsList navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
