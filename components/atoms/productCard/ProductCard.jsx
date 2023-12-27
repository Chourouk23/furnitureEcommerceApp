import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { fn1 } from "../../../assets";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

const ProductCard = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={fn1} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={{fontSize:19,fontWeight:600, marginBottom:2}} numberOfLines={1}>product fgsgxxgxghojiiljkkkk</Text>
          <Text style={styles.description}>product</Text>
          <Text style={[styles.price,{fontWeight:500}]}>$2000</Text>
        </View>
        <TouchableOpacity  style={styles.addBtn}>
        <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
