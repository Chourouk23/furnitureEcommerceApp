import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const styles=StyleSheet.create({
container:{
    flexDirection: "row",
    marginVertical: 10,
   // justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    height:50,
    marginHorizontal: 12
},
searchIcon:{
    marginHorizontal:10,
    color: COLORS.gray
},
searchWrapper:{
    flex:1,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 12,
    borderRadius: 12
},
searchInput:{
    width:"100%",
    height:"100%",
},
searchBtn:{
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center"
}
})
export default styles;