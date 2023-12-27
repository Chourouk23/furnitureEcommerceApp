import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "../../../constants";

const Headings = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight: 700}}>New Rivals</Text>
      <TouchableOpacity>
        <Ionicons name="grid" size={24} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Headings;
