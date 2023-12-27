import { View, Text } from "react-native";
import React from "react";
import { fn2, fn4, fn5 } from "../../../assets";
import { COLORS } from "../../../constants";
import { SliderBox } from "react-native-image-slider-box";
import styles from "./styles";
const Carrousel = () => {
  const slides = [fn2, fn4, fn5];
  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inativeDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "94%",
          marginTop: 15
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carrousel;
