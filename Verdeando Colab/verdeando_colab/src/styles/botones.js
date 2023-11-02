import { StyleSheet } from "react-native";

const botones = StyleSheet.create({
    container:{
        margin:50,
        alignContent:'center',
    },
    boton:{
        width: 360,
        height: 50,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor:'#11B11B'
    },
    texto:{
        fontFamily:'Roboto',
        fontSize:20,
        color:'#FFFFFF',
    }
})
export default botones;