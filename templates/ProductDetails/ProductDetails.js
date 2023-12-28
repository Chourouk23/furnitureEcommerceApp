import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "../../constants";
import { fn1 } from "../../assets";

const ProductDetails = ({ navigation, count, onAddCount, onSubstractCount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            color={COLORS.primary}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image source={fn1} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Product</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>$2000.60</Text>
          </View>
        </View>
        <View style={styles.raitingRow}>
          <View style={styles.raiting}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color={"gold"} />
            ))}
            <Text style={styles.raitingText}> (4.9)</Text>
          </View>
          <View style={styles.raiting}>
            <TouchableOpacity onPress={onAddCount}>
              <Ionicons name="add-circle-outline" size={24} />
            </TouchableOpacity>
            <Text style={styles.raitingText}> {count} </Text>
            <TouchableOpacity onPress={onSubstractCount}>
              <Ionicons name="remove-circle-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </Text>
        </View>
        <View style={styles.locationCont}>
          <View style={styles.loc}>
            <Ionicons name="location-outline" size={20}/>
            <Text style={{paddingHorizontal:6}}>Tunisia</Text>
          </View>
          <View style={styles.loc}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={22}/>
            <Text style={{paddingHorizontal:6}}>Free Delivery</Text>
          </View>
        </View>
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
            <Text style={styles.buyText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={styles.cartBag}>
              <FontAwesome name="shopping-bag" size={19} color={COLORS.lightWhite} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
