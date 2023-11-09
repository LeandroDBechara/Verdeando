import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    texto_general:{
        fontFamily:'Roboto',
        fontSize:20,
    },
    datos_jugador:{
        width: 352,
        height: 214,
        paddingVertical:40,
        alignSelf:'center',
    },
    titulo:{
        fontFamily:'Roboto',
        fontSize:30,
        fontWeight:'900',
        alignSelf:'center'
    
    },
    subtitulo:{
        alignSelf:'center',
        fontWeight:'700',
        marginTop:40,
        marginBottom:20
    },
    boton:{
        flexDirection:'row',
        marginTop: 30,
        paddingHorizontal:40,
        fontFamily:'Roboto',
        width: 290,
        height: 50,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        backgroundColor:'#11B11B'
    },
    texto_boton:{
        fontFamily:'Roboto',
        fontSize:14,
        color:'#FFFFFF',
    },
    jugador_container:{
        flexDirection:'row'
    },
    encabezados:{
        fontWeight:'bold'
    },
    boton_continuar:{
        flexDirection:'row',
        marginTop: 30,
        paddingHorizontal:40,
        fontFamily:'Roboto',
        width: 290,
        height: 50,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor:'#11B11B'
        
    },
    texto_continuar:{
        color:'#FFFFFF'
    },
    recompensa_container:{
        width: 340,
        height:140,
        borderColor:'#11B11B',
        borderWidth:2,
        borderRadius:16,
        alignSelf: 'center',
    },
})
export default styles;