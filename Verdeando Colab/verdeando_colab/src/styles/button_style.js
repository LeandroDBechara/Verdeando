import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    container:{
        margin:60,
    },
    general:{
        backgroundColor:'#11B11B',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 16,
    },
    btnLarge:{
        width: 360,
        height: 50,
        alignItems:'center',
    },
    texto:{
        fontSize:20,
        color:'#FFFFFF',
    }
})
export default buttonStyles;