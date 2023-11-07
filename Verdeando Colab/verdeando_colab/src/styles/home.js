import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titulo:{
        fontFamily:'Roboto',
        fontSize:30,
        fontWeight:'900'
    },
    subcont2:{
        marginVertical: 20,
        marginHorizontal:30
    },
    cantidad_diaria:{
        paddingTop:30,
        fontFamily:'Roboto',
        fontSize:60,
        fontWeight:'bold',
        alignSelf:'center'
    },
    texto:{
        fontFamily:'Roboto',
        fontSize:20,
        alignSelf:'center',
        fontWeight:'700',
    },
    boton:{
        marginTop: 30,
        fontFamily:'Roboto',
        width: 290,
        height: 50,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor:'#11B11B'
    },
    texto_boton:{
        fontFamily:'Roboto',
        fontSize:20,
        color:'#FFFFFF',
    },
    
    

})
export default styles;