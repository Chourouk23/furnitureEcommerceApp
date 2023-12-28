import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuRow: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    marginHorizontal: 20,
    width: Dimensions.get("window").width - 44,
    alignItems: "center",
    top: 44,
    zIndex: 999,
  },
  image: {
    width: "auto",
    height: Dimensions.get("window").width,
  },
  detailsContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    backgroundColor: COLORS.lightWhite,
    width: Dimensions.get("window").width,
  },
  title: {
    marginHorizontal: 20,
    paddingBottom: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("window").width - 44,
    top: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 9,
  },
  priceContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
  },
  raitingRow: {
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("window").width - 20,
    top: 40,
  },
  raiting: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 15,
    alignItems: "center",
  },
  raitingText: {
    color: COLORS.gray,
    paddingHorizontal:5
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  descriptionTitle:{
    fontSize: 18,
    fontWeight: "500"
  },
  description:{
    textAlign:"justify", 
    fontSize:12, 
    marginBottom: 12
  },
  locationCont:{
    marginHorizontal:12,
    backgroundColor:COLORS.secondary,
    borderRadius: 15,
    padding:5,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center", 
    marginBottom:12
  },
  loc:{
    flexDirection:"row", 
    alignItems: "center"
  },
  cartContainer:{
    paddingBottom:12,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center", 
     marginHorizontal: 12,
    width: Dimensions.get("window").width-24,
   
  },
  cartBtn:{
    paddingBottom: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    backgroundColor: "black",
    height: 36,
    borderRadius: 16
  },
  buyText:{
    padding:6,
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.lightWhite,
  },
  cartBag:{
    backgroundColor: "black",
    height: 36, 
    width: 36, 
    borderRadius: 18,
    justifyContent:"center",
    alignItems:"center"
  }
});
export default styles;
