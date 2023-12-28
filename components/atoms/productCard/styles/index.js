import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    width: 182,
    height: 240,
    marginEnd: 6,
    borderRadius: 15,
  },
  imageContainer: {
    width: 170,
    flex: 1,
    marginLeft: 6,
    marginTop: 6,
    overflow: "hidden",
    borderRadius: 12,
  },
  image: {
    width: 170,
    height: 180,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: 8,
  },

  description: {
    fontSize: 12,
  },
  price: {
    fontSize: 15,
    marginBottom: 2,
  },
  addBtn:{
    position: "absolute",
    bottom:6,
    right:10
  }
});
export default styles;
