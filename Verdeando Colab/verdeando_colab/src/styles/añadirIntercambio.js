import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    datos:{
        backgroundColor: '#D9D9D9',
        width: 352,
        height: 214,
        borderRadius:20,
        paddingVertical:40,
        alignSelf:'center',
        alignItems:'center'
    },
    titulo:{
        fontFamily:'Roboto',
        fontSize:30,
        fontWeight:'900',
        alignSelf:'center'
    
    },
    texto:{
        fontFamily:'Roboto',
        fontSize:20,
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
    encabezado_container:{
        flexDirection:'row'
    },
    encabezados:{
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight:'bold'
    },
    encabezado_texto:{
        fontFamily:'Roboto',
        fontSize:20,
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
    }
})
export default styles;