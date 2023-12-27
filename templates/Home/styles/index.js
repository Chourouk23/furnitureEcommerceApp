import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles= StyleSheet.create({
    text:{
        fontWeight: "600",
       fontSize: 40
    },
    container: {
        marginHorizontal: 22,
        marginTop: 12
    },
    appBar: {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    cartCount:{
        position: "absolute",
        bottom: 16,
        width: 18,
        height: 18,
        left: 11,
        backgroundColor: "green",
        borderRadius: 8,
        zIndex: 999, 
        alignItems: "center",
        justifyContent: "center"
    },
    cartNumber : {
        fontSize: 13,
        fontWeight: "700",
        color: COLORS.lightWhite
    }, 
    containerWelcome:{
        width: "100%"
    },
    welcomeText:(color) =>({
        color: color,
        fontSize: 38,
        fontWeight: "700", 
        marginHorizontal: 17
    })
})
export default styles